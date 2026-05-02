import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Home.css'

/* ---- Tilt-on-hover hook ---- */
function useTilt(intensity = 12) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--rx', `${-y * intensity}deg`)
        el.style.setProperty('--ry', `${x * intensity}deg`)
        el.style.setProperty('--mx', `${(x + 0.5) * 100}%`)
        el.style.setProperty('--my', `${(y + 0.5) * 100}%`)
      })
    }
    const onLeave = () => {
      el.style.setProperty('--rx', '0deg')
      el.style.setProperty('--ry', '0deg')
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [intensity])
  return ref
}

/* ---- Clay SVG Icons ---- */
function ClayIcon({ name, size = 110 }) {
  const v = { width: size, height: size, viewBox: '0 0 120 120' }
  if (name === 'ai-builder') return (
    <svg {...v}>
      <defs>
        <linearGradient id="cg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FFB088"/><stop offset="100%" stopColor="#FF6A2A"/></linearGradient>
        <linearGradient id="cg1b" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FFFFFF"/><stop offset="100%" stopColor="#FFE5D6"/></linearGradient>
        <filter id="cg1s"><feGaussianBlur in="SourceAlpha" stdDeviation="3"/><feOffset dy="4"/><feComponentTransfer><feFuncA type="linear" slope="0.4"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <g filter="url(#cg1s)">
        <path d="M22 38 Q22 30 30 30 L60 30 L60 92 L30 92 Q22 92 22 84 Z" fill="url(#cg1)"/>
        <path d="M98 38 Q98 30 90 30 L60 30 L60 92 L90 92 Q98 92 98 84 Z" fill="url(#cg1)" opacity="0.9"/>
        <path d="M30 38 L54 38 M30 46 L50 46 M30 54 L52 54" stroke="#FFE5D6" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
        <path d="M68 38 L92 38 M68 46 L88 46 M68 54 L90 54" stroke="#FFE5D6" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
      </g>
      <g>
        <path d="M82 18 L86 26 L94 30 L86 34 L82 42 L78 34 L70 30 L78 26 Z" fill="url(#cg1b)"/>
        <circle cx="100" cy="58" r="5" fill="#FFFFFF"/>
        <circle cx="14" cy="22" r="4" fill="#FFB088"/>
      </g>
    </svg>
  )
  if (name === 'dashboard') return (
    <svg {...v}>
      <defs>
        <linearGradient id="cg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FFB088"/><stop offset="100%" stopColor="#FF6A2A"/></linearGradient>
        <linearGradient id="cg2b" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FFFFFF"/><stop offset="100%" stopColor="#FFF1E8"/></linearGradient>
        <filter id="cg2s"><feGaussianBlur in="SourceAlpha" stdDeviation="3"/><feOffset dy="4"/><feComponentTransfer><feFuncA type="linear" slope="0.4"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <g filter="url(#cg2s)">
        <rect x="14" y="22" width="92" height="76" rx="16" fill="url(#cg2b)"/>
        <rect x="26" y="68" width="14" height="22" rx="5" fill="#FFCBA8"/>
        <rect x="46" y="56" width="14" height="34" rx="5" fill="#FF8A52"/>
        <rect x="66" y="44" width="14" height="46" rx="5" fill="url(#cg2)"/>
        <rect x="86" y="60" width="14" height="30" rx="5" fill="#FFCBA8"/>
        <path d="M22 50 Q40 38 60 30 T100 18" stroke="#FF6A2A" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <circle cx="100" cy="18" r="6" fill="#FF6A2A"/>
      </g>
    </svg>
  )
  if (name === 'monetize') return (
    <svg {...v}>
      <defs>
        <linearGradient id="cg3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FFB088"/><stop offset="100%" stopColor="#FF6A2A"/></linearGradient>
        <linearGradient id="cg3b" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FFD9BD"/><stop offset="100%" stopColor="#FF8A52"/></linearGradient>
        <filter id="cg3s"><feGaussianBlur in="SourceAlpha" stdDeviation="3"/><feOffset dy="4"/><feComponentTransfer><feFuncA type="linear" slope="0.4"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <g filter="url(#cg3s)">
        <ellipse cx="60" cy="92" rx="38" ry="12" fill="#E5551A"/>
        <rect x="22" y="74" width="76" height="18" rx="9" fill="url(#cg3)"/>
        <ellipse cx="60" cy="74" rx="38" ry="10" fill="url(#cg3b)"/>
        <rect x="22" y="58" width="76" height="18" rx="9" fill="url(#cg3)"/>
        <ellipse cx="60" cy="58" rx="38" ry="10" fill="url(#cg3b)"/>
        <rect x="22" y="42" width="76" height="18" rx="9" fill="url(#cg3)"/>
        <ellipse cx="60" cy="42" rx="38" ry="10" fill="#FFFFFF"/>
        <text x="60" y="48" textAnchor="middle" fontSize="14" fontWeight="800" fill="#FF6A2A">₹</text>
      </g>
    </svg>
  )
  if (name === 'community') return (
    <svg {...v}>
      <defs>
        <linearGradient id="cg4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FFB088"/><stop offset="100%" stopColor="#FF6A2A"/></linearGradient>
        <linearGradient id="cg4b" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FFFFFF"/><stop offset="100%" stopColor="#FFE5D6"/></linearGradient>
        <filter id="cg4s"><feGaussianBlur in="SourceAlpha" stdDeviation="3"/><feOffset dy="4"/><feComponentTransfer><feFuncA type="linear" slope="0.4"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <g filter="url(#cg4s)">
        <path d="M16 36 Q16 22 30 22 L74 22 Q88 22 88 36 L88 60 Q88 74 74 74 L42 74 L28 86 L32 74 Q16 74 16 60 Z" fill="url(#cg4)"/>
        <circle cx="38" cy="48" r="4.5" fill="#FFFFFF"/>
        <circle cx="52" cy="48" r="4.5" fill="#FFFFFF"/>
        <circle cx="66" cy="48" r="4.5" fill="#FFFFFF"/>
        <path d="M62 64 Q62 56 70 56 L102 56 Q110 56 110 64 L110 80 Q110 88 102 88 L92 88 L100 96 L86 88 Q62 88 62 80 Z" fill="url(#cg4b)"/>
        <circle cx="78" cy="72" r="3" fill="#FF6A2A"/>
        <circle cx="88" cy="72" r="3" fill="#FF6A2A"/>
        <circle cx="98" cy="72" r="3" fill="#FF6A2A"/>
      </g>
    </svg>
  )
  if (name === 'rocket') return (
    <svg {...v}>
      <defs>
        <linearGradient id="cg5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FFB088"/><stop offset="100%" stopColor="#FF6A2A"/></linearGradient>
        <linearGradient id="cg5b" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FFFFFF"/><stop offset="100%" stopColor="#FFE5D6"/></linearGradient>
        <linearGradient id="cg5c" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FFCBA8"/><stop offset="100%" stopColor="#FF8A52"/></linearGradient>
        <filter id="cg5s"><feGaussianBlur in="SourceAlpha" stdDeviation="3"/><feOffset dy="4"/><feComponentTransfer><feFuncA type="linear" slope="0.4"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <g filter="url(#cg5s)">
        <path d="M60 14 Q40 28 40 60 L40 86 L60 78 L80 86 L80 60 Q80 28 60 14 Z" fill="url(#cg5)"/>
        <circle cx="60" cy="48" r="10" fill="url(#cg5b)"/>
        <circle cx="60" cy="48" r="6" fill="#FF6A2A" opacity="0.5"/>
        <path d="M40 64 L24 84 L40 80 Z" fill="url(#cg5c)"/>
        <path d="M80 64 L96 84 L80 80 Z" fill="url(#cg5c)"/>
        <path d="M50 86 Q56 102 60 108 Q64 102 70 86 Q60 92 50 86 Z" fill="#FFB088"/>
        <path d="M54 90 Q58 100 60 104 Q62 100 66 90 Q60 94 54 90 Z" fill="#FFFFFF"/>
      </g>
    </svg>
  )
  return null
}

