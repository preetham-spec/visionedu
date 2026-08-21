import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import EnquiryForm from '../components/EnquiryForm'
import { campuses } from '../data/campuses'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact Vision PU College and Vision NEET Academy. Names, locations and addresses for every campus in Bangalore, plus our direct admissions line 080 471 85111."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact Us', path: '/contact' },
        ]}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-brand-200 mb-4 fade-in-up">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-white font-medium">Contact Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 fade-in-up delay-100">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-yellow-200">Touch</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed fade-in-up delay-200">
            Reach out to any of our campuses directly, or submit an enquiry below and our admissions team will
            call you back.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
          {/* College locations */}
          <div className="lg:col-span-7">
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-1">Our Colleges</h2>
            <p className="text-sm text-gray-600 mb-6">Names, locations and addresses for every Vision campus.</p>

            <div className="space-y-4">
              {campuses.map((c) => (
                <div key={c.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center shrink-0">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base">{c.name}</h3>
                      {c.badges.map((b) => (
                        <span key={b} className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-gray-100 text-gray-700">
                          {b}
                        </span>
                      ))}
                    </div>
                    {c.addressPending ? (
                      <p className="text-xs sm:text-sm text-gray-500">{c.areaLabel}</p>
                    ) : (
                      <p className="text-xs sm:text-sm text-gray-600">
                        {c.addressLine1}, {c.addressLine2}
                      </p>
                    )}
                    {c.mapUrl && (
                      <a
                        href={c.mapUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-brand-700 hover:text-brand-800 mt-1.5"
                      >
                        View on Google Maps <i className="fas fa-external-link-alt text-[10px]"></i>
                      </a>
                    )}
                  </div>
                </div>
              ))}

              <div className="bg-brand-900 text-white rounded-xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-brand-200">Direct Admission Line</div>
                  <a href="tel:+918047185111" className="font-bold text-lg hover:text-accent-400">080 471 85111</a>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-1">Send an Enquiry</h2>
              <p className="text-sm text-gray-600 mb-6">We'll get back to you within 24 hours.</p>

              <EnquiryForm showGender submitLabel="Submit Enquiry" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
