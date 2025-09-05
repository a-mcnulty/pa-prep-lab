'use client';

import Image from 'next/image';
import Link from 'next/link';
import aboutImg from '@/public/about.webp'; // Replace with actual image path

// 🎨 Theme colors
const aboutColors = {
  heading: "text-2xl font-semibold mb-4",
  text: "text-gray-700 text-base leading-relaxed mb-4",
  link: "inline-block text-purple-600 font-semibold hover:text-purple-800 transition",
}

// 📝 Text content
const aboutText = {
  heading: "Meet Elysia",
  paragraph1: "I’m Elysia, a certified Physician Assistant with experience in Orthopedics and a deep passion for mentoring pre-PA students. I know firsthand how tough and competitive the journey can feel — because I’ve been there too.",
  paragraph2: "Through years of practice, mentoring, and admissions involvement, I’ve helped many future PAs refine their applications and build confidence. My goal is to offer the kind of clear, personal support I wish I had starting out.",
  linkText: "Read full bio →",
  linkHref: "/about",
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
            className="max-w-md rounded-xl shadow-md w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Text */}
        <div>
          <h2 className={aboutColors.heading}>{aboutText.heading}</h2>
          <p className={aboutColors.text}>{aboutText.paragraph1}</p>
          <p className={aboutColors.text}>{aboutText.paragraph2}</p>
          <Link href={aboutText.linkHref} className={aboutColors.link}>
            {aboutText.linkText}
          </Link>
        </div>
      </div>
    </section>
  );
}
