import { useTranslation } from 'react-i18next'
import { MessageCircle, UtensilsCrossed, ChevronDown } from 'lucide-react'

export default function Hero() {
  const { t } = useTranslation()

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="hero" className="relative min-h-svh flex overflow-hidden bg-[#0D0D0D]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=2000&h=1400&fit=crop&q=90"
          alt="Premium Catering Setup"
          className="w-full h-full object-cover animate-hero-zoom"
          loading="eager"
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-transparent to-[#0D0D0D]/30" />
      </div>

      {/* Content */}
      <div className="container-xl relative z-10 flex flex-col justify-center pt-28 pb-32 md:pb-40">
        {/* Badge */}
        <div className="flex items-center gap-3 mb-8"
          style={{ animation: 'fadeUp 0.6s 0.3s ease both' }}>
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border"
            style={{ background: 'rgba(201,122,42,0.1)', borderColor: 'rgba(201,122,42,0.3)' }}>
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-dot flex-shrink-0" />
            <span className="text-[0.65rem] font-bold tracking-[0.28em] uppercase text-[#E8A05C]">
              {t('hero.badge')}
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="mb-6"
          style={{ fontFamily: '"Playfair Display", serif', animation: 'fadeUp 0.7s 0.4s ease both' }}>
          <span className="block text-white/75 font-light text-5xl md:text-7xl lg:text-8xl leading-[1.0]">
            {t('hero.line1')}
          </span>
          <span className="block text-white font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.0]">
            {t('hero.line2')}
          </span>
          <span className="block font-light italic text-5xl md:text-7xl lg:text-8xl leading-[1.0]"
            style={{ color: '#E8A05C' }}>
            {t('hero.line3')}
          </span>
        </h1>

        {/* Sub */}
        <p className="mb-10 text-[0.72rem] font-medium tracking-[0.22em] uppercase text-white/38"
          style={{ animation: 'fadeUp 0.7s 0.55s ease both' }}>
          {t('hero.sub')}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-16"
          style={{ animation: 'fadeUp 0.7s 0.65s ease both' }}>
          <button onClick={() => scrollTo('#contact')} className="btn-primary">
            <MessageCircle size={15} />
            {t('hero.cta1')}
          </button>
          <button onClick={() => scrollTo('#menu')} className="btn-secondary">
            <UtensilsCrossed size={15} />
            {t('hero.cta2')}
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-0 border-t border-white/10 max-w-md"
          style={{ animation: 'fadeUp 0.7s 0.75s ease both' }}>
          {[
            { num: t('hero.stat1_num'), lbl: t('hero.stat1_lbl') },
            { num: t('hero.stat2_num'), lbl: t('hero.stat2_lbl') },
            { num: t('hero.stat3_num'), lbl: t('hero.stat3_lbl') },
          ].map((s, i) => (
            <div key={i} className="flex-1 pt-5 pr-5 border-r border-white/10 last:border-r-0">
              <div style={{ fontFamily: '"Playfair Display", serif' }}
                className="text-3xl md:text-4xl font-semibold text-white leading-none">
                {s.num.replace('+', '')}<span style={{ color: '#E8A05C' }}>{s.num.includes('+') ? '+' : s.num.includes('%') ? '' : ''}</span>
              </div>
              <div className="mt-1 text-[0.62rem] tracking-widest uppercase text-white/28">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
        style={{ animation: 'fadeIn 1s 1.2s ease both' }}
      >
        <span className="text-[0.55rem] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </button>

      {/* Decorative vertical line */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden xl:flex flex-col items-center gap-1">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-[rgba(201,122,42,0.5)] to-transparent" />
        <div className="w-1 h-1 rounded-full bg-[#C97A2A]" />
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-[rgba(201,122,42,0.5)] to-transparent" />
      </div>
    </section>
  )
}
