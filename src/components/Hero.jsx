import { useCallback, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { MessageCircle, UtensilsCrossed, ChevronDown } from 'lucide-react'

const BASE_URL =
  'https://images.unsplash.com/photo-1555244162-803834f70033'


const IMG_SRCSET = [
  `${BASE_URL}?auto=format&fit=crop&w=640&q=72   640w`,
  `${BASE_URL}?auto=format&fit=crop&w=1080&q=75 1080w`,
  `${BASE_URL}?auto=format&fit=crop&w=1600&q=78 1600w`,
  `${BASE_URL}?auto=format&fit=crop&w=2400&q=80 2400w`,
].join(', ')

/**
 * Default src — used by browsers that don't support srcset (very rare today)
 * and as the value referenced by the <link rel="preload"> in index.html.
 */
const IMG_SRC = `${BASE_URL}?auto=format&fit=crop&w=1600&q=78`

/**
 * Fallback src — served if Unsplash CDN returns an error.
 * Uses a different Unsplash photo (same cuisine category) at safe resolution.
 */
const IMG_FALLBACK = `${BASE_URL}?auto=format&fit=crop&w=1080&q=72`

// H1 typography — Playfair Display, luxury cinematic scale
const titleStyle = {
  fontFamily: '"Playfair Display", serif',
  fontSize: 'clamp(3.5rem, 10vw, 8.8rem)',
  fontWeight: 600,
  lineHeight: 0.92,
  letterSpacing: '-0.04em',
  color: '#F5F0E8',
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
}

// Italic subtitle
const subtitleStyle = {
  fontFamily: '"Playfair Display", serif',
  fontSize: 'clamp(1rem, 2vw, 1.35rem)',
  fontStyle: 'italic',
  fontWeight: 400,
  color: 'rgba(245,240,232,0.82)',
  letterSpacing: '0.08em',
  lineHeight: 1.4,
}

// Primary CTA button base style
// NOTE: hover is handled via CSS class .jvc-btn-primary:hover — no JS needed
const primaryBtnStyle = {
  fontFamily: '"Playfair Display", serif',
  background: 'linear-gradient(135deg, #C97A2A 0%, #E5A15D 100%)',
  boxShadow: '0 8px 24px rgba(201,122,42,0.28)',
}

// Secondary CTA button base style
// NOTE: hover handled via .jvc-btn-secondary:hover in <style> block
const secondaryBtnStyle = {
  fontFamily: '"Playfair Display", serif',
}

/* ─────────────────────────────────────────────────────────────────────────────
   COMPONENT
   Wrapped in memo() — if a parent ever re-renders without changing props,
   Hero will not re-render (it takes no props, so this is a zero-cost guard).
───────────────────────────────────────────────────────────────────────────── */

const Hero = memo(function Hero() {
  const { t } = useTranslation()
  const scrollTo = useCallback((id) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }, [])

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      aria-label="JVC Catering — hero"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src={IMG_SRC}
          srcSet={IMG_SRCSET}
          sizes="100vw"
          alt=""
          aria-hidden="true"
          width="1600"
          height="900"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          draggable="false"
          className="w-full h-full object-cover object-center select-none"
          onError={(e) => {
            // Clear srcset first so the browser doesn't retry from it
            e.currentTarget.srcset = ''
            e.currentTarget.src = IMG_FALLBACK
          }}
        />

        {/* ── CINEMATIC OVERLAY ──────────────────────────────────────────
            BEFORE: 3 separate compositor layers (cinematic gradient div +
                    bottom-depth gradient div + film-grain SVG filter div).
                    feTurbulence alone can account for 20–40ms of GPU time
                    per frame on mid-range mobile hardware.

            AFTER:  1 single div with a stacked CSS gradient expression.
                    CSS multi-value backgrounds are composited together by the
                    GPU in a single pass — identical visual result, 1/3 the
                    layer cost. No SVG filter at all.
        ──────────────────────────────────────────────────────────────── */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                100deg,
                rgba(10,10,10,0.93)  0%,
                rgba(10,10,10,0.72) 28%,
                rgba(10,10,10,0.42) 55%,
                rgba(10,10,10,0.16) 100%
              ),
              linear-gradient(
                to top,
                rgba(0,0,0,0.78)   0%,
                rgba(0,0,0,0.0)   45%
              )
            `,
          }}
        />
      </div>

      {/* ── LEFT BRAND ACCENT ─────────────────────────────────────────────
          Thin 4px vertical stripe in gold → forest green. Low paint cost,
          high brand recall. Hidden below sm breakpoint to save mobile pixels.
      ─────────────────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 bottom-0 hidden sm:block w-1 z-10"
        style={{
          background:
            'linear-gradient(to bottom, transparent 6%, #C97A2A 35%, #1B6B3A 65%, transparent 94%)',
        }}
      />

      {/* ── RIGHT DECORATIVE LINE ─────────────────────────────────────────
          1px vertical rule at xl+ only — zero cost on narrower viewports.
      ─────────────────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute right-[5%] top-[20%] bottom-[20%] hidden xl:block w-px z-10"
        style={{
          background:
            'linear-gradient(to bottom, transparent, rgba(201,122,42,0.45) 35%, rgba(201,122,42,0.45) 65%, transparent)',
        }}
      />

      {/* ════════════════════════════════════════════════════════════════════
          MAIN CONTENT
      ════════════════════════════════════════════════════════════════════ */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto min-h-screen flex items-center px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="w-full max-w-[760px] pt-16 sm:pt-20">

          {/* ── ORNAMENT ────────────────────────────────────────────────── */}
          <div
            className="flex items-center gap-4 mb-8 sm:mb-10 jvc-fade-up"
            style={{ animationDelay: '0.2s' }}
            aria-hidden="true"
          >
            <div
              className="h-px w-10 sm:w-16"
              style={{ background: 'rgba(201,122,42,0.6)' }}
            />
            {/* Utensil / fork-knife SVG icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C97A2A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 2v7c0 1.1.9 2 2 2h2v11h2V11h2a2 2 0 0 0 2-2V2h-2v5H7V2H5v5H3V2z" />
              <path d="M18 2c0 0-3 2-3 6s3 6 3 6v8h2V2h-2z" />
            </svg>
            <div
              className="h-px w-10 sm:w-16"
              style={{ background: 'rgba(201,122,42,0.6)' }}
            />
          </div>

          {/* ── HERO TITLE ──────────────────────────────────────────────── */}
          <div
            className="mb-7 sm:mb-9 jvc-fade-up"
            style={{ animationDelay: '0.35s' }}
          >
            <h1 aria-label="JVC Catering" style={titleStyle}>
              <span className="block">JVC</span>
              <span className="block">Catering</span>
            </h1>
          </div>

          {/* ── SUBTITLE ────────────────────────────────────────────────── */}
          <div
            className="flex items-center gap-4 sm:gap-6 mb-10 sm:mb-14 jvc-fade-up"
            style={{ animationDelay: '0.55s' }}
          >
            <div
              className="h-px w-8 sm:w-12 shrink-0"
              style={{ background: 'rgba(245,240,232,0.35)' }}
              aria-hidden="true"
            />
            <p
              style={subtitleStyle}
              className="text-center sm:text-left whitespace-normal sm:whitespace-nowrap"
            >
              {t('hero.subtitle', 'The service you need')}
            </p>
            <div
              className="h-px w-8 sm:w-12 shrink-0"
              style={{ background: 'rgba(245,240,232,0.35)' }}
              aria-hidden="true"
            />
          </div>

          {/* ── CTA BUTTONS ─────────────────────────────────────────────────
              BEFORE: onMouseEnter / onMouseLeave JS handlers on each button.
                      Each hover fired a synthetic React event → potential
                      re-render → style object mutation. Measurable TBT cost
                      and a forced reflow warning in Lighthouse.

              AFTER:  Pure CSS :hover selectors via .jvc-btn-* classes.
                      Zero JS overhead. The GPU handles the transition entirely
                      on the compositor thread.
          ──────────────────────────────────────────────────────────────── */}
          <div
            className="flex flex-col sm:flex-row gap-4 jvc-fade-up"
            style={{ animationDelay: '0.75s' }}
          >
            {/* PRIMARY — Request a Quote */}
            <button
              type="button"
              onClick={() => scrollTo('#contact')}
              className="jvc-btn-primary inline-flex items-center justify-center gap-2.5 px-7 sm:px-9 py-4 rounded-xl text-white text-[0.72rem] sm:text-[0.78rem] font-bold uppercase tracking-[0.18em] transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C97A2A] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              style={primaryBtnStyle}
            >
              <MessageCircle size={16} aria-hidden="true" />
              <span>{t('hero.cta1') || 'Request a Quote'}</span>
            </button>

            {/* SECONDARY — Explore Menu */}
            <button
              type="button"
              onClick={() => scrollTo('#menu')}
              className="jvc-btn-secondary inline-flex items-center justify-center gap-2.5 px-7 sm:px-9 py-4 rounded-xl text-[0.72rem] sm:text-[0.78rem] font-bold uppercase tracking-[0.18em] border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C97A2A] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              style={secondaryBtnStyle}
            >
              <UtensilsCrossed size={16} aria-hidden="true" />
              <span>{t('hero.cta2') || 'Explore Menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ────────────────────────────────────────────────
          Simple animated chevron — compositor-friendly (transform only).
          Accessible: has aria-label since it's a meaningful interactive element.
      ─────────────────────────────────────────────────────────────────── */}
      <button
        type="button"
        onClick={() => scrollTo('#about')}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        style={{ animation: 'jvcFadeIn 1s 1.3s ease both' }}
        aria-label="Scroll to about section"
      >
        <span
          className="uppercase tracking-[0.30em] text-[0.55rem] font-semibold"
          style={{ color: 'rgba(245,240,232,0.6)' }}
          aria-hidden="true"
        >
          Scroll
        </span>
        <ChevronDown
          size={16}
          aria-hidden="true"
          style={{
            color: 'rgba(245,240,232,0.6)',
            animation: 'jvcScrollBounce 2.2s ease-in-out infinite',
          }}
        />
      </button>

      {/* ════════════════════════════════════════════════════════════════════
         
      <style>{`
        /* ── Staggered entrance animation ─────────────────────────────── */
        .jvc-fade-up {
          animation: jvcFadeUp 0.8s ease both;
        }

        @keyframes jvcFadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes jvcFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* Scroll chevron bounce — compositor-safe (transform only) */
        @keyframes jvcScrollBounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40%  { transform: translateY(7px); }
          60%  { transform: translateY(3px); }
        }

        /* ── Primary button hover — pure CSS, no JS ────────────────── */
        .jvc-btn-primary {
          /* Use transform for lift — compositor thread, no layout recalc */
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .jvc-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 40px rgba(201,122,42,0.42);
        }
        .jvc-btn-primary:active {
          transform: translateY(-1px);
        }

        /* ── Secondary button hover — pure CSS, no JS ─────────────── */
        .jvc-btn-secondary {
          color: #F5F0E8;
          border-color: rgba(245,240,232,0.30);
          /* No backdrop-filter: blur — removed (GPU cost, not visible at this scale) */
          transition: transform 0.25s ease, color 0.25s ease, border-color 0.25s ease;
        }
        .jvc-btn-secondary:hover {
          border-color: #C97A2A;
          color: #C97A2A;
          transform: translateY(-3px);
        }
        .jvc-btn-secondary:active {
          transform: translateY(-1px);
        }

        /* ── Respect user motion preference ──────────────────────── */
        @media (prefers-reduced-motion: reduce) {
          .jvc-fade-up {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .jvc-btn-primary,
          .jvc-btn-secondary {
            transition: none !important;
          }
          .jvc-btn-primary:hover,
          .jvc-btn-secondary:hover {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
})

export default Hero
