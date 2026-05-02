import { useState } from 'react'
import './CTASection.css'

export default function CTASection() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) setSent(true)
  }

  return (
    <section className="cta section section--white" id="contact">
      <div className="container">
        <div className="cta__inner">
          <div className="cta__orb" />

          <p className="section-label">Launch in Weeks</p>

          <h2 className="section-heading cta__heading">
            Your EdTech Platform.{' '}
            <span className="text-orange">Ready to Go Live.</span>
          </h2>

          <p className="section-subtext cta__sub">
            Join 200+ institutes and coaching centres already teaching, scaling, and
            earning under their own brand — powered by GurukulamX.
          </p>

          {!sent ? (
            <form className="cta__form" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@institute.com"
                required
                className="cta__input"
              />
              <button type="submit" className="btn btn--primary">
                Get Started →
              </button>
            </form>
          ) : (
            <div className="cta__success">
              <span className="cta__success-check">✓</span>
              We'll reach out to <strong>{email}</strong> shortly!
            </div>
          )}

          <div className="cta__actions">
            <a href="#contact" className="btn btn--primary btn--lg">
              Book a Free Demo →
            </a>
            <a href="#pricing" className="btn btn--outline btn--lg">
              See Pricing Plans
            </a>
          </div>

          <p className="cta__fine">
            No upfront commitment · Launch in 3 weeks · Full white-label branding
          </p>
        </div>
      </div>
    </section>
  )
}
