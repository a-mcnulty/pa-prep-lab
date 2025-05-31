'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
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

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: Star },
  { href: '/pricing', label: 'Pricing', icon: DollarSign },
  { href: '/faq', label: 'FAQ', icon: HelpCircle },
  { href: '/contact', label: 'Contact Us', icon: Mail },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const navTextStyle = (active: boolean) =>
    `p-1 rounded-lg !no-underline hover:no-underline font-medium transition-colors ${
      active ? 'text-purple-700 bg-purple-200' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-200'
    }`

  const navIconStyle = (active: boolean) =>
    `p-1 rounded-lg transition-all ${
      active ? 'text-purple-700 bg-purple-200' : 'text-purple-700 hover:text-purple-600 hover:scale-110 hover:bg-purple-200'
    }`

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 shadow-md relative z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold whitespace-nowrap text-purple-700">
          PA Prep Lab
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={navTextStyle(pathname === href)}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Top Nav - Icons */}
        <div className="flex md:hidden items-center space-x-1">
          {navLinks.map(({ href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={navIconStyle(pathname === href)}
              aria-label={href}
            >
              <Icon size={14} />
            </Link>
          ))}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-purple-700 hover:text-purple-600 focus:outline-none"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-3 p-4 bg-white border rounded-lg shadow z-50">
          <ul className="space-y-3 text-purple-700">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <li
                key={href}
                className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                  pathname === href
                    ? 'bg-purple-200 text-purple-700'
                    : 'hover:bg-purple-200 hover:text-purple-600'
                }`}
              >
                <Icon size={20} />
                <Link href={href} onClick={() => setMenuOpen(false)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}