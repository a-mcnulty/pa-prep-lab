import Hero from '@/components/Hero';
import { siteContent } from '@/lib/content';
import dynamic from 'next/dynamic';

// Lazy load below-the-fold components
const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-48 rounded"></div>
});
const PricingSection = dynamic(() => import('@/components/PricingSection'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded"></div>
});
const AboutMe = dynamic(() => import('@/components/AboutMe'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-32 rounded"></div>
});

// 🎨 Theme & Text Constants
const homePageStyles = {
  main: "min-h-screen bg-white text-gray-800",
  contactSection: "bg-gray-100 py-12 px-4",
  contactWrapper: "max-w-3xl mx-auto",
  heading: "text-3xl font-bold mb-6 text-center text-[#3B6255]",
};

export default function Home() {
  return (
    <main className={homePageStyles.main}>
      <Hero />

      <br />

      <AboutMe />

      <PricingSection />

      {/* Contact Section */}
      <section className={homePageStyles.contactSection}>
        <div className={homePageStyles.contactWrapper}>
          <h2 className={homePageStyles.heading}>
            {siteContent.pages.home.contactHeading}
          </h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
