'use client';

import Image from 'next/image';
import Link from 'next/link';
import aboutImg from '@/public/about.webp';
import { siteContent } from '@/lib/content';

// 🎨 Theme colors
const aboutColors = {
  heading: "text-2xl font-semibold mb-4",
  text: "text-gray-700 text-base leading-relaxed mb-4",
  link: "inline-block text-purple-600 font-semibold hover:text-purple-800 transition",
}

export default function AboutMe() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center w-full">
          <Image
            src={aboutImg}
            alt="Elysia - PA Prep Lab Founder"
            width={400}
            height={500}
            sizes="(max-width: 768px) 100vw, 400px"
            className="max-w-md rounded-xl shadow-md w-full h-auto object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className={aboutColors.heading}>{siteContent.about.heading}</h2>
          <p className={aboutColors.text}>{siteContent.about.paragraph1}</p>
          <p className={aboutColors.text}>{siteContent.about.paragraph2}</p>
          <Link href={siteContent.about.linkHref} className={aboutColors.link}>
            {siteContent.about.linkText}
          </Link>
        </div>
      </div>
    </section>
  );
}
