import Link from "next/link";

const footerColors = {
  background: "bg-[#e7f3ef]",
  text: "text-[#3B6255]",
  hover: "hover:text-white",
};

const footerText = {
  phone: "📞 (408)348-9881",
  email: "contact@papreplab.com",
  copyright: `© ${new Date().getFullYear()} PA Prep Lab. All rights reserved.`,
};

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className={`shadow-md border-t border-grey-100  ${footerColors.background} ${footerColors.text} text-sm py-6`}>
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div>
          <p>{footerText.phone}</p>
          <p>
            ✉️{" "}
            <a
              href={`mailto:${footerText.email}`}
              className={`underline ${footerColors.hover}`}
            >
              {footerText.email}
            </a>
          </p>
          <p className="mt-2 text-xs">{footerText.copyright}</p>
        </div>

        <nav>
          <ul className="flex space-x-6 text-sm">
            {footerLinks.map((link, idx) => (
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