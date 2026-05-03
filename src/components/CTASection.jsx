import Icon from './Icon'
import './CTASection.css'

export default function CTASection() {
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
