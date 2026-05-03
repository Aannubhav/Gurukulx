import { useState, useEffect } from 'react'
import Icon from './Icon'
import './Hero.css'

const HERO_LEFT = [
  { icon: 'rocket',    title: 'Launch Your Online Academy',    desc: 'Create & sell courses, cohorts & programs' },
  { icon: 'play',      title: 'Live Classes & Webinars',       desc: 'Engage your audience in real-time' },
  { icon: 'check',     title: 'Test Series & Assessments',     desc: 'Create tests, quizzes & assignments' },
  { icon: 'bookOpen',  title: 'E-books & Digital Products',    desc: 'Share knowledge in multiple formats' },
  { icon: 'mic',       title: 'Podcasts',                      desc: 'Monetize your audio content' },
]
const HERO_RIGHT = [
  { icon: 'users',     title: 'Communities & Memberships',     desc: 'Build loyal communities & recurring revenue' },
  { icon: 'card',      title: 'Merchandise',                   desc: 'Sell branded products' },
  { icon: 'trending',  title: 'Multiple Revenue Streams',      desc: 'Courses, subscriptions, products & more' },
  { icon: 'plug',      title: 'Third Party Integrations',      desc: 'Connect with tools you love' },
  { icon: 'shield',    title: 'Secure & Reliable',             desc: '100% content security & data protection' },
]

const AI_CASES = [
  { icon: 'brain',    label: 'AI generated', value: '240 MCQs',       hint: 'in 12 sec' },
  { icon: 'bookOpen', label: 'Drafted',      value: '8-week outline', hint: 'ready to edit' },
  { icon: 'sparkle',  label: 'Auto-graded',  value: '1,847 answers',  hint: '98% accuracy' },
  { icon: 'play',     label: 'Transcribed',  value: '42 min lecture', hint: '+ chapters' },
  { icon: 'trending', label: 'Recommended',  value: 'Next 3 lessons', hint: 'for Aarav' },
]

function FeatureCallout({ side, item }) {
  return (
    <div className={`hero__callout hero__callout--${side}`}>
      <div className="hero__callout-icon">
        <Icon name={item.icon} size={16} stroke={1.8} />
      </div>
      <div className="hero__callout-body">
        <div className="hero__callout-title">{item.title}</div>
        <div className="hero__callout-desc">{item.desc}</div>
      </div>
    </div>
  )
}

function AIBadgeSlider() {
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setIdx(i => (i + 1) % AI_CASES.length), 2600)
    return () => clearInterval(t)
  }, [paused])

  const c = AI_CASES[idx]
  return (
    <div
      className="hero__ai-badge float"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero__ai-badge-icon">
        <Icon name={c.icon} size={14} />
      </div>
      <div className="hero__ai-badge-text" key={idx}>
        <div className="hero__ai-badge-label">{c.label} <span className="hero__ai-badge-hint">· {c.hint}</span></div>
        <div className="hero__ai-badge-value">{c.value}</div>
      </div>
      <div className="hero__ai-badge-dots">
        {AI_CASES.map((_, i) => (
          <span key={i} className={`hero__ai-dot ${i === idx ? 'hero__ai-dot--active' : ''}`} />
        ))}
      </div>
    </div>
  )
}

const SIDEBAR_ITEMS = [
  { icon: 'layout',   label: 'Dashboard', active: true },
  { icon: 'bookOpen', label: 'Courses' },
  { icon: 'play',     label: 'Live' },
  { icon: 'check',    label: 'Tests' },
  { icon: 'users',    label: 'Students' },
  { icon: 'card',     label: 'Sales' },
  { icon: 'chart',    label: 'Analytics' },
]

