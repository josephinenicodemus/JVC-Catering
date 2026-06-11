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
      {/* Background */}
      <div className="hero-bg">
        <img
          src={IMG_SRC}
          srcSet={IMG_SRCSET}
          sizes="100vw"
          alt=""
          loading="eager"
          decoding="async"
          className="hero-img"
          onError={(e) => {
            e.currentTarget.srcset = ''
            e.currentTarget.src = IMG_FALLBACK
          }}
        />

        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          <span>JVC</span>
          <span>Catering</span>
        </h1>

        <p className="hero-subtitle">
          {t('hero.subtitle', 'The service you need')}
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollTo('#contact')}>
            <MessageCircle size={16} />
            Request a Quote
          </button>

          <button className="btn-secondary" onClick={() => scrollTo('#menu')}>
            <UtensilsCrossed size={16} />
            Explore Menu
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button className="scroll-btn" onClick={() => scrollTo('#about')}>
        <span>Scroll</span>
        <ChevronDown size={16} />
      </button>

      {/* CSS — SAFE SINGLE BLOCK */}
      <style>{`
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
            rgba(10,10,10,0.93),
            rgba(10,10,10,0.2)
          );
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 900px;
          margin: 0 auto;
          padding: 120px 24px;
        }

        .hero-title {
          font-size: clamp(3rem, 8vw, 7rem);
          color: #F5F0E8;
          font-family: serif;
          line-height: 0.95;
        }

        .hero-subtitle {
          margin-top: 20px;
          color: rgba(245,240,232,0.8);
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          margin-top: 40px;
          flex-wrap: wrap;
        }

        .btn-primary,
        .btn-secondary {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 20px;
          border-radius: 12px;
          cursor: pointer;
          transition: 0.25s ease;
          font-weight: 600;
        }

        .btn-primary {
          background: linear-gradient(135deg, #C97A2A, #E5A15D);
          border: none;
          color: white;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
        }

        .btn-secondary {
          background: transparent;
          border: 1px solid rgba(245,240,232,0.3);
          color: #F5F0E8;
        }

        .btn-secondary:hover {
          border-color: #C97A2A;
          color: #C97A2A;
          transform: translateY(-3px);
        }

        .scroll-btn {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          background: none;
          border: none;
          color: rgba(245,240,232,0.7);
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
        }

        @keyframes bounce {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }

        .scroll-btn svg {
          animation: bounce 2s infinite;
        }
      `}</style>
    </section>
  )
})

export default Hero
