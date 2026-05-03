import Icon from './Icon'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'
import './Showcase.css'

const TRUST_ICONS = ['layout', 'users', 'shield', 'chart']

export default function Showcase() {
  const { lang } = useLanguage()
  const t = translations[lang].showcase

  return (
    <section className="showcase section section--white" id="showcase">
      <div className="container">
        <div className="text-center showcase__header">
          <p className="section-label">{t.label}</p>
          <h2 className="section-heading">
            {t.heading}{' '}
            <span className="text-orange">{t.accent}</span>
          </h2>
          <p className="section-subtext">{t.sub}</p>
        </div>

        {/* Desktop image */}
        <div className="showcase__device showcase__device--desktop">
          <img
            src={`${import.meta.env.BASE_URL}images/desktop-mockup.png`}
            alt="GurukulamX Platform — Desktop"
            className="showcase__img"
            loading="lazy"
          />
        </div>

        {/* Mobile image */}
        <div className="showcase__device showcase__device--mobile">
          <img
            src={`${import.meta.env.BASE_URL}images/mobile-mockup.png`}
            alt="GurukulamX Platform — Mobile"
            className="showcase__img"
            loading="lazy"
          />
        </div>

        {/* Trust strip */}
        <div className="showcase__trust">
          {translations[lang].hero.pills.map((label, i) => (
            <span key={label} className="showcase__trust-item">
              <Icon name={TRUST_ICONS[i]} size={16} stroke={1.8} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
              <span>{label}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
