"use client";

import { useState, useEffect } from "react";
import { siteContent } from '@/lib/content';
import { trackContactFormSubmission } from '@/lib/analytics';

// 🎨 Colors & Styles
const formStyles = {
  wrapper: "grid grid-cols-1 gap-6 bg-white p-8 rounded-lg shadow-md",
  input: "border border-gray-300 p-3 rounded",
  textarea: "border border-gray-300 p-3 rounded h-32",
  smallTextarea: "border border-gray-300 p-3 rounded h-12",
  button: "bg-[#3B6255] text-white p-3 rounded hover:bg-[#2d4a40] transition",
  success: "text-green-600",
  error: "text-red-600",
};

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Listen for pre-selection events from pricing cards
  useEffect(() => {
    const handlePreSelectServices = (event: CustomEvent<{ serviceIds: string[] }>) => {
      const { serviceIds } = event.detail;
      setSelectedServices(serviceIds);
    };

    window.addEventListener('preSelectServices', handlePreSelectServices as EventListener);
    return () => window.removeEventListener('preSelectServices', handlePreSelectServices as EventListener);
  }, []);

  const handleServiceChange = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      services: selectedServices.join(", "),
      status: formData.get("status"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      setStatus("success");
      form?.reset();
      // Track successful form submission
      trackContactFormSubmission(selectedServices);
    } else {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={formStyles.wrapper}>
      <p className="text-sm text-gray-500 mt-4 leading-relaxed">{siteContent.contactForm.placeholders.name}</p>
      <input
        name="name"
        required
        placeholder={siteContent.contactForm.placeholders.name}
        className={formStyles.input}
      />
      <p className="text-sm text-gray-500 mt-4 leading-relaxed">{siteContent.contactForm.placeholders.email}</p>
      <input
        name="email"
        type="email"
        required
        placeholder={siteContent.contactForm.placeholders.email}
        className={formStyles.input}
      />
      <div className="space-y-2">
        <p className="text-sm text-gray-500 mt-4 leading-relaxed">{siteContent.contactForm.placeholders.services}</p>
        <br/>
        <div className="space-y-3">
          {siteContent.contactForm.services.map(({ id, label }) => (
            <div key={id} className="flex items-center">
              <input
                type="checkbox"
                id={id}
                checked={selectedServices.includes(id)}
                onChange={() => handleServiceChange(id)}
                className="w-4 h-4 text-[#3B6255] bg-gray-100 border-gray-300 rounded focus:ring-[#3B6255] focus:ring-2"
              />
              <label
                htmlFor={id}
                className="ml-3 text-sm font-medium text-gray-700 cursor-pointer select-none"
              >
                {label}
              </label>
            </div>
          ))}
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-4 leading-relaxed">{siteContent.contactForm.placeholders.status}</p>
      <textarea
        name="status"
        required
        placeholder={siteContent.contactForm.placeholders.status}
        className={formStyles.smallTextarea}
      />
      <p className="text-sm text-gray-500 mt-4 leading-relaxed">{siteContent.contactForm.placeholders.message}</p>
      <textarea
        name="message"
        required
        placeholder={siteContent.contactForm.placeholders.message}
        className={formStyles.textarea}
      />
      <button type="submit" className={formStyles.button}>
        {siteContent.contactForm.button}
      </button>
      {status === "success" && (
        <p className={formStyles.success}>{siteContent.contactForm.successMessage}</p>
      )}
      {status === "error" && (
        <p className={formStyles.error}>{siteContent.contactForm.errorMessage}</p>
      )}
    </form>
  );
}
