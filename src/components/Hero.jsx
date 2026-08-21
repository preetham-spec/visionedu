import { Link } from 'react-router-dom'
import EnquiryForm from './EnquiryForm'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-24 pb-32 md:pt-32 md:pb-40 overflow-hidden bg-brand-950 text-white flex items-center min-h-[85vh]"
    >
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-700/40 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-accent-600/20 rounded-full blur-[150px]"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950/90 via-brand-900/80 to-brand-950/95"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 text-center lg:text-left relative z-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-brand-400/30 text-accent-400 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
              </span>
              Admissions Open for 2026-27
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight fade-in-up delay-100 text-white">
              Karnataka's Premier <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-yellow-200">
                Pre-University
              </span>{' '}
              Institute
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 max-w-xl mx-auto lg:mx-0 fade-in-up delay-200 leading-relaxed">
              Scientifically designed integrated programs with 1-on-1 mentorship. Join our legacy of 4,500+
              successful alumni across Science, Commerce and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 fade-in-up delay-300 justify-center lg:justify-start">
              <Link
                to="/apply"
                className="bg-accent-500 hover:bg-accent-400 text-brand-950 text-center px-6 sm:px-8 py-3 rounded-xl font-bold text-base transition-all shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] w-full sm:w-auto transform hover:-translate-y-1"
              >
                Apply for Admission
              </Link>
              <a
                href="#results"
                className="glass hover:bg-white/10 text-white text-center px-6 sm:px-8 py-3 rounded-xl font-medium text-base transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                View Our Results <i className="fas fa-arrow-right text-sm"></i>
              </a>
            </div>
          </div>

          {/* Hero Form */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto fade-in-up delay-200 relative animate-float mt-8 lg:mt-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-accent-500 rounded-2xl blur-lg opacity-40"></div>

            <div className="bg-white rounded-2xl shadow-2xl p-5 sm:p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-700 to-accent-500"></div>

              <div className="text-center mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  Merit Scholarships up to <span className="text-brand-700">100%</span>
                </h3>
                <p className="text-gray-500 text-xs mt-1">Based on 10th standard board exams</p>
              </div>

              <EnquiryForm
                showBoard
                showMarks
                submitLabel="Request Callback"
                successMessage="Enquiry submitted successfully!"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
