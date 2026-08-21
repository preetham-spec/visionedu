import { useEffect, useState } from 'react'
import { leadershipTestimonial, communityTestimonials } from '../data/testimonials'

export default function Testimonials({ showLeadership = true, testimonials = communityTestimonials }) {
  const [index, setIndex] = useState(0)
  const count = testimonials.length

  useEffect(() => {
    if (count <= 1) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), 6000)
    return () => clearInterval(timer)
  }, [count])

  const go = (dir) => setIndex((i) => (i + dir + count) % count)

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row">
          {showLeadership && (
            <div className="md:w-5/12 bg-brand-900 text-white p-6 sm:p-8 flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-800 rounded-full opacity-30 blur-xl"></div>
              <i className="fas fa-quote-left text-3xl text-brand-700/60 mb-4"></i>
              <p className="text-sm sm:text-base italic font-medium leading-relaxed mb-6 relative z-10">
                "{leadershipTestimonial.quote}"
              </p>
              <div className="relative z-10">
                <div className="font-bold text-sm">{leadershipTestimonial.name}</div>
                <div className="text-brand-300 text-xs">{leadershipTestimonial.role}</div>
              </div>
            </div>
          )}

          <div className={`p-6 sm:p-8 flex flex-col ${showLeadership ? 'md:w-7/12' : 'w-full'}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg sm:text-xl font-extrabold text-gray-900">Community Feedback</h3>
              {count > 1 && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => go(-1)}
                    aria-label="Previous testimonial"
                    className="w-7 h-7 rounded-full border border-gray-200 text-gray-500 hover:text-brand-700 hover:border-brand-700 flex items-center justify-center transition-colors"
                  >
                    <i className="fas fa-chevron-left text-[10px]"></i>
                  </button>
                  <button
                    onClick={() => go(1)}
                    aria-label="Next testimonial"
                    className="w-7 h-7 rounded-full border border-gray-200 text-gray-500 hover:text-brand-700 hover:border-brand-700 flex items-center justify-center transition-colors"
                  >
                    <i className="fas fa-chevron-right text-[10px]"></i>
                  </button>
                </div>
              )}
            </div>

            <div className="relative flex-1 overflow-hidden min-h-[110px]">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className={`transition-opacity duration-500 ${
                    i === index ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'
                  }`}
                >
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-xs sm:text-sm text-gray-600 italic mb-2">"{t.quote}"</p>
                    <div className="font-semibold text-xs text-gray-900">- {t.name}, {t.role}</div>
                  </div>
                </div>
              ))}
            </div>

            {count > 1 && (
              <div className="flex items-center gap-1.5 mt-4">
                {testimonials.map((t, i) => (
                  <button
                    key={t.name}
                    onClick={() => setIndex(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? 'w-6 bg-brand-700' : 'w-1.5 bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
