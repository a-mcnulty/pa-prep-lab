import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div>
          <p>📞 (555) 123-4567</p>
          <p>✉️ <a href="mailto:contact@papreplab.com" className="underline hover:text-white">contact@papreplab.com</a></p>
          <p className="mt-2 text-xs">&copy; {new Date().getFullYear()} PA Prep Lab. All rights reserved.</p>
        </div>

        <nav>
          <ul className="flex space-x-6 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}