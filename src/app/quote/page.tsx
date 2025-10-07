import Link from 'next/link'
import Button from '@/components/Button'
import Card from '@/components/Card'
import ReactBitsCardNavWrapper from '@/components/ReactBitsCardNavWrapper'
import { DocumentTextIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: 'View Portfolio - Polaris Web',
  description: 'Get a personalized quote for your website project. Professional, transparent pricing with no hidden fees.',
}

export default function Quote() {
  return (
    <main className="min-h-screen bg-gray-50">
      <ReactBitsCardNavWrapper />

      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-deepNavy mb-6">
            Get Your Personalized Quote
          </h1>
          <p className="text-xl text-mediumGray mb-8">
            Tell us about your project and we'll provide a detailed, 
            transparent quote within 24 hours. No obligation, no pressure - just honest pricing for your needs.
          </p>
        </div>
      </section>

      {/* Quote Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <DocumentTextIcon className="h-12 w-12 text-primaryBlue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-deepNavy mb-2">Detailed Quote</h3>
              <p className="text-mediumGray">
                Get a comprehensive breakdown of costs, timeline, and deliverables.
              </p>
            </Card>
            
            <Card className="text-center">
              <ClockIcon className="h-12 w-12 text-primaryBlue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-deepNavy mb-2">24-Hour Response</h3>
              <p className="text-mediumGray">
                We'll review your project and send a detailed quote within 24 hours.
              </p>
            </Card>
            
            <Card className="text-center">
              <CurrencyDollarIcon className="h-12 w-12 text-primaryBlue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-deepNavy mb-2">No Hidden Fees</h3>
              <p className="text-mediumGray">
                Transparent pricing with no surprises. What you see is what you pay.
              </p>
            </Card>
          </div>

          {/* Quote Form */}
          <Card className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-deepNavy mb-6 text-center">
              Project Information
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-deepNavy mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:border-transparent"
                  placeholder="Your business name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-deepNavy mb-2">
                  Contact Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-deepNavy mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-deepNavy mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-deepNavy mb-2">
                  Project Type
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:border-transparent">
                  <option>Select project type</option>
                  <option>Managed Monthly Website</option>
                  <option>Pay-Once Website</option>
                  <option>E-Commerce Add-On</option>
                  <option>Booking System Add-On</option>
                  <option>Not sure - need consultation</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-deepNavy mb-2">
                  Number of Pages
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:border-transparent">
                  <option>Select number of pages</option>
                  <option>1-3 pages</option>
                  <option>4-6 pages</option>
                  <option>7-10 pages</option>
                  <option>10+ pages</option>
                  <option>Not sure</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-deepNavy mb-2">
                  Special Features Needed
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-mediumGray">Online store / E-commerce</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-mediumGray">Appointment booking</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-mediumGray">Contact forms</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-mediumGray">Blog / News section</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-mediumGray">Social media integration</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-deepNavy mb-2">
                  Project Description
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:border-transparent"
                  placeholder="Tell us about your business, goals, and what you want your website to accomplish..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-deepNavy mb-2">
                  Budget Range
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:border-transparent">
                  <option>Select budget range</option>
                  <option>Under $1,000</option>
                  <option>$1,000 - $2,500</option>
                  <option>$2,500 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000+</option>
                  <option>Not sure</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-deepNavy mb-2">
                  Timeline
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:border-transparent">
                  <option>Select timeline</option>
                  <option>ASAP (Rush job)</option>
                  <option>Within 1 month</option>
                  <option>1-2 months</option>
                  <option>2-3 months</option>
                  <option>3+ months</option>
                  <option>No specific timeline</option>
                </select>
              </div>
              
              <Button className="w-full">
                Request My Quote
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primaryBlue py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Prefer to Talk First?
          </h2>
          <p className="text-white mb-6">
            Book a free consultation to discuss your project in detail.
          </p>
          <Link href="#">
            <Button variant="secondary" size="lg">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
