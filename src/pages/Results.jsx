import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import ResultAvatar from '../components/ResultAvatar'
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
import { examLabel2025, stateRankers2025, topScorers2025 } from '../data/results2025'
import {
  jeeExamLabel,
  jeeTopper,
  jeeScorers,
  jeeAdmissionsYear,
  jeeCampusContacts,
  jeeExamLabel2025,
  jeeScorers2025,
} from '../data/jeeResults'
import { kcetLabel, kcetRanks } from '../data/kcetResults'
import { neetRankersLabel, neetRankers, neetStateRanksLabel, neetStateRanks } from '../data/neetResults'
import {
  commerceExamLabel,
  commerceFeatured,
  commerceScorers,
  commerceStats,
  commerceContactGroups,
  commerceAddress,
  commerceAdmissionsYear,
} from '../data/commerceResults'

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
const sortedStateRankers2025 = [...stateRankers2025].sort((a, b) => a.rank - b.rank)

function ScorerGrid({ items, keyField, valueField, valueSuffix = '' }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {items.map((s) => (
        <div key={s[keyField]} className="bg-white rounded-xl border border-gray-100 shadow-sm p-3 text-center">
          <ResultAvatar src={s.photo} alt={s.name} />
          <div className="text-xl font-extrabold text-brand-700">
            {s[valueField]}
            {valueSuffix}
          </div>
          <div className="text-xs font-bold text-gray-900 mt-1 leading-snug">{s.name}</div>
          <div className="text-[10px] text-gray-400 mt-0.5">{s[keyField]}</div>
        </div>
      ))}
    </div>
  )
}

const tabs = [
  { id: 'pu', label: 'PU College' },
  { id: 'commerce', label: 'Commerce' },
  { id: 'neet', label: 'NEET' },
  { id: 'jee', label: 'JEE Mains' },
]

const tabHeroLabels = {
  pu: examLabel,
  commerce: commerceExamLabel,
  neet: neetRankersLabel,
  jee: jeeExamLabel,
}

