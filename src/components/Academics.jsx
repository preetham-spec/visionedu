const features = [
  {
    icon: 'fa-book-open',
    title: 'Competitive Exam Coaching',
    text: 'Balanced approach combining objective competitive exam coaching with strong subjective board preparation.',
    accent: false,
  },
  {
    icon: 'fa-chalkboard-teacher',
    title: 'Daily Study Hours',
    text: "Supervised daily study hours with senior lecturers to clarify students' doubts in 1-on-1 sessions.",
    accent: true,
  },
  {
    icon: 'fa-clipboard-check',
    title: 'Rigorous Testing',
    text: 'Regular weekend and cumulative tests using the IdeaBoard platform to practice skills and track progress.',
    accent: false,
  },
]

export default function Academics() {
  return (
    <section id="academics" className="py-12 md:py-16 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-brand-700 font-bold tracking-wide uppercase text-xs mb-1">Our Methodology</h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">Integrated Academic Programs</h3>
          <p className="text-sm text-gray-600">
            Scientifically designed programs for PU Science (PCMB, PCMC, PCME) with integrated coaching.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-8 max-h-80">
          <img src="/images/lab.jpg" alt="Science lab at Vision PU College" className="w-full h-80 object-cover" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 ${
                f.accent ? 'border-t-4 border-t-accent-500' : ''
              }`}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                  f.accent ? 'bg-accent-50 text-accent-500' : 'bg-brand-50 text-brand-700'
                }`}
              >
                <i className={`fas ${f.icon}`}></i>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{f.title}</h4>
              <p className="text-xs sm:text-sm text-gray-600">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
