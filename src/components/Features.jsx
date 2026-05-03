import { FEATURES } from '../data/constants'
import Icon from './Icon'
import { useLanguage } from '../contexts/LanguageContext'
import { translations, featureTranslations } from '../data/translations'
import './Features.css'

export default function Features() {
  const { lang } = useLanguage()
  const t = translations[lang].features
  const ft = featureTranslations[lang]

  return (
    <section className="features section section--gray" id="features">
      <div className="container">
        <div className="text-center features__header">
          <p className="section-label">{t.label}</p>
          <h2 className="section-heading">
            {t.heading}{' '}
            <span className="text-orange">{t.accent}</span>
          </h2>
          <p className="section-subtext">{t.sub}</p>
        </div>

        <div className="features__grid">
          {FEATURES.map((f, i) => (
            <div
              key={f.icon}
              className={`features__card card ${f.highlight ? 'features__card--highlight' : ''}`}
            >
              <div className={`features__icon ${f.highlight ? 'features__icon--light' : ''}`}>
                <Icon name={f.icon} size={20} stroke={1.75} />
              </div>
              <h3 className={`features__title ${f.highlight ? 'features__title--light' : ''}`}>
                {ft[i].title}
              </h3>
              <p className={`features__desc ${f.highlight ? 'features__desc--light' : ''}`}>
                {ft[i].desc}
              </p>
              {f.highlight && (
                <span className="features__learn">{t.learn}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
