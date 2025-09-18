'use client';

import Link from "next/link";
import { siteContent } from '@/lib/content';
import { trackEmailClick, trackPhoneClick } from '@/lib/analytics';

const footerColors = {
  background: "bg-[#e7f3ef]",
  text: "text-[#3B6255]",
  hover: "hover:text-white",
  border: "border-t border-gray-100",
};

export default function Footer() {
  return (
    <footer className={`${footerColors.border} ${footerColors.background} ${footerColors.text} text-sm py-6`}>
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div>
          <p>
            <a
              href={`tel:${siteContent.footer.phone.replace(/[^\d]/g, '')}`}
              onClick={trackPhoneClick}
              className={`${footerColors.hover} cursor-pointer`}
            >
              {siteContent.footer.phone}
            </a>
          </p>
          <p>
            ✉️{" "}
            <a
              href={`mailto:${siteContent.footer.email}`}
              onClick={trackEmailClick}
              className={`underline ${footerColors.hover}`}
            >
              {siteContent.footer.email}
            </a>
          </p>
          <p className="mt-2 text-xs">© {new Date().getFullYear()} {siteContent.footer.copyright}</p>
        </div>

        <nav>
          <ul className="flex space-x-6 text-sm">
            {siteContent.footer.links.map((link, idx) => (
              <li key={idx}>
                <Link href={link.href} className={footerColors.hover}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}