export default function Results() {
  const [tab, setTab] = useState('pu')

  return (
    <>
      <Seo
        title="Results"
        description="State rank holders and top scorers across PU College, Commerce, NEET, and JEE Mains from Vision PU College, Bangalore."
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
            {tabHeroLabels[tab]}
          </p>
        </div>
      </section>

      {/* Tab Switcher */}
      <section className="bg-white border-b border-gray-100 sticky top-16 md:top-20 z-40 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-3 overflow-x-auto no-scrollbar">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`px-5 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-colors ${
                  tab === t.id ? 'bg-brand-700 text-white' : 'bg-brand-50 text-brand-700 hover:bg-brand-100'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {tab === 'pu' && (
        <>
          {/* 2026 State Rankers */}
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
                    <ResultAvatar src={s.photo} alt={s.name} size="lg" ring="border-accent-400" />
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

          {/* 2026 Top Scorers Grid */}
          <section className="py-14 md:py-16 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-brand-700 font-bold tracking-wide uppercase text-xs mb-1">And Many More</h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">PUC Toppers — Top Scorers</h3>
              <ScorerGrid items={topScorers} keyField="regNo" valueField="marks" />
              <p className="text-xs text-gray-500 mt-4 text-center italic">...and many more.</p>
            </div>
          </section>

          {/* 2026 Stats */}
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

          {/* 2025 State Rankers */}
          <section className="py-14 md:py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-brand-700 font-bold tracking-wide uppercase text-xs mb-1">{examLabel2025}</h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">2025 State Rank Holders</h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {sortedStateRankers2025.map((s) => (
                  <div
                    key={s.name}
                    className="relative bg-gradient-to-br from-brand-900 to-brand-950 text-white rounded-2xl p-4 text-center shadow-lg"
                  >
                    <ResultAvatar src={s.photo} alt={s.name} ring="border-accent-400" />
                    <span className="inline-block bg-accent-500 text-brand-950 text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-0.5 rounded-full mb-2">
                      State {s.rank}
                      <sup>{ordinalSuffix(s.rank)}</sup>
                    </span>
                    <h4 className="font-bold text-sm">{s.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 2025 Top Scorers Grid */}
          <section className="py-14 md:py-16 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">2025 Top Scorers</h3>
              <ScorerGrid items={topScorers2025} keyField="regNo" valueField="marks" />
              <p className="text-xs text-gray-500 mt-4 text-center italic">...and many more.</p>
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
      )}

      {tab === 'commerce' && (
        <>
          <section className="py-14 md:py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-brand-700 font-bold tracking-wide uppercase text-xs mb-1">{commerceExamLabel}</h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">Top Achievers</h3>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {commerceFeatured.map((s) => (
                  <div key={s.regNo} className="bg-gradient-to-br from-brand-900 to-brand-950 text-white rounded-2xl p-4 text-center shadow-lg">
                    <ResultAvatar src={s.photo} alt={s.name} ring="border-accent-400" />
                    <h4 className="font-bold text-sm mb-1">{s.name}</h4>
                    <div className="text-lg font-extrabold text-accent-400">{s.marks}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-14 md:py-16 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-brand-700 font-bold tracking-wide uppercase text-xs mb-1">And Many More</h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">Commerce Toppers — Top Scorers</h3>
              <ScorerGrid items={commerceScorers} keyField="regNo" valueField="marks" />
              <p className="text-xs text-gray-500 mt-4 text-center italic">...and many more.</p>
            </div>
          </section>

          <section className="py-12 bg-brand-950 text-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {commerceStats.map((s) => (
                  <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-2xl sm:text-3xl font-extrabold text-accent-400">{s.value}</div>
                    <div className="text-[10px] sm:text-xs text-gray-300 mt-1 uppercase tracking-wide">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-r from-brand-900 to-brand-800 rounded-2xl p-6 sm:p-8 text-center text-white">
                <h4 className="text-xl sm:text-2xl font-extrabold mb-6">
                  Registration Open for {commerceAdmissionsYear}
                </h4>
                <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto mb-6 text-left">
                  {commerceContactGroups.map((c) => (
                    <div key={c.label} className="bg-white/10 rounded-xl p-4">
                      <p className="font-bold text-sm mb-2">{c.label}</p>
                      <div className="space-y-0.5">
                        {c.numbers.map((n) => (
                          <a key={n} href={`tel:+91${n.replace(' ', '')}`} className="block text-sm font-semibold hover:text-accent-400">
                            {n}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-brand-200 mb-6">{commerceAddress}</p>
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
      )}

      {tab === 'neet' && (
        <>
          <section className="py-14 md:py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-brand-700 font-bold tracking-wide uppercase text-xs mb-1">{neetRankersLabel}</h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">Vision NEET Rankers</h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {neetRankers.map((s) => (
                  <div key={s.name} className="bg-gradient-to-br from-brand-900 to-brand-950 text-white rounded-2xl p-4 text-center shadow-lg">
                    <ResultAvatar src={s.photo} alt={s.name} ring="border-accent-400" />
                    <span className="inline-block bg-accent-500 text-brand-950 text-[10px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-full mb-2">
                      {s.rankLabel}
                    </span>
                    <h4 className="font-bold text-sm">{s.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-14 md:py-16 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-brand-700 font-bold tracking-wide uppercase text-xs mb-1">{neetStateRanksLabel}</h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">Karnataka State Ranks</h3>
              <ScorerGrid items={neetStateRanks} keyField="roll" valueField="rank" />
              <p className="text-xs text-gray-500 mt-4 text-center italic">...and many more.</p>
            </div>
          </section>

          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-r from-brand-900 to-brand-800 rounded-2xl p-6 sm:p-8 text-center text-white">
                <h4 className="text-xl sm:text-2xl font-extrabold mb-4">Join Vision NEET Academy</h4>
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
      )}

      {tab === 'jee' && (
        <>
          {/* 2026 Featured Topper */}
          <section className="py-14 md:py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-brand-700 font-bold tracking-wide uppercase text-xs mb-1">{jeeExamLabel}</h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">Top Scorer</h3>

              <div className="max-w-xs bg-gradient-to-br from-brand-900 to-brand-950 text-white rounded-2xl p-6 text-center shadow-lg">
                <ResultAvatar src={jeeTopper.photo} alt={jeeTopper.name} size="xl" ring="border-accent-400" />
                <h4 className="font-bold text-lg mb-1">{jeeTopper.name}</h4>
                <p className="text-xs text-brand-200 mb-4">App No: {jeeTopper.appNo}</p>
                <div className="inline-block bg-white/10 rounded-lg px-4 py-2">
                  <span className="text-2xl font-extrabold text-accent-400">{jeeTopper.percentile}</span>
                  <span className="text-xs text-brand-200"> percentile</span>
                </div>
              </div>
            </div>
          </section>

          {/* 2026 JEE Scorers Grid */}
          <section className="py-14 md:py-16 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-brand-700 font-bold tracking-wide uppercase text-xs mb-1">And Many More</h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">JEE Mains Toppers — Top Scorers</h3>
              <ScorerGrid items={jeeScorers} keyField="appNo" valueField="percentile" />
              <p className="text-xs text-gray-500 mt-4 text-center italic">...and many more.</p>
            </div>
          </section>

          {/* 2025 JEE Scorers Grid */}
          <section className="py-14 md:py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-brand-700 font-bold tracking-wide uppercase text-xs mb-1">{jeeExamLabel2025}</h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">2025 Top Scorers</h3>
              <ScorerGrid items={jeeScorers2025} keyField="appNo" valueField="percentile" />
              <p className="text-xs text-gray-500 mt-4 text-center italic">...and many more.</p>
            </div>
          </section>

          {/* KCET Section */}
          <section className="py-14 md:py-16 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-brand-700 font-bold tracking-wide uppercase text-xs mb-1">{kcetLabel}</h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">K-CET Engineering State Ranks</h3>
              <ScorerGrid items={kcetRanks} keyField="appNo" valueField="rank" />
              <p className="text-xs text-gray-500 mt-4 text-center italic">...and many more.</p>
            </div>
          </section>

          {/* Admissions CTA with campus contacts */}
          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-r from-brand-900 to-brand-800 rounded-2xl p-6 sm:p-8 text-center text-white">
                <h4 className="text-xl sm:text-2xl font-extrabold mb-6">
                  Registration Open for I PUC {jeeAdmissionsYear}
                </h4>
                <div className="grid sm:grid-cols-3 gap-4 mb-6 text-left">
                  {jeeCampusContacts.map((c) => (
                    <div key={c.label} className="bg-white/10 rounded-xl p-4">
                      <p className="font-bold text-sm">{c.label}</p>
                      <p className="text-[11px] text-brand-200 mb-2">{c.sublabel}</p>
                      <div className="space-y-0.5">
                        {c.numbers.map((n) => (
                          <a
                            key={n}
                            href={`tel:+91${n.replace(' ', '')}`}
                            className="block text-sm font-semibold hover:text-accent-400"
                          >
                            {n}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
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
      )}
    </>
  )
}
