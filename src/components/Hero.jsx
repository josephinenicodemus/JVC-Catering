import { useTranslation } from 'react-i18next'
import {
  MessageCircle,
  UtensilsCrossed,
  ChevronDown,
} from 'lucide-react'

export default function Hero() {
  const { t } = useTranslation()

  const scrollTo = (id) => {
    const el = document.querySelector(id)

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  /* OPTIMIZED HERO TITLE */

  const heroTitleStyles = {
    fontFamily: '"Playfair Display", serif',

    fontSize: 'clamp(3.2rem, 9vw, 8rem)',

    fontWeight: 600,

    lineHeight: 0.92,

    letterSpacing: '-0.04em',

    color: '#F5F0E8',

    WebkitTextFillColor: '#F5F0E8',

    textRendering: 'optimizeLegibility',

    WebkitFontSmoothing: 'antialiased',

    MozOsxFontSmoothing: 'grayscale',

    fontSynthesis: 'none',

    fontOpticalSizing: 'auto',
  }

  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#0D0D0D]
      "
    >
      {/* OPTIMIZED BACKGROUND */}

      <div className="absolute inset-0 z-0">
        <picture>
          {/* MOBILE */}

          <source
            media="(max-width: 640px)"
            srcSet="/images/hero-mobile.webp"
          />

          {/* TABLET */}

          <source
            media="(max-width: 1024px)"
            srcSet="/images/hero-tablet.webp"
          />

          {/* DESKTOP */}

          <img
            src="/images/hero-desktop.webp"
            alt="JVC Catering luxury buffet setup"
            className="
              w-full
              h-full
              object-cover
              object-center
              select-none
              will-change-transform
            "
            loading="eager"
            fetchPriority="high"
            decoding="async"
            draggable="false"
            width="1920"
            height="1080"
            sizes="100vw"
            style={{
              transform: 'scale(1.02)',
            }}
          />
        </picture>

        {/* SIMPLIFIED PREMIUM OVERLAY */}

        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                100deg,
                rgba(10,10,10,0.88) 0%,
                rgba(10,10,10,0.68) 35%,
                rgba(10,10,10,0.38) 65%,
                rgba(10,10,10,0.18) 100%
              )
            `,
          }}
        />

        {/* DEPTH OVERLAY */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* LIGHTWEIGHT TEXTURE */}

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'rgba(0,0,0,0.08)',
          }}
        />
      </div>

      {/* LEFT ACCENT */}

      <div
        className="
          absolute
          left-0
          top-0
          bottom-0
          hidden
          sm:block
          w-[3px]
          z-10
        "
        style={{
          background:
            'linear-gradient(to bottom, transparent 8%, #C97A2A 38%, #1B6B3A 62%, transparent 92%)',
        }}
      />

      {/* RIGHT DECOR */}

      <div
        className="
          absolute
          right-[5%]
          top-[22%]
          bottom-[22%]
          hidden
          xl:block
          w-px
          z-10
          opacity-70
        "
        style={{
          background:
            'linear-gradient(to bottom, transparent, rgba(201,122,42,0.35) 35%, rgba(201,122,42,0.35) 65%, transparent)',
        }}
      />

      {/* MAIN CONTENT */}

      <div
        className="
          relative
          z-20
          w-full
          max-w-[1440px]
          mx-auto
          min-h-screen
          flex
          items-center
          px-6
          sm:px-10
          lg:px-16
          xl:px-24
        "
      >
        <div className="w-full max-w-[760px] pt-16 sm:pt-20">
          {/* ORNAMENT */}

          <div
            className="
              flex
              items-center
              gap-4
              mb-8
              sm:mb-10
            "
            style={{
              animation:
                'fadeUp 0.7s ease both',
            }}
          >
            <div
              className="h-px w-10 sm:w-16"
              style={{
                background:
                  'rgba(201,122,42,0.6)',
              }}
            />

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C97A2A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 2v7c0 1.1.9 2 2 2h2v11h2V11h2a2 2 0 0 0 2-2V2h-2v5H7V2H5v5H3V2z" />
              <path d="M18 2c0 0-3 2-3 6s3 6 3 6v8h2V2h-2z" />
            </svg>

            <div
              className="h-px w-10 sm:w-16"
              style={{
                background:
                  'rgba(201,122,42,0.6)',
              }}
            />
          </div>

          {/* TITLE */}

          <div
            className="mb-7 sm:mb-9"
            style={{
              animation:
                'fadeUp 0.8s ease both',
            }}
          >
            <h1
              aria-label="JVC Catering"
              style={heroTitleStyles}
            >
              <span style={{ display: 'block' }}>
                JVC
              </span>

              <span style={{ display: 'block' }}>
                Catering
              </span>
            </h1>
          </div>

          {/* SUBTITLE */}

          <div
            className="
              flex
              items-center
              gap-4
              sm:gap-6
              mb-10
              sm:mb-14
            "
            style={{
              animation:
                'fadeUp 0.9s ease both',
            }}
          >
            <div
              className="h-px w-8 sm:w-12"
              style={{
                background:
                  'rgba(245,240,232,0.35)',
              }}
            />

            <p
              style={{
                fontFamily:
                  '"Playfair Display", serif',

                fontSize:
                  'clamp(1rem, 2vw, 1.35rem)',

                fontStyle: 'italic',

                fontWeight: 400,

                color:
                  'rgba(245,240,232,0.82)',

                letterSpacing: '0.08em',

                lineHeight: 1.4,
              }}
              className="
                text-center
                sm:text-left
                whitespace-normal
                sm:whitespace-nowrap
              "
            >
              {t(
                'hero.subtitle',
                'The service you need'
              )}
            </p>

            <div
              className="h-px w-8 sm:w-12"
              style={{
                background:
                  'rgba(245,240,232,0.35)',
              }}
            />
          </div>

          {/* CTA BUTTONS */}

          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-4
            "
            style={{
              animation:
                'fadeUp 1s ease both',
            }}
          >
            {/* PRIMARY */}

            <button
              onClick={() =>
                scrollTo('#contact')
              }
              className="
                inline-flex
                items-center
                justify-center
                gap-2.5
                px-7
                sm:px-9
                py-4
                rounded-xl
                text-white
                text-[0.72rem]
                sm:text-[0.78rem]
                font-bold
                uppercase
                tracking-[0.18em]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                focus:outline-none
              "
              style={{
                fontFamily:
                  '"Playfair Display", serif',

                background:
                  'linear-gradient(135deg, #C97A2A 0%, #E5A15D 100%)',

                boxShadow:
                  '0 8px 24px rgba(201,122,42,0.28)',
              }}
            >
              <MessageCircle size={16} />

              <span>
                {t('hero.cta1') ||
                  'Request a Quote'}
              </span>
            </button>

            {/* SECONDARY */}

            <button
              onClick={() =>
                scrollTo('#menu')
              }
              className="
                inline-flex
                items-center
                justify-center
                gap-2.5
                px-7
                sm:px-9
                py-4
                rounded-xl
                text-[0.72rem]
                sm:text-[0.78rem]
                font-bold
                uppercase
                tracking-[0.18em]
                border
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#C97A2A]
                hover:text-[#C97A2A]
              "
              style={{
                fontFamily:
                  '"Playfair Display", serif',

                color: '#F5F0E8',

                borderColor:
                  'rgba(245,240,232,0.28)',

                background:
                  'rgba(255,255,255,0.04)',
              }}
            >
              <UtensilsCrossed
                size={16}
              />

              <span>
                {t('hero.cta2') ||
                  'Explore Menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}

      <button
        onClick={() =>
          scrollTo('#about')
        }
        className="
          absolute
          bottom-7
          left-1/2
          -translate-x-1/2
          z-20
          flex
          flex-col
          items-center
          gap-2
          group
        "
        style={{
          animation:
            'fadeIn 1s ease both',
        }}
      >
        <span
          className="
            uppercase
            tracking-[0.30em]
            text-[0.55rem]
            font-semibold
            transition-colors
            duration-300
          "
          style={{
            color:
              'rgba(245,240,232,0.6)',
          }}
        >
          Scroll
        </span>

        <ChevronDown
          size={16}
          className="
            transition-colors
            duration-300
          "
          style={{
            color:
              'rgba(245,240,232,0.6)',
            animation:
              'scrollBounce 2.2s ease-in-out infinite',
          }}
        />
      </button>

      {/* OPTIMIZED KEYFRAMES */}

      <style>{`

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes scrollBounce {
          0%,20%,50%,80%,100% {
            transform: translateY(0);
          }

          40% {
            transform: translateY(6px);
          }

          60% {
            transform: translateY(3px);
          }
        }

      `}</style>
    </section>
  )
}
