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

      {/* ─── 4K Background Image ─── */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=3840&h=2160&fit=crop&q=95&auto=format"
          alt="Premium African Catering Buffet"
          className="w-full h-full object-cover object-center"
          style={{ animation: 'heroZoom 20s ease-in-out infinite alternate' }}
          loading="eager"
          fetchpriority="high"
        />

        {/* Left-heavy cinematic gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(105deg,
              rgba(10,8,6,0.97) 0%,
              rgba(10,8,6,0.90) 30%,
              rgba(10,8,6,0.60) 58%,
              rgba(10,8,6,0.18) 100%)`,
          }}
        />

        {/* Bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806]/80 via-transparent to-[#0a0806]/40" />

        {/* Luxury film-grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
            backgroundSize: '256px 256px',
            opacity: 0.4,
            mixBlendMode: 'overlay',
          }}
        />
      </div>

      {/* ─── Left accent bar ─── */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] z-20 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent 8%, #C97A2A 38%, #1B6B3A 62%, transparent 92%)',
        }}
      />

      {/* ─── Right decorative rule (desktop only) ─── */}
      <div
        className="absolute right-[7%] top-[22%] bottom-[22%] w-px z-10 hidden xl:block pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent, rgba(201,122,42,0.4) 40%, rgba(201,122,42,0.4) 60%, transparent)',
        }}
      />

      {/* ─── Main Content ─── */}
      <div
        className="relative z-10 w-full max-w-[1280px] mx-auto
          px-6 sm:px-10 lg:px-20
          flex flex-col justify-center min-h-svh"
        style={{
          paddingTop: 'clamp(120px, 16vw, 160px)',
          paddingBottom: 'clamp(100px, 12vw, 140px)',
        }}
      >

        {/* ── Ornament divider ── */}
        <div
          className="flex items-center gap-4 mb-9"
          style={{ animation: 'fadeUp 0.6s 0.15s ease both' }}
        >
          <div className="h-px w-12" style={{ background: 'rgba(201,122,42,0.55)' }} />
          <svg
            width="17" height="17" viewBox="0 0 24 24"
            fill="none" stroke="#C97A2A" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M3 2v7c0 1.1.9 2 2 2h2v11h2V11h2a2 2 0 0 0 2-2V2h-2v5H7V2H5v5H3V2z" />
            <path d="M18 2c0 0-3 2-3 6s3 6 3 6v8h2V2h-2z" />
          </svg>
          <div className="h-px w-12" style={{ background: 'rgba(201,122,42,0.55)' }} />
        </div>

        {/* ── JVC — light weight ── */}
        <h1
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(4.2rem, 13vw, 10.5rem)',
            fontWeight: 400,
            color: '#F5F0E8',
            lineHeight: 0.88,
            letterSpacing: '-0.02em',
            animation: 'fadeUp 0.78s 0.30s ease both',
          }}
        >
          JVC
        </h1>

        {/* ── CATERING — bold weight, same cream colour ── */}
        <h1
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(4.2rem, 13vw, 10.5rem)',
            fontWeight: 700,
            color: '#F5F0E8',
            lineHeight: 0.88,
            letterSpacing: '-0.02em',
            marginBottom: '36px',
            animation: 'fadeUp 0.78s 0.44s ease both',
          }}
        >
          CATERING
        </h1>

        {/* ── Italic subtitle — mirrors About's blockquote italic style ── */}
        <div
          className="flex items-center gap-5 mb-12"
          style={{ animation: 'fadeUp 0.7s 0.58s ease both' }}
        >
          <div className="h-px w-10" style={{ background: 'rgba(245,240,232,0.28)' }} />
          <p
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(0.92rem, 1.8vw, 1.18rem)',
              fontStyle: 'italic',
              fontWeight: 400,
              color: 'rgba(245,240,232,0.70)',
              letterSpacing: '0.055em',
              whiteSpace: 'nowrap',
            }}
          >
            The service you need
          </p>
          <div className="h-px w-10" style={{ background: 'rgba(245,240,232,0.28)' }} />
        </div>

        {/* ── CTA row ── */}
        <div
          className="flex flex-wrap gap-4"
          style={{ animation: 'fadeUp 0.7s 0.72s ease both' }}
        >
          {/* Primary CTA */}
          <button
            onClick={() => scrollTo('#contact')}
            className="inline-flex items-center gap-2.5
              px-7 py-[14px] rounded-[4px]
              text-white text-[0.72rem] font-bold tracking-[0.18em] uppercase
              transition-all duration-300 hover:-translate-y-[3px]"
            style={{
              fontFamily: '"Playfair Display", serif',
              background: 'linear-gradient(135deg, #C97A2A 0%, #E8A05C 100%)',
              boxShadow: '0 8px 28px rgba(201,122,42,0.38)',
            }}
            onMouseEnter={e =>
              (e.currentTarget.style.boxShadow = '0 16px 40px rgba(201,122,42,0.55)')
            }
            onMouseLeave={e =>
              (e.currentTarget.style.boxShadow = '0 8px 28px rgba(201,122,42,0.38)')
            }
          >
            <MessageCircle size={15} />
            {t('hero.cta1')}
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => scrollTo('#menu')}
            className="inline-flex items-center gap-2.5
              px-7 py-[14px] rounded-[4px]
              text-[#F5F0E8] text-[0.72rem] font-bold tracking-[0.18em] uppercase
              border transition-all duration-300 hover:-translate-y-[3px]"
            style={{
              fontFamily: '"Playfair Display", serif',
              borderColor: 'rgba(245,240,232,0.28)',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(201,122,42,0.65)'
              e.currentTarget.style.color = '#C97A2A'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(245,240,232,0.28)'
              e.currentTarget.style.color = '#F5F0E8'
            }}
          >
            <UtensilsCrossed size={15} />
            {t('hero.cta2')}
          </button>
        </div>

        {/* ── Founder credit bottom-right — mirrors portfolio cover ── */}
        <div
          className="absolute hidden md:block text-right"
          style={{
            bottom: 'clamp(72px, 9vw, 100px)',
            right: 'clamp(24px, 6vw, 80px)',
            animation: 'fadeIn 1s 1.1s ease both',
          }}
        >
          <div
            className="ml-auto mb-2.5 h-px w-14"
            style={{ background: 'rgba(201,122,42,0.45)' }}
          />
          <p
            style={{
              fontFamily: '"Playfair Display", serif',
              color: 'rgba(245,240,232,0.38)',
              fontSize: '0.64rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}
          >
            Veronica Nguma
          </p>
          <p
            style={{
              color: 'rgba(245,240,232,0.20)',
              fontSize: '0.57rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              marginTop: '3px',
            }}
          >
            Founder · Est. 2016
          </p>
        </div>
      </div>

      {/* ─── Scroll indicator ─── */}
      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10
          flex flex-col items-center gap-1.5 bg-transparent border-none cursor-pointer
          transition-colors duration-300"
        style={{
          color: 'rgba(245,240,232,0.32)',
          animation: 'fadeIn 1s 1.4s ease both',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = '#C97A2A')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.32)')}
      >
        <span
          style={{
            fontSize: '0.52rem',
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          Scroll
        </span>
        <ChevronDown size={15} style={{ animation: 'scrollBounce 2s ease-in-out infinite' }} />
      </button>

      {/* ─── Global keyframes ─── */}
      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.00); }
          to   { transform: scale(1.07); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(34px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }
      `}</style>
    </section>
  )
}
