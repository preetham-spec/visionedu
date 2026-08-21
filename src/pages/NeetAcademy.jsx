import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Testimonials from '../components/Testimonials'
import VisionPillars from '../components/VisionPillars'
import EnquiryForm from '../components/EnquiryForm'
import { neetTestimonials } from '../data/testimonials'

const examFacts = [
  {
    icon: 'fa-building-columns',
    title: 'Conducted By',
    text: 'The National Testing Agency (NTA), once a year, for admission to medical courses across India.',
  },
  {
    icon: 'fa-user-graduate',
    title: 'Eligibility',
    text: 'Completed (or appearing for) 10+2 with Physics, Chemistry and Biology, with the required minimum aggregate.',
  },
  {
    icon: 'fa-list-check',
    title: 'Exam Pattern',
    text: 'Objective-type questions across Physics, Chemistry and Biology (Botany + Zoology), with +4 for a correct answer and -1 for a wrong one.',
  },
  {
    icon: 'fa-hospital',
    title: 'Gateway To',
    text: 'MBBS, BDS, AYUSH and veterinary (BVSc) seats at government and private colleges all over the country.',
  },
]

const courseDurations = [
  {
    icon: 'fa-seedling',
    title: 'Long-Term Course',
    text: 'A comprehensive 1-year program open to both first-time aspirants and repeaters, covering the complete NEET syllabus in depth with structured, ground-up preparation.',
  },
  {
    icon: 'fa-bolt',
    title: 'Short-Term Course',
    text: 'For repeaters and droppers who have already completed PU — an intensive, focused revision and test-practice program built around your next attempt.',
  },
]

const programFeatures = [
  {
    icon: 'fa-clock',
    title: 'Daily Study Hours',
    text: 'Structured daily study hours with 1-on-1 doubt clarification sessions from senior faculty.',
  },
  {
    icon: 'fa-clipboard-check',
    title: 'Weekly & Cumulative Tests',
    text: 'Regular weekend tests plus cumulative assessments that mirror the real NEET pattern, so progress is always measurable.',
  },
  {
    icon: 'fa-route',
    title: 'Integrated, Individual Curriculum',
    text: "A curriculum designed around each student's potential — whether you're a first-attempt aspirant or repeating to improve your score.",
  },
]

const scholarshipTiers = [
  { range: '300 – 349', pct: '15%' },
  { range: '350 – 399', pct: '25%' },
  { range: '400 – 449', pct: '35%' },
  { range: '450 – 499', pct: '50%' },
  { range: '500+', pct: '100%' },
]

