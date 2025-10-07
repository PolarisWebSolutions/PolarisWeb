import Link from 'next/link'
import Button from './Button'

const CTABand = () => {
  return (
    <section className="bg-gradient-to-r from-primaryBlue via-blue-600 to-purple-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Stop Losing Customers to Competitors?
        </h2>
        <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
          Join hundreds of successful businesses who trust Polaris Web for their online presence. 
          Get started today with a free consultation and see how we can help your business grow.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/book-demo">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Book a Demo
            </Button>
          </Link>
          <Link href="/quote">
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primaryBlue">
              View Portfolio
            </Button>
          </Link>
        </div>

        <div className="mt-8 text-center">
          <p className="text-white text-sm">
            <strong>Free consultation</strong> • No obligation • Get your quote in 24 hours
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTABand
