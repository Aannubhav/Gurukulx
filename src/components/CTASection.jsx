import { useState } from 'react'
import Icon from './Icon'
import './CTASection.css'

export default function CTASection() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) setSent(true)
  }

  return (
    <section className="cta section" id="cta">
      <div className="cta__blob" />
      <div className="cta__dots" />

      <div className="container cta__inner">
        <span className="cta__eyebrow">Launch in Weeks</span>

        <h2 className="section-heading cta__heading">
          Your EdTech Platform.{' '}
          <em className="text-orange" style={{ fontStyle: 'italic', fontWeight: 400 }}>Ready to go live.</em>
        </h2>

        <p className="section-subtext cta__sub">
          Join 200+ institutes and coaching centres already teaching, scaling, and earning
          under their own brand — powered by GurukulamX.
        </p>

        {!sent ? (
          <form className="cta__form" onSubmit={handleSubmit}>
            <div className="cta__input-wrap">
              <Icon name="mail" size={16} className="cta__input-icon" />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@institute.com"
                required
                className="cta__input"
              />
            </div>
            <button type="submit" className="btn btn--primary">
              Get Started <Icon name="arrowRight" size={14} />
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
            Book a Free Demo <Icon name="arrowRight" size={16} />
          </a>
          <a href="#pricing" className="btn btn--outline btn--lg">
            See Pricing Plans
          </a>
        </div>

        <p className="cta__fine">
          No upfront commitment · Launch in 3 weeks · Full white-label branding
        </p>
      </div>
    </section>
  )
}
