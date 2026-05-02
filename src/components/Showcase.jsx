import './Showcase.css'

export default function Showcase() {
  return (
    <section className="showcase section section--white" id="showcase">
      <div className="container">
        <div className="text-center showcase__header">
          <p className="section-label">Platform Preview</p>
          <h2 className="section-heading">
            Your Platform. Your Brand.{' '}
            <span className="text-orange">Your Success.</span>
          </h2>
          <p className="section-subtext">
            Teach. Engage. Grow. — Full LMS, mobile apps, AI engine. All under your brand.
          </p>
        </div>

        {/* Desktop image */}
        <div className="showcase__device showcase__device--desktop">
          <img
            src="/images/desktop-mockup.png"
            alt="GurukulamX Platform — Desktop"
            className="showcase__img"
            loading="lazy"
          />
        </div>

        {/* Mobile image */}
        <div className="showcase__device showcase__device--mobile">
          <img
            src="/images/mobile-mockup.png"
            alt="GurukulamX Platform — Mobile"
            className="showcase__img"
            loading="lazy"
          />
        </div>

        {/* Trust strip */}
        <div className="showcase__trust">
          {[
            { icon: '🖥️', label: 'Own Your Brand' },
            { icon: '👥', label: 'Teach. Engage. Grow.' },
            { icon: '🔒', label: '100% Content Security' },
            { icon: '📊', label: 'All-in-One Platform' },
          ].map(({ icon, label }) => (
            <span key={label} className="showcase__trust-item">
              <span>{icon}</span>
              <span>{label}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
