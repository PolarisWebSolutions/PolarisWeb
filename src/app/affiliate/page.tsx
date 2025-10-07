import Link from 'next/link'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Badge from '@/components/Badge'
import ReactBitsCardNavWrapper from '@/components/ReactBitsCardNavWrapper'
import { CurrencyDollarIcon, UsersIcon, ChartBarIcon, CheckIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Affiliate Program - Polaris Web',
  description: 'Join our affiliate program and earn $100 per managed client referral. Perfect for creators, marketers, and business consultants.',
}

export default function Affiliate() {
  const benefits = [
    'Earn $100 per managed client referral',
    '30-day cookie tracking',
    'Monthly payouts via PayPal or bank transfer',
    'Marketing materials and resources provided',
    'Dedicated affiliate support',
    'Real-time tracking dashboard'
  ]

  const requirements = [
    'Valid business or personal website',
    'Active social media presence (optional but recommended)',
    'Agreement to our affiliate terms',
    'Professional representation of our brand'
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <ReactBitsCardNavWrapper />

      {/* Hero Section */}
      <section className="bg-primaryBlue pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Affiliate Program
          </h1>
          <p className="text-xl text-white mb-8">
            Earn <span className="font-bold text-accentYellow">$100</span> for every managed client you refer. 
            Perfect for creators, marketers, and business consultants.
          </p>
          <Badge variant="warning" className="text-lg px-4 py-2">
            $100 per successful referral
          </Badge>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deepNavy mb-4">
              Why Join Our Affiliate Program?
            </h2>
            <p className="text-xl text-mediumGray max-w-3xl mx-auto">
              We offer competitive commissions, excellent support, and all the tools you need to succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CurrencyDollarIcon className="h-12 w-12 text-primaryBlue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-deepNavy mb-2">High Commissions</h3>
              <p className="text-mediumGray">
                Earn $100 for every managed client that signs up and pays their first month.
              </p>
            </Card>
            
            <Card className="text-center">
              <UsersIcon className="h-12 w-12 text-primaryBlue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-deepNavy mb-2">Easy Referrals</h3>
              <p className="text-mediumGray">
                Simple referral process with tracking links and promotional materials.
              </p>
            </Card>
            
            <Card className="text-center">
              <ChartBarIcon className="h-12 w-12 text-primaryBlue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-deepNavy mb-2">Real-time Tracking</h3>
              <p className="text-mediumGray">
                Monitor your referrals and earnings with our comprehensive dashboard.
              </p>
            </Card>
          </div>

          {/* Benefits List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-2xl font-bold text-deepNavy mb-6">Program Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-primaryGreen mr-3 flex-shrink-0" />
                    <span className="text-mediumGray">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold text-deepNavy mb-6">Requirements</h3>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-primaryBlue mr-3 flex-shrink-0" />
                    <span className="text-mediumGray">{requirement}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deepNavy mb-4">
              How It Works
            </h2>
            <p className="text-xl text-mediumGray max-w-3xl mx-auto">
              Getting started is simple. Follow these steps to start earning commissions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primaryBlue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-deepNavy mb-2">Apply</h3>
              <p className="text-mediumGray">Submit your application with your website and social media details.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primaryBlue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-deepNavy mb-2">Get Approved</h3>
              <p className="text-mediumGray">We review your application and approve within 2-3 business days.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primaryBlue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-deepNavy mb-2">Start Promoting</h3>
              <p className="text-mediumGray">Use your unique referral links and marketing materials to promote our services.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primaryBlue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold text-deepNavy mb-2">Earn Commissions</h3>
              <p className="text-mediumGray">Get paid $100 for every managed client that signs up and pays.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <h2 className="text-2xl font-bold text-deepNavy mb-6 text-center">
              Apply to Our Affiliate Program
            </h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-deepNavy mb-2">
                    Full Name
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
              </div>
              
              <div>
                <label className="block text-sm font-medium text-deepNavy mb-2">
                  Website URL
                </label>
                <input
                  type="url"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:border-transparent"
                  placeholder="https://yourwebsite.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-deepNavy mb-2">
                  Social Media Handles (Optional)
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:border-transparent"
                  placeholder="@yourhandle on Twitter, Instagram, LinkedIn, etc."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-deepNavy mb-2">
                  How do you plan to promote our services?
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:border-transparent"
                  placeholder="Describe your audience and promotion strategy..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-deepNavy mb-2">
                  Expected Monthly Referrals
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:border-transparent">
                  <option>Select expected volume</option>
                  <option>1-2 referrals per month</option>
                  <option>3-5 referrals per month</option>
                  <option>6-10 referrals per month</option>
                  <option>10+ referrals per month</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              
              <div className="flex items-start">
                <input type="checkbox" className="mt-1 mr-3" required />
                <label className="text-sm text-mediumGray">
                  I agree to the <Link href="/terms" className="text-primaryBlue hover:underline">Terms of Service</Link> and 
                  <Link href="/privacy" className="text-primaryBlue hover:underline"> Privacy Policy</Link>. 
                  I understand that commissions are only paid for successful referrals that complete their first month of service.
                </label>
              </div>
              
              <Button className="w-full">
                Submit Application
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primaryBlue py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Questions About Our Affiliate Program?
          </h2>
          <p className="text-white mb-6">
            Contact us for more information or to discuss partnership opportunities.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
