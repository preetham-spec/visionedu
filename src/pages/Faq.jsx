import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import FaqItem from '../components/FaqItem'
import { faqs, faqToPlainAnswer } from '../data/faqs'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqSchema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faqToPlainAnswer(faq),
        },
      })),
    }),
    []
  )

  return (
    <>
      <Seo
        title="Frequently Asked Questions"
        description="Answers about Vision PU College's academic program, scholarships, registration fees, admission dates, college timings, and hostel requirements."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'FAQ', path: '/faq' },
        ]}
        jsonLd={faqSchema}
      />

      {/* Page Header */}
      <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden bg-brand-950 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-700/40 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-accent-600/20 rounded-full blur-[150px]"></div>
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-950/90 via-brand-900/80 to-brand-950/95"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-brand-200 mb-4 fade-in-up">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-white font-medium">FAQ</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 fade-in-up delay-100">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-yellow-200">Questions</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed fade-in-up delay-200">
            Everything you need to know about our academic program, scholarships, admissions and campus life.
            Can't find what you're looking for? Call us at{' '}
            <a href="tel:+918047185111" className="text-accent-400 font-semibold hover:text-accent-300">
              080 471 85111
            </a>.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="bg-gradient-to-r from-brand-900 to-brand-800 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between shadow-md">
            <div className="mb-4 sm:mb-0 text-center sm:text-left text-white">
              <h4 className="text-base sm:text-lg font-bold mb-1">
                <i className="fas fa-question-circle text-accent-400 mr-2"></i>Still have questions?
              </h4>
              <p className="text-xs sm:text-sm text-brand-100">Our admissions team is happy to help.</p>
            </div>
            <a
              href="/#admissions"
              className="block bg-accent-500 hover:bg-accent-400 text-brand-950 px-5 py-2 rounded-lg font-bold transition-colors text-sm whitespace-nowrap shadow-sm"
            >
              Contact Admissions
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