/* ---- Feature Card ---- */
function FeatureCard({ index, icon, title, desc, accent = false }) {
  const tiltRef = useTilt(10)
  return (
    <div className="hf-card-outer">
      <div
        ref={tiltRef}
        className={`hf-card ${accent ? 'hf-card--accent' : ''}`}
      >
        <div className="hf-card-glow" />
        <div className="hf-card-num">0{index}</div>
        <div className="hf-card-icon">
          <ClayIcon name={icon} size={100} />
        </div>
        <h3 className="hf-card-title">{title}</h3>
        <p className="hf-card-desc">{desc}</p>
        <div className="hf-card-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

/* ---- Home Hero ---- */
function HomeHero() {
  const sceneRef = useTilt(8)
  const card1Ref = useTilt(15)
  const card2Ref = useTilt(15)
  const card3Ref = useTilt(15)

  return (
    <section className="hh-section">
      <div className="hh-bg-blob hh-blob-1" />
      <div className="hh-bg-blob hh-blob-2" />
      <div className="hh-grain" />

      <div className="container hh-grid">
        {/* Copy */}
        <div className="hh-copy">
          <div className="hh-eyebrow">
            <span className="hh-dot" />
            Welcome to GurukulamX
          </div>
          <h1 className="hh-title">
            Your academy.<br />
            <em className="hh-italic">In 3D,</em><br />
            in minutes.
          </h1>
          <p className="hh-sub">
            Launch a fully branded EdTech platform with AI-powered course building,
            multi-stream monetization, and a community that keeps students learning —
            no code, no setup, no friction.
          </p>
          <div className="hh-ctas">
            <Link to="/platform#features" className="hh-btn hh-btn--primary">
              Explore the platform
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/platform#contact" className="hh-btn hh-btn--ghost">
              Book a demo
            </Link>
          </div>
          <div className="hh-trust">
            <div className="hh-avatars">
              {['#FF8A52','#FFCBA8','#1A1A1A','#FFE5D6'].map((bg, i) => (
                <div key={i} className="hh-avatar" style={{ background: bg }} />
              ))}
            </div>
            <span className="hh-trust-text">
              <strong>200+ institutes</strong> already running on GurukulamX
            </span>
          </div>
        </div>

        {/* 3D Scene */}
        <div className="hh-scene" ref={sceneRef}>
          {/* Main blob */}
          <div className="hh-main-blob">
            <svg width="100%" height="100%" viewBox="0 0 400 400">
              <defs>
                <radialGradient id="blob-g" cx="35%" cy="30%">
                  <stop offset="0%" stopColor="#FFCBA8"/>
                  <stop offset="50%" stopColor="#FF8A52"/>
                  <stop offset="100%" stopColor="#E5551A"/>
                </radialGradient>
              </defs>
              <path fill="url(#blob-g)" d="M200,40 C280,40 360,90 360,180 C360,270 310,360 210,360 C100,360 40,290 40,200 C40,100 120,40 200,40 Z"/>
            </svg>
            <div className="hh-x-mark">X</div>
          </div>

          {/* Float card 1 — AI */}
          <div className="hh-float hh-float-1" ref={card1Ref}>
            <div className="hh-float-inner">
              <div className="hh-float-row">
                <div className="hh-float-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5Z" fill="white"/>
                  </svg>
                </div>
                <div>
                  <div className="hh-float-title">AI generated</div>
                  <div className="hh-float-sub">Course in 47s</div>
                </div>
              </div>
              <div className="hh-float-bar">
                <div className="hh-float-bar-fill" />
              </div>
            </div>
          </div>

          {/* Float card 2 — Revenue */}
          <div className="hh-float hh-float-2" ref={card2Ref}>
            <div className="hh-float-inner">
              <div className="hh-float-label">Today's revenue</div>
              <div className="hh-float-value">₹ 1,24,500</div>
              <div className="hh-float-trend">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
                +22.8% this week
              </div>
            </div>
          </div>

          {/* Float card 3 — Live students */}
          <div className="hh-float hh-float-3" ref={card3Ref}>
            <div className="hh-float-inner hh-float-dark">
              <div className="hh-pulse" />
              <div>
                <div className="hh-float-val-sm">2,847</div>
                <div className="hh-float-lbl-sm">students online</div>
              </div>
            </div>
          </div>

          {/* Orbs */}
          <div className="hh-orb hh-orb-1" />
          <div className="hh-orb hh-orb-2" />
          <div className="hh-orb hh-orb-3" />
        </div>
      </div>
    </section>
  )
}

/* ---- Features ---- */
const FEATURES = [
  {
    icon: 'ai-builder',
    title: 'AI-Powered Course Builder',
    desc: 'Auto-generate full courses — videos, notes, quizzes — from a single topic input. Course creation drops from weeks to minutes.',
    accent: true,
  },
  {
    icon: 'dashboard',
    title: '1-Click Revenue Dashboard',
    desc: 'Real-time earnings, growth %, and performance insights — visible instantly. No tab-hopping, no spreadsheets.',
    accent: false,
  },
  {
    icon: 'monetize',
    title: 'Multi-Stream Monetization',
    desc: 'Sell courses, memberships, webinars, digital products, and merchandise — all from a single unified system.',
    accent: true,
  },
  {
    icon: 'community',
    title: 'Community + Learning, Together',
    desc: "Built-in community layer where students engage, discuss, and learn — without ever leaving your platform.",
    accent: false,
  },
  {
    icon: 'rocket',
    title: 'Zero-Tech Setup. Launch in Minutes.',
    desc: 'Create and launch a fully branded academy with no coding, hosting, or technical setup. Just bring your content.',
    accent: true,
  },
]

function HomeFeatures() {
  return (
    <section className="hf-section" id="features">
      <div className="container">
        <div className="hf-header">
          <div className="hh-eyebrow" style={{ justifyContent: 'center' }}>
            <span className="hh-dot" />
            What's inside
          </div>
          <h2 className="hf-title">
            Five things that make<br />
            <em className="hh-italic">launching an academy</em> feel weightless.
          </h2>
        </div>

        <div className="hf-grid">
          {FEATURES.map((f, i) => (
            <FeatureCard key={i} index={i + 1} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---- CTA ---- */
function HomeCTA() {
  const tiltRef = useTilt(6)
  return (
    <section className="hc-section">
      <div className="container">
        <div ref={tiltRef} className="hc-card">
          <div className="hc-blob hc-blob-1" />
          <div className="hc-blob hc-blob-2" />
          <div className="hc-content">
            <div className="hh-eyebrow" style={{ color: 'rgba(255,255,255,0.85)', justifyContent: 'center' }}>
              <span className="hh-dot" style={{ background: '#FFE5D6' }} />
              Ready when you are
            </div>
            <h2 className="hc-title">
              Your academy.<br />
              <em style={{ fontStyle: 'italic', fontWeight: 500 }}>Live by next Tuesday.</em>
            </h2>
            <p className="hc-sub">
              Spin up a fully branded EdTech platform in three weeks or less.
              Bring your courses — we bring everything else.
            </p>
            <div className="hh-ctas" style={{ justifyContent: 'center' }}>
              <Link to="/platform#contact" className="hh-btn hh-btn--cream">
                Book a free demo
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/platform#pricing" className="hh-btn hh-btn--outline-white">
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomeHero />
        <HomeFeatures />
        <HomeCTA />
      </main>
      <Footer />
    </>
  )
}
