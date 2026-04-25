import { useTranslation } from 'react-i18next'
import { useReveal } from '../hooks/useReveal'
import { Heart, Briefcase, PartyPopper, ArrowRight, Check } from 'lucide-react'

const SERVICES = [
  {
    key: 's1',
    icon: Heart,
    img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=3840&h=2160&fit=crop&q=95',
    alt: 'Wedding Catering',
    lists: ['s1l1', 's1l2', 's1l3', 's1l4'],
    color: '#C97A2A',
  },
  {
    key: 's2',
    icon: Briefcase,
    img: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=3840&h=2160&fit=crop&q=95',
    alt: 'Corporate Events',
    lists: ['s2l1', 's2l2', 's2l3', 's2l4'],
    color: '#1B6B3A',
  },
  {
    key: 's3',
    icon: PartyPopper,
    img: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=3840&h=2160&fit=crop&q=95',
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
    <section id="services" className="section-pad relative overflow-hidden" style={{ background: '#FAF9F6' }}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C97A2A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1B6B3A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-xl relative z-10">
        <RevealEl>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="eyebrow justify-center mb-3" style={{ color: '#C97A2A' }}>
              {t('services.eyebrow')}
            </div>
            <h2 
              style={{ 
                fontFamily: '"Playfair Display", serif',
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 400,
                lineHeight: 1.2,
              }}
              className="text-[#0D0D0D] mt-3 mb-4"
            >
              {t('services.heading1')}{' '}
              <em 
                style={{ 
                  color: '#C97A2A', 
                  fontStyle: 'italic',
                  fontWeight: 600,
                }}
              >
                {t('services.heading2')}
              </em>
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xl mx-auto">
              {t('services.sub')}
            </p>
          </div>
        </RevealEl>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map(({ key, icon: Icon, img, alt, lists, color }, i) => (
            <RevealEl key={key} delay={i * 120}>
              <div 
                className="group bg-white rounded-2xl overflow-hidden border border-zinc-200/60 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
                style={{
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 20px 60px ${color}25`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)'
                }}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img 
                    src={img} 
                    alt={alt} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop&q=85'
                    }}
                  />
                  {/* Icon overlay on image */}
                  <div 
                    className="absolute bottom-4 left-4 z-20 w-12 h-12 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                    style={{ 
                      background: 'rgba(255,255,255,0.95)', 
                      color: color,
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <Icon size={20} />
                  </div>
                </div>

                {/* Body */}
                <div className="p-7 flex flex-col flex-1">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ 
                      background: `${color}15`, 
                      color: color,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  
                  <h3 
                    style={{ 
                      fontFamily: '"Playfair Display", serif',
                      fontSize: '1.5rem',
                      fontWeight: 600,
                    }}
                    className="text-[#0D0D0D] mb-3 group-hover:text-[#C97A2A] transition-colors duration-300"
                  >
                    {t(`services.${key}h`)}
                  </h3>
                  
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {t(`services.${key}p`)}
                  </p>
                  
                  <ul className="flex flex-col gap-3 mb-6 flex-1">
                    {lists.map(lk => (
                      <li 
                        key={lk} 
                        className="flex items-center gap-3 text-sm text-[#0D0D0D] group/item hover:translate-x-1 transition-transform duration-200"
                      >
                        <div 
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: `${color}20` }}
                        >
                          <Check size={11} style={{ color: color, strokeWidth: 3 }} />
                        </div>
                        <span className="text-zinc-600">{t(`services.${lk}`)}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={scrollTo}
                    className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 group/link hover:gap-3"
                    style={{ color: color }}
                  >
                    <span>{t('services.cta')}</span>
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-1" />
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
