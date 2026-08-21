import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import CampusSection from '../components/CampusSection'
import { campuses, commonAmenities } from '../data/campuses'

export default function Campuses() {
  return (
    <>
      <Seo
        title="Our Campuses in Bangalore"
        description="Vision PU College campuses in Bangalore: Banaswadi Day Scholar Campus (HRBR Layout, Kalyan Nagar), Boys Residential (Bande Bommasandra, Doddagubbi), Girls Residential (Anagalapura), plus Commerce and Degree programs."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Campuses', path: '/campuses' },
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
            <span className="text-white font-medium">Campuses</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 fade-in-up delay-100">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-yellow-200">Campuses</span> in Bangalore
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed fade-in-up delay-200">
            Vision PU College has campuses for PUC in Bangalore for day scholars and residential students, plus a
            dedicated Commerce campus and a Degree college — each designed to provide a safe and secure environment
            for students to learn and grow, with state-of-the-art labs, libraries, sports infrastructure, dining
            spaces and more.
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="bg-white border-b border-gray-100 sticky top-16 md:top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto no-scrollbar gap-2 py-3 text-sm font-semibold">
            {campuses.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="whitespace-nowrap px-4 py-2 rounded-lg bg-brand-50 text-brand-700 hover:bg-brand-100 transition-colors"
              >
                {c.name}
              </a>
            ))}
            <a
              href="#common-amenities"
              className="whitespace-nowrap px-4 py-2 rounded-lg bg-brand-50 text-brand-700 hover:bg-brand-100 transition-colors"
            >
              Common Amenities
            </a>
          </div>
        </div>
      </section>

      {campuses.map((c, i) => (
        <CampusSection key={c.id} campus={c} bg={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} />
      ))}

      {/* Common Amenities */}
      <section id="common-amenities" className={`py-14 md:py-20 ${campuses.length % 2 === 0 ? 'bg-white' : 'bg-gray-50'} scroll-mt-32`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-brand-700 font-bold tracking-wide uppercase text-xs mb-1">Across Every Campus</h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">Infrastructure & Amenities</h3>
            <p className="text-sm text-gray-600">
              Every Vision PU College campus is built to give students everything they need to succeed, in a safe
              and secure environment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {commonAmenities.map(([icon, label]) => (
              <div key={label} className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
                <i className={`fas ${icon} text-brand-700 text-2xl mb-3`}></i>
                <div className="text-sm font-bold text-gray-900">{label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-gradient-to-r from-brand-900 to-brand-800 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between shadow-md">
            <div className="mb-4 sm:mb-0 text-center sm:text-left text-white">
              <h4 className="text-base sm:text-lg font-bold mb-1">
                <i className="fas fa-award text-accent-400 mr-2"></i>Merit Scholarships Available
              </h4>
              <p className="text-xs sm:text-sm text-brand-100">
                Get up to ₹50,000 scholarship for scoring 99+ in SSLC, CBSE, or ICSE.
              </p>
            </div>
            <a
              href="/#admissions"
              className="block bg-accent-500 hover:bg-accent-400 text-brand-950 px-5 py-2 rounded-lg font-bold transition-colors text-sm whitespace-nowrap shadow-sm"
            >
              Check Eligibility
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
