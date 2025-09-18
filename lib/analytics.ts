// Google Analytics 4 Configuration
type GtagFunction = {
  (...args: unknown[]): void;
  q?: unknown[][];
};

declare global {
  interface Window {
    gtag: GtagFunction;
    dataLayer: unknown[];
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Initialize Google Analytics with delayed loading
export const initGA = () => {
  if (!GA_MEASUREMENT_ID) {
    console.warn('Google Analytics Measurement ID not found');
    return;
  }

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];

  // Initialize gtag function
  window.gtag = window.gtag || function(...args: unknown[]) {
    window.dataLayer.push(args);
  };

  // Delay GA loading until after page load to avoid blocking
  const loadGA = () => {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  };

  // Load GA after a brief delay to not block initial render
  if (document.readyState === 'complete') {
    setTimeout(loadGA, 100);
  } else {
    window.addEventListener('load', () => setTimeout(loadGA, 100));
  }
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (!GA_MEASUREMENT_ID || typeof window.gtag === 'undefined') return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
    page_title: title,
  });
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (!GA_MEASUREMENT_ID || typeof window.gtag === 'undefined') return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Specific tracking functions for PA Prep Lab
export const trackContactFormSubmission = (services: string[]) => {
  trackEvent('form_submit', 'contact', `services: ${services.join(', ')}`);
};

export const trackPricingCardClick = (serviceName: string) => {
  trackEvent('pricing_card_click', 'engagement', serviceName);
};

export const trackApplyButtonClick = (serviceName: string) => {
  trackEvent('apply_button_click', 'conversion', serviceName);
};

export const trackNavigationClick = (pageName: string) => {
  trackEvent('navigation_click', 'engagement', pageName);
};

export const trackEmailClick = () => {
  trackEvent('email_click', 'contact', 'footer_email');
};

export const trackPhoneClick = () => {
  trackEvent('phone_click', 'contact', 'footer_phone');
};