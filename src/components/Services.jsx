import { useTranslation } from 'react-i18next'
import { useReveal } from '../hooks/useReveal'
import {
  Heart,
  Briefcase,
  PartyPopper,
  ArrowRight,
  Check,
} from 'lucide-react'

const SERVICES = [
  {
    key: 's1',
    icon: Heart,
    img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600&q=85',
    alt: 'Wedding Catering',
    lists: ['s1l1', 's1l2', 's1l3', 's1l4'],
    color: '#C97A2A',
  },

  {
    key: 's2',
    icon: Briefcase,
    img: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=1600&q=85',
    alt: 'Corporate Events',
    lists: ['s2l1', 's2l2', 's2l3', 's2l4'],
    color: '#1B6B3A',
  },

  {
    key: 's3',
    icon: PartyPopper,
    img: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1600&q=85',
    alt: 'Private Gatherings',
    lists: ['s3l1', 's3l2', 's3l3', 's3l4'],
    color: '#C97A2A',
  },
]

function RevealEl({
  children,
  delay = 0,
  className = '',
}) {
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? 'translateY(0)'
          : 'translateY(20px)',
        transition: `all 0.7s ${delay}ms ease`,
      }}
    >
      {children}
    </div>
  )
}

export default function Services() {
  const { t } = useTranslation()

  const scrollTo = () => {
    const el = document.querySelector('#contact')

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      id="services"
      className="relative overflow-hidden py-20 md:py-24 px-4"
      style={{
        background: '#FAF9F6',
      }}
    >

      {/* SOFT BACKGROUND GLOWS */}

      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{
          background: 'rgba(201,122,42,0.05)',
        }}
      />

      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{
          background: 'rgba(27,107,58,0.05)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADING */}

        <RevealEl>

          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">

            <div
              className="uppercase tracking-[0.25em] text-xs font-semibold mb-5"
              style={{
                color: '#C97A2A',
              }}
            >
              {t('services.eyebrow')}
            </div>

            <h2
              className="mb-5"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: '#0D0D0D',
              }}
            >
              Premium Services
            </h2>

            <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations,
              every event receives our full creative vision,
              elegant presentation, and dedicated professional service.
            </p>

          </div>

        </RevealEl>

        {/* SERVICES GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

          {SERVICES.map(
            (
              {
                key,
                icon: Icon,
                img,
                alt,
                lists,
                color,
              },
              i
            ) => (
              <RevealEl
                key={key}
                delay={i * 120}
              >

                <div
                  className="group bg-white rounded-[30px] overflow-hidden border border-zinc-200/70 transition-all duration-500 h-full flex flex-col hover:-translate-y-2"
                  style={{
                    boxShadow:
                      '0 10px 35px rgba(0,0,0,0.05)',
                  }}
                >

                  {/* IMAGE */}

                  <div className="relative h-56 overflow-hidden">

                    <img
                      src={img}
                      alt={alt}
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src =
                          'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80'
                      }}
                    />

                    {/* SOFT IMAGE OVERLAY */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  </div>

                  {/* CONTENT */}

                  <div className="p-7 flex flex-col flex-1">

                    {/* ICON */}

                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                      style={{
                        background: `${color}12`,
                        color: color,
                      }}
                    >
                      <Icon size={20} />
                    </div>

                    {/* TITLE */}

                    <h3
                      className="mb-3"
                      style={{
                        fontFamily:
                          '"Playfair Display", serif',
                        fontSize: '1.95rem',
                        fontWeight: 600,
                        lineHeight: 1.15,
                        letterSpacing: '-0.02em',
                        color: '#0D0D0D',
                      }}
                    >
                      {t(`services.${key}h`)}
                    </h3>

                    {/* DESCRIPTION */}

                    <p className="text-zinc-500 text-[15px] leading-relaxed mb-6">
                      {t(`services.${key}p`)}
                    </p>

                    {/* FEATURES */}

                    <ul className="flex flex-col gap-3 mb-7 flex-1">

                      {lists.map(lk => (
                        <li
                          key={lk}
                          className="flex items-start gap-3"
                        >

                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center mt-[2px] flex-shrink-0"
                            style={{
                              background: `${color}15`,
                            }}
                          >
                            <Check
                              size={11}
                              style={{
                                color: color,
                                strokeWidth: 3,
                              }}
                            />
                          </div>

                          <span className="text-sm text-zinc-600 leading-relaxed">
                            {t(`services.${lk}`)}
                          </span>

                        </li>
                      ))}

                    </ul>

                    {/* CTA */}

                    <button
                      onClick={scrollTo}
                      className="flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase transition-all duration-300 hover:gap-3 mt-auto"
                      style={{
                        color: color,
                      }}
                    >

                      <span>
                        {t('services.cta')}
                      </span>

                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300"
                      />

                    </button>

                  </div>

                </div>

              </RevealEl>
            )
          )}

        </div>

      </div>

    </section>
  )
}
