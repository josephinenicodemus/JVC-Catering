import { useTranslation } from 'react-i18next'
import { useReveal } from '../hooks/useReveal'
import { Award, Home, Handshake, Heart, SlidersHorizontal, Leaf } from 'lucide-react'
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

function RevealEl({ children, delay = 0, dir = 'up', className = '' }) {
  const [ref, visible] = useReveal()
  const base =
    dir === 'left'
      ? { opacity: 0, transform: 'translateX(-36px)' }
      : dir === 'right'
        ? { opacity: 0, transform: 'translateX(36px)' }
        : { opacity: 0, transform: 'translateY(28px)' }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...base,
        transition: `opacity 0.7s ${delay}ms cubic-bezier(0.4,0,0.2,1), transform 0.7s ${delay}ms cubic-bezier(0.4,0,0.2,1)`,
        ...(visible ? { opacity: 1, transform: 'none' } : {}),
      }}
    >
      {children}
    </div>
  )
}

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-14 xl:gap-24 items-center">

          {/* ── Image column ── */}
          <RevealEl dir="left">
            <div className="relative">

              {/* Main founder photo */}
              <div className="rounded-2xl overflow-hidden aspect-[3/4] max-h-[580px] shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
                <img
                  src={founderImg}
                  alt="Veronica Nguma — Founder JVC Catering"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Years badge */}
              <div
                className="absolute top-6 -left-5 rounded-2xl px-5 py-4 text-center hidden md:block shadow-xl"
                style={{ background: '#C97A2A' }}
              >
                <strong
                  style={{ fontFamily: '"Playfair Display", serif' }}
                  className="block text-3xl font-bold text-white leading-none"
                >
                  25
                  <span style={{ color: 'rgba(255,255,255,0.65)' }}>+</span>
                </strong>
                <span className="block text-[0.58rem] tracking-widest uppercase text-white/80 mt-1">
                  {t('about.yearsLabel')}
                </span>
              </div>

              {/* Accent photo */}
              <div className="absolute -bottom-6 -right-6 w-36 h-36 rounded-xl overflow-hidden border-4 border-white shadow-xl hidden md:block">
                <img
                  src={accentImg}
                  alt="JVC Catering Team"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

            </div>
          </RevealEl>

          {/* ── Text column ── */}
          <RevealEl dir="right">
            <div className="eyebrow mb-4">{t('about.eyebrow')}</div>

            <h2
              style={{ fontFamily: '"Playfair Display", serif' }}
              className="text-4xl md:text-5xl font-semibold leading-tight mb-6 text-[#0D0D0D]"
            >
              {t('about.heading1')}{' '}
              <em className="italic not-italic" style={{ color: '#C97A2A' }}>
                {t('about.heading2')}
              </em>
            </h2>

            <p
              className="text-zinc-500 text-sm leading-relaxed mb-4"
              dangerouslySetInnerHTML={{ __html: t('about.p1') }}
            />
            <p
              className="text-zinc-500 text-sm leading-relaxed mb-4"
              dangerouslySetInnerHTML={{ __html: t('about.p2') }}
            />
            <p
              className="text-zinc-500 text-sm leading-relaxed mb-7"
              dangerouslySetInnerHTML={{ __html: t('about.p3') }}
            />

            {/* Quote */}
            <div
              className="pl-5 py-4 mb-8 rounded-r-xl"
              style={{ borderLeft: '3px solid #C97A2A', background: '#F4EDE0' }}
            >
              <p
                style={{ fontFamily: '"Playfair Display", serif' }}
                className="text-lg italic text-[#0D0D0D] leading-snug"
              >
                {t('about.quote')}
              </p>
              <span className="text-xs text-zinc-500 mt-2 block">
                {t('about.quoteAttr')}
              </span>
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {VALS.map(({ icon: Icon, k }, i) => (
                <div
                  key={k}
                  className="p-4 rounded-xl border border-zinc-200 bg-[#FAF9F6] transition-all duration-300 hover:border-[#C97A2A] hover:-translate-y-1 hover:shadow-md cursor-default"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <Icon size={17} style={{ color: '#C97A2A' }} className="mb-2.5" />
                  <h5 className="text-[0.82rem] font-bold text-[#0D0D0D] mb-1">
                    {t(`about.val${k}h`)}
                  </h5>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {t(`about.val${k}p`)}
                  </p>
                </div>
              ))}
            </div>
          </RevealEl>

        </div>
      </div>
    </section>
  )
}