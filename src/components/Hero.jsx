import { useTranslation } from 'react-i18next'
import { useEffect, useRef, useState } from 'react'
import { MessageCircle, UtensilsCrossed, ChevronDown } from 'lucide-react'

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const GOLD  = '#C97A2A'
const GREEN = '#1B6B3A'
const CREAM = '#F5F0E8'

// ─── Rotating dish data ───────────────────────────────────────────────────────
const DISHES = [
  {
    name: 'Swahili Pilau',
    desc: 'Signature spiced rice',
    img: 'https://images.unsplash.com/photo-1596797038530-2c107aa5a5b2?w=400&h=400&fit=crop&q=85',
  },
  {
    name: 'Grilled Tilapia',
    desc: 'East African classic',
    img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=400&fit=crop&q=85',
  },
  {
    name: 'Celebration Buffet',
    desc: 'Grand event spread',
    img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=400&fit=crop&q=85',
  },
  {
    name: 'Gourmet Pastries',
    desc: 'Artisan desserts',
    img: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&h=400&fit=crop&q=85',
  },
]

export default function Hero() {
  const { t } = useTranslation()
  const imgRef      = useRef(null)
  const [dish, setDish]       = useState(0)
  const [fading, setFading]   = useState(false)

  // ── Parallax on scroll ──────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      if (!imgRef.current) return
      const y = window.scrollY
      imgRef.current.style.transform = `scale(1.06) translateY(${y * 0.28}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ── Auto-rotate dish every 4 s ──────────────────────────────────────────────
  useEffect(() => {
    const id = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setDish(d => (d + 1) % DISHES.length)
        setFading(false)
      }, 420)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const current = DISHES[dish]

  return (
    <section
      id="hero"
      className="relative min-h-svh flex items-center overflow-hidden"
      style={{ background: '#080604' }}
    >

      {/* ══════════════════════════════════════════
          BACKGROUND — 4K image with parallax
      ══════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={imgRef}
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=3840&h=2160&fit=crop&q=90&auto=format"
          alt="Premium African catering buffet"
          className="w-full h-full object-cover object-center will-change-transform"
          style={{ transform: 'scale(1.06) translateY(0px)', transformOrigin: 'center center' }}
          loading="eager"
          fetchpriority="high"
        />

        {/* Cinematic gradient — left-heavy */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              110deg,
              rgba(6,4,2,0.97) 0%,
              rgba(6,4,2,0.90) 30%,
              rgba(6,4,2,0.60) 56%,
              rgba(6,4,2,0.18) 100%
            )`,
          }}
        />
        {/* Bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060402]/80 via-transparent to-[#060402]/25" />
      </div>

      {/* ══════════════════════════════════════════
          DECORATIVE ACCENTS
      ══════════════════════════════════════════ */}

      {/* Left brand bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] z-20 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent 8%, ${GOLD} 36%, ${GREEN} 64%, transparent 92%)`,
        }}
      />

      {/* Right vertical rule — desktop */}
      <div
        className="absolute right-[5.5%] top-[18%] bottom-[18%] w-px z-10 hidden xl:block pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent, rgba(201,122,42,0.3) 35%, rgba(201,122,42,0.3) 65%, transparent)`,
        }}
      />

      {/* ══════════════════════════════════════════
          MAIN CONTENT GRID
      ══════════════════════════════════════════ */}
      <div
        className="relative z-10 w-full max-w-[1300px] mx-auto min-h-svh
          flex flex-col lg:flex-row items-center justify-between"
        style={{
          padding: 'clamp(110px,14vw,150px) clamp(24px,6vw,80px) clamp(90px,10vw,120px)',
          gap: 'clamp(40px,6vw,80px)',
        }}
      >

        {/* ── LEFT: Brand + Subtitle + CTAs ── */}
        <div className="flex flex-col items-start flex-1 min-w-0">

          {/* Ornament */}
          <div
            className="flex items-center gap-4 mb-8"
            style={{ animation: 'fadeUp 0.6s 0.1s ease both' }}
          >
            <div className="h-px w-10" style={{ background: 'rgba(201,122,42,0.55)' }} />
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 2v7c0 1.1.9 2 2 2h2v11h2V11h2a2 2 0 0 0 2-2V2h-2v5H7V2H5v5H3V2z" />
              <path d="M18 2c0 0-3 2-3 6s3 6 3 6v8h2V2h-2z" />
            </svg>
            <div className="h-px w-10" style={{ background: 'rgba(201,122,42,0.55)' }} />
          </div>

          {/* JVC — light */}
          <h1
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(3.8rem, 11.5vw, 9.5rem)',
              fontWeight: 400,
              color: CREAM,
              lineHeight: 0.88,
              letterSpacing: '-0.02em',
              animation: 'fadeUp 0.78s 0.24s ease both',
            }}
          >
            JVC
          </h1>

          {/* CATERING — bold */}
          <h1
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(3.8rem, 11.5vw, 9.5rem)',
              fontWeight: 700,
              color: CREAM,
              lineHeight: 0.88,
              letterSpacing: '-0.02em',
              marginBottom: '28px',
              animation: 'fadeUp 0.78s 0.37s ease both',
            }}
          >
            CATERING
          </h1>

          {/* Subtitle */}
          <div
            className="flex items-center gap-4 mb-12"
            style={{ animation: 'fadeUp 0.7s 0.50s ease both' }}
          >
            <div className="h-px w-8" style={{ background: 'rgba(245,240,232,0.28)' }} />
            <p style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(0.88rem, 1.6vw, 1.12rem)',
              fontStyle: 'italic',
              fontWeight: 400,
              color: 'rgba(245,240,232,0.70)',
              letterSpacing: '0.055em',
              whiteSpace: 'nowrap',
            }}>
              The service you need
            </p>
            <div className="h-px w-8" style={{ background: 'rgba(245,240,232,0.28)' }} />
          </div>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4"
            style={{ animation: 'fadeUp 0.7s 0.63s ease both' }}
          >
            {/* Primary */}
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-2.5 rounded-[4px] font-bold uppercase
                tracking-[0.17em] transition-all duration-300 hover:-translate-y-[3px]"
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

            {/* Secondary */}
            <button
              onClick={() => scrollTo('#menu')}
              className="inline-flex items-center gap-2.5 rounded-[4px] font-bold uppercase
                tracking-[0.17em] transition-all duration-300 hover:-translate-y-[3px]"
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
                e.currentTarget.style.borderColor = 'rgba(201,122,42,0.65)'
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
        </div>

        {/* ── RIGHT: Floating dish showcase card ── */}
        <div
          className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end"
          style={{ animation: 'fadeIn 1s 0.8s ease both' }}
        >
          <DishCard dish={current} fading={fading} index={dish} total={DISHES.length} onDot={i => {
            if (i === dish) return
            setFading(true)
            setTimeout(() => { setDish(i); setFading(false) }, 420)
          }} />
        </div>

      </div>

      {/* ══════════════════════════════════════════
          SCROLL INDICATOR
      ══════════════════════════════════════════ */}
      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center
          gap-1.5 bg-transparent border-none cursor-pointer transition-colors duration-300"
        style={{ color: 'rgba(245,240,232,0.28)', animation: 'fadeIn 1s 1.4s ease both' }}
        onMouseEnter={e => e.currentTarget.style.color = GOLD}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.28)'}
      >
        <span style={{ fontSize: '0.5rem', letterSpacing: '0.34em', textTransform: 'uppercase', fontWeight: 600 }}>
          Scroll
        </span>
        <ChevronDown size={14} style={{ animation: 'scrollBounce 2s ease-in-out infinite' }} />
      </button>

      {/* ══════════════════════════════════════════
          KEYFRAMES
      ══════════════════════════════════════════ */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0);  }
          50%      { transform: translateY(5px); }
        }
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px);  }
          50%      { transform: translateY(-8px);  }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
      `}</style>
    </section>
  )
}

// ─── Floating dish card ───────────────────────────────────────────────────────
function DishCard({ dish, fading, index, total, onDot }) {
  return (
    <div
      className="relative"
      style={{
        animation: 'cardFloat 6s ease-in-out infinite',
        width: 'clamp(240px, 30vw, 320px)',
      }}
    >
      {/* Glow halo behind card */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, rgba(201,122,42,0.18) 0%, transparent 72%)`,
          transform: 'scale(1.15)',
          filter: 'blur(20px)',
        }}
      />

      {/* Glassmorphism card */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: 'rgba(15,12,8,0.55)',
          border: '1px solid rgba(201,122,42,0.22)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          boxShadow: '0 32px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(201,122,42,0.10)',
        }}
      >
        {/* Dish image */}
        <div className="relative overflow-hidden" style={{ height: '200px' }}>
          <img
            key={dish.img}
            src={dish.img}
            alt={dish.name}
            className="w-full h-full object-cover"
            style={{
              opacity: fading ? 0 : 1,
              transform: fading ? 'scale(1.04)' : 'scale(1)',
              transition: 'opacity 0.42s ease, transform 0.42s ease',
            }}
            loading="lazy"
          />
          {/* Gradient over image bottom */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(8,6,4,0.75) 0%, transparent 55%)' }}
          />

          {/* AI-style label */}
          <div
            className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full"
            style={{
              background: 'rgba(201,122,42,0.15)',
              border: '1px solid rgba(201,122,42,0.35)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span
              className="block w-1.5 h-1.5 rounded-full"
              style={{ background: '#C97A2A', animation: 'scrollBounce 1.5s ease-in-out infinite' }}
            />
            <span style={{ color: '#C97A2A', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700 }}>
              Featured
            </span>
          </div>
        </div>

        {/* Card body */}
        <div className="px-5 py-4">
          <div
            style={{
              opacity: fading ? 0 : 1,
              transform: fading ? 'translateY(6px)' : 'translateY(0)',
              transition: 'opacity 0.38s ease, transform 0.38s ease',
            }}
          >
            <p
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: CREAM,
                marginBottom: '3px',
              }}
            >
              {dish.name}
            </p>
            <p style={{ fontSize: '0.72rem', color: 'rgba(245,240,232,0.48)', letterSpacing: '0.05em' }}>
              {dish.desc}
            </p>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center gap-2 mt-4">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => onDot(i)}
                aria-label={`View dish ${i + 1}`}
                style={{
                  width: i === index ? '20px' : '6px',
                  height: '6px',
                  borderRadius: '3px',
                  background: i === index ? GOLD : 'rgba(245,240,232,0.20)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.35s ease',
                }}
              />
            ))}

            {/* Progress bar */}
            <div
              className="ml-auto"
              style={{
                height: '2px', width: '40px',
                background: 'rgba(245,240,232,0.10)',
                borderRadius: '2px',
                overflow: 'hidden',
              }}
            >
              <div
                key={index}
                style={{
                  height: '100%',
                  background: `linear-gradient(to right, ${GOLD}, #E8A05C)`,
                  borderRadius: '2px',
                  animation: 'progressBar 4s linear forwards',
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom shimmer line */}
        <div
          style={{
            height: '2px',
            background: `linear-gradient(90deg, transparent, ${GOLD}, ${GREEN}, transparent)`,
            backgroundSize: '200% auto',
            animation: 'shimmer 3s linear infinite',
          }}
        />
      </div>

      {/* Progress keyframe — scoped inline */}
      <style>{`
        @keyframes progressBar {
          from { width: 0%;   }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  )
}
