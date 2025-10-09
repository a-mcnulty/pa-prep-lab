'use client';
import Link from 'next/link'
import { siteContent } from '@/lib/content';

// 🎨 Theme Colors
const heroColors = {
  background: "bg-[#CBDED3]",
  heading: "text-gray-900",
  paragraph: "text-gray-700",
  primaryBtn: "bg-[#3B6255] text-white hover:text-[#3B6255]",
  secondaryBtn: "bg-white text-[#3B6255] hover:bg-[#c7eddf]",
}

export default function Hero() {
  return (
    <section className={`w-full ${heroColors.background} pt-2 px-4 md:px-8 lg:px-16`} id="contact">
      <section className={`flex ${heroColors.background} flex-col items-center justify-center min-h-[550px] max-w-7xl mx-auto px-10 py-8`}>
        {/* Text Block */}
        <div className="text-left space-y-6 max-w-3xl">
          <h1 className={`text-2xl md:text-3xl font-bold ${heroColors.heading}`}>
            {siteContent.hero.heading}
          </h1>
          <p className={heroColors.paragraph}>
            {siteContent.hero.paragraph}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
            <Link href="/pricing">
              <button className={`px-6 py-3 rounded-lg shadow transition ${heroColors.primaryBtn}`}>
                {siteContent.hero.primaryButton}
              </button>
            </Link>
            <Link href="/faq">
              <button className={`px-6 py-3 rounded-lg shadow transition ${heroColors.secondaryBtn}`}>
                {siteContent.hero.secondaryButton}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
