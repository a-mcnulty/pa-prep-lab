'use client'

import ContactForm from '@/components/ContactForm'
import Image from 'next/image'

// data/about.ts
const aboutColors = {
  primary: "text-[#3B6255]",
  secondary: "text-gray-700",
  sectionTitle: "text-2xl font-semibold",
}

const aboutText = {
  heading: "About Me",
  paragraphs: [
    "Hello! My name is Elysia and I am a Physician Assistant/Associate practicing since 2019. I’m passionate about mentoring pre-PA students and those exploring healthcare careers; whether it’s a first step or a career pivot.",
    "Applying to PA school was intimidating; I felt like an average applicant. But through strategic school choices, helpful mentors, and a strong personal statement, I earned an offer from my top-choice program.",
    "Since becoming certified, I’ve worked with PA students, interviewed applicants for my alma mater, and completed my Doctorate of Medical Science. I love guiding others through their journey to becoming a PA.",
    "Outside of work, I enjoy music, food, gardening, and time with family. I look forward to supporting you on your path to becoming a PA!",
    "",
  ],
  signature: "– Elysia Alva, DMSc, MPAS, PA-C",
  questionsHeading: "Still Have Questions?",
}

// const institutions = [
//   {
//     name: "Pacific University",
//     logo: "/pacific.webp",
//     alt: "Pacific University Logo",
//   },
//   {
//     name: "San Francisco State University",
//     logo: "/sfsu.webp",
//     alt: "San Francisco State University Logo",
//   },
//   {
//     name: "Kaiser Permanente",
//     logo: "/kaiser.webp",
//     alt: "Kaiser Permanente Logo",
//   },
// ]


export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      {/* About Section */}
      <section className="flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <Image
            src="/about.webp"
            alt="Elysia Alva"
            width={300}
            height={400}
            className="rounded-2xl shadow-lg mx-auto lg:mx-0"
          />
        </div>
        <div>
          <h1 className={`text-3xl font-bold mb-4 ${aboutColors.primary}`}>
            {aboutText.heading}
          </h1>
          <div className={`${aboutColors.secondary} space-y-4`}>
            {aboutText.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
            <p className={`font-semibold ${aboutColors.primary}`}>
              {aboutText.signature}
            </p>
          </div>
        </div>
      </section>

      {/* Logo Wall */}
      <section className="text-center">
        <div className="flex flex-wrap justify-center gap-6 grayscale opacity-80">
          {/* {institutions.map((institution, idx) => (
            <Image
              key={idx}
              src={institution.logo}
              alt={institution.alt}
              width={120}
              height={60}
              className="object-contain h-12"
            />
          ))} */}
        </div>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2
          className={`${aboutColors.sectionTitle} mb-4 text-center ${aboutColors.primary}`}
        >
          {aboutText.questionsHeading}
        </h2>
        <ContactForm />
      </section>
    </main>
  )
}
