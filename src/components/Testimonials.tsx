import Card from './Card'
import { StarIcon } from '@heroicons/react/24/solid'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      business: 'Johnson & Associates Law Firm',
      content: 'Polaris Web transformed our online presence completely. Before working with them, we were losing potential clients to competitors with better websites. Now we\'re getting 3x more qualified leads, and the managed service means we never have to worry about updates or security. Our website has been running flawlessly for over a year.',
      rating: 5,
      result: '3x more qualified leads'
    },
    {
      name: 'Mike Chen',
      business: 'Chen\'s Auto Repair',
      content: 'The team understood exactly what we needed for our auto repair business. Our new website brings in more customers and the online booking system has streamlined our appointment process. We went from taking appointments by phone to having customers book online 24/7.',
      rating: 5,
      result: '24/7 online bookings'
    },
    {
      name: 'Lisa Rodriguez',
      business: 'Rodriguez Dental Clinic',
      content: 'Professional, reliable, and always available when we need them. The unlimited minor edits feature has been a lifesaver as our practice grows. We can update our services, add new team members, and keep our website current without any hassle.',
      rating: 5,
      result: 'Effortless website updates'
    }
  ]

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deepNavy mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-mediumGray max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business owners are saying about their experience with Polaris Web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-accentYellow" />
                ))}
              </div>
              
              <blockquote className="text-mediumGray mb-6 italic">
                "{testimonial.content}"
              </blockquote>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-semibold text-deepNavy">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-mediumGray">
                      {testimonial.business}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-primaryBlue">
                      {testimonial.result}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-deepNavy mb-4">
              Ready to Join Our Happy Clients?
            </h3>
            <p className="text-mediumGray mb-6">
              Let us help you create a website that drives results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center justify-center px-6 py-3 bg-primaryBlue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center justify-center px-6 py-3 bg-white text-primaryBlue font-semibold rounded-lg border-2 border-primaryBlue hover:bg-primaryBlue hover:text-white transition-colors">
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
