import Hero from '@/components/Hero';
import ContactForm from "@/components/ContactForm";

import PricingSection from '@/components/PricingSection';
import AboutMe from '@/components/AboutMe';


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
        <Hero />
 
      <br/>
    <AboutMe />

 

    <PricingSection />


    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <ContactForm />
      </div>
    </section>

    </main>
  )
}