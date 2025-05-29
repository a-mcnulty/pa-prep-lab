
"use client";

import { useState } from "react";

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
    form?.reset(); // ✅ safe access
  } else {
    setStatus("error");
  }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-6 bg-white p-8 rounded-lg shadow-md"
    >
      <input
        name="name"
        required
        placeholder="Your Name"
        className="border border-gray-300 p-3 rounded"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Your Email"
        className="border border-gray-300 p-3 rounded"
      />
      <textarea
        name="message"
        required
        placeholder="Your Message"
        className="border border-gray-300 p-3 rounded h-32"
      />
      <button
        type="submit"
        className="bg-purple-600 text-white p-3 rounded hover:bg-purple-700"
      >
        Send Message
      </button>
      {status === "success" && <p className="text-green-600">Message sent!</p>}
      {status === "error" && <p className="text-red-600">Something went wrong.</p>}
    </form>
  );
}
