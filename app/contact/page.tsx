'use client'

import Image from 'next/image'
import ContactForm from '@/components/ContactForm' // adjust path if needed

export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We’ll reach out within <span className="font-semibold text-purple-700">48 hours</span> to discuss your needs and next steps.
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
            src="/contact.webp" // make sure this image exists in /public
            alt="Person writing a message"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover"
            priority
          />
        </div>
      </section>
    </main>
  )
}
