import { ShieldCheckIcon, DevicePhoneMobileIcon, PencilSquareIcon, MapPinIcon } from '@heroicons/react/24/outline'

const CredibilityStrip = () => {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'Military-grade hosting & protection',
      description: 'Enterprise-level security and reliability'
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile & SEO-ready',
      description: 'Optimized for all devices and search engines'
    },
    {
      icon: PencilSquareIcon,
      title: 'Unlimited minor edits',
      description: 'Managed service includes ongoing updates'
    },
    {
      icon: MapPinIcon,
      title: 'Local Canadian support',
      description: 'Dedicated support from our Canadian team'
    }
  ]

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primaryGreen rounded-full">
                  <feature.icon className="h-8 w-8 text-deepNavy" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-deepNavy mb-2">
                {feature.title}
              </h3>
              <p className="text-mediumGray text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CredibilityStrip
