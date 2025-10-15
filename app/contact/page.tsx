'use client'

import ContactForm from '@/components/ContactForm'

// 🎨 Theme Colors
const contactColors = {
  heading: "text-[#3B6255]",
  highlight: "text-[#3B6255] font-semibold",
  text: "text-gray-600",
}

// 📝 Page Text
const contactText = {
  heading: "Contact Us",
  subtitle: "We’ll reach out within",
  timeframe: "48 - 72 hours",
  nextSteps: "to discuss your needs and next steps.",
}

export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* Contact Section */}
      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className={`text-4xl font-bold mb-4 ${contactColors.heading}`}>
            {contactText.heading}
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${contactColors.text}`}>
            {contactText.subtitle}{" "}
            <span className={contactColors.highlight}>{contactText.timeframe}</span>{" "}
            {contactText.nextSteps}
          </p>
        </div>

        {/* Form */}
        <ContactForm showShadow={false} />
      </section>
    </main>
  )
}
