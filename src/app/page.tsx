import ReactBitsCardNavWrapper from '@/components/ReactBitsCardNavWrapper'
import Hero from '@/components/Hero'
import CredibilityStrip from '@/components/CredibilityStrip'
import Pricing from '@/components/Pricing'
import HowItWorks from '@/components/HowItWorks'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <main id="main-content" className="min-h-screen">
        <ReactBitsCardNavWrapper />
        <Hero />
        <CredibilityStrip />
        <Pricing />
        <HowItWorks />
        <FAQ />
        <Footer />
      </main>
    </>
  )
}