'use client'

import { useState } from 'react'
import Card from './Card'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What is included in the deposit and when is it due?',
      answer: 'The deposit is due at signing and is non-refundable. For Managed Monthly plans, the deposit is $40 (25% of the first month). For Pay-Once plans, the deposit is $250 (25% of the total). This ensures we can begin work immediately and deliver your project on time. The deposit covers initial design work, project setup, and secures your spot in our development queue.'
    },
    {
      question: 'When does monthly billing start?',
      answer: 'Monthly billing begins when your website is delivered and goes live. You\'ll receive your first invoice after the site is complete and launched. This ensures you only pay when you have a working website. We never charge for work in progress - you only pay for a completed, live website.'
    },
    {
      question: 'What counts as a "minor edit" in the Managed Monthly plan?',
      answer: 'Minor edits include text changes, image updates, contact information changes, adding new team members, updating business hours, and small content modifications. Major changes like new pages, design overhauls, new functionality, or structural changes would be considered project work and quoted separately. We\'re generous with what we consider "minor" - our goal is to keep your website current and effective.'
    },
    {
      question: 'Who owns the website with Pay-Once plans?',
      answer: 'With Pay-Once plans, you own the website completely. You receive all source files, have full control over hosting, and can make changes as needed. We provide 30 days of post-launch support to ensure everything works perfectly. After that, you have full ownership and can work with any developer or make changes yourself.'
    },
    {
      question: 'Can I cancel my Managed Monthly plan?',
      answer: 'Yes, you can cancel your Managed Monthly plan with 30 days notice. However, there is a 6-month minimum commitment from the start of monthly billing. After the minimum period, you can cancel anytime with proper notice. We\'ll help you transition your website to your own hosting or provide you with all the files you need.'
    },
    {
      question: 'What happens to my website if I cancel?',
      answer: 'If you cancel a Managed Monthly plan, you have two options: 1) Transfer the website to your own hosting (we\'ll help with the technical setup), or 2) We can provide you with all source files so you can work with any developer. We\'ll ensure a smooth transition and provide guidance on ongoing maintenance.'
    },
    {
      question: 'Do you provide hosting and domain services?',
      answer: 'Yes! For Managed Monthly plans, we handle all hosting, SSL certificates, and domain setup. We use military-grade hosting infrastructure with 99.9% uptime guarantee, daily backups, and enterprise-level security. For Pay-Once plans, we can help you set up hosting or you can use your own hosting provider.'
    },
    {
      question: 'How long does it take to build my website?',
      answer: 'Most websites are completed within 2-4 weeks, depending on complexity and your feedback speed. We\'ll provide a detailed timeline during our initial consultation and keep you updated throughout the process. Rush jobs are available for an additional fee if you need your website sooner.'
    },
    {
      question: 'What if I need changes after the website is complete?',
      answer: 'For Managed Monthly clients, unlimited minor edits are included. For Pay-Once clients, you get 30 days of post-launch support for any issues or small adjustments. After that, we can provide ongoing support on an hourly basis or you can work with any developer since you own the website.'
    }
  ]

  return (
    <section id="faq" className="bg-black py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300">
            Get answers to common questions about our services, pricing, and process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-gray-900/90 backdrop-blur-sm border-gray-700">
              <div 
                className="cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-white mb-2 hover:text-primaryBlue transition-colors">
                  {faq.question}
                </h3>
                {openIndex === index && (
                  <p className="text-gray-300 leading-relaxed mt-4">
                    {faq.answer}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FAQ
