export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "PA Prep Lab",
    "description": "Expert pre-PA counseling services to help you get into physician assistant school. Personal statement review, interview preparation, and application guidance.",
    "url": "https://papreplab.com",
    "logo": "https://papreplab.com/logo.png",
    "sameAs": [
      "https://papreplab.com"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "areaServed": "US",
    "offers": [
      {
        "@type": "Service",
        "name": "Pre-PA Counseling",
        "description": "Comprehensive guidance for physician assistant school applications",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "PA Prep Lab"
        }
      },
      {
        "@type": "Service",
        "name": "Personal Statement Review",
        "description": "Expert review and editing of personal statements for PA school applications",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "PA Prep Lab"
        }
      },
      {
        "@type": "Service",
        "name": "Interview Preparation",
        "description": "Mock interviews and preparation for PA school admissions interviews",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "PA Prep Lab"
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}