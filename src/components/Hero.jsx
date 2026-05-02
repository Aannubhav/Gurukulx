import './Hero.css'

const AVATARS = ['RS', 'PM', 'AG', 'SR']

export default function Hero() {
  return (
    <section className="hero section section--white" id="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">
            <span className="hero__badge-dot" />
            The All-in-One EdTech SaaS Platform
          </span>

          <h1 className="hero__headline">
            Your Platform.<br />
            Your Brand.<br />
            <span className="hero__headline-accent">Your Success.</span>
          </h1>

          <p className="hero__sub">
            Teach. Engage. Grow. All in One Place. Full LMS, white-label mobile apps,
            and an AI learning engine — ready in weeks, built for India's educators.
          </p>

          <div className="hero__ctas">
            <a href="#contact" className="btn btn--primary btn--lg">
              Book a Free Demo →
            </a>
            <a href="#showcase" className="btn btn--outline btn--lg">
              See the Platform
            </a>
          </div>

          <div className="hero__social">
            <div className="hero__avatars">
              {AVATARS.map((init, i) => (
                <div key={init} className="hero__avatar" style={{ zIndex: 4 - i }}>
                  {init}
                </div>
              ))}
            </div>
            <p className="hero__social-text">
              <strong>200+</strong> institutes already live
            </p>
          </div>

          <div className="hero__pills">
            {['Own Your Brand', '100% Content Security', 'All-in-One Platform'].map(t => (
              <span key={t} className="hero__pill">
                <span className="hero__pill-dot" />
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__graphic">
            <img
              src="/images/desktop-mockup.png"
              alt="GurukulamX Platform"
              className="hero__img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
