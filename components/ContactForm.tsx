"use client";

import { useState } from "react";
import { siteContent } from '@/lib/content';

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
        <div className="flex flex-wrap gap-3">
          {siteContent.contactForm.services.map(({ id, label }) => (
            <button
              type="button"
              key={id}
              onClick={() => handleServiceChange(id)}
              className={`px-4 py-2 rounded-lg border transition ${
                selectedServices.includes(id)
                  ? 'bg-[#3B6255] text-white border-[#3B6255]'
                  : 'bg-[#c7eddf] text-gray-700 border-gray-300 hover:bg-[#3B6255]'
              }`}
            >
              {label}
            </button>
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
