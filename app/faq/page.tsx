'use client'

import ContactForm from '@/components/ContactForm'
import {
  HelpCircle, Users, ListChecks, MessageCircle,
  GraduationCap, Video, CalendarClock, UserCheck,
  ShieldCheck, AlertCircle, DollarSign, Clock
} from 'lucide-react'
import Link from 'next/link'

// 🎨 Theme Colors
const faqColors = {
  pageBg: "bg-white",
  heading: "text-[#3B6255]",
  cardBg: "bg-white",
  cardBorder: "border-gray-200",
  cardShadow: "shadow-md",
  cardQuestion: "text-gray-800",
  cardAnswer: "text-gray-700",
  icon: "text-[#3B6255]",
};

// 📝 Page Text
const faqText = {
  heading: "Frequently Asked Questions",
  contactHeading: "Need additional information?",
};

// ❓ FAQs
const faqs = [
  {
    question: 'What is PA Prep Lab?',
    answer:
      'PA Prep Lab is a forum where aspiring pre-physician assistants/associates can obtain guidance, advice, and feedback on both their interest and readiness for applying to PA school. Services include general counseling/advice, essay review, and mock interviews.',
    icon: HelpCircle,
  },
  {
    question: 'Who should consider Pre-PA counseling with PA Prep Lab?',
    answer: (
      <>
        Anyone interested in the PA profession. You could just want to know more,
        need guidance on where to start, be a re-applicant, need help with essays,
        or even have interviews scheduled but want some practice! If you’re not sure,{" "}
        <Link href="/contact" className="text-[#3B6255] underline">reach out</Link> and we can discuss what might be helpful for you.
      </>
    ),
    icon: Users,
  },
  {
    question: 'What services does PA Prep Lab provide?',
    answer: (
      <>
        A list of services can be found{" "}
        <Link href="/pricing" className="text-[#3B6255] underline">here</Link>.
      </>
    ),
    icon: ListChecks,
  },
  {
    question: 'How can a counseling session strengthen my application?',
    answer:
      'Counseling services offered will be geared towards whatever topics you are interested in discussing. They can be about work experiences, classes, testing, essays, shadowing, etc. We’ll talk it through together.',
    icon: MessageCircle,
  },
  {
    question: 'Is PA Prep Lab only for students planning on applying to PA school?',
    answer:
      'No! Anyone with an interest in what a PA is can reach out. Let’s talk about all things PA or medical!',
    icon: GraduationCap,
  },
  {
    question: 'How are counseling sessions conducted?',
    answer: 'Counseling sessions are conducted over the phone or via video call.',
    icon: Video,
  },
  {
    question: 'How can I schedule a counseling session?',
    answer: (
      <>
        Reach out to me{" "}
        <Link href="/contact" className="text-[#3B6255] underline">here</Link>. I’ll get back to you ASAP to figure out a time together.
      </>
    ),
    icon: CalendarClock,
  },
  {
    question: 'Is PA Prep Lab suitable for career changers?',
    answer:
      'Yes. PA Prep Lab helps both traditional and non-traditional students leverage their background for PA school admissions.',
    icon: UserCheck,
  },
  {
    question: 'What qualifications do you have?',
    answer:
      'I am a practicing Physician Assistant/Associate (PA) who regularly works with pre-PA students, PA students, PA school interviews, guest lectures for PA school, and I stay current in the field attending conferences and participating in relevant CMEs. I also have obtained my DMSc which has prepared me to continue to excel as a PA leader.',
    icon: ShieldCheck,
  },
  {
    question: 'Does PA Prep Lab guarantee PA school acceptance?',
    answer:
      'No guarantee is offered, but the goal is to significantly strengthen your application and strategy.',
    icon: AlertCircle,
  },
  {
    question: 'What if I can’t afford your fees?',
    answer: (
      <>
        I try to keep services affordable and offer bundling discounts. For further discussion,{" "}
        <Link href="/contact" className="text-[#3B6255] underline">contact me</Link>.
      </>
    ),
    icon: DollarSign,
  },
  {
    question: 'Can you help on short notice?',
    answer:
      'Often yes, though I work full-time; I prioritize your goals and do my best to accomodate urgent needs.',
    icon: Clock,
  },
]

export default function FAQPage() {
  return (
    <div className={`max-w-4xl mx-auto px-4 mt-8 py-12 ${faqColors.pageBg}`}>
      <h1 className={`text-3xl font-bold text-center mb-10 ${faqColors.heading}`}>
        {faqText.heading}
      </h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {faqs.map(({ question, answer, icon: Icon }, idx) => (
          <div
            key={idx}
            className={`${faqColors.cardBg} ${faqColors.cardShadow} rounded-lg p-6 border ${faqColors.cardBorder}`}
          >
            <div className="flex items-start gap-4 mb-2">
              <Icon className={`${faqColors.icon} mt-1`} size={22} />
              <h2 className={`text-lg font-semibold ${faqColors.cardQuestion}`}>
                {question}
              </h2>
            </div>
            <p className={`text-sm ${faqColors.cardAnswer}`}>{answer}</p>
          </div>
        ))}
      </div>
      <br />
      <br />
      <section className="max-w-3xl mx-auto">
        <h2 className={`text-2xl font-semibold mb-4 text-center ${faqColors.heading}`}>
          {faqText.contactHeading}
        </h2>
        <ContactForm />
      </section>
    </div>
  )
}
