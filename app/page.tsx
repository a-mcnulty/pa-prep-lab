import Hero from '@/components/Hero';
import ContactForm from "@/components/ContactForm";
import PricingSection from '@/components/PricingSection';
import AboutMe from '@/components/AboutMe';

// 🎨 Theme & Text Constants
const homePageStyles = {
  main: "min-h-screen bg-white text-gray-800",
  contactSection: "bg-gray-100 py-12 px-4",
  contactWrapper: "max-w-3xl mx-auto",
  heading: "text-3xl font-bold mb-6 text-center text-[#3B6255]",
};

const homePageText = {
  contactHeading: "Contact Us",
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
            {homePageText.contactHeading}
          </h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
