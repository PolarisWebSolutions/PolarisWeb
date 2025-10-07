import Card from './Card'
import Badge from './Badge'
import { 
  ServerIcon, 
  PencilSquareIcon, 
  ShieldCheckIcon, 
  PhoneIcon,
  CodeBracketIcon,
  MagnifyingGlassIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const Features = () => {
  const managedFeatures = [
    { icon: ServerIcon, text: 'Military-grade hosting & SSL' },
    { icon: PencilSquareIcon, text: 'Unlimited minor edits' },
    { icon: ShieldCheckIcon, text: 'Daily backups & monitoring' },
    { icon: PhoneIcon, text: 'Priority support' }
  ]

  const payOnceFeatures = [
    { icon: CodeBracketIcon, text: '4-6 page custom website' },
    { icon: MagnifyingGlassIcon, text: 'SEO-ready & optimized' },
    { icon: CheckCircleIcon, text: '2 rounds of revisions' },
    { icon: ClockIcon, text: '30-day post-launch support' }
  ]

  return (
    <section id="features" className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deepNavy mb-4">
            Two Ways to Get Your Professional Website
          </h2>
          <p className="text-xl text-mediumGray max-w-3xl mx-auto">
            Choose the option that fits your business needs and budget. Both include custom design, 
            mobile optimization, and SEO setup.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Managed Monthly */}
          <Card className="relative">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-deepNavy">Managed Monthly</h3>
              <Badge variant="success">Most Popular</Badge>
            </div>
            <p className="text-mediumGray mb-6">
              Perfect for growing businesses that want a professional online presence without the hassle. 
              We handle hosting, security, updates, and maintenance so you can focus on what you do best.
            </p>
            
            <div className="space-y-4 mb-6">
              {managedFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <feature.icon className="h-5 w-5 text-primaryGreen mr-3 flex-shrink-0" />
                  <span className="text-mediumGray">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="bg-lightGreen p-4 rounded-lg border border-primaryGreen border-opacity-20">
              <p className="text-sm text-deepNavy font-medium">
                <strong>Includes:</strong> Domain setup, SSL certificate, hosting, 
                unlimited minor edits, daily backups, monitoring, and priority support.
              </p>
            </div>
          </Card>

          {/* Pay-Once */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-deepNavy">Pay-Once</h3>
              <Badge variant="info">One-time</Badge>
            </div>
            <p className="text-mediumGray mb-6">
              Ideal for established businesses that want full ownership and control. 
              You get a complete, professional website that's yours to keep and manage as you see fit.
            </p>
            
            <div className="space-y-4 mb-6">
              {payOnceFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <feature.icon className="h-5 w-5 text-primaryBlue mr-3 flex-shrink-0" />
                  <span className="text-mediumGray">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="bg-lightBlue p-4 rounded-lg border border-primaryBlue border-opacity-20">
              <p className="text-sm text-deepNavy font-medium">
                <strong>Includes:</strong> Custom design, development, SEO optimization, 
                2 rounds of revisions, and 30 days of post-launch support.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Features
