import { useState } from 'react'
import Icon from './Icon'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'
import './Contact.css'

export default function Contact() {
  const { lang } = useLanguage()
  const t = translations[lang].contact
  const [form, setForm] = useState({
    name: '', email: '', phone: '', institute: '',
    students: '0-500', interest: 'Starter', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="contact section" id="contact">
      <div className="contact__blob" />
      <div className="contact__dots" />

      <div className="container contact__inner">
        {/* Left — info */}
        <div className="contact__info">
          <p className="contact__eyebrow">{t.label}</p>
          <h2 className="section-heading">
            {t.heading}{' '}
            <em className="text-orange" style={{ fontStyle: 'italic', fontWeight: 400 }}>{t.accent}</em>
          </h2>
          <p className="contact__sub">{t.sub}</p>

          <div className="contact__details">
            {[
              { icon: 'mail',  ...t.details[0] },
              { icon: 'users', ...t.details[1] },
              { icon: 'globe', ...t.details[2] },
            ].map(c => (
              <div key={c.label} className="contact__detail">
                <div className="contact__detail-icon">
                  <Icon name={c.icon} size={18} />
                </div>
                <div>
                  <div className="contact__detail-label">{c.label}</div>
                  <div className="contact__detail-value">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="contact__callout">
            <div className="contact__callout-head">
              <Icon name="zap" size={14} style={{ color: 'var(--color-primary)' }} />
              <span>{t.callout.head}</span>
            </div>
            <p>{t.callout.body}</p>
          </div>
        </div>

        {/* Right — form */}
        <div className="contact__form-card">
          {submitted ? (
            <div className="contact__success">
              <div className="contact__success-icon">
                <Icon name="check" size={28} stroke={2.5} />
              </div>
              <h3>Thanks, {form.name.split(' ')[0] || 'there'}!</h3>
              <p>
                {t.form.success}{' '}
                <strong>{form.email}</strong> {t.form.successEnd}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact__form">
              <div className="contact__form-row">
                <div className="contact__field">
                  <label>{t.form.name}</label>
                  <input
                    type="text" required placeholder="Rajiv Sharma"
                    value={form.name} onChange={e => update('name', e.target.value)}
                  />
                </div>
                <div className="contact__field">
                  <label>{t.form.email}</label>
                  <input
                    type="email" required placeholder="you@institute.com"
                    value={form.email} onChange={e => update('email', e.target.value)}
                  />
                </div>
              </div>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label>{t.form.phone}</label>
                  <input
                    type="tel" placeholder="+91 98765 43210"
                    value={form.phone} onChange={e => update('phone', e.target.value)}
                  />
                </div>
                <div className="contact__field">
                  <label>{t.form.institute}</label>
                  <input
                    type="text" placeholder="ClearIAS Academy"
                    value={form.institute} onChange={e => update('institute', e.target.value)}
                  />
                </div>
              </div>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label>{t.form.students}</label>
                  <select value={form.students} onChange={e => update('students', e.target.value)}>
                    <option>0-500</option>
                    <option>500-2,000</option>
                    <option>2,000-10,000</option>
                    <option>10,000+</option>
                  </select>
                </div>
                <div className="contact__field">
                  <label>{t.form.interest}</label>
                  <select value={form.interest} onChange={e => update('interest', e.target.value)}>
                    <option>Starter</option>
                    <option>Professional</option>
                    <option>Enterprise</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
              </div>
              <div className="contact__field">
                <label>{t.form.message}</label>
                <textarea
                  rows={3} placeholder="Tell us about your platform goals..."
                  value={form.message} onChange={e => update('message', e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn--primary btn--lg contact__submit">
                {t.form.submit} <Icon name="arrowRight" size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
