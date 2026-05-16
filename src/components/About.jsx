import { useTranslation } from 'react-i18next'
import { useReveal } from '../hooks/useReveal'
import {
  Award,
  Home,
  Handshake,
  Heart,
  SlidersHorizontal,
  Leaf,
} from 'lucide-react'

import founderImg from '../FOUNDER.jpg'
import accentImg from '../Photo.jpg'

const VALS = [
  { icon: Award, k: '1' },
  { icon: Home, k: '2' },
  { icon: Handshake, k: '3' },
  { icon: Heart, k: '4' },
  { icon: SlidersHorizontal, k: '5' },
  { icon: Leaf, k: '6' },
]

function RevealEl({
  children,
  delay = 0,
  dir = 'up',
  className = '',
}) {
  const [ref, visible] = useReveal()

  const base =
    dir === 'left'
      ? {
          opacity: 0,
          transform: 'translateX(-36px)',
        }
      : dir === 'right'
        ? {
            opacity: 0,
            transform: 'translateX(36px)',
          }
        : {
            opacity: 0,
            transform: 'translateY(28px)',
          }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...base,
        transition: `opacity 0.7s ${delay}ms cubic-bezier(0.4,0,0.2,1),
        transform 0.7s ${delay}ms cubic-bezier(0.4,0,0.2,1)`,

        ...(visible
          ? {
              opacity: 1,
              transform: 'none',
            }
          : {}),
      }}
    >
      {children}
    </div>
  )
}

export default function About() {
  const { t } = useTranslation()

  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 md:py-24 px-4 bg-white"
    >

      {/* SOFT GLOW */}

      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{
          background: 'rgba(201,122,42,0.05)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-14 xl:gap-24 items-center">

          {/* IMAGE COLUMN */}

          <RevealEl dir="left">

            <div className="relative">

              {/* MAIN IMAGE */}

              <div
                className="rounded-[30px] overflow-hidden aspect-[3/4] max-h-[620px]"
                style={{
                  boxShadow:
                    '0 30px 80px rgba(0,0,0,0.12)',
                }}
              >

                <img
                  src={founderImg}
                  alt="Veronica Nguma — Founder JVC Catering"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />

              </div>

              {/* YEARS BADGE */}

              <div
                className="absolute top-6 -left-5 rounded-2xl px-5 py-4 text-center hidden md:block shadow-xl"
                style={{
                  background: '#C97A2A',
                }}
              >

                <strong
                  style={{
                    fontFamily:
                      '"Playfair Display", serif',
                  }}
                  className="block text-3xl font-bold text-white leading-none"
                >
                  25
                  <span className="text-white/70">
                    +
                  </span>
                </strong>

                <span className="block text-[0.58rem] tracking-[0.25em] uppercase text-white/80 mt-1">
                  {t('about.yearsLabel')}
                </span>

              </div>

              {/* SMALL ACCENT PHOTO */}

              <div
                className="absolute -bottom-6 -right-6 w-36 h-36 rounded-2xl overflow-hidden border-4 border-white shadow-xl hidden md:block"
              >

                <img
                  src={accentImg}
                  alt="JVC Catering Team"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />

              </div>

            </div>

          </RevealEl>

          {/* TEXT COLUMN */}

          <RevealEl dir="right">

            <div
              className="uppercase tracking-[0.25em] text-xs font-semibold mb-5"
              style={{
                color: '#C97A2A',
              }}
            >
              {t('about.eyebrow')}
            </div>

            {/* HEADING */}

            <h2
              style={{
                fontFamily:
                  '"Playfair Display", serif',
                color: '#0D0D0D',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                fontWeight: 600,
                fontSize:
                  'clamp(2.8rem, 5vw, 4.8rem)',
              }}
              className="mb-6"
            >
              {t('about.heading1')}{' '}
              {t('about.heading2')}
            </h2>

            {/* PARAGRAPHS */}

            <div className="space-y-5 mb-8">

              <p
                className="text-zinc-500 text-sm md:text-base leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: t('about.p1'),
                }}
              />

              <p
                className="text-zinc-500 text-sm md:text-base leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: t('about.p2'),
                }}
              />

              <p
                className="text-zinc-500 text-sm md:text-base leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: t('about.p3'),
                }}
              />

            </div>

            {/* QUOTE */}

            <div
              className="pl-5 py-5 pr-5 mb-9 rounded-r-2xl"
              style={{
                borderLeft:
                  '4px solid #C97A2A',
                background: '#F7F1E8',
              }}
            >

              <p
                style={{
                  fontFamily:
                    '"Playfair Display", serif',
                }}
                className="text-xl italic text-[#0D0D0D] leading-snug"
              >
                {t('about.quote')}
              </p>

              <span className="text-xs text-zinc-500 mt-3 block">
                {t('about.quoteAttr')}
              </span>

            </div>

            {/* VALUES GRID */}

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

              {VALS.map(
                (
                  {
                    icon: Icon,
                    k,
                  },
                  i
                ) => (
                  <div
                    key={k}
                    className="p-5 rounded-2xl border border-zinc-200 bg-[#FAF9F6] transition-all duration-300 hover:border-[#C97A2A] hover:-translate-y-1 hover:shadow-lg"
                    style={{
                      transitionDelay: `${i * 50}ms`,
                    }}
                  >

                    <Icon
                      size={18}
                      style={{
                        color: '#C97A2A',
                      }}
                      className="mb-3"
                    />

                    <h5 className="text-[0.9rem] font-bold text-[#0D0D0D] mb-1.5">
                      {t(`about.val${k}h`)}
                    </h5>

                    <p className="text-xs text-zinc-500 leading-relaxed">
                      {t(`about.val${k}p`)}
                    </p>

                  </div>
                )
              )}

            </div>

          </RevealEl>

        </div>

      </div>

    </section>
  )
}
