import { TRUSTED, STATS } from '../data/constants'
import './SocialProof.css'

export default function SocialProof() {
  const doubled = [...TRUSTED, ...TRUSTED]

  return (
    <section className="social-proof section section--gray" id="about">
      <div className="container">
        <p className="social-proof__label text-center">
          Trusted by <span className="text-orange">200+</span> institutes, coaching centres &amp; EdTech startups
        </p>
      </div>

      <div className="social-proof__track-wrapper">
        <div className="social-proof__fade social-proof__fade--left" />
        <div className="social-proof__fade social-proof__fade--right" />
        <div className="social-proof__track">
          {doubled.map((name, i) => (
            <span key={i} className="social-proof__item">{name}</span>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="social-proof__stats">
          {STATS.map(({ value, label }) => (
            <div key={label} className="social-proof__stat">
              <span className="social-proof__stat-value">{value}</span>
              <span className="social-proof__stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
