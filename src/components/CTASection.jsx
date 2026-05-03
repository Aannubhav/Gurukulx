import Icon from './Icon'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'
import './CTASection.css'

export default function CTASection() {
  const { lang } = useLanguage()
  const t = translations[lang].cta

  return (
    <section className="cta section" id="cta">
      <div className="cta__blob" />
      <div className="cta__dots" />

      <div className="container cta__inner">
        <span className="cta__eyebrow">{t.eyebrow}</span>

        <h2 className="section-heading cta__heading">
          {t.heading}{' '}
          <em className="text-orange" style={{ fontStyle: 'italic', fontWeight: 400 }}>{t.accent}</em>
        </h2>

        <p className="section-subtext cta__sub">{t.sub}</p>

        <div className="cta__actions">
          <a href="#contact" className="btn btn--primary btn--lg">
            {t.cta1} <Icon name="arrowRight" size={16} />
          </a>
          <a href="#pricing" className="btn btn--outline btn--lg">
            {t.cta2}
          </a>
        </div>

        <p className="cta__fine">{t.fine}</p>
      </div>
    </section>
  )
}
