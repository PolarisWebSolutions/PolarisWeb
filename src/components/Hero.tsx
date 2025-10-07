import Link from 'next/link'
import Button from './Button'
import Aurora from './Aurora'
import GradientText from './GradientText'
import { ShieldCheckIcon, DevicePhoneMobileIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

const Hero = () => {
  return (
    <section className="relative bg-deepNavy text-white overflow-hidden" style={{ backgroundColor: '#000000' }}>
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora 
          colorStops={['#3B82F6', '#10B981', '#8B5CF6']}
          amplitude={1.2}
          blend={0.6}
          speed={1.0}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32 lg:pb-32">
        <div className="text-center">
          <GradientText 
            className="text-4xl md:text-6xl font-bold mb-6"
            colors={['#F59E0B', '#3B82F6', '#10B981', '#8B5CF6']}
            animationSpeed={6}
          >
            Professional websites that grow your business
          </GradientText>
          <p className="text-xl md:text-2xl text-silver mb-8 max-w-3xl mx-auto">
            Stop losing customers to competitors with outdated websites. Get a custom-built, 
            mobile-ready website with military-grade hosting and protection that converts visitors into customers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/book-demo">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Book a Demo
              </Button>
            </Link>
            <Link href="/quote">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                View Portfolio
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <ShieldCheckIcon className="h-12 w-12 text-primaryGreen mb-4" />
              <h3 className="text-lg font-semibold mb-2">Military-grade Security</h3>
              <p className="text-silver">99.9% uptime with enterprise-level protection and daily backups</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <DevicePhoneMobileIcon className="h-12 w-12 text-primaryGreen mb-4" />
              <h3 className="text-lg font-semibold mb-2">Mobile-First Design</h3>
              <p className="text-silver">Optimized for mobile users who make up 60% of web traffic</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <GlobeAltIcon className="h-12 w-12 text-primaryGreen mb-4" />
              <h3 className="text-lg font-semibold mb-2">SEO Built-In</h3>
              <p className="text-silver">Get found on Google with built-in SEO optimization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
