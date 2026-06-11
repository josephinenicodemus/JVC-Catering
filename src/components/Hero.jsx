import { useCallback, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { MessageCircle, UtensilsCrossed, ChevronDown } from 'lucide-react'

const BASE_URL =
  'https://images.unsplash.com/photo-1555244162-803834f70033'

const IMG_SRCSET = [
  `${BASE_URL}?auto=format&fit=crop&w=640&q=72 640w`,
  `${BASE_URL}?auto=format&fit=crop&w=1080&q=75 1080w`,
  `${BASE_URL}?auto=format&fit=crop&w=1600&q=78 1600w`,
  `${BASE_URL}?auto=format&fit=crop&w=2400&q=80 2400w`,
].join(', ')

const IMG_SRC = `${BASE_URL}?auto=format&fit=crop&w=1600&q=78`
const IMG_FALLBACK = `${BASE_URL}?auto=format&fit=crop&w=1080&q=72`

const Hero = memo(function Hero() {
  const { t } = useTranslation()

  const scrollTo = useCallback((id) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }, [])

  return (
    <section className="hero">
      {/* BACKGROUND */}
      <div className="hero-bg">
        <img
          src={IMG_SRC}
          srcSet={IMG_SRCSET}
          sizes="100vw"
          alt=""
          className="hero-img"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onError={(e) => {
            e.currentTarget.srcset = ''
            e.currentTarget.src = IMG_FALLBACK
          }}
        />

        <div className="hero-overlay" />
      </div>

      {/* CONTENT */}
      <div className="hero-container">
        <div className="hero-content">

          <h1 className="hero-title">
            <span>JVC</span>
            <span>Catering</span>
          </h1>

          <p className="hero-subtitle">
            {t('hero.subtitle', 'The service you need')}
          </p>

          {/* BUTTONS — MOBILE FIRST STACKING */}
          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => scrollTo('#contact')}
            >
              <MessageCircle size={16} />
              <span>{t('hero.cta1', 'Request a Quote')}</span>
            </button>

            <button
              className="btn-secondary"
              onClick={() => scrollTo('#menu')}
            >
              <UtensilsCrossed size={16} />
              <span>{t('hero.cta2', 'Explore Menu')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <button
        className="scroll-indicator"
        onClick={() => scrollTo('#about')}
      >
        <span>Scroll</span>
        <ChevronDown size={16} />
      </button>

      {/* ================= CSS ================= */}
      <style>{`
        /* ================= BASE MOBILE FIRST ================= */

        .hero {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
        }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            100deg,
            rgba(10,10,10,0.92) 0%,
            rgba(10,10,10,0.55) 50%,
            rgba(10,10,10,0.15) 100%
          );
        }

        /* ================= LAYOUT ================= */

        .hero-container {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;

          min-height: 100vh;

          /* MOBILE FIRST PADDING */
          padding: 90px 18px 60px;
        }

        .hero-content {
          width: 100%;
          max-width: 720px;
        }

        /* ================= TYPOGRAPHY ================= */

        .hero-title {
          font-family: "Playfair Display", serif;
          font-size: clamp(2.8rem, 10vw, 7.5rem);
          line-height: 0.95;
          color: #F5F0E8;
          margin: 0;
        }

        .hero-subtitle {
          margin-top: 18px;
          font-size: clamp(1rem, 2vw, 1.3rem);
          font-style: italic;
          color: rgba(245,240,232,0.82);
        }

        /* ================= BUTTONS ================= */

        .hero-actions {
          margin-top: 32px;

          display: flex;
          flex-direction: column; /* MOBILE FIRST STACK */
          gap: 14px;
        }

        /* TABLET+ SIDE BY SIDE */
        @media (min-width: 640px) {
          .hero-actions {
            flex-direction: row;
          }
        }

        .btn-primary,
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

          width: 100%; /* MOBILE FULL WIDTH */
          padding: 14px 18px;

          border-radius: 12px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;

          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        /* TABLET+ AUTO WIDTH */
        @media (min-width: 640px) {
          .btn-primary,
          .btn-secondary {
            width: auto;
          }
        }

        .btn-primary {
          border: none;
          color: white;
          background: linear-gradient(135deg, #C97A2A, #E5A15D);
          box-shadow: 0 10px 26px rgba(201,122,42,0.25);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
        }

        .btn-secondary {
          background: transparent;
          border: 1px solid rgba(245,240,232,0.35);
          color: #F5F0E8;
        }

        .btn-secondary:hover {
          transform: translateY(-3px);
          border-color: #C97A2A;
          color: #C97A2A;
        }

        /* ================= SCROLL ================= */

        .scroll-indicator {
          position: absolute;
          left: 50%;
          bottom: 22px;
          transform: translateX(-50%);

          background: none;
          border: none;
          color: rgba(245,240,232,0.65);

          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;

          cursor: pointer;
        }

        .scroll-indicator svg {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }

        /* ================= ACCESSIBILITY ================= */

        @media (prefers-reduced-motion: reduce) {
          .btn-primary,
          .btn-secondary,
          .scroll-indicator svg {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  )
})

export default Hero
