import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../data/constants'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          <a href="#hero" className="navbar__logo" onClick={close}>
            <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="GurukulamX" height="52" />
          </a>

          <nav className="navbar__links" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={label} href={href} className="navbar__link">
                {label}
              </a>
            ))}
          </nav>

          <div className="navbar__actions">
            <a href="#pricing" className="btn btn--ghost btn--sm">Sign in</a>
            <a href="#contact" className="btn btn--primary btn--sm">Get Started</a>
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
      </header>

      {/* Mobile drawer — sibling of header so position:fixed is viewport-relative on iOS Safari */}
      <div className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`}>
        <div className="navbar__drawer-inner">
          <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="GurukulamX" height="32" className="navbar__drawer-logo" />
          <nav>
            {NAV_LINKS.map(({ label, href }) => (
              <a key={label} href={href} className="navbar__drawer-link" onClick={close}>
                {label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="btn btn--primary" onClick={close}>
            Get Started
          </a>
        </div>
      </div>
    </>
  )
}
