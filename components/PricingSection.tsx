'use client';

import { CheckCircle } from 'lucide-react';

const packages = [
  {
    title: "Pre-PA Counseling",
    price: "$70–$85",
    features: [
      "30–45 min 1:1 session",
      "General guidance for PA school",
      "Video or phone discussion",
    ],
  },
  {
    title: "Essay / Statement Review",
    price: "From $50",
    features: [
      "<2,500 chars: $50",
      "2,500–5,000: $85",
      "5,000–7,500: $100",
      "7,500–10,000: $125",
      "Optional call (20 min): $50",
    ],
  },
  {
    title: "Mock Interview",
    price: "$175",
    features: [
      "60-minute video interview",
      "Interview readiness discussion",
      "Realistic mock + feedback",
    ],
  },
];

const bundle = {
  title: "Complete Bundle",
  price: "$350",
  features: [
    "Pre-PA Counseling Session (45 min)",
    "Essay Review (1 personal statement + 2 small essays)",
    "Mock Interview (1 hour)",
  ],
  isHighlighted: true,
};

export default function PricingSection() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>

        {/* Bundle full-width card */}
        <div className="mb-8">
          <div className="relative rounded-2xl border shadow-sm p-6 bg-purple-100 border-purple-300 hover:shadow-md transition">
            <span className="absolute top-4 right-4 bg-purple-600 text-white px-2 py-1 text-xs font-semibold rounded">
              Best Value
            </span>

            <div>
              <h3 className="text-xl font-semibold mb-2">{bundle.title}</h3>
              <p className="text-3xl font-bold mb-4 text-purple-800">{bundle.price}</p>
              <ul className="space-y-2">
                {bundle.features.map((feature) => (
                  <li key={feature} className="flex items-start text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Grid of individual packages */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="relative flex flex-col justify-between rounded-2xl border bg-white shadow-sm p-6 hover:shadow-md transition"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                <p className="text-2xl font-bold mb-4 text-purple-800">{pkg.price}</p>
                <ul className="space-y-2">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
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
      </div>
    </section>
  );
}
