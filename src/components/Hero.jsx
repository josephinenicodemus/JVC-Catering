import { useTranslation } from 'react-i18next'
import { MessageCircle, UtensilsCrossed, ChevronDown } from 'lucide-react'

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const GOLD  = '#C97A2A'
const GREEN = '#1B6B3A'
const CREAM = '#F5F0E8'

export default function Hero() {
  const { t } = useTranslation()

  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-svh flex items-center overflow-hidden"
      style={{ background: '#0a0806' }}
    >

      {/* ════════════════════════════════════════
          BACKGROUND IMAGE — 4K African cuisine
      ════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=3840&h=2160&fit=crop&q=90&auto=format"
          alt="Premium African catering buffet spread"
          className="w-full h-full object-cover object-center"
          style={{ animation: 'heroZoom 22s ease-in-out infinite alternate' }}
          loading="eager"
          fetchpriority="high"
        />

        {/* Primary gradient — left-heavy so text always readable */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              108deg,
              rgba(8,6,4,0.96) 0%,
              rgba(8,6,4,0.88) 32%,
              rgba(8,6,4,0.55) 58%,
              rgba(8,6,4,0.15) 100%
            )`,
          }}
        />

        {/* Bottom vignette — grounds the scroll indicator */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080604]/75 via-transparent to-[#080604]/30" />
      </div>

      {/* ════════════════════════════════
          DECORATIVE ACCENTS
      ════════════════════════════════ */}

      {/* Left brand bar — orange → green, matches footer */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] z-20 pointer-events-none"
        style={{
          background: `linear-gradient(
            to bottom,
            transparent 8%,
            ${GOLD}  36%,
            ${GREEN} 64%,
            transparent 92%
          )`,
        }}
      />

      {/* Right vertical rule — desktop only */}
      <div
        className="absolute right-[6%] top-[20%] bottom-[20%] w-px z-10 hidden xl:block pointer-events-none"
        style={{
          background: `linear-gradient(
            to bottom,
            transparent,
            rgba(201,122,42,0.35) 35%,
            rgba(201,122,42,0.35) 65%,
            transparent
          )`,
        }}
      />

      {/* ════════════════════════════════
          MAIN CONTENT
      ════════════════════════════════ */}
      <div
        className="relative z-10 w-full max-w-[1280px] mx-auto flex flex-col justify-center min-h-svh"
        style={{
          padding: 'clamp(110px,14vw,150px) clamp(24px,6vw,80px) clamp(90px,10vw,120px)',
        }}
      >

        {/* ── Ornament ── */}
        <div
          className="flex items-center gap-4 mb-8"
          style={{ animation: 'fadeUp 0.6s 0.1s ease both' }}
        >
          <div className="h-px w-10" style={{ background: `rgba(201,122,42,0.55)` }} />
          {/* Cutlery icon matching portfolio */}
          <svg
            width="15" height="15" viewBox="0 0 24 24"
            fill="none" stroke={GOLD} strokeWidth="1.6"
            strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M3 2v7c0 1.1.9 2 2 2h2v11h2V11h2a2 2 0 0 0 2-2V2h-2v5H7V2H5v5H3V2z" />
            <path d="M18 2c0 0-3 2-3 6s3 6 3 6v8h2V2h-2z" />
          </svg>
          <div className="h-px w-10" style={{ background: `rgba(201,122,42,0.55)` }} />
        </div>

        {/* ── JVC — light weight ── */}
        <h1
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(4rem, 12.5vw, 10rem)',
            fontWeight: 400,
            color: CREAM,
            lineHeight: 0.88,
            letterSpacing: '-0.02em',
            animation: 'fadeUp 0.78s 0.25s ease both',
          }}
        >
          JVC
        </h1>

        {/* ── CATERING — bold, same cream ── */}
        <h1
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(4rem, 12.5vw, 10rem)',
            fontWeight: 700,
            color: CREAM,
            lineHeight: 0.88,
            letterSpacing: '-0.02em',
            marginBottom: '32px',
            animation: 'fadeUp 0.78s 0.38s ease both',
          }}
        >
          CATERING
        </h1>

        {/* ── Subtitle — italic serif, matches About blockquote style ── */}
        <div
          className="flex items-center gap-5 mb-12"
          style={{ animation: 'fadeUp 0.7s 0.52s ease both' }}
        >
          <div className="h-px w-9" style={{ background: 'rgba(245,240,232,0.28)' }} />
          <p
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(0.9rem, 1.7vw, 1.15rem)',
              fontStyle: 'italic',
              fontWeight: 400,
              color: 'rgba(245,240,232,0.72)',
              letterSpacing: '0.05em',
              whiteSpace: 'nowrap',
            }}
          >
            The service you need
          </p>
          <div className="h-px w-9" style={{ background: 'rgba(245,240,232,0.28)' }} />
        </div>

        {/* ── CTA Buttons ── */}
        <div
          className="flex flex-wrap gap-4"
          style={{ animation: 'fadeUp 0.7s 0.66s ease both' }}
        >
          {/* Primary — gold gradient */}
          <button
            onClick={() => scrollTo('#contact')}
            className="inline-flex items-center gap-2.5 rounded-[4px] font-bold uppercase tracking-[0.17em] transition-all duration-300 hover:-translate-y-[3px]"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: '0.72rem',
              padding: '15px 30px',
              background: `linear-gradient(135deg, ${GOLD} 0%, #E8A05C 100%)`,
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 28px rgba(201,122,42,0.38)',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 16px 40px rgba(201,122,42,0.55)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 8px 28px rgba(201,122,42,0.38)'}
          >
            <MessageCircle size={15} />
            {t('hero.cta1')}
          </button>

          {/* Secondary — ghost border */}
          <button
            onClick={() => scrollTo('#menu')}
            className="inline-flex items-center gap-2.5 rounded-[4px] font-bold uppercase tracking-[0.17em] transition-all duration-300 hover:-translate-y-[3px]"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: '0.72rem',
              padding: '15px 30px',
              background: 'transparent',
              color: CREAM,
              border: '1px solid rgba(245,240,232,0.28)',
              cursor: 'pointer',
              backdropFilter: 'blur(6px)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = `rgba(201,122,42,0.65)`
              e.currentTarget.style.color = GOLD
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(245,240,232,0.28)'
              e.currentTarget.style.color = CREAM
            }}
          >
            <UtensilsCrossed size={15} />
            {t('hero.cta2')}
          </button>
        </div>

        {/* ── Founder credit — bottom right, mirrors portfolio cover ── */}
        <div
          className="absolute hidden md:block text-right"
          style={{
            bottom: 'clamp(68px,8vw,95px)',
            right: 'clamp(24px,6vw,80px)',
            animation: 'fadeIn 1s 1.1s ease both',
          }}
        >
          <div
            className="ml-auto mb-2 h-px w-12"
            style={{ background: `rgba(201,122,42,0.45)` }}
          />
          <p style={{
            fontFamily: '"Playfair Display", serif',
            color: 'rgba(245,240,232,0.38)',
            fontSize: '0.62rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
          }}>
            Veronica Nguma
          </p>
          <p style={{
            color: 'rgba(245,240,232,0.20)',
            fontSize: '0.56rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            marginTop: '3px',
          }}>
            Founder · Est. 2016
          </p>
        </div>
      </div>

      {/* ════════════════════════════════
          SCROLL INDICATOR
      ════════════════════════════════ */}
      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 bg-transparent border-none cursor-pointer transition-colors duration-300"
        style={{
          color: 'rgba(245,240,232,0.30)',
          animation: 'fadeIn 1s 1.4s ease both',
        }}
        onMouseEnter={e => e.currentTarget.style.color = GOLD}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.30)'}
      >
        <span style={{
          fontSize: '0.52rem',
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          fontWeight: 600,
        }}>
          Scroll
        </span>
        <ChevronDown size={14} style={{ animation: 'scrollBounce 2s ease-in-out infinite' }} />
      </button>

      {/* ════════════════════════════════
          KEYFRAMES
      ════════════════════════════════ */}
      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.00); }
          to   { transform: scale(1.06); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0);  }
          50%      { transform: translateY(6px); }
        }
      `}</style>
    </section>
  )
}
