'use client';

import { CheckCircle } from 'lucide-react';
import Link from "next/link";

// 🎨 Theme Colors
const pricingColors = {
  sectionBg: "bg-gray-50",
  bundleBg: "bg-[#c7eddf]",
  bundleBorder: "border-[#3B6255]",
  bundleTagBg: "bg-[#3B6255]",
  bundleTagText: "text-white",
  priceText: "text-[#3B6255]",
  cardBorder: "border-[#3B6255]",
  buttonBg: "bg-[#3B6255]",
  buttonText: "text-white",
  buttonHover: "hover:text-[#3B6255]",
  featureText: "text-gray-700",
  featureIcon: "text-green-500",
};

// 📝 Section Text
const pricingText = {
  heading: "PA Prep Lab Services",
  bundleTag: "Best Value",
  button: "Learn More",
};

// 💼 Packages Data
const packages = [
  {
    title: "Pre-PA Counseling",
    price: "$70–$85",
    features: [
      "30–45 min 1:1 session",
      "Early guidance for successful PA certification",
      "Video or phone discussion",
    ],
    description: 'Need help in a specific area? Have concerns you’d like to address? Generalized guidance towards PA school and admission. Includes 30-45 minutes of one-on-one video or phone discussion into the topics or areas of your concern.'
  },
  {
    title: "Essay / Statement Review",
    price: "From $50",
    features: [
      "<2,500 characters: $50",
      "2,500–5,000 characters: $85",
      "5,000–7,500 characters: $100",
      "7,500–10,000 characters: $125",
      "Optional call (20 min): $50",
    ],
    description: 'Any statement or essay which you’d like guidance and editing. Review includes insights to content, grammar, and narrative. Please note, character count includes spaces to comply with CASPA guidelines. Turn around time is 5 business days.'
  },
  {
    title: "Mock Interview",
    price: "$175",
    features: [
      "60-minute mock interview",
      "Interview readiness discussion",
      "Instant feedback",
    ],
    description:'Everyone gets nervous about their PA school interviews, how can you really shine in just a few minutes with just a few questions? During this hour, we start with a small discussion regarding your readiness for the interview, a 20-30 minute mock interview, and a final debrief addressing our strengths and areas of improvement. All interviews take place over video.'
  },
];

const bundle = {
  title: "Complete Bundle",
  price: "$350",
  features: [
    "Pre-PA Counseling Session (45 min)",
    "Essay Review (1 personal statement + 2 smaller essays)",
    "Mock Interview (1 hour)",
  ],
  isHighlighted: true,
};

export default function PricingSection({ pricingPage }: { pricingPage?: boolean }) {
  return (
    <section className={`${pricingColors.sectionBg} py-16 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          {pricingText.heading}
        </h2>

        {/* Bundle full-width card */}
        <div className="mb-8">
          <div
            className={`relative rounded-2xl border shadow-sm p-6 ${pricingColors.bundleBg} ${pricingColors.bundleBorder} hover:shadow-md transition`}
          >
            <span
              className={`absolute top-4 right-4 ${pricingColors.bundleTagBg} ${pricingColors.bundleTagText} px-2 py-1 text-xs font-semibold rounded`}
            >
              {pricingText.bundleTag}
            </span>

            <div>
              <h3 className="text-xl font-semibold mb-2">{bundle.title}</h3>
              <p className={`text-3xl font-bold mb-4 ${pricingColors.priceText}`}>
                {bundle.price}
              </p>
              <ul className="space-y-2">
                {bundle.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start text-sm ${pricingColors.featureText}`}
                  >
                    <CheckCircle
                      className={`w-4 h-4 ${pricingColors.featureIcon} mr-2 mt-0.5`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            {!pricingPage && (
              <Link href="/pricing">
                <button
                  className={`mt-6 w-full ${pricingColors.buttonBg} ${pricingColors.buttonText} py-2 rounded ${pricingColors.buttonHover} transition`}
                >
                  {pricingText.button}
                </button>
              </Link>
            )}
          </div>
        </div>

        {/* Grid of individual packages */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className={`relative flex flex-col justify-between rounded-2xl bg-white shadow-sm p-6 hover:shadow-md border ${pricingColors.cardBorder} transition`}
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                <p className={`text-2xl font-bold mb-4 ${pricingColors.priceText}`}>
                  {pkg.price}
                </p>
                <ul className="space-y-2">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start text-sm ${pricingColors.featureText}`}
                    >
                      <CheckCircle
                        className={`w-4 h-4 ${pricingColors.featureIcon} mr-2 mt-0.5`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              {pricingPage && (
                <p className="text-sm text-gray-700 mt-4 leading-relaxed">
                  {pkg.description}
                </p>
              )}
              {!pricingPage && (
                <Link href="/pricing">
                  <button

                    className={`mt-6 w-full ${pricingColors.buttonBg} ${pricingColors.buttonText} py-2 rounded hover:bg-[#2d4e42] transition`}
                  >
                    {pricingText.button}
                  </button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
