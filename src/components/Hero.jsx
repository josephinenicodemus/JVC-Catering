import { useTranslation } from 'react-i18next'
import { MessageCircle, UtensilsCrossed, ChevronDown } from 'lucide-react'

export default function Hero() {
  const { t } = useTranslation()

  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-svh flex items-center justify-start overflow-hidden bg-[#0D0D0D]"
    >
      {/* ─── 4K Background Image - Event Catering ─── */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555244162-803834f70033?w=3840&h=2160&fit=crop&q=95&auto=format"
          alt="JVC Catering - Elegant Event Buffet Setup"
          className="w-full h-full object-cover object-center"
          style={{ animation: 'heroZoom 24s ease-in-out infinite alternate' }}
          loading="eager"
          fetchpriority="high"
        />

        {/* Cinematic gradient overlay - optimized for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(105deg,
              rgba(13,13,13,0.95) 0%,
              rgba(13,13,13,0.85) 25%,
              rgba(13,13,13,0.55) 50%,
              rgba(13,13,13,0.25) 100%)`,
          }}
        />

        {/* Bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-[#0D0D0D]/30" />

        {/* Luxury film-grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
            backgroundSize: '256px 256px',
            opacity: 0.4,
            mixBlendMode: 'overlay',
          }}
        />
      </div>

      {/* ─── Left accent bar ─── */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[4px] z-20 pointer-events-none hidden sm:block"
        style={{
          background:
            'linear-gradient(to bottom, transparent 5%, #C97A2A 35%, #1B6B3A 65%, transparent 95%)',
        }}
      />

      {/* ─── Right decorative rule ─── */}
      <div
        className="absolute right-[5%] top-[20%] bottom-[20%] w-px z-10 hidden xl:block pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent, rgba(201,122,42,0.5) 35%, rgba(201,122,42,0.5) 65%, transparent)',
        }}
      />

      {/* ─── Main Content ─── */}
      <div
        className="relative z-10 w-full max-w-[1400px] mx-auto
          px-6 sm:px-10 lg:px-16 xl:px-24
          flex flex-col justify-center min-h-svh"
        style={{
          paddingTop: 'clamp(100px, 14vw, 140px)',
          paddingBottom: 'clamp(80px, 10vw, 120px)',
        }}
      >
        {/* ── Ornament divider ── */}
        <div
          className="flex items-center gap-4 mb-8 sm:mb-10"
          style={{ animation: 'fadeUp 0.8s 0.2s ease both' }}
        >
          <div className="h-px w-10 sm:w-16" style={{ background: 'rgba(201,122,42,0.6)' }} />
          <svg
            width="18" height="18" viewBox="0 0 24 24"
            fill="none" stroke="#C97A2A" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round"
            className="flex-shrink-0"
          >
            <path d="M3 2v7c0 1.1.9 2 2 2h2v11h2V11h2a2 2 0 0 0 2-2V2h-2v5H7V2H5v5H3V2z" />
            <path d="M18 2c0 0-3 2-3 6s3 6 3 6v8h2V2h-2z" />
          </svg>
          <div className="h-px w-10 sm:w-16" style={{ background: 'rgba(201,122,42,0.6)' }} />
        </div>

        {/* ── Main Title: JVC Catering ── */}
        <div className="mb-6 sm:mb-8">
          <h1
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(3.5rem, 11vw, 9rem)',
              fontWeight: 400,
              color: '#F5F0E8',
              lineHeight: 0.9,
              letterSpacing: '-0.015em',
              animation: 'fadeUp 0.9s 0.35s ease both',
            }}
            className="leading-none"
          >
            JVC
          </h1>
          <h1
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(3.5rem, 11vw, 9rem)',
              fontWeight: 700,
              color: '#F5F0E8',
              lineHeight: 0.9,
              letterSpacing: '-0.015em',
              animation: 'fadeUp 0.9s 0.5s ease both',
            }}
            className="leading-none"
          >
            Catering
          </h1>
        </div>

        {/* ── Italic subtitle ── */}
        <div
          className="flex items-center gap-4 sm:gap-6 mb-10 sm:mb-14"
          style={{ animation: 'fadeUp 0.8s 0.65s ease both' }}
        >
          <div className="h-px w-8 sm:w-12" style={{ background: 'rgba(245,240,232,0.35)' }} />
          <p
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(1rem, 2.2vw, 1.35rem)',
              fontStyle: 'italic',
              fontWeight: 400,
              color: 'rgba(245,240,232,0.75)',
              letterSpacing: '0.08em',
              whiteSpace: 'nowrap',
            }}
          >
            The service you need
          </p>
          <div className="h-px w-8 sm:w-12" style={{ background: 'rgba(245,240,232,0.35)' }} />
        </div>

        {/* ── CTA row ── */}
        <div
          className="flex flex-wrap gap-3 sm:gap-5"
          style={{ animation: 'fadeUp 0.8s 0.8s ease both' }}
        >
          {/* Primary CTA */}
          <button
            onClick={() => scrollTo('#contact')}
            className="inline-flex items-center gap-2.5
              px-6 sm:px-8 py-[14px] sm:py-4 rounded-[4px]
              text-white text-[0.7rem] sm:text-[0.75rem] font-bold tracking-[0.18em] uppercase
              transition-all duration-300 hover:-translate-y-[3px] active:translate-y-0
              focus:outline-none focus:ring-2 focus:ring-[#C97A2A]/50"
            style={{
              fontFamily: '"Playfair Display", serif',
              background: 'linear-gradient(135deg, #C97A2A 0%, #E8A05C 100%)',
              boxShadow: '0 8px 28px rgba(201,122,42,0.35)',
            }}
            onMouseEnter={e =>
              (e.currentTarget.style.boxShadow = '0 16px 40px rgba(201,122,42,0.55)')
            }
            onMouseLeave={e =>
              (e.currentTarget.style.boxShadow = '0 8px 28px rgba(201,122,42,0.35)')
            }
          >
            <MessageCircle size={16} className="flex-shrink-0" />
            <span>{t('hero.cta1') || 'Request a Quote'}</span>
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => scrollTo('#menu')}
            className="inline-flex items-center gap-2.5
              px-6 sm:px-8 py-[14px] sm:py-4 rounded-[4px]
              text-[#F5F0E8] text-[0.7rem] sm:text-[0.75rem] font-bold tracking-[0.18em] uppercase
              border transition-all duration-300 hover:-translate-y-[3px] active:translate-y-0
              focus:outline-none focus:ring-2 focus:ring-[#F5F0E8]/30"
            style={{
              fontFamily: '"Playfair Display", serif',
              borderColor: 'rgba(245,240,232,0.35)',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(201,122,42,0.7)'
              e.currentTarget.style.color = '#C97A2A'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(245,240,232,0.35)'
              e.currentTarget.style.color = '#F5F0E8'
            }}
          >
            <UtensilsCrossed size={16} className="flex-shrink-0" />
            <span>{t('hero.cta2') || 'Explore Menu'}</span>
          </button>
        </div>
      </div>

      {/* ─── Scroll indicator ─── */}
      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10
          flex flex-col items-center gap-2 bg-transparent border-none cursor-pointer
          transition-all duration-300 group"
        style={{
          animation: 'fadeIn 1s 1.5s ease both',
        }}
      >
        <span
          className="text-[0.5rem] sm:text-[0.55rem] tracking-[0.3em] uppercase font-semibold
            text-[rgba(245,240,232,0.4)] group-hover:text-[#C97A2A] transition-colors duration-300"
        >
          Scroll
        </span>
        <ChevronDown 
          size={16} 
          className="text-[rgba(245,240,232,0.4)] group-hover:text-[#C97A2A] transition-colors duration-300"
          style={{ animation: 'scrollBounce 2.2s ease-in-out infinite' }} 
        />
      </button>

      {/* ─── Global keyframes ─── */}
      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.0); }
          to   { transform: scale(1.08); }
        }
        @keyframes fadeUp {
          from { 
            opacity: 0; 
            transform: translateY(40px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scrollBounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(8px); }
          60% { transform: translateY(4px); }
        }
      `}</style>
    </section>
  )
}
