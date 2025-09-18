import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Analytics from '@/components/Analytics'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'PA Prep Lab - Pre-PA Counseling, Essay Review & Interview Prep',
  description: 'Expert pre-PA counseling services to help you get into physician assistant school. Personal statement review, interview preparation, and application guidance.',
  keywords: 'pre-pa counseling, physician assistant, PA school, personal statement, interview prep, application help',
  authors: [{ name: 'PA Prep Lab' }],
  creator: 'PA Prep Lab',
  publisher: 'PA Prep Lab',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://papreplab.com',
    title: 'PA Prep Lab - Pre-PA Counseling & Interview Prep',
    description: 'Expert pre-PA counseling services to help you get into physician assistant school. Personal statement review, interview preparation, and application guidance.',
    siteName: 'PA Prep Lab',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PA Prep Lab - Pre-PA Counseling & Interview Prep',
    description: 'Expert pre-PA counseling services to help you get into physician assistant school.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://papreplab.com" />
      </head>
      <body className="flex flex-col min-h-screen">
        <StructuredData />
        <Analytics />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}