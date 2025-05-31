'use client';

import Image from 'next/image';
import Link from 'next/link';
import aboutImg from '@/public/about.webp'; // Replace with actual image path

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
          <h2 className="text-2xl font-semibold mb-4">Meet Elysia</h2>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            I’m Elysia, a certified Physician Assistant with experience in Orthopedics and a deep passion for mentoring pre-PA students. I know firsthand how tough and competitive the journey can feel — because I’ve been there too.
          </p>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Through years of practice, mentoring, and admissions involvement, I’ve helped many future PAs refine their applications and build confidence. My goal is to offer the kind of clear, personal support I wish I had starting out.
          </p>
          <Link
            href="/about"
            className="inline-block text-purple-600 font-semibold hover:text-purple-800 transition"
          >
            Read full bio →
          </Link>
        </div>
      </div>
    </section>
  );
}
