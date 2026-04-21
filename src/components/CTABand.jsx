import { useTranslation } from 'react-i18next'
import { useReveal } from '../hooks/useReveal'
import { MessageCircle } from 'lucide-react'

export default function CTABand() {
  const { t } = useTranslation()
  const [ref, visible] = useReveal()

  return (
    <div className="relative overflow-hidden text-center py-24 md:py-32 px-5"
      style={{ background: '#C97A2A' }}>
      {/* Giant watermark text */}
      <div className="absolute right-[-2rem] top-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{ fontFamily: '"Playfair Display", serif', fontSize: 'min(22rem,55vw)', fontWeight: 700, color: 'rgba(255,255,255,0.05)', lineHeight: 1, letterSpacing: '-0.04em' }}>
        JVC
      </div>
      <div ref={ref} className="relative z-10 max-w-2xl mx-auto transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(28px)' }}>
        <h2 style={{ fontFamily: '"Playfair Display", serif' }}
          className="text-4xl md:text-6xl font-light text-white mb-5">
          {t('cta.heading1')}{' '}
          <em style={{ fontStyle: 'italic' }}>{t('cta.heading2')}</em>
        </h2>
        <p className="text-white/72 text-base mb-9">{t('cta.sub')}</p>
        <a href="https://wa.me/255767620509?text=Hello%20JVC%20Catering%2C%20I%20would%20like%20to%20discuss%20my%20event."
          target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-white text-[#C97A2A] text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <MessageCircle size={18} style={{ color: '#25d366' }} />
          {t('cta.btn')}
        </a>
      </div>
    </div>
  )
}
