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
  bg: 'bg-[#e7f3ef]',
  border: 'border-gray-200',
  shadow: 'shadow-md',
  linkActive: 'bg-[#c7eddf] text-[#3B6255]',
  linkInactive: 'text-gray-700 hover:bg-[#c7eddf]',
  iconActive: 'bg-[#c7eddf] text-[#3B6255]',
  iconInactive: 'hover:bg-[#c7eddf] hover:scale-110 text-gray-700',
  mobileMenuBg: 'bg-white',
  mobileMenuHover: 'hover:bg-[#c7eddf]',
  toggleBtn: 'p-2 hover:bg-[#508472] text-[#3B6255]',
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
  `p-1 rounded-lg !no-underline hover:no-underline font-medium transition-colors ${
    active ? navColors.linkActive : navColors.linkInactive
  }`

const navIconStyle = (active: boolean) =>
  `p-1 rounded-lg transition-all ${
    active ? navColors.iconActive : navColors.iconInactive
  }`

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className={`${navColors.bg} border-b ${navColors.border} ${navColors.shadow} relative z-50`}>
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="w-32 h-16 relative px-4">
          <Link href="/" className="text-2xl font-bold whitespace-nowrap text-purple-700">
            <Image
              src={PaLab}
              alt="PA Prep Lab Logo"
              width={200}
              height={200}
              className="w-16 h-16 object-contain"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center px-4 py-3">
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
        <div className="flex md:hidden items-center space-x-1 px-4 py-3">
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
            className={navColors.toggleBtn}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className={`md:hidden mt-3 p-4 ${navColors.mobileMenuBg} border rounded-lg shadow z-50`}>
          <ul className={`space-y-3 text-[#3B6255]`}>
            {navLinks.map(({ href, label, icon: Icon }) => (
              <li
                key={href}
                className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                  pathname === href
                    ? navColors.linkActive
                    : navColors.mobileMenuHover
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