function DashboardScreen() {
  return (
    <div className="hero__dashboard">
      {/* Sidebar */}
      <div className="hero__dash-sidebar">
        <div className="hero__dash-logo">
          <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="GurukulamX" />
        </div>
        {SIDEBAR_ITEMS.map((s) => (
          <div key={s.label} className={`hero__dash-nav ${s.active ? 'hero__dash-nav--active' : ''}`}>
            <Icon name={s.icon} size={9} stroke={1.8} />
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Main area */}
      <div className="hero__dash-main">
        <div className="hero__dash-topbar">
          <div>
            <div className="hero__dash-welcome">Welcome back, Educator! 👋</div>
            <div className="hero__dash-sub">Here's what's happening with your platform today.</div>
          </div>
          <div className="hero__dash-avatar">
            <div className="hero__dash-avatar-dot" />
            <span>Educator</span>
          </div>
        </div>

        <div className="hero__dash-stats">
          {[
            { icon: 'users',    label: 'Total Students', value: '12,450',  delta: '+18.6%' },
            { icon: 'bookOpen', label: 'Total Courses',  value: '38',      delta: '+12.4%' },
            { icon: 'card',     label: 'Revenue',        value: '₹6.24L',  delta: '+22.8%' },
            { icon: 'chart',    label: 'Active Users',   value: '8,920',   delta: '+15.3%' },
          ].map((s) => (
            <div key={s.label} className="hero__dash-stat">
              <div className="hero__dash-stat-head">
                <Icon name={s.icon} size={7} stroke={1.8} />
                <span>{s.label}</span>
              </div>
              <div className="hero__dash-stat-val">{s.value}</div>
              <div className="hero__dash-stat-delta">{s.delta}</div>
            </div>
          ))}
        </div>

        <div className="hero__dash-charts">
          {/* Revenue chart */}
          <div className="hero__dash-chart-card">
            <div className="hero__dash-chart-head">
              <span>Revenue Overview</span>
              <span className="hero__dash-chart-meta">This Month</span>
            </div>
            <svg viewBox="0 0 120 50" className="hero__dash-svg">
              <defs>
                <linearGradient id="rev-grad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#FF6A2A" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#FF6A2A" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,40 L15,32 L30,36 L45,22 L60,26 L75,18 L90,14 L105,8 L120,12 L120,50 L0,50 Z" fill="url(#rev-grad)" />
              <path d="M0,40 L15,32 L30,36 L45,22 L60,26 L75,18 L90,14 L105,8 L120,12" stroke="#FF6A2A" strokeWidth="1.4" fill="none" />
            </svg>
            <div className="hero__dash-months">
              {['Jan','Feb','Mar','Apr','May','Jun'].map(m => <span key={m}>{m}</span>)}
            </div>
          </div>

          {/* Top courses */}
          <div className="hero__dash-chart-card">
            <div className="hero__dash-chart-head">
              <span>Top Courses</span>
              <span style={{ color: '#FF6A2A' }}>View All</span>
            </div>
            {[
              { t: 'Digital Marketing', n: '1,348' },
              { t: 'UI/UX Design',      n: '982' },
              { t: 'Finance Blueprint', n: '775' },
            ].map((c, i) => (
              <div key={i} className="hero__dash-course">
                <div className="hero__dash-course-dot" style={{ background: `hsl(${20+i*15} 90% 60%)` }} />
                <div>
                  <div className="hero__dash-course-name">{c.t}</div>
                  <div className="hero__dash-course-count">{c.n} students</div>
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming + recent */}
          <div className="hero__dash-col">
            <div className="hero__dash-chart-card" style={{ flex: 1 }}>
              <div className="hero__dash-chart-head">
                <span>Upcoming Live</span>
                <span style={{ color: '#FF6A2A' }}>View All</span>
              </div>
              <div className="hero__dash-live-title">Live Q&amp;A Session</div>
              <div className="hero__dash-live-date">May 18 · 6:00 PM</div>
              <button className="hero__dash-join">Join Now</button>
            </div>
            <div className="hero__dash-chart-card" style={{ flex: 1 }}>
              <div className="hero__dash-chart-head">
                <span>Recent Sales</span>
                <span style={{ color: '#FF6A2A' }}>View All</span>
              </div>
              {[
                { t: 'Digital Marketing', p: '₹999' },
                { t: 'Web Dev Bootcamp',  p: '₹1,499' },
              ].map((r, i) => (
                <div key={i} className="hero__dash-sale">
                  <span>{r.t}</span>
                  <span style={{ color: '#FF6A2A', fontWeight: 600 }}>{r.p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MonitorMockup() {
  return (
    <div className="hero__monitor">
      <div className="hero__monitor-body">
        <div className="hero__monitor-screen">
          <DashboardScreen />
        </div>
      </div>
      <div className="hero__monitor-neck" />
      <div className="hero__monitor-base" />
      <AIBadgeSlider />
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <div className="hero__dots hero__dots--tr" />
      <div className="hero__dots hero__dots--bl" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Title block */}
        <div className="hero__title-block">
          <div className="hero__badge-pill">
            <span className="hero__pulse" />
            The All-in-One Ed-Tech SaaS Platform
          </div>
          <h1 className="hero__headline">
            Your Platform. Your Brand.{' '}
            <em className="hero__accent">Your Success.</em>
          </h1>
          <p className="hero__sub">Teach. Engage. Grow. All in One Place.</p>
        </div>

        {/* Orbital row */}
        <div className="hero__orbital">
          {/* Left callouts */}
          <div className="hero__orbital-col hero__orbital-col--left">
            {HERO_LEFT.map((it) => (
              <FeatureCallout key={it.title} side="left" item={it} />
            ))}
            <svg className="hero__connector hero__connector--left" preserveAspectRatio="none">
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="#FF6A2A" strokeWidth="1.2" strokeDasharray="2 4" opacity="0.45" />
            </svg>
          </div>

          <MonitorMockup />

          {/* Right callouts */}
          <div className="hero__orbital-col hero__orbital-col--right">
            {HERO_RIGHT.map((it) => (
              <FeatureCallout key={it.title} side="right" item={it} />
            ))}
            <svg className="hero__connector hero__connector--right" preserveAspectRatio="none">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="#FF6A2A" strokeWidth="1.2" strokeDasharray="2 4" opacity="0.45" />
            </svg>
          </div>
        </div>

        {/* Footer pill bar */}
        <div className="hero__pillbar">
          {[
            { icon: 'layout', label: 'Own Your Brand' },
            { icon: 'users',  label: 'Teach. Engage. Grow.' },
            { icon: 'shield', label: '100% Content Security' },
            { icon: 'chart',  label: 'All-in-One Platform' },
          ].map(p => (
            <div key={p.label} className="hero__pillbar-item">
              <Icon name={p.icon} size={15} stroke={1.8} style={{ color: '#FF6A2A' }} />
              <span>{p.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hero__cta-block">
          <p className="hero__cta-tagline">Start Your Journey with GurukulamX Today!</p>
          <div className="hero__ctas">
            <a href="#contact" className="btn btn--primary btn--lg">
              Book a Free Demo <Icon name="arrowRight" size={16} />
            </a>
            <a href="#showcase" className="btn btn--outline btn--lg">
              <Icon name="play" size={14} />
              Watch Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
