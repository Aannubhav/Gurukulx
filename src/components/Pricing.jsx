import { useState } from 'react'
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
  const [showCalc, setShowCalc] = useState(false)
  const [gmv, setGmv] = useState(500000)

  const annualFee = 20000
  const share = gmv * 0.08
  const total = annualFee + share
  const keeps = gmv - share
  const breakPct = Math.min((gmv / 2500000) * 100, 100)

  const fmt = n => n >= 100000
    ? `₹${(n / 100000).toFixed(1)}L`
    : `₹${n.toLocaleString('en-IN')}`

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
            { q: 'Low cash now', a: '→ Starter' },
            { q: 'Want fixed cost', a: '→ Professional' },
            { q: 'Want ownership', a: '→ Enterprise' },
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

              {/* Revenue share calculator (Starter only) */}
              {plan.id === 'starter' && (
                <>
                  <button
                    className={`pricing__calc-toggle ${plan.highlight ? '' : ''}`}
                    onClick={() => setShowCalc(v => !v)}
                  >
                    {showCalc ? 'Hide' : 'Calculate'} your revenue share ↕
                  </button>
                  {showCalc && (
                    <div className="pricing__calc">
                      <div className="pricing__calc-row">
                        <span>Annual GMV</span>
                        <strong>{fmt(gmv)}</strong>
                      </div>
                      <input
                        type="range"
                        min={100000}
                        max={5000000}
                        step={100000}
                        value={gmv}
                        onChange={e => setGmv(Number(e.target.value))}
                        className="pricing__range"
                      />
                      <div className="pricing__calc-stats">
                        {[
                          { label: 'Annual fee', val: '₹20,000' },
                          { label: '8% GMV share', val: fmt(share), accent: true },
                          { label: 'Total you pay', val: fmt(total) },
                          { label: 'You keep', val: fmt(keeps), accent: true },
                        ].map(({ label, val, accent }) => (
                          <div key={label} className="pricing__calc-stat">
                            <span className="pricing__calc-stat-label">{label}</span>
                            <span className={`pricing__calc-stat-val ${accent ? 'text-orange' : ''}`}>{val}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pricing__calc-bar">
                        <div className="pricing__calc-bar-track">
                          <div className="pricing__calc-bar-fill" style={{ width: `${breakPct}%` }} />
                        </div>
                        <span className="pricing__calc-bar-label">
                          {Math.round(breakPct)}% toward Professional breakeven (₹25L)
                        </span>
                      </div>
                    </div>
                  )}
                </>
              )}

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

        {/* Infra note */}
        <div className="pricing__infra card">
          <p className="pricing__infra-label">Infrastructure costs — paid separately, kept transparent</p>
          <div className="pricing__infra-grid">
            {[
              { item: 'Hosting / Server', range: '₹5K – ₹20K / mo' },
              { item: 'Domain + CDN', range: '₹500 – ₹2K / mo' },
              { item: 'SMS / Email', range: '₹500 – ₹3K / mo' },
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

        <p className="pricing__dev-note">
          Custom development:{' '}
          <strong>₹699/hr</strong> (Starter &amp; Professional) ·{' '}
          <strong>₹599/hr</strong> (Enterprise)
        </p>
      </div>
    </section>
  )
}
