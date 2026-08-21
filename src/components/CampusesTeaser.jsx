const teaserCampuses = [
  {
    id: 'main-campus',
    name: 'Banaswadi Day Scholar Campus',
    tag: 'Day Scholars',
    tagClass: 'bg-brand-100 text-brand-800',
    desc: 'Located in HRBR Layout, Kalyan Nagar. Features excellent academic blocks and modern classrooms.',
    accent: false,
    image: '/images/main-campus.jpg',
  },
  {
    id: 'girls-campus',
    name: 'Girls Residential',
    tag: 'Exclusive',
    tagClass: 'bg-brand-700 text-white',
    desc: 'Anagalapura Village. Safe & secure environment with dedicated wardens and strict discipline.',
    accent: true,
    image: '/images/girls-campus.jpg',
  },
  {
    id: 'boys-campus',
    name: 'Boys Residential',
    tag: 'Exclusive',
    tagClass: 'bg-brand-700 text-white',
    desc: 'Bande Bommasandra. Classrooms & hostel in same campus. RO water on every floor, 24/7 security.',
    accent: true,
    image: '/images/bbs-campus.jpg',
  },
]

export default function CampusesTeaser() {
  return (
    <section id="campuses" className="py-12 md:py-16 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-brand-700 font-bold tracking-wide uppercase text-xs mb-1">Infrastructure</h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">Our Campuses in Bangalore</h3>
          <p className="text-sm text-gray-600">
            Safe environments with modern classrooms, labs, and 24x7 security for focused learning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {teaserCampuses.map((c) => (
            <div
              key={c.id}
              className={`rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 group bg-gray-50 ${
                c.accent ? 'border-t-2 border-t-brand-700' : ''
              }`}
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-base sm:text-lg font-bold text-gray-900">{c.name}</h4>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${c.tagClass}`}>{c.tag}</span>
                </div>
                <p className="text-xs text-gray-600 mb-4">{c.desc}</p>
                <a
                  href={`/campuses#${c.id}`}
                  className="text-brand-700 font-semibold text-xs hover:text-brand-800 flex items-center gap-1"
                >
                  View Full Details <i className="fas fa-chevron-right text-[10px]"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-brand-900 to-brand-800 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between shadow-md">
          <div className="mb-4 sm:mb-0 text-center sm:text-left text-white">
            <h4 className="text-base sm:text-lg font-bold mb-1">
              <i className="fas fa-award text-accent-400 mr-2"></i>Merit Scholarships Available
            </h4>
            <p className="text-xs sm:text-sm text-brand-100">
              Get up to ₹50,000 scholarship for scoring 99+ in SSLC, CBSE, or ICSE.
            </p>
          </div>
          <a
            href="#admissions"
            className="block bg-accent-500 hover:bg-accent-400 text-brand-950 px-5 py-2 rounded-lg font-bold transition-colors text-sm whitespace-nowrap shadow-sm"
          >
            Check Eligibility
          </a>
        </div>
      </div>
    </section>
  )
}
