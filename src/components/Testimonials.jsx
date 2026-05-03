import { useState, useEffect, useRef } from 'react'
import { TESTIMONIALS } from '../data/constants'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'
import './Testimonials.css'

export default function Testimonials() {
  const { lang } = useLanguage()
  const tt = translations[lang].testimonials
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef(null)

  const next = () => setActive(i => (i + 1) % TESTIMONIALS.length)
  const prev = () => setActive(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

  useEffect(() => {
    if (paused) return
    timer.current = setInterval(next, 4500)
    return () => clearInterval(timer.current)
  }, [paused, active])

  const t = TESTIMONIALS[active]

  return (
    <section className="testimonials section section--gray" id="testimonials">
      <div className="container">
        <div className="text-center testimonials__header">
          <p className="section-label">{tt.label}</p>
          <h2 className="section-heading">
            {tt.heading} <span className="text-orange">{tt.accent}</span>
          </h2>
          <p className="section-subtext">{tt.sub}</p>
        </div>

        <div
          className="testimonials__card card"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <span className="testimonials__quote-mark">"</span>

          <p key={active} className="testimonials__text animate-fade-up">
            "{t.quote}"
          </p>

          <div className="testimonials__author">
            <div className="testimonials__avatar">{t.initials}</div>
            <div>
              <p className="testimonials__author-name">{t.author}</p>
              <p className="testimonials__author-role">{t.role}</p>
            </div>
            <div className="testimonials__stars" aria-label="5 stars">
              ★★★★★
            </div>
          </div>

          <div className="testimonials__nav">
            <div className="testimonials__dots">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot ${i === active ? 'testimonials__dot--active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="testimonials__arrows">
              <button className="testimonials__arrow" onClick={prev} aria-label="Previous">‹</button>
              <button className="testimonials__arrow" onClick={next} aria-label="Next">›</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
