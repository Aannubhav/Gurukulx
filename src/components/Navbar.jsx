import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang } = useLanguage()
  const t = translations[lang].nav

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  const NAV = [
    { label: t.platform, href: '#showcase' },
    { label: t.features,  href: '#features'  },
    { label: t.pricing,   href: '#pricing'   },
    { label: t.contact,   href: '#contact'   },
  ]

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          <a href="#hero" className="navbar__logo" onClick={close}>
            <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="GurukulamX" height="52" />
          </a>

          <nav className="navbar__links" aria-label="Main navigation">
            {NAV.map(({ label, href }) => (
              <a key={href} href={href} className="navbar__link">{label}</a>
            ))}
          </nav>

          <div className="navbar__actions">
            {/* Language toggle */}
            <button
              className="navbar__lang-toggle"
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              aria-label="Toggle language"
            >
              <span className={lang === 'en' ? 'navbar__lang--active' : ''}>EN</span>
              <span className="navbar__lang-sep">|</span>
              <span className={lang === 'hi' ? 'navbar__lang--active' : ''}>हि</span>
            </button>
            <a href="#pricing" className="btn btn--ghost btn--sm">{t.signIn}</a>
            <a href="#contact" className="btn btn--primary btn--sm">{t.getStarted}</a>
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

      <div className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`}>
        <div className="navbar__drawer-inner">
          <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="GurukulamX" height="32" className="navbar__drawer-logo" />
          <nav>
            {NAV.map(({ label, href }) => (
              <a key={href} href={href} className="navbar__drawer-link" onClick={close}>{label}</a>
            ))}
          </nav>
          <button
            className="navbar__lang-toggle navbar__lang-toggle--drawer"
            onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
          >
            <span className={lang === 'en' ? 'navbar__lang--active' : ''}>EN</span>
            <span className="navbar__lang-sep">|</span>
            <span className={lang === 'hi' ? 'navbar__lang--active' : ''}>हिंदी</span>
          </button>
          <a href="#contact" className="btn btn--primary" onClick={close}>{t.getStarted}</a>
        </div>
      </div>
    </>
  )
}
