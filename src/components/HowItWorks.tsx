import { 
  DocumentTextIcon, 
  PencilSquareIcon, 
  RocketLaunchIcon, 
  HeartIcon 
} from '@heroicons/react/24/outline'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: DocumentTextIcon,
      title: 'Sign & Deposit',
      description: 'Complete your agreement and pay the deposit to secure your spot. We begin work immediately and you\'ll receive a detailed project timeline.',
      details: 'Managed: $40 deposit | Pay-Once: $250 deposit'
    },
    {
      number: '02',
      icon: PencilSquareIcon,
      title: 'We Design & Build',
      description: 'Our team creates your custom website, incorporating your brand, content, and specific requirements. You\'ll see progress updates throughout.',
      details: 'Timeline: 2-4 weeks for most projects'
    },
    {
      number: '03',
      icon: RocketLaunchIcon,
      title: 'Delivery & Launch',
      description: 'Your website goes live! We handle all technical setup, and settle up any outstanding balances or start billing.',
      details: 'Managed: Monthly billing starts | Pay-Once: Balance due'
    },
    {
      number: '04',
      icon: HeartIcon,
      title: 'Ongoing Support',
      description: 'Managed clients get unlimited minor edits and priority support. Pay-Once clients get 30 days of support to ensure everything works perfectly.',
      details: 'Managed: Ongoing support | Pay-Once: 30-day support'
    }
  ]

  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deepNavy mb-4">
            From Idea to Live Website in 4 Simple Steps
          </h2>
          <p className="text-xl text-mediumGray max-w-3xl mx-auto">
            Our proven process has helped hundreds of businesses get online quickly and professionally. 
            Here's exactly how we'll build your website.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-primaryBlue transform translate-x-8 -translate-y-8 z-0" />
              )}
              
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primaryBlue to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accentYellow rounded-full flex items-center justify-center">
                      <span className="text-deepNavy font-bold text-sm">{step.number}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-deepNavy mb-3">
                  {step.title}
                </h3>
                
                <p className="text-mediumGray mb-3">
                  {step.description}
                </p>
                
                <p className="text-sm text-primaryBlue font-medium">
                  {step.details}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HowItWorks
