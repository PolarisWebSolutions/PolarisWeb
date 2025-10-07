'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Button from './Button'

const CardNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#addons', label: 'Add-Ons' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative z-50 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto mt-4">
        <motion.div
          className={`bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-4 transition-all duration-300 ${
            scrolled ? 'shadow-2xl' : 'shadow-xl'
          }`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="#" className="flex items-center group" onClick={(e) => e.preventDefault()}>
                <motion.div 
                  className="w-10 h-10 bg-gradient-to-br from-primaryBlue to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-white font-bold text-lg">★</span>
                </motion.div>
                <motion.span 
                  className="ml-3 text-xl font-bold text-deepNavy"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Polaris Web
                </motion.span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="relative px-4 py-2 text-deepNavy hover:text-primaryBlue font-medium transition-colors duration-200 group"
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.label}
                    </motion.span>
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primaryBlue to-blue-600 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Link href="/book-demo">
                  <Button 
                    className="shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-deepNavy hover:text-primaryBlue focus:outline-none focus:ring-2 focus:ring-primaryBlue focus:ring-offset-2 rounded-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-expanded={isOpen}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <XMarkIcon className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Bars3Icon className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden mt-4 pt-4 border-t border-gray-200"
              >
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.1 }}
                    >
                      <Link
                        href="#"
                        onClick={(e) => setIsOpen(false)}
                        className="block px-4 py-3 text-deepNavy hover:text-primaryBlue hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="pt-4"
                  >
                    <Link href="#" onClick={() => setIsOpen(false)}>
                      <Button className="w-full">
                        Get Started
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default CardNav
