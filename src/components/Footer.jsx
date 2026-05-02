import { useState } from 'react'
import { FOOTER_LINKS } from '../data/constants'
import './Footer.css'

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand col */}
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <img src="/images/logo.png" alt="GurukulamX" height="36" />
            </a>
            <p className="footer__brand-desc">
              Full LMS, mobile apps, and AI learning engine — all under your brand.
              Built for India's coaching institutes and EdTech startups.
            </p>

            <div className="footer__social">
              {['𝕏', '🌐', '✉'].map((icon, i) => (
                <a key={i} href="#" className="footer__social-link" aria-label="social link">
                  {icon}
                </a>
              ))}
            </div>

            <div className="footer__newsletter">
              <p className="footer__newsletter-label">Stay in the loop</p>
              <form className="footer__newsletter-form" onSubmit={e => { e.preventDefault() }}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@institute.com"
                  className="footer__newsletter-input"
                />
                <button type="submit" className="btn btn--primary btn--sm">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group} className="footer__col">
              <h4 className="footer__col-heading">{group}</h4>
              <ul className="footer__col-links">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="footer__col-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} GurukulamX · Nexus Micro Technologies. All rights reserved.</p>
          <p>Built with ♥ for India's EdTech builders</p>
        </div>
      </div>
    </footer>
  )
}
