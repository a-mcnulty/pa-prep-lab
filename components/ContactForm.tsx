"use client";

import { useState } from "react";

// 🎨 Colors & Styles
const formStyles = {
  wrapper: "grid grid-cols-1 gap-6 bg-white p-8 rounded-lg shadow-md",
  input: "border border-gray-300 p-3 rounded",
  textarea: "border border-gray-300 p-3 rounded h-32",
  button: "bg-[#3B6255] text-white p-3 rounded hover:bg-[#2d4a40] transition",
  success: "text-green-600",
  error: "text-red-600",
};

// 📌 Placeholder text
const placeholders = {
  name: "Your Name",
  email: "Your Email",
  message: "Your Message",
  button: "Send Message",
  success: "Message sent!",
  error: "Something went wrong.",
};

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
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
      <input
        name="name"
        required
        placeholder={placeholders.name}
        className={formStyles.input}
      />
      <input
        name="email"
        type="email"
        required
        placeholder={placeholders.email}
        className={formStyles.input}
      />
      <textarea
        name="message"
        required
        placeholder={placeholders.message}
        className={formStyles.textarea}
      />
      <button type="submit" className={formStyles.button}>
        {placeholders.button}
      </button>
      {status === "success" && (
        <p className={formStyles.success}>{placeholders.success}</p>
      )}
      {status === "error" && (
        <p className={formStyles.error}>{placeholders.error}</p>
      )}
    </form>
  );
}
