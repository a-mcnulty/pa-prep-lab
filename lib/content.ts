// 📝 Centralized Content Configuration
// All static text content for the PA Prep Lab website

export const siteContent = {
  // 🏠 Hero Section
  hero: {
    heading: "Start Your PA Journey With Confidence",
    paragraph: "Welcome to PA Prep Lab, your virtual workbench for all things relating to pre-PA! This is a space for all who are interested in becoming a PA or learning more about the journey. Services offered include general counseling, essay review and editing, and interview prep. Navigating PA applications and admissions is difficult, so let's connect and collaborate.",
    primaryButton: "Get Started",
    secondaryButton: "Learn More",
  },

  // 👤 About Section
  about: {
    heading: "Meet Elysia",
    paragraph1: "I'm Elysia, a certified PA with clinical and educational experience and a deep passion for mentoring pre-PA students. I know firsthand how tough and competitive the journey can feel.",
    paragraph2: "Through years of practice, mentoring, and admissions involvement, I've helped many future PAs refine their applications and build confidence. My goal is to offer you clear, personalized support through this time.",
    linkText: "Read full bio →",
    linkHref: "/about",
  },

  // 💰 Pricing Section
  pricing: {
    heading: "PA Prep Lab Services",
    bundleTag: "Best Value",
    button: "Learn More",
    bundle: {
      title: "Complete Bundle",
      price: "$350",
      features: [
        "Pre-PA Counseling Session (45 min)",
        "Essay Review (1 personal statement + 2 smaller essays)",
        "Mock Interview (1 hour)",
      ],
    },
    packages: [
      {
        title: "Pre-PA Counseling",
        price: "$70 - $85",
        features: [
          "30 – 45 min 1:1 session",
          "Early guidance for all things Pre-PA",
          "Video or phone discussion",
        ],
        description: "Need help in a specific area? Have concerns you'd like to address? Generalized guidance towards PA school and admission. Includes 30-45 minutes of one-on-one video or phone discussion into the topics or areas of your concern."
      },
      {
        title: "Essay / Statement Review",
        price: "From $50",
        features: [
          "< 2,500 characters: $50",
          "2,500 – 5,000 characters: $85",
          "5,000 – 7,500 characters: $100",
          "7,500 – 10,000 characters: $125",
          "Optional call (20 min): $50",
        ],
        description: "Any statement or essay which you'd like guidance and editing. Review includes insights to content, grammar, and narrative. Please note, character count includes spaces to comply with CASPA guidelines. Turn around time is 5 business days."
      },
      {
        title: "Mock Interview",
        price: "$150",
        features: [
          "60-minute video session",
          "Mock Interview",
          "Instant feedback",
        ],
        description: "Everyone gets nervous about their PA school interviews, how can you really shine in just a few minutes with just a few questions? During this hour, we start with a small discussion regarding your readiness for the interview, a 20-30 minute mock interview, and a final debrief addressing your strengths and areas of improvement. All interviews take place over video."
      },
    ],
  },

  // 📞 Contact Form
  contactForm: {
    placeholders: {
      name: "Your Name",
      email: "Your Email",
      status: "Where are you in your PA journey?",
      message: "Let's connect! Where do you want to start? What can I do for you?",
      services: "Services interested in (click all that apply)",
    },
    button: "Send Message",
    successMessage: "Thanks for your submission! I look forward to connecting. Responses should be received via email within 3 business days.",
    errorMessage: "Something went wrong. Please try later or email us directly at contact@papreplab.com",
    services: [
      { id: 'counseling', label: 'Counseling' },
      { id: 'essay', label: 'Essay Review' },
      { id: 'mock', label: 'Mock interview' },
      { id: 'bundle', label: 'Bundle' },
      { id: 'notSure', label: 'Not sure' },
    ],
  },

  // 🦶 Footer
  footer: {
    phone: "",
    email: "contact@papreplab.com",
    copyright: "PA Prep Lab. All rights reserved.",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/pricing", label: "Services" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },

  // 🧭 Navigation
  navbar: {
    logo: "PA Prep Lab",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/pricing", label: "Services" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },

  // 📄 Page Content
  pages: {
    home: {
      contactHeading: "Contact Us",
    },
    about: {
      title: "About Me",
      paragraphs: [
        "Hello! My name is Elysia and I am a Physician Assistant practicing since 2019 in Orthopedics. I'm passionate about mentoring pre-PA students and those exploring healthcare careers—whether it's a first step or a career pivot.",
        "Applying to PA school was intimidating—I felt like an average applicant. But through strategic school choices, helpful mentors, and a strong personal statement, I earned an offer from my top-choice program.",
        "Since becoming certified, I've worked with PA students, interviewed applicants for my alma mater, and completed my Doctorate of Medical Science. I love guiding others through their journey to becoming a PA.",
        "Outside of work, I enjoy music, food, gardening, and time with family. I look forward to supporting you on your path to becoming a PA!",
      ],
      signature: "– Elysia Alva, DMSc, MPAS, PA-C",
      questionsHeading: "Still Have Questions?",
    },
    pricing: {
      title: "Services & Pricing",
    },
    faq: {
      title: "Frequently Asked Questions",
      contactHeading: "Need additional information?",
    },
    contact: {
      title: "Contact Us",
      subtitle: "We'll reach out within",
      timeframe: "48 hours",
      nextSteps: "to discuss your needs and next steps.",
    },
  },

  // 🌐 Site Metadata
  site: {
    name: "PA Prep Lab",
    description: "Your virtual workbench for all things relating to pre-PA",
    email: "contact@papreplab.com",
  },
};

export default siteContent;
