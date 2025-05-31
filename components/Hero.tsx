'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full bg-[#f5f3ff] pt-18 px-4 md:px-8 lg:px-16" id="contact">

      <section className="flex bg-[#f5f3ff] flex-col md:flex-row items-center md:items-start justify-between min-h-[550px] max-w-7xl mx-auto px-10 py-12 md:py-20">
      {/* Text Block */}
      <div className="md:w-1/2 pr-5 text-left space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Start Your PA Journey With Confidence
        </h1>
        <p className="text-gray-700 text-lg">
          Personalized coaching, mock interviews, and application guidance from experienced PAs.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition">
            Get Started
          </button>
          <button className="px-6 py-3 bg-white text-purple-600 border border-purple-600 rounded-lg shadow hover:bg-purple-100 transition">
            Learn More
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
