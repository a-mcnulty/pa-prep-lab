'use client'

import ContactForm from '@/components/ContactForm'
import { CheckCircle } from 'lucide-react'

const packages = [
  {
    title: "Pre-PA Counseling",
    price: "$70–$85",
    features: [
      "30–45 minute session",
      "Personalized guidance",
      "Video or phone call",
    ],
  },
  {
    title: "Essay / Statement Review",
    price: "Starting at $50",
    features: [
      "Detailed editing + feedback",
      "5-day turnaround",
      "Optional review call",
    ],
  },
  {
    title: "Mock Interview",
    price: "$175",
    features: [
      "1 hour session",
      "Realistic interview setup",
      "Strengths + improvement feedback",
    ],
  },
  {
    title: "Complete Bundle",
    price: "$350",
    features: [
      "Counseling + Essay Review + Interview",
      "Priority support",
      "Best value",
    ],
    isHighlighted: true,
  },
]

export default function PricingPage() {
  return (
    <main className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8 space-y-20">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Plans</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className={`relative flex flex-col justify-between rounded-2xl border shadow-sm p-6 ${
                pkg.isHighlighted ? 'lg:col-span-2 bg-purple-100 border-purple-300' : 'bg-white border-gray-200'
              }`}
            >
              {pkg.isHighlighted && (
                <span className="absolute top-4 right-4 bg-purple-600 text-white px-2 py-1 text-xs font-semibold rounded">
                  Best Value
                </span>
              )}
              <div>
                <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                <p className="text-4xl font-bold mb-4">{pkg.price}</p>
                <ul className="space-y-2">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700">How it Works</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Once you select a package and complete your payment online, our team will personally reach out to you within 24–48 hours.
          We’ll coordinate a convenient time for your sessions and confirm all deliverables based on your selected service(s).
          Essay reviews will begin shortly after, and interviews or counseling sessions will be scheduled according to your availability.
          Everything is tailored to your pace and preferences, with prompt and supportive communication throughout.
        </p>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center text-purple-700">Still Have Questions?</h2>
        <ContactForm />
      </section>
    </main>
  )
}