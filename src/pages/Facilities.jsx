import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

const mainFacilities = [
  {
    icon: 'fa-kitchen-set',
    title: 'Central Kitchen',
    badge: 'FSSAI Certified',
    detail:
      'Our central kitchen is FSSAI certified and built with world-class equipment to prepare fresh, hygienic, and balanced meals every day for every campus.',
    media: { type: 'video', src: 'https://www.youtube.com/embed/zi285PHQ384' },
  },
  {
    icon: 'fa-utensils',
    title: 'Dining Areas',
    detail:
      'Comfortable, clean dining halls across our campuses give students a proper space to eat and recharge between study sessions, with vegetarian meals daily and special weekly menus.',
    media: { type: 'images', srcs: ['/images/mess-1.jpg', '/images/mess-2.jpg'] },
  },
  {
    icon: 'fa-bed',
    title: 'Residential Campuses',
    detail:
      'Dedicated residential campuses for boys and girls with RO-purified drinking water on every floor, resident wardens, and a structured daily routine.',
    media: { type: 'images', srcs: ['/images/facility-hostel.jpg'] },
  },
  {
    icon: 'fa-chalkboard',
    title: 'Classrooms',
    detail:
      'Classrooms designed for focused learning, supporting our integrated Board + NEET/JEE/KCET teaching model with daily supervised study hours.',
    media: { type: 'images', srcs: ['/images/classroom.jpg'] },
  },
  {
    icon: 'fa-phone',
    title: 'Communication',
    detail:
      "To keep students focused, smartphones aren't allowed on residential campuses. Students get dedicated calling windows on campus landlines to stay in touch with family.",
    media: { type: 'images', srcs: ['/images/facility-phone.jpg'] },
  },
  {
    icon: 'fa-shield-alt',
    title: 'Security & Surveillance',
    detail:
      '24x7 security personnel and CCTV monitoring across every campus, with dedicated wardens on residential campuses, keeping student safety a top priority.',
    media: { type: 'images', srcs: ['/images/facility-cctv.jpg'] },
  },
]

const moreFacilities = [
  {
    icon: 'fa-flask',
    title: 'Science Labs',
    text: 'Fully equipped Physics, Chemistry and Biology labs for hands-on practical learning alongside NEET/JEE/KCET theory.',
  },
  {
    icon: 'fa-desktop',
    title: 'Computer Lab',
    text: 'Dedicated computer labs supporting digital learning resources, mock tests and application practice.',
  },
  {
    icon: 'fa-book-open',
    title: 'Library',
    text: 'A well-stocked library with NCERT textbooks, reference material and previous-year question papers for every stream.',
  },
  {
    icon: 'fa-futbol',
    title: 'Sports Infrastructure',
    text: 'On-campus sports facilities so students get a healthy break from the daily academic schedule.',
  },
  {
    icon: 'fa-tint',
    title: 'RO Water Every Floor',
    text: 'RO-purified drinking water available on every floor of our residential campuses.',
  },
]

function FacilityMedia({ media, title }) {
  if (!media) return null
  if (media.type === 'video') {
    return (
      <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100 aspect-video mb-5">
        <iframe
          className="w-full h-full"
          src={media.src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    )
  }
  return (
    <div className={`grid gap-3 mb-5 ${media.srcs.length > 1 ? 'sm:grid-cols-2' : ''}`}>
      {media.srcs.map((src) => (
        <div key={src} className="rounded-xl overflow-hidden shadow-sm border border-gray-100 aspect-video">
          <img src={src} alt={title} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  )
}

export default function Facilities() {
  const [active, setActive] = useState(0)
  const facility = mainFacilities[active]

  return (
    <>
      <Seo
        title="Facilities"
        description="Explore Vision PU College's facilities: FSSAI-certified central kitchen, hygienic dining halls, residential campuses, classrooms, science labs, library, sports infrastructure and 24x7 security."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Facilities', path: '/facilities' },
        ]}
      />

      {/* Header */}
      <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden bg-brand-950 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-700/40 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-accent-600/20 rounded-full blur-[150px]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-950/90 via-brand-900/80 to-brand-950/95"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-brand-200 mb-4 fade-in-up">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-white font-medium">Facilities</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 fade-in-up delay-100">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-yellow-200">Facilities</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed fade-in-up delay-200">
            Everything students need to learn, eat, stay and stay safe — built into every Vision campus. Tap any
            facility below for details.
          </p>
        </div>
      </section>

      {/* Facility selector + detail panel */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {mainFacilities.map((f, i) => (
              <button
                key={f.title}
                onClick={() => setActive(i)}
                className={`flex flex-col items-center justify-center gap-2 px-4 py-6 rounded-xl font-bold text-sm sm:text-base text-center transition-colors ${
                  i === active
                    ? 'bg-brand-700 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-brand-700 hover:text-brand-700'
                }`}
              >
                <i className={`fas ${f.icon} text-2xl`}></i>
                {f.title}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sm:p-8">
            <div className="flex items-center gap-2 flex-wrap mb-4">
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900">{facility.title}</h3>
              {facility.badge && (
                <span className="text-[10px] px-2.5 py-1 rounded-full font-bold bg-green-100 text-green-800">
                  {facility.badge}
                </span>
              )}
            </div>
            <FacilityMedia media={facility.media} title={facility.title} />
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{facility.detail}</p>
          </div>
        </div>
      </section>

      {/* More facilities */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-brand-700 font-bold tracking-wide uppercase text-xs mb-1">Across Every Campus</h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">More Facilities</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {moreFacilities.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-700 mb-3">
                  <i className={`fas ${f.icon}`}></i>
                </div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1">{f.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600">{f.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-gradient-to-r from-brand-900 to-brand-800 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between shadow-md">
            <div className="mb-4 sm:mb-0 text-center sm:text-left text-white">
              <h4 className="text-base sm:text-lg font-bold mb-1">
                <i className="fas fa-map-marker-alt text-accent-400 mr-2"></i>See Facilities by Campus
              </h4>
              <p className="text-xs sm:text-sm text-brand-100">Compare amenities across our Main, Boys and Girls campuses.</p>
            </div>
            <Link
              to="/campuses"
              className="block bg-accent-500 hover:bg-accent-400 text-brand-950 px-5 py-2 rounded-lg font-bold transition-colors text-sm whitespace-nowrap shadow-sm"
            >
              View Campuses
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
