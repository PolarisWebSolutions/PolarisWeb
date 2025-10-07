import Link from 'next/link'
import Card from './Card'
import Button from './Button'
import { ShoppingCartIcon, CalendarDaysIcon, CheckIcon } from '@heroicons/react/24/outline'

const AddOns = () => {
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
    <section id="addons" className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deepNavy mb-4">
            Managed Add-Ons
          </h2>
          <p className="text-xl text-mediumGray max-w-3xl mx-auto">
            Enhance your website with powerful e-commerce or booking capabilities. 
            Available for both Managed Monthly and Pay-Once clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* E-Commerce */}
          <Card className="border-2 border-primaryBlue">
            <div className="flex items-center mb-4">
              <ShoppingCartIcon className="h-8 w-8 text-primaryBlue mr-3" />
              <h3 className="text-2xl font-bold text-deepNavy">E-Commerce / Online Ordering</h3>
            </div>
            
            <div className="mb-6">
              <div className="flex items-baseline mb-2">
                <span className="text-3xl font-bold text-deepNavy">$49.99</span>
                <span className="text-mediumGray ml-2">/month</span>
                <span className="text-sm text-mediumGray ml-2">or</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold text-deepNavy">$499.99</span>
                <span className="text-mediumGray ml-2">one-time</span>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {ecommerceFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-primaryBlue mr-3 flex-shrink-0" />
                  <span className="text-mediumGray">{feature}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <Link href="#" className="block" onClick={(e) => e.preventDefault()}>
                <Button className="w-full">Get Started</Button>
              </Link>
              <Link href="#" className="block" onClick={(e) => e.preventDefault()}>
                <Button variant="outline" className="w-full">View Portfolio</Button>
              </Link>
            </div>
          </Card>

          {/* Booking & Appointments */}
          <Card className="border-2 border-primaryGreen">
            <div className="flex items-center mb-4">
              <CalendarDaysIcon className="h-8 w-8 text-primaryGreen mr-3" />
              <h3 className="text-2xl font-bold text-deepNavy">Booking & Appointments</h3>
            </div>
            
            <div className="mb-6">
              <div className="flex items-baseline mb-2">
                <span className="text-3xl font-bold text-deepNavy">$24.99</span>
                <span className="text-mediumGray ml-2">/month</span>
                <span className="text-sm text-mediumGray ml-2">or</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold text-deepNavy">$249.99</span>
                <span className="text-mediumGray ml-2">one-time</span>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {bookingFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-primaryGreen mr-3 flex-shrink-0" />
                  <span className="text-mediumGray">{feature}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <Link href="#" className="block" onClick={(e) => e.preventDefault()}>
                <Button className="w-full">Get Started</Button>
              </Link>
              <Link href="#" className="block" onClick={(e) => e.preventDefault()}>
                <Button variant="outline" className="w-full">View Portfolio</Button>
              </Link>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-mediumGray">
            <strong>Note:</strong> Add-ons can be added to existing websites or included in new projects. 
            Monthly add-ons require the same 6-month minimum as Managed Monthly plans.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AddOns
