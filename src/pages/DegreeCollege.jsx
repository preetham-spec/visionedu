import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import EnquiryForm from '../components/EnquiryForm'

const courses = [
  {
    icon: 'fa-chart-line',
    code: 'B.Com',
    title: 'Bachelor of Commerce',
    text: 'A comprehensive 3-year program covering accountancy, taxation, business law, and finance — built for students aiming for careers in finance, audit, or further studies like CA/CMA.',
  },
  {
    icon: 'fa-briefcase',
    code: 'BBA',
    title: 'Bachelor of Business Administration',
    text: 'A 3-year management-focused program covering marketing, HR, operations, and entrepreneurship, designed to prepare students for corporate roles or an MBA.',
  },
  {
    icon: 'fa-laptop-code',
    code: 'BCA',
    title: 'Bachelor of Computer Applications',
    text: 'A 3-year program in programming, databases, and software development, giving students a strong technical foundation for careers in IT or further studies like an MCA.',
  },
]

const whyUs = [
  { icon: 'fa-chalkboard-teacher', title: 'Experienced Faculty', text: 'Dedicated lecturers with strong subject expertise and a focus on individual student progress.' },
  { icon: 'fa-briefcase', title: 'Placement Support', text: 'Guidance and support to help students transition from the classroom to their first job.' },
  { icon: 'fa-desktop', title: 'Modern Computer Labs', text: 'Well-equipped labs for BCA students and computer-based coursework across all programs.' },
  { icon: 'fa-shield-alt', title: 'Safe, Focused Campus', text: '24x7 security and a disciplined environment built for serious academic focus.' },
]

export default function DegreeCollege() {
  return (
    <>
      <Seo
        title="Vision Degree College"
        description="Vision Degree College in Bangalore offers B.Com, BBA and BCA undergraduate programs with experienced faculty, placement support and modern facilities."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Vision Degree College', path: '/degree-college' },
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
                <span className="text-white font-medium">Vision Degree College</span>
              </div>
              <h2 className="text-accent-400 font-bold tracking-wide uppercase text-xs mb-2 fade-in-up delay-100">
                Vision Degree College
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 fade-in-up delay-100">
                Build Your Career with a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-yellow-200">
                  Vision Degree
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-6 fade-in-up delay-200">
                Undergraduate degree programs in Bangalore — B.Com, BBA and BCA — with the same focus on mentorship,
                strong faculty and results that Vision is known for.
              </p>
              <div className="flex flex-wrap gap-3 fade-in-up delay-300">
                <Link
                  to="/apply"
                  className="bg-accent-500 hover:bg-accent-400 text-brand-950 px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-md"
                >
                  Apply Now
                </Link>
                <a
                  href="tel:+917349744110"
                  className="glass hover:bg-white/10 text-white px-6 py-3 rounded-xl font-medium text-sm transition-all flex items-center gap-2"
                >
                  <i className="fas fa-phone text-xs"></i> 73497 44110
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative fade-in-up delay-200 mt-4 lg:mt-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-accent-500 rounded-2xl blur-lg opacity-40"></div>
              <img
                src="/images/main-campus.jpg"
                alt="Vision Degree College"
                className="relative rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-full object-cover border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Offered */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-brand-700 font-bold tracking-wide uppercase text-xs mb-1">Programs Offered</h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">Choose Your Degree</h3>

          <div className="grid sm:grid-cols-3 gap-5">
            {courses.map((c) => (
              <div key={c.code} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-700 mb-4">
                  <i className={`fas ${c.icon}`}></i>
                </div>
                <span className="inline-block text-xs font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-md mb-2">
                  {c.code}
                </span>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-2">{c.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vision Degree College */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-brand-700 font-bold tracking-wide uppercase text-xs mb-1">Our Approach</h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">Why Vision Degree College</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-accent-50 rounded-lg flex items-center justify-center text-accent-500 mb-3">
                  <i className={`fas ${f.icon}`}></i>
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">{f.title}</h4>
                <p className="text-xs text-gray-600">{f.text}</p>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-3 bg-brand-50 border border-brand-100 rounded-xl p-5 mt-6">
            <i className="fas fa-map-marker-alt text-brand-700 mt-1"></i>
            <p className="text-xs sm:text-sm text-gray-700">
              Vision Degree College is located in Kalyan Nagar, Bengaluru.{' '}
              <Link to="/contact" className="text-brand-700 font-semibold hover:text-brand-800">
                Contact us
              </Link>{' '}
              for exact address and directions.
            </p>
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section id="degree-admissions" className="py-12 bg-brand-950 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col sm:flex-row">
            <div className="p-6 sm:p-8 bg-brand-800 text-white sm:w-1/2 flex flex-col justify-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-3">Start Your Degree Journey</h2>
              <p className="text-brand-100 mb-4 text-xs sm:text-sm">
                Talk to our admissions team about B.Com, BBA and BCA — eligibility, fees, and how to apply.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-brand-100 mb-6">
                <li className="flex items-center gap-2"><i className="fas fa-check text-accent-400"></i> B.Com, BBA & BCA</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-accent-400"></i> Placement Support</li>
              </ul>
              <div className="mt-auto">
                <p className="text-[10px] text-brand-200 uppercase tracking-wider">Degree Admissions</p>
                <a href="tel:+917349744110" className="font-bold text-lg hover:text-accent-400">73497 44110</a>
              </div>
            </div>

            <div className="bg-gray-50 p-6 sm:p-8 sm:w-1/2">
              <EnquiryForm submitLabel="Request Callback" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
