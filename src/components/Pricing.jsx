import { PRICING } from '../data/constants'
import './Pricing.css'

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="7" fill="currentColor" opacity="0.15" />
      <path d="M4 7l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section className="pricing section section--gray" id="pricing">
      <div className="container">
        <div className="text-center pricing__header">
          <p className="section-label">Pricing</p>
          <h2 className="section-heading">
            Three Models.{' '}
            <span className="text-orange">One Platform.</span>
          </h2>
          <p className="section-subtext">
            Pick the model that fits where you are today — and upgrade as you grow.
            No lock-in, no surprises.
          </p>
        </div>

        {/* Quick selector */}
        <div className="pricing__selectors">
          {[
            { q: 'Just starting out', a: '→ Starter' },
            { q: 'Want fixed cost',   a: '→ Professional' },
            { q: 'Full ownership',    a: '→ Enterprise' },
          ].map(({ q, a }) => (
            <div key={q} className="pricing__selector">
              <span className="pricing__selector-q">{q}</span>
              <span className="pricing__selector-a">{a}</span>
            </div>
          ))}
        </div>

        <div className="pricing__grid">
          {PRICING.map((plan) => (
            <div
              key={plan.id}
              className={`pricing__card card ${plan.highlight ? 'pricing__card--highlight' : ''}`}
            >
              {plan.badge && (
                <div className="pricing__badge">{plan.badge}</div>
              )}

              <div className="pricing__plan-header">
                <div>
                  <h3 className="pricing__name">{plan.name}</h3>
                  <p className="pricing__tagline">{plan.tagline}</p>
                </div>
                {plan.insight && (
                  <span className={`pricing__insight ${plan.highlight ? 'pricing__insight--light' : ''}`}>
                    {plan.insight}
                  </span>
                )}
              </div>

              <div className="pricing__price-block">
                <p className={`pricing__price ${plan.highlight ? 'pricing__price--light' : ''}`}>
                  {plan.price}
                </p>
                <p className={`pricing__sub ${plan.highlight ? 'pricing__sub--light' : ''}`}>
                  {plan.sub}
                </p>
              </div>

              <p className={`pricing__desc ${plan.highlight ? 'pricing__desc--light' : ''}`}>
                {plan.description}
              </p>

              <ul className="pricing__features">
                {plan.features.map(f => (
                  <li key={f} className={`pricing__feature ${plan.highlight ? 'pricing__feature--light' : ''}`}>
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`btn ${plan.highlight ? 'pricing__cta--highlight' : 'btn--primary'} btn--lg`}
                style={{ textAlign: 'center', justifyContent: 'center' }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Coverage note */}
        <div className="pricing__infra card">
          <p className="pricing__infra-label">What's covered — full transparency</p>
          <div className="pricing__infra-grid">
            {[
              { item: 'Hosting & infrastructure', range: 'Scoped to your usage' },
              { item: 'Domain, CDN & SSL',         range: 'Set up by our team' },
              { item: 'SMS, email & support',       range: 'Bundled in every plan' },
            ].map(({ item, range }) => (
              <div key={item} className="pricing__infra-item">
                <span className="pricing__infra-dot" />
                <div>
                  <p className="pricing__infra-item-name">{item}</p>
                  <p className="pricing__infra-item-range">{range}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