export default function NeetAcademy() {
  return (
    <>
      <Seo
        title="Vision NEET Academy | Long-Term & Repeater NEET Coaching in Bangalore"
        description="Vision NEET Academy offers long-term and short-term NEET coaching in Bangalore for first-time aspirants and repeaters, with mobile-free residential campuses for boys and girls and merit scholarships up to 100%."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Vision NEET Academy', path: '/neet-academy' },
        ]}
      />
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-brand-950 text-white">
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
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-brand-200 mb-4 fade-in-up">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <i className="fas fa-chevron-right text-[10px]"></i>
                <span className="text-white font-medium">Vision NEET Academy</span>
              </div>
              <h2 className="text-accent-400 font-bold tracking-wide uppercase text-xs mb-2 fade-in-up delay-100">
                Vision NEET Academy
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 fade-in-up delay-100">
                One of the Most Trusted &amp;{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-yellow-200">
                  Premier NEET Academies
                </span>{' '}
                in Karnataka
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-6 fade-in-up delay-200">
                A dedicated academy for NEET aspirants — whether it's your first attempt or you're repeating to push
                your score higher. Many of our students have improved their NEET score by 300+ marks.
              </p>
              <div className="flex flex-wrap gap-3 fade-in-up delay-300">
                <Link
                  to="/apply"
                  className="bg-accent-500 hover:bg-accent-400 text-brand-950 px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-md"
                >
                  Apply Now
                </Link>
                <a
                  href="tel:+918047185111"
                  className="glass hover:bg-white/10 text-white px-6 py-3 rounded-xl font-medium text-sm transition-all flex items-center gap-2"
                >
                  <i className="fas fa-phone text-xs"></i> 080 471 85111
                </a>
                <a
                  href="tel:+917349744105"
                  className="glass hover:bg-white/10 text-white px-6 py-3 rounded-xl font-medium text-sm transition-all flex items-center gap-2"
                >
                  <i className="fas fa-phone text-xs"></i> 73497 44105
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative fade-in-up delay-200 mt-4 lg:mt-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-accent-500 rounded-2xl blur-lg opacity-40"></div>
              <img
                src="/images/hero.jpg"
                alt="Vision NEET Academy students"
                className="relative rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-full object-cover border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is NEET */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-brand-700 font-bold tracking-wide uppercase text-xs mb-1">Know The Exam</h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">What is NEET?</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
            NEET (National Eligibility cum Entrance Test) is India's single common entrance exam for undergraduate
            medical admissions. It replaced multiple separate state and college-level exams, so every seat in every
            medical college in the country is now filled through one NEET rank list — which is exactly why the
            competition is so intense and disciplined preparation matters.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {examFacts.map((f) => (
              <div key={f.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-700 mb-3">
                  <i className={`fas ${f.icon}`}></i>
                </div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1">{f.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VisionPillars />

      {/* Course Durations */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-brand-700 font-bold tracking-wide uppercase text-xs mb-1">Choose Your Path</h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">Long-Term & Short-Term Courses</h3>

          <div className="grid sm:grid-cols-2 gap-5">
            {courseDurations.map((c) => (
              <div key={c.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-700 mb-4">
                  <i className={`fas ${c.icon}`}></i>
                </div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-2">{c.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-brand-700 font-bold tracking-wide uppercase text-xs mb-1">Our Approach</h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">The NEET Academy Program</h3>

          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {programFeatures.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-accent-50 rounded-lg flex items-center justify-center text-accent-500 mb-4">
                  <i className={`fas ${f.icon}`}></i>
                </div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-2">{f.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600">{f.text}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-brand-900 text-white rounded-xl p-5 relative overflow-hidden">
              <span className="inline-block text-[10px] px-2 py-0.5 rounded-full font-bold bg-white/15 mb-2">Exclusive</span>
              <h4 className="font-bold text-sm sm:text-base mb-1">Boys Residential Campus</h4>
              <p className="text-xs sm:text-sm text-brand-100">
                A dedicated residential campus for boys, with classrooms, hostel and 24x7 security on the same premises.
              </p>
            </div>
            <div className="bg-brand-900 text-white rounded-xl p-5 relative overflow-hidden">
              <span className="inline-block text-[10px] px-2 py-0.5 rounded-full font-bold bg-white/15 mb-2">Exclusive</span>
              <h4 className="font-bold text-sm sm:text-base mb-1">Girls Residential Campus</h4>
              <p className="text-xs sm:text-sm text-brand-100">
                A separate, dedicated residential campus for girls, with dedicated wardens and round-the-clock supervision.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-brand-50 border border-brand-100 rounded-xl p-5">
            <i className="fas fa-map-marker-alt text-brand-700 mt-1"></i>
            <p className="text-xs sm:text-sm text-gray-700">
              Both campuses are in Bangalore, built exclusively for focused NEET preparation.{' '}
              <a href="/contact" className="text-brand-700 font-semibold hover:text-brand-800">
                Contact us
              </a>{' '}
              for exact addresses and directions.
            </p>
          </div>
        </div>
      </section>

      {/* Scholarship */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-brand-700 font-bold tracking-wide uppercase text-xs mb-1">Merit Scholarships</h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">Based on Your NEET Score</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
            Repeating NEET to push for a better rank? Your last attempt's score can directly reduce your fees.
          </p>

          <div className="rounded-xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-900 text-white text-left">
                  <th className="px-5 py-3 font-semibold text-xs sm:text-sm">NEET Score</th>
                  <th className="px-5 py-3 font-semibold text-xs sm:text-sm text-right">Scholarship</th>
                </tr>
              </thead>
              <tbody>
                {scholarshipTiers.map((t, i) => (
                  <tr key={t.range} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-3 text-gray-700">{t.range} marks</td>
                    <td className="px-5 py-3 text-right font-bold text-brand-700">{t.pct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Scholarship percentages apply to tuition fees. Contact admissions for full terms.
          </p>
        </div>
      </section>

      {/* Alumni stats */}
      <section className="py-12 bg-brand-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-accent-400">4,500+</div>
            <div className="text-xs sm:text-sm text-gray-300 mt-1">Alumni</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-accent-400">300+</div>
            <div className="text-xs sm:text-sm text-gray-300 mt-1">Marks improved by top repeaters</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-accent-400">2</div>
            <div className="text-xs sm:text-sm text-gray-300 mt-1">Dedicated NEET campuses</div>
          </div>
        </div>
      </section>

      <Testimonials showLeadership={false} testimonials={neetTestimonials} />

      {/* Enquiry */}
      <section id="neet-admissions" className="py-12 bg-brand-950 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col sm:flex-row">
            <div className="p-6 sm:p-8 bg-brand-800 text-white sm:w-1/2 flex flex-col justify-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-3">Dare to Dream Again</h2>
              <p className="text-brand-100 mb-4 text-xs sm:text-sm">
                Talk to our admissions team about the NEET Academy's long-term and short-term batches and
                score-based scholarships.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-brand-100 mb-6">
                <li className="flex items-center gap-2"><i className="fas fa-check text-accent-400"></i> Long-Term & Short-Term Batches</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-accent-400"></i> Scholarships up to 100%</li>
              </ul>
              <div className="mt-auto">
                <p className="text-[10px] text-brand-200 uppercase tracking-wider">Direct Admission Line</p>
                <p className="font-bold text-lg">080 471 85111</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 sm:p-8 sm:w-1/2">
              <EnquiryForm variant="neet" submitLabel="Request Callback" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
