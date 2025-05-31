'use client'

import ContactForm from '@/components/ContactForm'
import Image from 'next/image'

const institutions = [
  {
    name: 'Pacific University',
    logo: '/pacific.webp', // Add this image to your public/logos folder
    alt: 'Pacific University Logo'
  },
  {
    name: 'San Francisco State University',
    logo: '/sfsu.webp',
    alt: 'San Francisco State University Logo'
  },
  {
    name: 'Kaiser Permanente',
    logo: '/kaiser.webp',
    alt: 'Kaiser Permanente Logo'
  }
]

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      {/* About Section */}
      <section className="flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <Image
            src="/about.webp" // replace with actual image
            alt="Elysia Alva"
            width={300}
            height={300}
            className="rounded-full shadow-lg mx-auto lg:mx-0"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-purple-700 mb-4">About Me</h1>
          <div className="text-gray-700 space-y-4">
            <p>
              Hello! My name is Elysia and I am a Physician Assistant practicing since 2019 in Orthopedics. I’m passionate about mentoring pre-PA students and those exploring healthcare careers—whether it’s a first step or a career pivot.
            </p>
            <p>
              Applying to PA school was intimidating—I felt like an average applicant. But through strategic school choices, helpful mentors, and a strong personal statement, I earned an offer from my top-choice program.
            </p>
            <p>
              Since becoming certified, I’ve worked with PA students, interviewed applicants for my alma mater, and completed my Doctorate of Medical Science. I love guiding others through their journey to becoming a PA.
            </p>
            <p>
              Outside of work, I enjoy music, food, gardening, and time with family. I look forward to supporting you on your path to becoming a PA!
            </p>
            <p className="font-semibold text-purple-700">
              – Elysia Alva, DMSc, MPAS, PA-C
            </p>
          </div>
        </div>
      </section>

      {/* Logo Wall */}
      <section className="text-center">
        {/* <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured In</h2> */}
        <div className="flex flex-wrap justify-center gap-6 grayscale opacity-80">
          {institutions.map((institution, idx) => (
            <Image
              key={idx}
              src={institution.logo}
              alt={institution.alt}
              width={120}
              height={60}
              className="object-contain h-12"
            />
          ))}
        </div>
      </section>
      <br/>
      <br/>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center text-purple-700">Still Have Questions?</h2>
        <ContactForm />
      </section>
    </main>
  )
}