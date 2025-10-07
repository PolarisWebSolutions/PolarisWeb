import Link from 'next/link'
import Button from '@/components/Button'
import Card from '@/components/Card'
import ReactBitsCardNavWrapper from '@/components/ReactBitsCardNavWrapper'
import { CalendarDaysIcon, ClockIcon, VideoCameraIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Get Started - Polaris Web',
  description: 'Schedule a free consultation to discuss your website needs and see how Polaris Web can help your business grow online.',
}

export default function BookDemo() {
  return (
    <main className="min-h-screen bg-gray-50">
      <ReactBitsCardNavWrapper />

      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-deepNavy mb-6">
            Book Your Free 30-Minute Demo
          </h1>
          <p className="text-xl text-mediumGray mb-8">
            See how Polaris Web can transform your online presence. 
            Get a personalized consultation, see our work in action, and discover how we can help your business grow online.
          </p>
        </div>
      </section>

      {/* Demo Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CalendarDaysIcon className="h-12 w-12 text-primaryBlue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-deepNavy mb-2">30-Minute Consultation</h3>
              <p className="text-mediumGray">
                We'll discuss your business needs and show you exactly how we can help.
              </p>
            </Card>
            
            <Card className="text-center">
              <VideoCameraIcon className="h-12 w-12 text-primaryBlue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-deepNavy mb-2">Live Demo</h3>
              <p className="text-mediumGray">
                See our work in action with real examples and case studies.
              </p>
            </Card>
            
            <Card className="text-center">
              <ClockIcon className="h-12 w-12 text-primaryBlue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-deepNavy mb-2">No Obligation</h3>
              <p className="text-mediumGray">
                Free consultation with no pressure. We're here to help, not sell.
              </p>
            </Card>
          </div>

          {/* Demo Form Placeholder */}
          <Card className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-deepNavy mb-6 text-center">
              Schedule Your Demo
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
                  Preferred Demo Time
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:border-transparent">
                  <option>Select a time</option>
                  <option>Monday 10:00 AM</option>
                  <option>Monday 2:00 PM</option>
                  <option>Tuesday 10:00 AM</option>
                  <option>Tuesday 2:00 PM</option>
                  <option>Wednesday 10:00 AM</option>
                  <option>Wednesday 2:00 PM</option>
                  <option>Thursday 10:00 AM</option>
                  <option>Thursday 2:00 PM</option>
                  <option>Friday 10:00 AM</option>
                  <option>Friday 2:00 PM</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-deepNavy mb-2">
                  Tell us about your project
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:border-transparent"
                  placeholder="What kind of website do you need? What's your main goal?"
                />
              </div>
              
              <Button className="w-full">
                Schedule My Demo
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primaryBlue py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Questions? We're Here to Help
          </h2>
          <p className="text-white mb-6">
            Can't find a time that works? Contact us directly and we'll work with your schedule.
          </p>
          <Link href="#">
            <Button variant="secondary" size="lg">
              View Portfolio Instead
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
