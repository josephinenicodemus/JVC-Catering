import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

/* ──────────────────────────────────────────────────────────────────────────
   REVEAL ANIMATION
────────────────────────────────────────────────────────────────────────── */

function RevealEl({
  children,
  delay = 0,
}) {
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,

        transform: visible
          ? 'translateY(0)'
          : 'translateY(28px)',

        transition: `
          opacity 0.65s ${delay}ms cubic-bezier(0.4,0,0.2,1),
          transform 0.65s ${delay}ms cubic-bezier(0.4,0,0.2,1)
        `,
      }}
    >
      {children}
    </div>
  )
}

/* ──────────────────────────────────────────────────────────────────────────
   PARTNERS
────────────────────────────────────────────────────────────────────────── */

const partners = [
  {
    name: 'Internews',
    tag: 'Global Media Development',
    accent: '#0077B6',
    letter: 'I',
    logo: '/logo/internews.png',
    logoBg: '#ffffff',
  },

  {
    name: 'AIESEC',
    tag: 'International Youth Leadership',
    accent: '#1B6B3A',
    letter: 'A',
    logo: '/logo/aiesec.png',
    logoBg: '#ffffff',
  },

  {
    name: 'Domiya Estate Ltd',
    tag: 'The Winery · Dodoma, Tanzania',
    accent: '#7B2D8B',
    letter: 'D',
    logo: '/logo/domiya.png',
    logoBg: '#ffffff',
  },

  {
    name: 'CETAWICO',
    tag: 'Cantina Sociale di Dodoma',
    accent: '#C97A2A',
    letter: 'C',
    logo: '/logo/cetawico.png',
    logoBg: '#ffffff',
  },

  {
    name: 'DCMC Trust',
    tag: 'Dodoma Christian Medical Centre',
    accent: '#B30000',
    letter: 'D',
    logo: '/logo/dcmc.png',
    logoBg: '#ffffff',
  },

  {
    name: 'Tai Initiative',
    tag: 'Storytelling for Social Change',
    accent: '#D4880A',
    letter: 'T',
    logo: '/logo/tai.png',
    logoBg: '#ffffff',
  },

  {
    name: 'GIZ',
    tag: "Deutsche Gesellschaft · Int'l Cooperation",
    accent: '#005F87',
    letter: 'G',
    logo: '/logo/giz.png',
    logoBg: '#ffffff',
  },

  {
    name: 'EDUCATE!',
    tag: 'Youth Skills & Entrepreneurship',
    accent: '#8B0000',
    letter: 'E',
    logo: '/logo/educate.png',
    logoBg: '#ffffff',
  },

  {
    name: 'One Planet',
    tag: 'Sustainable Solutions · Global Impact',
    accent: '#2E7D32',
    letter: 'O',
    logo: '/logo/oneplanet.png?v=2',
    logoBg: '#ffffff',
  },
]

/* ──────────────────────────────────────────────────────────────────────────
   STATS
────────────────────────────────────────────────────────────────────────── */

const stats = [
  {
    value: '25+',
    label: 'Years of Experience',
  },

  {
    value: '9+',
    label: 'Trusted Partners',
  },

  {
    value: '500+',
    label: 'Events Catered',
  },

  {
    value: '4',
    label: 'Cuisine Styles',
  },
]

