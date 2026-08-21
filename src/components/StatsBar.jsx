const stats = [
  { icon: 'fa-user-graduate', value: '4,500+', label: 'Successful Alumni', bg: 'bg-brand-50 text-brand-700' },
  { icon: 'fa-building', value: '3', label: 'Bangalore Campuses', bg: 'bg-accent-50 text-accent-500' },
  { icon: 'fa-award', value: '100%', label: 'Pass Percentage', bg: 'bg-brand-50 text-brand-700' },
  { icon: 'fa-chalkboard-teacher', value: '20+ Yrs', label: 'Avg. Faculty Exp.', bg: 'bg-accent-50 text-accent-500' },
]

export default function StatsBar() {
  return (
    <section id="results" className="relative z-30 -mt-20 md:-mt-24 pb-12 md:pb-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {stats.map((s, i) => (
            <div key={s.label} className={`px-2 ${i > 0 ? 'pt-4 md:pt-0 border-t md:border-t-0 border-gray-100' : ''} ${i < stats.length - 1 ? 'pb-4 md:pb-0' : ''}`}>
              <div className={`flex items-center justify-center w-12 h-12 mx-auto rounded-full mb-3 ${s.bg}`}>
                <i className={`fas ${s.icon} text-xl`}></i>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">{s.value}</div>
              <div className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
