import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import {
  examLabel,
  yearsOfExcellence,
  admissionsYear,
  stateRankers,
  topScorers,
  resultStats,
  studentsWithFullMarksInASubject,
  resultsContactNumbers,
  resultsAddress,
} from '../data/results'

function ordinalSuffix(n) {
  const v = n % 100
  if (v >= 11 && v <= 13) return 'th'
  switch (n % 10) {
    case 1: return 'st'
    case 2: return 'nd'
    case 3: return 'rd'
    default: return 'th'
  }
}

const sortedStateRankers = [...stateRankers].sort((a, b) => a.rank - b.rank)

export default function Results() {
  return (
    <>
      <Seo
        title="Results"
        description={`${examLabel} — state rank holders and top scorers from Vision PU College, Bangalore.`}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Results', path: '/results' },
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-brand-200 mb-4 fade-in-up">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-white font-medium">Results</span>
          </div>
          <span className="inline-block py-1 px-3.5 rounded-full bg-accent-500/10 border border-accent-400/30 text-accent-400 text-xs font-semibold uppercase tracking-wider mb-4 fade-in-up delay-100">
            {yearsOfExcellence} Years of Academic Excellence
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 fade-in-up delay-100">
            Congratulations to Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-yellow-200">Toppers</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed fade-in-up delay-200">
            {examLabel}
          </p>
        </div>
      </section>

      {/* State Rankers */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-brand-700 font-bold tracking-wide uppercase text-xs mb-1">{examLabel}</h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">State Rank Holders</h3>

          <div className="grid sm:grid-cols-3 gap-5">
            {sortedStateRankers.map((s) => (
              <div
                key={s.regNo}
                className="relative bg-gradient-to-br from-brand-900 to-brand-950 text-white rounded-2xl p-6 text-center shadow-lg"
              >
                <img
                  src={s.photo}
                  alt={s.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border-2 border-accent-400"
                />
                <span className="inline-block bg-accent-500 text-brand-950 text-xs font-extrabold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
                  State {s.rank}
                  <sup>{ordinalSuffix(s.rank)}</sup> Rank
                </span>
                <h4 className="font-bold text-lg mb-1">{s.name}</h4>
                <p className="text-xs text-brand-200 mb-4">{s.regNo}</p>
                <div className="inline-block bg-white/10 rounded-lg px-4 py-2">
                  <span className="text-2xl font-extrabold text-accent-400">{s.marks}</span>
                  <span className="text-xs text-brand-200"> / 600</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Scorers Grid */}
      <section className="py-14 md:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-brand-700 font-bold tracking-wide uppercase text-xs mb-1">And Many More</h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">PUC Toppers — Top Scorers</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {topScorers.map((s) => (
              <div key={s.regNo} className="bg-white rounded-xl border border-gray-100 shadow-sm p-3 text-center">
                <img
                  src={s.photo}
                  alt={s.name}
                  className="w-12 h-12 rounded-full object-cover mx-auto mb-2 border border-gray-200"
                />
                <div className="text-xl font-extrabold text-brand-700">{s.marks}</div>
                <div className="text-xs font-bold text-gray-900 mt-1 leading-snug">{s.name}</div>
                <div className="text-[10px] text-gray-400 mt-0.5">{s.regNo}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center italic">...and many more.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-brand-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center mb-6">
            {resultStats.map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="text-2xl sm:text-3xl font-extrabold text-accent-400">{s.value}</div>
                <div className="text-[10px] sm:text-xs text-gray-300 mt-1 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm sm:text-base text-gray-300">
            Total number of students who secured{' '}
            <span className="text-accent-400 font-bold">100/100</span> in a subject:{' '}
            <span className="text-accent-400 font-bold">{studentsWithFullMarksInASubject}</span>
          </p>
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-brand-900 to-brand-800 rounded-2xl p-6 sm:p-8 text-center text-white">
            <h4 className="text-xl sm:text-2xl font-extrabold mb-2">
              Registration Open for I PUC {admissionsYear}
            </h4>
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 mb-4">
              {resultsContactNumbers.map((n, i) => (
                <span key={n} className="text-sm sm:text-base font-semibold">
                  <a href={`tel:+91${n.replace(' ', '')}`} className="hover:text-accent-400">
                    {n}
                  </a>
                  {i < resultsContactNumbers.length - 1 && <span className="text-brand-300 ml-2">|</span>}
                </span>
              ))}
            </div>
            <p className="text-xs sm:text-sm text-brand-200 mb-6">{resultsAddress}</p>
            <Link
              to="/apply"
              className="inline-block bg-accent-500 hover:bg-accent-400 text-brand-950 px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-md"
            >
              Apply for Admission
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