/* ──────────────────────────────────────────────────────────────────────────
   MAIN COMPONENT
────────────────────────────────────────────────────────────────────────── */

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        background: '#111',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* AMBIENT GLOWS */}

      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',

          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(201,122,42,0.06) 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, rgba(27,107,58,0.07) 0%, transparent 50%)
          `,
        }}
      />

      {/* SIDE RULE */}

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '5%',
          bottom: 0,
          width: '1px',
          pointerEvents: 'none',

          background:
            'linear-gradient(to bottom, transparent, rgba(201,122,42,0.2), transparent)',
        }}
      />

      {/* CONTENT */}

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',

          padding:
            'clamp(60px,8vw,100px) clamp(16px,4vw,24px)',

          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* HEADER */}

        <RevealEl>
          <div
            style={{
              textAlign: 'center',
              marginBottom: '72px',
            }}
          >
            {/* HEADING */}

            <h2
              style={{
                fontFamily:
                  '"Playfair Display", serif',

                fontSize:
                  'clamp(2.2rem, 5vw, 3.8rem)',

                fontWeight: 600,

                color: '#F5F0E8',

                marginBottom: '20px',

                lineHeight: 1.08,

                letterSpacing: '-0.03em',

                textRendering:
                  'optimizeLegibility',

                WebkitFontSmoothing:
                  'antialiased',

                MozOsxFontSmoothing:
                  'grayscale',

                fontOpticalSizing:
                  'auto',
              }}
            >
              <span
                style={{
                  fontFamily: 'inherit',
                  fontWeight: 'inherit',
                  letterSpacing: 'inherit',
                  color: '#F5F0E8',
                }}
              >
                Trusted by
              </span>{' '}

              <span
                style={{
                  fontFamily: 'inherit',
                  fontWeight: 'inherit',
                  letterSpacing: 'inherit',
                  fontStyle: 'italic',
                  color: '#C97A2A',
                }}
              >
                Leading Organisations
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              style={{
                color:
                  'rgba(245,240,232,0.58)',

                fontSize:
                  'clamp(0.98rem,1.8vw,1.08rem)',

                lineHeight: 1.85,

                maxWidth: '620px',

                margin: '0 auto',

                textWrap: 'balance',
              }}
            >
              From international NGOs to
              prestigious vineyards —
              Veronica has brought warmth,
              flavour and excellence to every
              table.
            </p>
          </div>
        </RevealEl>

        {/* STATS */}

        <RevealEl delay={100}>
          <div
            style={{
              display: 'grid',

              gridTemplateColumns:
                'repeat(auto-fit, minmax(140px, 1fr))',

              gap: '1px',

              background:
                'rgba(255,255,255,0.06)',

              borderRadius: '22px',

              overflow: 'hidden',

              marginBottom: '72px',

              border:
                '1px solid rgba(255,255,255,0.05)',

              backdropFilter:
                'blur(12px)',
            }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                style={{
                  background: '#171717',

                  padding:
                    '32px 24px',

                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily:
                      '"Playfair Display", serif',

                    fontSize:
                      'clamp(1.8rem,3vw,2.3rem)',

                    fontWeight: 700,

                    color: '#C97A2A',

                    marginBottom: '6px',
                  }}
                >
                  {s.value}
                </div>

                <div
                  style={{
                    color:
                      'rgba(245,240,232,0.48)',

                    fontSize: '0.76rem',

                    letterSpacing:
                      '0.08em',

                    textTransform:
                      'uppercase',

                    lineHeight: 1.6,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </RevealEl>

        {/* PARTNERS GRID */}

        <div
          style={{
            display: 'grid',

            gridTemplateColumns:
              'repeat(auto-fill, minmax(240px, 1fr))',

            gap: '18px',
          }}
        >
          {partners.map((partner, i) => (
            <RevealEl
              key={partner.name}
              delay={i * 80}
            >
              <PartnerCard
                partner={partner}
              />
            </RevealEl>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────────────────────────────────
   PARTNER CARD
────────────────────────────────────────────────────────────────────────── */

function PartnerCard({ partner }) {
  const {
    name,
    tag,
    accent,
    letter,
    logo,
    logoBg,
  } = partner

  const [imgError, setImgError] =
    useState(false)

  return (
    <div
      style={{
        position: 'relative',

        borderRadius: '22px',

        overflow: 'hidden',

        background:
          'linear-gradient(180deg,#1B1B1B 0%, #171717 100%)',

        border:
          '1px solid rgba(255,255,255,0.06)',

        padding:
          '30px 26px 38px',

        transition:
          'transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',

        display: 'flex',

        flexDirection: 'column',

        gap: '20px',

        minHeight: '240px',

        backdropFilter:
          'blur(14px)',

        boxShadow:
          '0 8px 30px rgba(0,0,0,0.18)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          'translateY(-6px)'

        e.currentTarget.style.borderColor =
          'rgba(201,122,42,0.35)'

        e.currentTarget.style.boxShadow =
          '0 20px 50px rgba(0,0,0,0.28)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          'translateY(0px)'

        e.currentTarget.style.borderColor =
          'rgba(255,255,255,0.06)'

        e.currentTarget.style.boxShadow =
          '0 8px 30px rgba(0,0,0,0.18)'
      }}
    >
      {/* LOGO */}

      <div
        style={{
          width: '82px',
          height: '82px',

          borderRadius: '18px',

          background: logoBg,

          display: 'flex',

          alignItems: 'center',

          justifyContent: 'center',

          overflow: 'hidden',

          padding: '10px',

          boxShadow:
            '0 10px 24px rgba(0,0,0,0.12)',
        }}
      >
        {!imgError ? (
          <img
            src={logo}
            alt={name}
            loading="lazy"
            decoding="async"
            draggable="false"
            onError={() =>
              setImgError(true)
            }
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',

              borderRadius: '14px',

              background: accent,

              display: 'flex',

              alignItems: 'center',

              justifyContent: 'center',

              color: '#fff',

              fontSize: '2rem',

              fontWeight: 'bold',

              fontFamily:
                '"Playfair Display", serif',
            }}
          >
            {letter}
          </div>
        )}
      </div>

      {/* TEXT */}

      <div>
        <h3
          style={{
            fontFamily:
              '"Playfair Display", serif',

            color: '#F5F0E8',

            marginBottom: '10px',

            marginTop: 0,

            fontSize:
              '1.18rem',

            lineHeight: 1.3,

            letterSpacing:
              '-0.01em',
          }}
        >
          {name}
        </h3>

        <p
          style={{
            color:
              'rgba(245,240,232,0.6)',

            margin: 0,

            fontSize: '0.88rem',

            lineHeight: 1.7,
          }}
        >
          {tag}
        </p>
      </div>

      {/* ACCENT LINE */}

      <div
        style={{
          position: 'absolute',

          bottom: 0,
          left: 0,
          right: 0,

          height: '3px',

          background: accent,
        }}
      />
    </div>
  )
}
