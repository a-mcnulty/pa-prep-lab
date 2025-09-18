'use client'

import Image from "next/image";
import PaLab from '@/public/PaLab.webp';
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

// 🎨 Colors & styles
const navColors = {
  bg: 'bg-white border-b border-gray-100 shadow-md',
  linkActive: 'text-[#3B6255] font-semibold bg-[#3B6255]/10',
  linkInactive: 'text-gray-700 hover:text-[#3B6255]',
  iconActive: 'text-[#3B6255] bg-[#3B6255]/10',
  iconInactive: 'hover:text-[#3B6255] hover:scale-110 text-gray-700',
  mobileMenuBg: 'bg-white/95 backdrop-blur-sm',
  mobileMenuHover: 'hover:bg-[#c7eddf]/30',
  toggleBtn: 'p-2 rounded-lg hover:text-[#3B6255] hover:bg-[#3B6255]/10 hover:scale-105 text-gray-700 transition-all duration-200',
}

// 📌 Navigation links
const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: Star },
  { href: '/pricing', label: 'Services', icon: DollarSign },
  { href: '/faq', label: 'FAQ', icon: HelpCircle },
  { href: '/contact', label: 'Contact', icon: Mail },
]

// 🔧 Helpers
const navTextStyle = (active: boolean) =>
  `px-3 py-2 rounded-lg !no-underline hover:no-underline transition-all duration-200 hover:bg-[#3B6255]/10 hover:scale-105 hover:shadow-sm ${
    active ? navColors.linkActive : navColors.linkInactive
  }`

const navIconStyle = (active: boolean) =>
  `p-2 rounded-lg transition-all duration-200 hover:bg-[#3B6255]/10 hover:shadow-sm ${
    active ? navColors.iconActive : navColors.iconInactive
  }`

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className={`${navColors.bg} sticky top-0 z-50 py-4`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        {/* Logo */}
        <div className="relative">
          <Link href="/" className="block">
            <Image
              src={PaLab}
              alt="PA Prep Lab Logo"
              width={200}
              height={200}
              className="w-20 h-20 object-contain hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-2 items-center">
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
              <Icon size={16} />
            </Link>
          ))}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={navColors.toggleBtn}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className={`md:hidden absolute top-full left-4 right-4 mt-2 p-4 ${navColors.mobileMenuBg} rounded-lg shadow-xl border border-white/20 z-50`}>
          <ul className={`space-y-2`}>
            {navLinks.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    pathname === href
                      ? 'bg-[#3B6255]/10 text-[#3B6255] font-semibold'
                      : navColors.mobileMenuHover + ' text-gray-700'
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}