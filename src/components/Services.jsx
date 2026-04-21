import { useTranslation } from 'react-i18next'
import { useReveal } from '../hooks/useReveal'
import { Heart, Briefcase, PartyPopper, ArrowRight, Check } from 'lucide-react'

const SERVICES = [
  {
    key: 's1',
    icon: Heart,
    img: 'https://images.unsplash.com/photo-1519225421980-715cb0202128?w=800&h=500&fit=crop&q=85',
    alt: 'Wedding Catering',
    lists: ['s1l1', 's1l2', 's1l3', 's1l4'],
    color: '#C97A2A',
  },
  {
    key: 's2',
    icon: Briefcase,
    img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=500&fit=crop&q=85',
    alt: 'Corporate Events',
    lists: ['s2l1', 's2l2', 's2l3', 's2l4'],
    color: '#1B6B3A',
  },
  {
    key: 's3',
    icon: PartyPopper,
    img: 'https://images.unsplash.com/photo-1530103862676-de3c9a59af57?w=800&h=500&fit=crop&q=85',
    alt: 'Private Gatherings',
    lists: ['s3l1', 's3l2', 's3l3', 's3l4'],
    color: '#C97A2A',
  },
]

function RevealEl({ children, delay = 0, className = '' }) {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ${delay}ms ease, transform 0.7s ${delay}ms ease`,
      }}>
      {children}
    </div>
  )
}

export default function Services() {
  const { t } = useTranslation()

  const scrollTo = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="section-pad" style={{ background: '#FAF9F6' }}>
      <div className="container-xl">
        <RevealEl>
          <div className="text-center max-w-xl mx-auto mb-16">
            <div className="eyebrow justify-center mb-3">{t('services.eyebrow')}</div>
            <h2 style={{ fontFamily: '"Playfair Display", serif' }}
              className="text-4xl md:text-5xl font-semibold text-[#0D0D0D] mt-3 mb-4">
              {t('services.heading1')}{' '}
              <em style={{ color: '#C97A2A', fontStyle: 'italic' }}>{t('services.heading2')}</em>
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed">{t('services.sub')}</p>
          </div>
        </RevealEl>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ key, icon: Icon, img, alt, lists, color }, i) => (
            <RevealEl key={key} delay={i * 120}>
              <div className="group bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:-translate-y-2 hover:shadow-2xl transition-all duration-400 h-full flex flex-col">
                {/* Image */}
                <div className="h-56 overflow-hidden">
                  <img src={img} alt={alt} loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110" />
                </div>
                {/* Body */}
                <div className="p-7 flex flex-col flex-1">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${color}18`, color }}>
                    <Icon size={18} />
                  </div>
                  <h3 style={{ fontFamily: '"Playfair Display", serif' }}
                    className="text-xl font-semibold text-[#0D0D0D] mb-2.5 group-hover:text-[#C97A2A] transition-colors">
                    {t(`services.${key}h`)}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-5">
                    {t(`services.${key}p`)}
                  </p>
                  <ul className="flex flex-col gap-2 mb-6 flex-1">
                    {lists.map(lk => (
                      <li key={lk} className="flex items-center gap-2.5 text-sm text-[#0D0D0D]">
                        <Check size={13} style={{ color: '#2A9D5C', flexShrink: 0 }} />
                        {t(`services.${lk}`)}
                      </li>
                    ))}
                  </ul>
                  <button onClick={scrollTo}
                    className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#C97A2A] transition-all group/link hover:gap-3">
                    {t('services.cta')}
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </RevealEl>
          ))}
        </div>
      </div>
    </section>
  )
}
