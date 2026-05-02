import { FEATURES } from '../data/constants'
import './Features.css'

export default function Features() {
  return (
    <section className="features section section--gray" id="features">
      <div className="container">
        <div className="text-center features__header">
          <p className="section-label">Features</p>
          <h2 className="section-heading">
            Everything You Need to{' '}
            <span className="text-orange">Ship Fast</span>
          </h2>
          <p className="section-subtext">
            Stop building infrastructure. Start shipping product. GurukulamX handles the hard parts
            so your team can focus on what matters.
          </p>
        </div>

        <div className="features__grid">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className={`features__card card ${f.highlight ? 'features__card--highlight' : ''}`}
            >
              <div className={`features__icon ${f.highlight ? 'features__icon--light' : ''}`}>
                {f.icon}
              </div>
              <h3 className={`features__title ${f.highlight ? 'features__title--light' : ''}`}>
                {f.title}
              </h3>
              <p className={`features__desc ${f.highlight ? 'features__desc--light' : ''}`}>
                {f.description}
              </p>
              {f.highlight && (
                <span className="features__learn">Learn more →</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
