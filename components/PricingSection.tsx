'use client';

import { CheckCircle } from 'lucide-react';
import Link from "next/link";
import { siteContent } from '@/lib/content';

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

// Use centralized content
const pricingText = siteContent.pricing;
const packages = siteContent.pricing.packages;
const bundle = siteContent.pricing.bundle;

export default function PricingSection({ pricingPage }: { pricingPage?: boolean }) {
  // Function to scroll to contact form and select services
  const handleApply = (serviceIds: string[]) => {
    // Scroll to contact form
    const contactSection = document.querySelector('#contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Dispatch custom event to pre-select services
    window.dispatchEvent(new CustomEvent('preSelectServices', {
      detail: { serviceIds }
    }));
  };
  return (
    <section className={`${pricingColors.sectionBg} py-16 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          {pricingText.heading}
        </h2>

        {/* Bundle full-width card */}
        <div className="mb-8">
          <div
            className={`relative rounded-2xl border shadow-sm p-6 ${pricingColors.bundleBg} ${pricingColors.bundleBorder} hover:shadow-lg hover:bg-[#d4eddd] transition-all duration-200 cursor-pointer`}
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
            {!pricingPage ? (
              <Link href="/pricing">
                <button
                  className={`mt-6 w-full ${pricingColors.buttonBg} ${pricingColors.buttonText} py-2 rounded ${pricingColors.buttonHover} transition-colors duration-200`}
                >
                  {pricingText.button}
                </button>
              </Link>
            ) : (
              <button
                onClick={() => handleApply(['bundle'])}
                className={`mt-6 w-full ${pricingColors.buttonBg} ${pricingColors.buttonText} py-2 rounded ${pricingColors.buttonHover} transition-colors duration-200`}
              >
                Apply for Bundle
              </button>
            )}
          </div>
        </div>

        {/* Grid of individual packages */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className={`relative flex flex-col justify-between rounded-2xl bg-white shadow-sm p-6 hover:shadow-lg hover:bg-gray-50 border ${pricingColors.cardBorder} transition-all duration-200 cursor-pointer group`}
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
              {!pricingPage ? (
                <Link href="/pricing">
                  <button
                    className={`mt-6 w-full ${pricingColors.buttonBg} ${pricingColors.buttonText} py-2 rounded hover:bg-[#2d4e42] transition-colors duration-200`}
                  >
                    {pricingText.button}
                  </button>
                </Link>
              ) : (
                <button
                  onClick={() => {
                    const serviceMap: { [key: string]: string[] } = {
                      'Pre-PA Counseling': ['counseling'],
                      'Essay / Statement Review': ['essay'],
                      'Mock Interview': ['mock']
                    };
                    handleApply(serviceMap[pkg.title] || ['counseling']);
                  }}
                  className={`mt-6 w-full ${pricingColors.buttonBg} ${pricingColors.buttonText} py-2 rounded hover:bg-[#2d4e42] transition-colors duration-200`}
                >
                  Apply for {pkg.title}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
