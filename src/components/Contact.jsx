import { useState } from 'react'
import Icon from './Icon'
import './Contact.css'

export default function Contact() {
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
          <p className="contact__eyebrow">Contact</p>
          <h2 className="section-heading">
            Let's talk about{' '}
            <em className="text-orange" style={{ fontStyle: 'italic', fontWeight: 400 }}>your platform.</em>
          </h2>
          <p className="contact__sub">
            Tell us about your institute and what you'd like to build. We'll get back within one business day with a tailored demo.
          </p>

          <div className="contact__details">
            {[
              { icon: 'mail',  label: 'Email', value: 'hello@gurukulamx.com' },
              { icon: 'users', label: 'Sales', value: '+91 90211 11590' },
              { icon: 'globe', label: 'HQ',    value: 'Noida, India' },
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
              <span>Free 30-min consultation</span>
            </div>
            <p>
              Walk through your needs with a product expert. No commitment, no sales pitch — just a clear plan for what your platform could look like.
            </p>
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
                We've got your message and will reach out at{' '}
                <strong>{form.email}</strong> within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact__form">
              <div className="contact__form-row">
                <div className="contact__field">
                  <label>Your name</label>
                  <input
                    type="text" required placeholder="Rajiv Sharma"
                    value={form.name} onChange={e => update('name', e.target.value)}
                  />
                </div>
                <div className="contact__field">
                  <label>Email</label>
                  <input
                    type="email" required placeholder="you@institute.com"
                    value={form.email} onChange={e => update('email', e.target.value)}
                  />
                </div>
              </div>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label>Phone</label>
                  <input
                    type="tel" placeholder="+91 98765 43210"
                    value={form.phone} onChange={e => update('phone', e.target.value)}
                  />
                </div>
                <div className="contact__field">
                  <label>Institute / Organisation</label>
                  <input
                    type="text" placeholder="ClearIAS Academy"
                    value={form.institute} onChange={e => update('institute', e.target.value)}
                  />
                </div>
              </div>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label>Current student count</label>
                  <select value={form.students} onChange={e => update('students', e.target.value)}>
                    <option>0-500</option>
                    <option>500-2,000</option>
                    <option>2,000-10,000</option>
                    <option>10,000+</option>
                  </select>
                </div>
                <div className="contact__field">
                  <label>Interested in</label>
                  <select value={form.interest} onChange={e => update('interest', e.target.value)}>
                    <option>Starter</option>
                    <option>Professional</option>
                    <option>Enterprise</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
              </div>
              <div className="contact__field">
                <label>Message (optional)</label>
                <textarea
                  rows={3} placeholder="Tell us about your platform goals..."
                  value={form.message} onChange={e => update('message', e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn--primary btn--lg contact__submit">
                Send message <Icon name="arrowRight" size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
