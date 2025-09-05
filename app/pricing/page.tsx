'use client'

import ContactForm from '@/components/ContactForm'
import PricingSection from '@/components/PricingSection';

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
  heading: "PA Prep Lab Services",
  bundleTag: "Best Value",
  button: "Learn More",
  howItWorksTitle: "How it Works",
  faqTitle: "Let's Connect!",
  howItWorksBody: `If you’re interested in connecting, please reach out via email or our contact form.
We’ll coordinate a convenient time for your sessions and confirm all deliverables based on your selected service(s).
Essay reviews will begin shortly after, and interviews or counseling sessions will be scheduled according to your availability.
Everything is tailored to your pace and preferences, with prompt and supportive communication throughout.`,
};

export default function PricingPage() {
  return (
    <main className={`${pricingColors.pageBg} px-4 py-16 sm:px-6 lg:px-8 space-y-20`}>

      <PricingSection pricingPage={true} />

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
