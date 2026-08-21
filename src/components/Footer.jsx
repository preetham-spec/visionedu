import { Link, useLocation } from 'react-router-dom'

export default function Footer() {
  const { pathname } = useLocation()
  const isNeetPage = pathname === '/neet-academy'

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-brand-700 rounded flex items-center justify-center text-white font-bold text-sm">V</div>
              <span className="font-bold text-base text-white">
                {isNeetPage ? 'Vision NEET Academy' : 'Vision PU College'}
              </span>
            </div>
            <p className="text-xs text-gray-400">
              {isNeetPage
                ? 'Long-term and short-term NEET coaching in Bangalore, with mobile-free residential campuses and merit scholarships up to 100%.'
                : "Karnataka's trusted Pre-University institute for Science, Commerce and Degree education."}
            </p>
          </div>

          {isNeetPage ? (
            <div>
              <h4 className="text-white font-bold text-sm mb-3">NEET Campuses</h4>
              <ul className="space-y-1.5 text-xs">
                <li><a href="/campuses#boys-campus" className="hover:text-brand-400">Boys Residential (Doddagubbi)</a></li>
                <li><a href="/campuses#girls-campus" className="hover:text-brand-400">Girls Residential (Anagalapura)</a></li>
              </ul>
            </div>
          ) : (
            <div>
              <h4 className="text-white font-bold text-sm mb-3">Campuses</h4>
              <ul className="space-y-1.5 text-xs">
                <li><a href="/campuses#main-campus" className="hover:text-brand-400">Banaswadi Day Scholar Campus</a></li>
                <li><a href="/campuses#girls-campus" className="hover:text-brand-400">Girls Residential (Anagalapura)</a></li>
                <li><a href="/campuses#boys-campus" className="hover:text-brand-400">Boys Residential (Bande Bommasandra)</a></li>
              </ul>
            </div>
          )}

          <div>
            <h4 className="text-white font-bold text-sm mb-3">Blog</h4>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold border border-gray-700 rounded-lg px-3 py-2 hover:border-brand-500 hover:text-brand-400 transition-colors"
            >
              Read Our Blog <i className="fas fa-arrow-right text-[10px]"></i>
            </Link>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-bold text-sm mb-3">{isNeetPage ? 'NEET Admissions' : 'Head Office'}</h4>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-start gap-2">
                <i className="fas fa-map-marker-alt mt-0.5 text-brand-500"></i>
                <span>802, 9th B Main, HRBR Layout Kalyan Nagar 1 Block, Bengaluru 560043</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-phone text-brand-500"></i>
                <span>080 471 85111{isNeetPage && ' | 73497 44105'}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500">
          <p>
            &copy; 2026 Vision Education Group. All rights reserved. ·{' '}
            <Link to="/privacy-policy" className="hover:text-brand-400">Privacy Policy</Link>
          </p>
          <div className="flex space-x-3 mt-2 md:mt-0">
            <a href="#" className="hover:text-brand-400"><i className="fab fa-instagram text-sm"></i></a>
            <a href="#" className="hover:text-brand-400"><i className="fab fa-youtube text-sm"></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
