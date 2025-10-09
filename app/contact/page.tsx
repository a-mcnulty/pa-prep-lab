'use client'

import Image from 'next/image'
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
      {/* Header */}
      <section className="text-center">
        <h1 className={`text-4xl font-bold mb-4 ${contactColors.heading}`}>
          {contactText.heading}
        </h1>
        <p className={`text-lg max-w-2xl mx-auto ${contactColors.text}`}>
          {contactText.subtitle}{" "}
          <span className={contactColors.highlight}>{contactText.timeframe}</span>{" "}
          {contactText.nextSteps}
        </p>
      </section>

      {/* Form + Image */}
      <section className="flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Form */}
        <div className="w-full lg:w-1/2">
          <ContactForm />
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/hero.webp"
            alt="Person writing a message"
            width={600}
            height={400}
            sizes="(max-width: 1024px) 100vw, 600px"
            quality={85}
            className="rounded-lg shadow-lg object-cover"
            priority
          />
        </div>
      </section>
    </main>
  )
}
