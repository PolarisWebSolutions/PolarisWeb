import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Quick Links': [
      { href: '#features', label: 'Features' },
      { href: '#pricing', label: 'Pricing' },
      { href: '#addons', label: 'Add-Ons' },
      { href: '#faq', label: 'FAQ' },
      { href: '#contact', label: 'Contact' }
    ],
    'Legal': [
      { href: '/terms', label: 'Terms of Service' },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/contact', label: 'Contact Us' }
    ],
    'Services': [
      { href: '/book-demo', label: 'Get Started' },
      { href: '/quote', label: 'View Portfolio' },
      { href: '/affiliate', label: 'Affiliate Program' }
    ]
  }

  return (
    <footer className="bg-white text-deepNavy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/star_Black.PNG" 
                alt="Polaris Web Logo" 
                className="h-8 w-8 mr-2"
              />
              <span className="text-xl font-bold">Polaris Web</span>
            </div>
            <p className="text-mediumGray mb-4">
              Affordable, professional websites for small businesses with military-grade hosting and protection.
            </p>
            <p className="text-sm text-mediumGray">
              © {currentYear} Polaris Web · Military-grade hosting & protection.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href="#"
                      className="text-mediumGray hover:text-deepNavy transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-300 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-mediumGray text-sm">
              Built with ❤️ in Canada
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-mediumGray hover:text-deepNavy text-sm transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-mediumGray hover:text-deepNavy text-sm transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-mediumGray hover:text-deepNavy text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
