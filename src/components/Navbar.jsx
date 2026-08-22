import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const isNeetPage = pathname === '/neet-academy'
  const isDegreePage = pathname === '/degree-college'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const hashLinks = [
    { href: '/#home', label: 'Home' },
    { href: '/#academics', label: 'Academics' },
  ]

  const routeLinks = [
    { to: '/results', label: 'Results' },
    { to: '/campuses', label: 'Campuses' },
    { to: '/facilities', label: 'Facilities' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contact' },
    { to: '/degree-college', label: 'Degree' },
    { to: '/neet-academy', label: 'NEET' },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-gray-100 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to={isNeetPage ? '/neet-academy' : isDegreePage ? '/degree-college' : '/'} className="flex items-center">
            {isNeetPage ? (
              <div className="flex flex-col items-start">
                <Logo
                  src="/images/neet-logo-mark.png"
                  aspect="402/128"
                  label="Vision NEET Academy"
                  className="h-9 md:h-11"
                />
                <span className="text-[7px] md:text-[8px] font-semibold tracking-wide text-gray-500 mt-0.5">
                  A UNIT OF VISIONERS ACADEMY LLP
                </span>
              </div>
            ) : isDegreePage ? (
              <Logo
                src="/images/degree-logo-mark.png"
                aspect="892/256"
                label="Vision Degree College"
                className="h-9 md:h-11"
              />
            ) : (
              <Logo className="h-9 md:h-11" />
            )}
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            {hashLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-gray-700 hover:text-brand-700 font-medium transition-colors text-sm lg:text-base">
                {l.label}
              </a>
            ))}
            {routeLinks.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                  `font-medium transition-colors text-sm lg:text-base ${
                    isActive ? 'text-brand-700 font-bold' : 'text-gray-700 hover:text-brand-700'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/apply"
              className="bg-accent-500 hover:bg-accent-400 text-brand-950 px-5 py-2 rounded-lg font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm lg:text-base"
            >
              Apply Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              className="text-gray-700 hover:text-brand-700 focus:outline-none p-2"
              onClick={() => setOpen((v) => !v)}
            >
              <i className={`fas ${open ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-xl">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {hashLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 rounded-md text-base font-medium text-gray-700 hover:text-brand-700 hover:bg-brand-50"
              >
                {l.label}
              </a>
            ))}
            {routeLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 rounded-md text-base font-medium text-gray-700 hover:text-brand-700 hover:bg-brand-50"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/apply"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-md text-base font-bold text-brand-950 bg-accent-500 hover:bg-accent-400 mt-2 text-center shadow-md"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
