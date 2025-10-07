'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Button from './Button'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#addons', label: 'Add-Ons' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="relative z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-primaryBlue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">★</span>
              </div>
              <span className="ml-2 text-xl font-bold text-deepNavy">Polaris Web</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-deepNavy hover:text-primaryBlue px-3 py-2 text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="#" onClick={(e) => e.preventDefault()}>
              <Button>Get Started</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-deepNavy hover:text-primaryBlue focus:outline-none focus:ring-2 focus:ring-primaryBlue focus:ring-offset-2 p-2"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href="#"
                  className="text-deepNavy hover:text-primaryBlue block px-3 py-2 text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link href="#" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
