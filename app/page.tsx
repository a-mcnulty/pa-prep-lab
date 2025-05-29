import Hero from '@/components/Hero';
import ContactForm from "@/components/ContactForm";

import { CheckCircle, Mail } from "lucide-react";
import { Lightbulb, BookOpen, Users, Star, Briefcase, ClipboardList } from "lucide-react";


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
        <Hero />
 
      <br/>
        {/* 

        <section className="min-h-[550px] bg-white flex items-center">
          <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 text-left">
              <h1 className="text-2xl font-bold text-gray-900 mb-6">
                Your Heading Here
              </h1>
 
              <div className="flex items-start gap-4 mb-5">
                <CheckCircle className="text-purple-600 w-10 h-10 mt-1" />
                <p className="text-lg text-gray-700">
                  We offer tailored pre-PA guidance with expert mentors.
                </p>
              </div>

              <div className="flex items-start gap-4 mb-5">
                <Star className="text-purple-600 w-10 h-10 mt-1" />
                <p className="text-lg text-gray-700">
                  Boost your application with our proven interview and essay prep.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-purple-600 w-10 h-10 mt-1" />
                <p className="text-lg text-gray-700">
                  Reach out anytime — we're here to help you succeed.
                </p>
              </div>
            </div>
          </div>
        </section> */}

 
        <section className="bg-white py-16 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { icon: Lightbulb, title: "Strategy", text: "Craft your perfect PA school game plan." },
        { icon: BookOpen, title: "Essay Review", text: "Personalized edits to make your essay shine." },
        { icon: Users, title: "Mock Interviews", text: "Real-time feedback from experienced PAs." },
        { icon: Star, title: "Bundle & Save", text: "Combine services for the best value." },
        { icon: Briefcase, title: "Career Coaching", text: "Guidance from acceptance to practice." },
        { icon: ClipboardList, title: "Application Review", text: "Full review of CASPA and materials." },
      ].map(({ icon: Icon, title, text }, i) => (
        <div key={i} className="border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
          <Icon className="w-10 h-10 text-purple-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600">{text}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <ContactForm />
      </div>
    </section>

    </main>
  )
}