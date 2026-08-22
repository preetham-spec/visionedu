import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

const openings = [
  {
    title: 'Senior Lecturer',
    image: '/images/classroom.jpg',
    description: 'Expert faculty role focused on delivering lectures, leading discussions, and mentoring students toward academic excellence.',
  },
  {
    title: 'Junior Lecturer',
    image: '/images/lab.jpg',
    description: 'Entry-level teaching position emphasizing student guidance, intellectual development, and collaboration with senior faculty.',
  },
  {
    title: 'Campus Administrator',
    image: '/images/careers-campus-admin.jpg',
    description: 'Oversees administrative operations, resource management, and coordinates events and facilities.',
  },
  {
    title: 'Chef',
    image: '/images/careers-chef.jpg',
    description: 'Develops nutritious menus meeting diverse dietary needs while leading kitchen staff and maintaining food safety standards.',
  },
  {
    title: 'Hostel Warden',
    image: '/images/careers-warden.jpg',
    description: 'Manages residential operations, ensures student security and discipline, and creates a supportive living environment.',
  },
]

export default function Careers() {
  return (
    <>
      <Seo
        title="Careers"
        description="Careers at Vision PU College & NEET Academy. Openings for Senior/Junior Lecturers, Campus Administrator, Chef, and Hostel Warden roles in Bangalore."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Careers', path: '/careers' },
        ]}
      />

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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-brand-200 mb-4 fade-in-up">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-white font-medium">Careers</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 fade-in-up delay-100">
            Careers at <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-yellow-200">Vision</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed fade-in-up delay-200">
            At Vision, we provide a nurturing environment that fosters growth, learning, and personal development.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-brand-700 font-bold tracking-wide uppercase text-xs mb-1">Current Openings</h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">Join Our Team</h3>

          <div className="grid sm:grid-cols-2 gap-5">
            {openings.map((job) => (
              <div key={job.title} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="aspect-video">
                  <img src={job.image} alt={job.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">{job.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-brand-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-900/70 border border-brand-700/50 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h4 className="text-lg sm:text-xl font-bold mb-1">How to Apply</h4>
              <p className="text-gray-300 text-sm">
                Send your resume to{' '}
                <a href="mailto:careers@visionedu.in" className="text-accent-400 font-semibold hover:text-accent-300">
                  careers@visionedu.in
                </a>
                , or call us directly.
              </p>
            </div>
            <div className="flex flex-col sm:items-end gap-1 shrink-0">
              <a href="tel:+918047185111" className="text-white font-bold hover:text-accent-400">
                <i className="fas fa-phone text-xs mr-1.5"></i> 080 471 85111
              </a>
              <a href="tel:+917349744105" className="text-white font-bold hover:text-accent-400">
                <i className="fas fa-phone text-xs mr-1.5"></i> 73497 44105
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
