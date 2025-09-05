'use client';
import Image from 'next/image';

// 🎨 Theme Colors
const heroColors = {
  background: "bg-[#CBDED3]",
  heading: "text-gray-900",
  paragraph: "text-gray-700",
  primaryBtn: "bg-[#3B6255] text-white hover:text-[#3B6255]",
  secondaryBtn: "bg-white text-[#3B6255] hover:bg-[#c7eddf]",
}

// 📝 Text Content
const heroText = {
  heading: "Start Your PA Journey With Confidence",
  paragraph: "Welcome to PA Prep Lab, your virtual workbench for all things relating to pre-PA! This is a space for all who are interested in becoming a PA or learning more about the journey. Services offered include general counseling, essay review and editing, and interview prep. Navigating PA applications and admissions is difficult, so let’s connect and collaborate.",
  primaryBtn: "Get Started",
  secondaryBtn: "Learn More",
}

export default function Hero() {
  return (
    <section className={`w-full ${heroColors.background} pt-18 px-4 md:px-8 lg:px-16`} id="contact">
      <section className={`flex ${heroColors.background} flex-col md:flex-row items-center md:items-start justify-between min-h-[550px] max-w-7xl mx-auto px-10 py-12 md:py-20`}>
        {/* Text Block */}
        <div className="md:w-1/2 pr-5 text-left space-y-6">
          <h1 className={`text-2xl md:text-3xl font-bold ${heroColors.heading}`}>
            {heroText.heading}
          </h1>
          <p className={heroColors.paragraph}>
            {heroText.paragraph}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
            <button className={`px-6 py-3 rounded-lg shadow transition ${heroColors.primaryBtn}`}>
              {heroText.primaryBtn}
            </button>
            <button className={`px-6 py-3 rounded-lg shadow transition ${heroColors.secondaryBtn}`}>
              {heroText.secondaryBtn}
            </button>
          </div>
        </div>

        {/* Image Block */}
        <div className="md:w-1/2 mt-10 pl-5 md:mt-0">
          <Image
            src="/hero.webp"
            alt="Hero"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg object-cover"
            priority
          />
        </div>
      </section>
    </section>
  );
}
