const pillars = [
  {
    id: '01',
    title: 'Integrated Dual-Focus System',
    description: 'Master Karnataka PU Board and NEET/JEE concepts concurrently. NCERT-aligned curriculum eliminates double preparation and saves hundreds of study hours.',
    icon: 'fa-book-open',
    badge: 'PU + NEET Strategy',
  },
  {
    id: '02',
    title: 'Veteran NEET Specialist Faculty',
    description: 'Learn directly from top-tier subject experts with proven track records of producing top rankers, offering continuous individual performance monitoring.',
    icon: 'fa-users',
    badge: '1-on-1 Mentorship',
  },
  {
    id: '03',
    title: 'Daily Doubt Sessions & DPPs',
    description: 'Never carry doubts home. Supervised evening study hours with dedicated subject-expert resolution sessions and daily practice problem sets.',
    icon: 'fa-circle-question',
    badge: 'Zero Backlog Guarantee',
  },
  {
    id: '04',
    title: 'Zero-Distraction Campuses',
    description: 'Safe, residential campuses with 24/7 CCTV surveillance, strict mobile phone control, nutritious dining, and round-the-clock warden supervision.',
    icon: 'fa-shield-halved',
    badge: 'Safe & Disciplined',
  },
]

export default function VisionPillars() {
  return (
    <section className="relative overflow-hidden bg-brand-950 text-white py-14 md:py-20">
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-700/40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-accent-600/20 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block py-1 px-3.5 rounded-full bg-accent-500/10 border border-accent-400/30 text-accent-400 text-xs font-semibold uppercase tracking-wider mb-4">
            The Vision Advantage
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
            Why Vision NEET Academy?
          </h2>
          <p className="mt-3 text-gray-300 text-sm sm:text-base">
            Engineered specifically to transform medical aspirants into top-rank holders through structured
            discipline, expert teaching, and zero distractions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="group relative bg-brand-900/70 hover:bg-brand-900 border border-brand-700/50 hover:border-accent-500/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-400 group-hover:scale-110 group-hover:bg-accent-500 group-hover:text-brand-950 transition-all duration-300">
                    <i className={`fas ${pillar.icon} text-lg`}></i>
                  </div>
                  <span className="text-3xl font-black text-white/10 group-hover:text-white/15 transition-colors">
                    {pillar.id}
                  </span>
                </div>

                <span className="inline-block text-xs font-medium text-accent-400 bg-accent-500/10 border border-accent-500/20 px-2.5 py-1 rounded-md mb-3">
                  {pillar.badge}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-accent-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-brand-900/60 via-brand-800/80 to-brand-900/60 border border-accent-500/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">Ready to start your NEET preparation?</h4>
            <p className="text-gray-300 text-xs sm:text-sm mt-1">Speak directly with our academic counselors today.</p>
          </div>

          <a
            href="tel:+918047185111"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent-500 hover:bg-accent-400 text-brand-950 font-bold text-sm transition-all shadow-md whitespace-nowrap"
          >
            <i className="fas fa-phone text-xs mr-2.5"></i>
            Call 080 471 85111
          </a>
        </div>
      </div>
    </section>
  )
}
