'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Menu,
  X,
  Home,
  DollarSign,
  HelpCircle,
  Star,
  Mail
} from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navTextStyle =
    'transition-colors hover:text-purple-600 text-gray-700 font-medium'

  const navIconStyle =
    'transition-all hover:text-purple-600 hover:scale-110 text-purple-700'

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 shadow-md relative z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold whitespace-nowrap text-purple-700">
          PA Prep Lab
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className={`hover:bg-purple-200 p-1 !no-underline  !hover:no-underline rounded-lg ${navTextStyle}`}>Home</Link>
          <Link href="/pricing" className={`hover:bg-purple-200 p-1  !no-underline hover:no-underline rounded-lg ${navTextStyle}`}>Pricing</Link>
          <Link href="/qa" className={`hover:bg-purple-200 p-1 !no-underline hover:no-underline rounded-lg ${navTextStyle}`}>Q&A</Link>
          <Link href="/features" className={`hover:bg-purple-200 p-1 !no-underline hover:no-underline rounded-lg ${navTextStyle}`}>Features</Link>
          <Link href="/contact" className={`hover:bg-purple-200 p-1 !no-underline hover:no-underline rounded-lg ${navTextStyle}`}>Contact Us</Link>
        </div>

        {/* Mobile Top Nav - Icons */}
        <div className="flex md:hidden items-center ">
          <Link href="/pricing" className={`hover:bg-purple-200 p-1  rounded-lg ${navIconStyle}`} aria-label="Pricing"><DollarSign size={14} /></Link>
          <Link href="/qa" className={`hover:bg-purple-200 p-1 rounded-lg ${navIconStyle}`} aria-label="Q&A"><HelpCircle size={14} /></Link>
          <Link href="/features" className={`hover:bg-purple-200 p-1 rounded-lg ${navIconStyle}`} aria-label="Features"><Star size={14} /></Link>
          <Link href="/contact" className={`hover:bg-purple-200 p-1  rounded-lg ${navIconStyle}`} aria-label="Contact"><Mail size={14} /></Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`${navIconStyle} focus:outline-none !p-2`}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-3 p-4 bg-white border rounded-lg shadow z-50">
          <ul className="space-y-3 text-purple-700">
            <li className="flex hover:bg-purple-200 items-center space-x-2 p2 rounded-lg transition-colors hover:text-purple-600">
              <Home size={20} />
              <Link href="/">Home</Link>
            </li>
            <li className="flex hover:bg-purple-200 items-center space-x-2 p2 rounded-lg transition-colors hover:text-purple-600">
              <DollarSign size={20} />
              <Link href="/pricing">Pricing</Link>
            </li>
            <li className="flex hover:bg-purple-200 items-center space-x-2 p2 rounded-lg transition-colors hover:text-purple-600">
              <HelpCircle size={20} />
              <Link href="/qa">Q&A</Link>
            </li>
            <li className="flex hover:bg-purple-200 items-center space-x-2 p2 rounded-lg transition-colors hover:text-purple-600">
              <Star size={20} />
              <Link href="/features">Features</Link>
            </li>
            <li className="flex hover:bg-purple-200 items-center space-x-2 p2 rounded-lg transition-colors hover:text-purple-600">
              <Mail size={20} />
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
