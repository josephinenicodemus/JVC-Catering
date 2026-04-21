import { useTranslation } from 'react-i18next'
import { useReveal } from '../hooks/useReveal'
import { Star } from 'lucide-react'

function RevealEl({ children, delay = 0 }) {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ${delay}ms ease, transform 0.7s ${delay}ms ease`,
      }}>
      {children}
    </div>
  )
}

export default function Testimonials() {
  const { t } = useTranslation()

  const tests = [
    { qKey: 't1q', nKey: 't1n', rKey: 't1r', init: 'A' },
    { qKey: 't2q', nKey: 't2n', rKey: 't2r', init: 'D' },
    { qKey: 't3q', nKey: 't3n', rKey: 't3r', init: 'F' },
  ]

  return (
    <section id="testimonials" className="section-pad bg-white">
      <div className="container-xl">
        <RevealEl>
          <div className="text-center max-w-xl mx-auto mb-16">
            <div className="eyebrow justify-center mb-3">{t('testimonials.eyebrow')}</div>
            <h2 style={{ fontFamily: '"Playfair Display", serif' }}
              className="text-4xl md:text-5xl font-semibold text-[#0D0D0D] mt-3">
              {t('testimonials.heading1')}{' '}
              <em style={{ color: '#C97A2A', fontStyle: 'italic' }}>{t('testimonials.heading2')}</em>
            </h2>
          </div>
        </RevealEl>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tests.map(({ qKey, nKey, rKey, init }, i) => (
            <RevealEl key={qKey} delay={i * 120}>
              <div className="relative bg-[#FAF9F6] rounded-2xl p-8 border border-zinc-200 transition-all duration-300 hover:-translate-y-1 hover:border-[#C97A2A] hover:shadow-xl h-full flex flex-col">
                {/* Decorative quote mark */}
                <div className="absolute top-4 right-6 pointer-events-none select-none"
                  style={{ fontFamily: '"Playfair Display", serif', fontSize: '5rem', lineHeight: 1, color: 'rgba(201,122,42,0.08)' }}>
                  "
                </div>
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="#f59e0b" stroke="none" />)}
                </div>
                {/* Quote */}
                <p className="text-sm text-zinc-500 italic leading-relaxed flex-1 mb-6">
                  {t(`testimonials.${qKey}`)}
                </p>
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg"
                    style={{ fontFamily: '"Playfair Display", serif', background: 'linear-gradient(135deg, #C97A2A, #1B6B3A)' }}>
                    {init}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0D0D0D]">{t(`testimonials.${nKey}`)}</div>
                    <div className="text-xs text-zinc-500">{t(`testimonials.${rKey}`)}</div>
                  </div>
                </div>
              </div>
            </RevealEl>
          ))}
        </div>
      </div>
    </section>
  )
}
