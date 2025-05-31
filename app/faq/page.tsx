'use client'

import ContactForm from '@/components/ContactForm'
import { HelpCircle, Users, ListChecks, MessageCircle, GraduationCap, Video, CalendarClock, UserCheck, ShieldCheck, AlertCircle, DollarSign, Clock } from 'lucide-react'
import Link from 'next/link'

const faqs = [
  {
    question: 'What is PA Prep Lab?',
    answer: 'PA Prep Lab is a forum where aspiring pre-physician assistants/associates can obtain guidance, advice, and feedback on both their interest and readiness for applying to PA school. Services include general counseling/advice, essay review, and mock interviews.',
    icon: HelpCircle,
  },
  {
    question: 'Who should consider Pre-PA counseling with PA Prep Lab?',
    answer: <>Anyone interested in the PA profession. You could just want to know more, need guidance on where to start, be a re-applicant, need help with essays, or even have interviews scheduled but want some practice! If you’re not sure, <Link href="/contact" className="text-purple-600 underline">reach out</Link> and we can discuss what might be helpful for you.</>,
    icon: Users,
  },
  {
    question: 'What services does PA Prep Lab provide?',
    answer: <>A list of services can be found <Link href="/pricing" className="text-purple-600 underline">here</Link>.</>,
    icon: ListChecks,
  },
  {
    question: 'How can a counseling session strengthen my application?',
    answer: 'Counseling services are geared to your interests—whether that’s work experiences, classes, testing, essays, shadowing, or anything else. We’ll talk it through together.',
    icon: MessageCircle,
  },
  {
    question: 'Is PA Prep Lab only for students planning on applying to PA school?',
    answer: 'No! Anyone with an interest in what a PA is can reach out. Let’s talk about all things PA or medical!',
    icon: GraduationCap,
  },
  {
    question: 'How are counseling sessions conducted?',
    answer: 'Counseling sessions are conducted over the phone or via video call.',
    icon: Video,
  },
  {
    question: 'How can I schedule a counseling session?',
    answer: <>Reach out to me <Link href="/contact" className="text-purple-600 underline">here</Link>. I’ll get back to you ASAP to figure out a time together.</>,
    icon: CalendarClock,
  },
  {
    question: 'Is PA Prep Lab suitable for career changers?',
    answer: 'Yes. PA Prep Lab helps both traditional and non-traditional students leverage their background for PA school admissions.',
    icon: UserCheck,
  },
  {
    question: 'What qualifications do you have?',
    answer: 'I’m a practicing PA, involved with pre-PA students, PA school interviews, and lectures. I hold a DMSc and stay active through CME and professional events.',
    icon: ShieldCheck,
  },
  {
    question: 'Does PA Prep Lab guarantee PA school acceptance?',
    answer: 'No guarantee is offered, but the goal is to significantly strengthen your application and strategy.',
    icon: AlertCircle,
  },
  {
    question: 'What if I can’t afford your fees?',
    answer: <>I try to keep services affordable and offer bundling discounts. For further discussion, <Link href="/contact" className="text-purple-600 underline">contact me</Link>.</>,
    icon: DollarSign,
  },
  {
    question: 'Can you help on short notice?',
    answer: 'Often yes, though I work full-time in a surgical role. I prioritize your goals and do my best to accommodate urgent needs.',
    icon: Clock,
  },
]

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-10 text-purple-700">Frequently Asked Questions</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {faqs.map(({ question, answer, icon: Icon }, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <div className="flex items-start gap-4 mb-2">
              <Icon className="text-purple-600 mt-1" size={22} />
              <h2 className="text-lg font-semibold text-gray-800">{question}</h2>
            </div>
            <p className="text-gray-700 text-sm">{answer}</p>
          </div>
        ))}
      </div>
      <br />
      <br />
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center text-purple-700">Need additional information?</h2>
        <ContactForm />
      </section>
    </div>
  )
}
