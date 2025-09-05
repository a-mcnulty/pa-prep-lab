'use client'

import ContactForm from '@/components/ContactForm'
import { CheckCircle } from 'lucide-react'

// 🎨 Theme Colors
const pricingColors = {
  pageBg: "bg-gray-50",
  cardBg: "bg-white",
  cardBorder: "border-gray-200",
  highlightBg: "bg-[#c7eddf]",
  highlightBorder: "border-[#3B6255]",
  highlightTagBg: "bg-[#3B6255]",
  highlightTagText: "text-white",
  priceText: "text-[#3B6255]",
  featureText: "text-gray-700",
  featureIcon: "text-green-500",
  buttonBg: "bg-[#3B6255]",
  buttonHover: "hover:bg-[#2d4e42]",
  buttonText: "text-white",
  sectionTitle: "text-[#3B6255]",
};

// 📝 Section Text
const pricingText = {
  heading: "Our Plans",
  bundleTag: "Best Value",
  button: "Get Started",
  howItWorksTitle: "How it Works",
  faqTitle: "Still Have Questions?",
  howItWorksBody: `Once you select a package and complete your payment online, our team will personally reach out to you within 24–48 hours.
We’ll coordinate a convenient time for your sessions and confirm all deliverables based on your selected service(s).
Essay reviews will begin shortly after, and interviews or counseling sessions will be scheduled according to your availability.
Everything is tailored to your pace and preferences, with prompt and supportive communication throughout.`,
};

// 💼 Packages Data
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
    <main className={`${pricingColors.pageBg} px-4 py-16 sm:px-6 lg:px-8 space-y-20`}>
      {/* Pricing Grid */}
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          {pricingText.heading}
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className={`relative flex flex-col justify-between rounded-2xl border shadow-sm p-6 ${
                pkg.isHighlighted
                  ? `lg:col-span-2 ${pricingColors.highlightBg} ${pricingColors.highlightBorder}`
                  : `${pricingColors.cardBg} ${pricingColors.cardBorder}`
              }`}
            >
              {pkg.isHighlighted && (
                <span
                  className={`absolute top-4 right-4 ${pricingColors.highlightTagBg} ${pricingColors.highlightTagText} px-2 py-1 text-xs font-semibold rounded`}
                >
                  {pricingText.bundleTag}
                </span>
              )}
              <div>
                <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                <p className={`text-4xl font-bold mb-4 ${pricingColors.priceText}`}>
                  {pkg.price}
                </p>
                <ul className="space-y-2">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center text-sm ${pricingColors.featureText}`}
                    >
                      <CheckCircle
                        className={`w-4 h-4 ${pricingColors.featureIcon} mr-2`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`mt-6 w-full ${pricingColors.buttonBg} ${pricingColors.buttonText} py-2 rounded ${pricingColors.buttonHover} transition`}
              >
                {pricingText.button}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
        <h2 className={`text-2xl font-semibold mb-4 ${pricingColors.sectionTitle}`}>
          {pricingText.howItWorksTitle}
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          {pricingText.howItWorksBody}
        </p>
      </section>

      {/* Contact */}
      <section className="max-w-3xl mx-auto">
        <h2
          className={`text-2xl font-semibold mb-4 text-center ${pricingColors.sectionTitle}`}
        >
          {pricingText.faqTitle}
        </h2>
        <ContactForm />
      </section>
    </main>
  )
}
