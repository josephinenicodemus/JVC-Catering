import { useTranslation } from 'react-i18next'import {MessageCircle,UtensilsCrossed,ChevronDown,} from 'lucide-react'

export default function Hero() {const { t } = useTranslation()

const scrollTo = (id) => {const el = document.querySelector(id)

if (el) {
  el.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

}

/* HERO TITLE TYPOGRAPHY */

const heroTitleStyles = {fontFamily: '"Playfair Display", serif',

/* RESPONSIVE SCALE */

fontSize: 'clamp(3.5rem, 10vw, 8.8rem)',

fontWeight: 600,

/* IMPROVED LINE HEIGHT */

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

return ({/* BACKGROUND IMAGE */}

  <div className="absolute inset-0 z-0">
    <img
      src="https://images.unsplash.com/photo-1555244162-803834f70033?w=3840&h=2160&fit=crop&q=90&auto=format"
      alt="JVC Catering luxury buffet setup"
      className="
        w-full
        h-full
        object-cover
        object-center
        select-none
      "
      loading="eager"
      fetchPriority="high"
      decoding="async"
      draggable="false"
      sizes="100vw"
      style={{
        animation:
          'heroZoom 24s ease-in-out infinite alternate',
      }}
      onError={(e) => {
        e.currentTarget.src =
          'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=2400&q=85'
      }}
    />

    {/* CINEMATIC OVERLAY */}

    <div
      className="absolute inset-0"
      style={{
        background: `
          linear-gradient(
            100deg,
            rgba(10,10,10,0.94) 0%,
            rgba(10,10,10,0.78) 22%,
            rgba(10,10,10,0.52) 48%,
            rgba(10,10,10,0.22) 100%
          )
        `,
      }}
    />

    {/* BOTTOM DEPTH */}

    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

    {/* FILM GRAIN */}

    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E")`,
        backgroundSize: '240px 240px',
        mixBlendMode: 'overlay',
        opacity: 0.35,
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
      w-[4px]
      z-10
    "
    style={{
      background:
        'linear-gradient(to bottom, transparent 6%, #C97A2A 35%, #1B6B3A 65%, transparent 94%)',
    }}
  />

  {/* RIGHT DECOR */}

  <div
    className="
      absolute
      right-[5%]
      top-[20%]
      bottom-[20%]
      hidden
      xl:block
      w-px
      z-10
    "
    style={{
      background:
        'linear-gradient(to bottom, transparent, rgba(201,122,42,0.45) 35%, rgba(201,122,42,0.45) 65%, transparent)',
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
            'fadeUp 0.8s 0.2s ease both',
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
            'fadeUp 0.9s 0.35s ease both',
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
            'fadeUp 0.8s 0.55s ease both',
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
            'fadeUp 0.8s 0.75s ease both',
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
            hover:shadow-2xl
            focus:outline-none
          "
          style={{
            fontFamily:
              '"Playfair Display", serif',
            background:
              'linear-gradient(135deg, #C97A2A 0%, #E5A15D 100%)',
            boxShadow:
              '0 10px 30px rgba(201,122,42,0.35)',
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
            hover:shadow-2xl
          "
          style={{
            fontFamily:
              '"Playfair Display", serif',
            color: '#F5F0E8',
            borderColor:
              'rgba(245,240,232,0.30)',
            backdropFilter:
              'blur(10px)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor =
              '#C97A2A'

            e.currentTarget.style.color =
              '#C97A2A'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor =
              'rgba(245,240,232,0.30)'

            e.currentTarget.style.color =
              '#F5F0E8'
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
        'fadeIn 1s 1.3s ease both',
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

  {/* KEYFRAMES */}

  <style>{`

    @keyframes heroZoom {
      from {
        transform: scale(1);
      }

      to {
        transform: scale(1.08);
      }
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
        transform: translateY(8px);
      }

      60% {
        transform: translateY(4px);
      }
    }

  `}</style>
</section>

)}
