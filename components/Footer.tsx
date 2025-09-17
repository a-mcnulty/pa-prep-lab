import Link from "next/link";
import { siteContent } from '@/lib/content';

const footerColors = {
  background: "bg-[#e7f3ef]",
  text: "text-[#3B6255]",
  hover: "hover:text-white",
};

export default function Footer() {
  return (
    <footer className={`shadow-md border-t border-grey-100  ${footerColors.background} ${footerColors.text} text-sm py-6`}>
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div>
          <p>{siteContent.footer.phone}</p>
          <p>
            ✉️{" "}
            <a
              href={`mailto:${siteContent.footer.email}`}
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