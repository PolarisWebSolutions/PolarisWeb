import Link from 'next/link'
import { CurrencyDollarIcon } from '@heroicons/react/24/outline'

const AffiliateBanner = () => {
  return (
    <section className="bg-gradient-to-r from-accentYellow to-orange-500 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <CurrencyDollarIcon className="h-8 w-8 text-deepNavy mr-3" />
            <h3 className="text-2xl font-bold text-deepNavy">
              Creators & Marketers
            </h3>
          </div>
          <p className="text-xl text-deepNavy mb-4">
            Earn <span className="font-bold text-white bg-deepNavy px-2 py-1 rounded">$100</span> per managed client you refer
          </p>
          <p className="text-deepNavy mb-6">
            Join our affiliate program and start earning commissions for every successful referral.
          </p>
          <Link 
            href="/affiliate"
            className="inline-flex items-center justify-center px-6 py-3 bg-deepNavy text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
          >
            Learn More About Our Affiliate Program
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AffiliateBanner
