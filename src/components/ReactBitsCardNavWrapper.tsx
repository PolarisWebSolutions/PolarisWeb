'use client'

import React from 'react'
import CardNav from './ReactBitsCardNav'

const ReactBitsCardNavWrapper = () => {
  // Use the actual logo from public folder (note: case-sensitive on servers)
  const logo = "/star_black.PNG"

  const navItems = [
    {
      label: 'Services',
      bgColor: '#000000',
      textColor: '#FFFFFF',
      links: [
        { label: 'Web Design', href: '#features', ariaLabel: 'Learn about our web design services' },
        { label: 'SEO Optimization', href: '#features', ariaLabel: 'Learn about our SEO services' },
        { label: 'Mobile Ready', href: '#features', ariaLabel: 'Learn about our mobile optimization' }
      ]
    },
    {
      label: 'Pricing',
      bgColor: '#000000',
      textColor: '#FFFFFF',
      links: [
        { label: 'Managed Monthly', href: '#pricing', ariaLabel: 'View managed monthly pricing' },
        { label: 'Pay-Once Website', href: '#pricing', ariaLabel: 'View one-time website pricing' },
        { label: 'Add-On Services', href: '#pricing', ariaLabel: 'View additional services' }
      ]
    },
    {
      label: 'Support',
      bgColor: '#000000',
      textColor: '#FFFFFF',
      links: [
        { label: 'FAQ', href: '#faq', ariaLabel: 'View frequently asked questions' },
        { label: 'Contact Us', href: '#contact', ariaLabel: 'Get in touch with us' },
        { label: 'Get Started', href: '/book-demo', ariaLabel: 'Get started with Polaris Web' }
      ]
    }
  ]

  return (
    <CardNav
      logo={logo}
      logoAlt="Polaris Web Logo"
      items={navItems}
      baseColor="#FFFFFF"
      menuColor="#1F2937"
      buttonBgColor="#3B82F6"
      buttonTextColor="#FFFFFF"
      ease="power3.out"
    />
  )
}

export default ReactBitsCardNavWrapper
