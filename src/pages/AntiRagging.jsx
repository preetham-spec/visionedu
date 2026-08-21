import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function AntiRagging() {
  return (
    <>
      <Seo
        title="Anti-Ragging Policy & Code of Conduct"
        description="Vision PU College & NEET Academy's zero-tolerance anti-ragging policy, reporting helplines, and grievance handling process."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Anti-Ragging Policy', path: '/anti-ragging-policy' },
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
            <span className="text-white font-medium">Anti-Ragging Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 fade-in-up delay-100">
            Anti-Ragging Policy &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-yellow-200">Code of Conduct</span>
          </h1>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="article-content">
            <p>
              <strong>Vision PU College &amp; NEET Academy</strong> maintains a strict{' '}
              <strong>Zero-Tolerance Policy</strong> towards ragging in any form across all academic and residential
              campuses, in accordance with Section 116 of the <strong>Karnataka Education Act, 1983</strong>, and
              Supreme Court directives.
            </p>

            <h2>Institutional Emergency &amp; Reporting Helplines</h2>
            <p>
              Students experiencing or witnessing ragging, intimidation, or harassment should report the matter
              immediately to campus authorities:
            </p>
            <ul>
              <li><strong>Helpline Phone:</strong> <a href="tel:+918047185111">080 471 85111</a></li>
              <li><strong>Official Contact Email:</strong> <a href="mailto:info@visionedu.in">info@visionedu.in</a></li>
              <li>
                <strong>National Anti-Ragging Helpline (Toll-Free):</strong>{' '}
                <a href="tel:18001805522">1800-180-5522</a> /{' '}
                <a href="mailto:helpline@antiragging.in">helpline@antiragging.in</a>
              </li>
            </ul>

            <div className="bg-brand-50 border-l-4 border-brand-700 rounded-r-lg px-4 py-3 text-sm text-gray-700">
              <strong>Note:</strong> All reported grievances are handled with complete confidentiality by the
              institutional Anti-Ragging Committee (ARC).
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
