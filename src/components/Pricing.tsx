"use client";

import Link from 'next/link'
import Card from './Card'
import Button from './Button'
import Badge from './Badge'
import Particles from './Particles'
import { CheckIcon, ShoppingCartIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'

const Pricing = () => {
  const managedFeatures = [
    'Military-grade hosting & SSL',
    'Domain setup & management',
    'Unlimited minor edits',
    'Daily backups & monitoring',
    'Priority support',
    '6-month minimum commitment'
  ]

  const payOnceFeatures = [
    '4-6 page custom website',
    'Mobile-responsive design',
    'SEO optimization',
    '2 rounds of revisions',
    '30-day post-launch support',
    'Full ownership & control'
  ]

  const ecommerceFeatures = [
    'Online product catalog',
    'Secure payment processing',
    'Inventory management',
    'Order tracking system',
    'Customer accounts',
    'Mobile-optimized checkout'
  ]

  const bookingFeatures = [
    'Online appointment booking',
    'Calendar integration',
    'Automated reminders',
    'Customer management',
    'Payment processing',
    'Mobile-friendly interface'
  ]

  return (
    <section id="pricing" className="relative bg-black py-16 overflow-hidden">
      {/* Temporary Simple Background for Testing */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pricing & Add-Ons
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            What you see is what you pay. No hidden fees, no surprises. 
            Choose the plan that fits your business needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Managed Monthly */}
          <Card className="relative border-2 border-primaryGreen bg-gray-900/90 backdrop-blur-sm">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-green-900 rounded-lg text-white text-sm font-bold px-8 py-3 shadow-xl border border-primaryGreen">
                Most Popular
              </div>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Managed Monthly</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">$159</span>
                <span className="text-gray-300">/month</span>
              </div>
              <p className="text-sm text-gray-300">
                Deposit: $40 (25% of first month) due at signing
              </p>
              <p className="text-sm text-gray-300">
                Monthly billing starts on delivery
              </p>
              <div className="mt-4 p-3 bg-green-900/50 rounded-lg border border-primaryGreen border-opacity-30">
                <p className="text-sm font-medium text-white">
                  <strong>Best Value:</strong> Includes hosting, SSL, updates, and support
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {managedFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-primaryGreen mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <Link href="#" className="block" onClick={(e) => e.preventDefault()}>
                <Button className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300">Book a Demo</Button>
              </Link>
            </div>
          </Card>

          {/* Pay-Once */}
          <Card className="border-2 border-primaryBlue bg-gray-900/90 backdrop-blur-sm">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Pay-Once</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">$999</span>
                <span className="text-gray-300"> one-time</span>
              </div>
              <p className="text-sm text-gray-300">
                Deposit: $250 (25%) due at signing
              </p>
              <p className="text-sm text-gray-300">
                Balance due on delivery
              </p>
              <div className="mt-4 p-3 bg-blue-900/50 rounded-lg border border-primaryBlue border-opacity-30">
                <p className="text-sm font-medium text-white">
                  <strong>One-time Investment:</strong> Own your website completely
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {payOnceFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-primaryBlue mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <Link href="#" className="block" onClick={(e) => e.preventDefault()}>
                <Button className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300">Book a Demo</Button>
              </Link>
            </div>
          </Card>
        </div>

        {/* Add-Ons Section */}
        <div className="mt-12">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white mb-2">
              Add-On Services
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {/* E-Commerce Add-On */}
            <Card className="border border-primaryBlue bg-gray-900/90 backdrop-blur-sm p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <ShoppingCartIcon className="h-5 w-5 text-primaryBlue mr-2" />
                  <h4 className="text-sm font-semibold text-white">E-Commerce</h4>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-white">$49.99/mo</div>
                  <div className="text-xs text-gray-300">or $499.99</div>
                </div>
              </div>
            </Card>

            {/* Booking Add-On */}
            <Card className="border border-primaryGreen bg-gray-900/90 backdrop-blur-sm p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CalendarDaysIcon className="h-5 w-5 text-primaryGreen mr-2" />
                  <h4 className="text-sm font-semibold text-white">Booking & Appointments</h4>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-white">$24.99/mo</div>
                  <div className="text-xs text-gray-300">or $249.99</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-300">
            <strong>Note:</strong> All deposits are non-refundable. 
            This ensures we can begin work immediately and deliver your project on time.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
