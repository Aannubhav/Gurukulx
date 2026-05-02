import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../data/constants'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  const getHref = (href) => {
    if (isHome) return `/platform${href}`
    return href
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" onClick={close}>
          <img src="/images/logo.png" alt="GurukulamX" height="36" />
        </Link>

        <nav className="navbar__links" aria-label="Main navigation">
          <Link
            to="/"
            className={`navbar__link ${isHome ? 'navbar__link--active' : ''}`}
          >
            Home
          </Link>
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={getHref(href)} className="navbar__link">
              {label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a href={getHref('#pricing')} className="btn btn--ghost btn--sm">Sign in</a>
          <a href={getHref('#contact')} className="btn btn--primary btn--sm">Get Started</a>
        </div>

        <button
          className={`navbar__burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`}>
        <div className="navbar__drawer-inner">
          <img src="/images/logo.png" alt="GurukulamX" height="32" className="navbar__drawer-logo" />
          <nav>
            <Link to="/" className="navbar__drawer-link" onClick={close}>Home</Link>
            {NAV_LINKS.map(({ label, href }) => (
              <a key={label} href={getHref(href)} className="navbar__drawer-link" onClick={close}>
                {label}
              </a>
            ))}
          </nav>
          <a href={getHref('#contact')} className="btn btn--primary" onClick={close}>
            Get Started
          </a>
        </div>
      </div>
    </header>
  )
}
