import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

// ─── Reveal animation wrapper ─────────────────────────────────────────────────
function RevealEl({ children, delay = 0 }) {
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ${delay}ms ease, transform 0.7s ${delay}ms ease`,
      }}
    >
      {children}
    </div>
  )
}

// ─── Partner data ─────────────────────────────────────────────────────────────
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

    // cache-busting added
    logo: '/logo/oneplanet.png?v=2',

    logoBg: '#ffffff',
  },
]

const stats = [
  { value: '25+', label: 'Years of Experience' },
  { value: '9+', label: 'Trusted Partners' },
  { value: '500+', label: 'Events Catered' },
  { value: '4', label: 'Cuisine Styles' },
]

// ─── Main Component ───────────────────────────────────────────────────────────
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
      {/* Ambient glows */}
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

      {/* Side rules */}
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

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: 'clamp(60px,8vw,100px) clamp(16px,4vw,24px)',
        }}
      >
        {/* Header */}
        <RevealEl>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <h2
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                fontWeight: 700,
                color: '#F5F0E8',
                marginBottom: '20px',
              }}
            >
              Trusted by{' '}
              <span style={{ color: '#C97A2A' }}>
                Leading Organisations
              </span>
            </h2>

            <p
              style={{
                color: 'rgba(245,240,232,0.55)',
                fontSize: '1.05rem',
                lineHeight: 1.8,
                maxWidth: '540px',
                margin: '0 auto',
              }}
            >
              From international NGOs to prestigious vineyards —
              Veronica has brought warmth, flavour and excellence
              to every table.
            </p>
          </div>
        </RevealEl>

        {/* Stats */}
        <RevealEl delay={100}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '1px',
              background: 'rgba(255,255,255,0.06)',
              borderRadius: '16px',
              overflow: 'hidden',
              marginBottom: '72px',
            }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                style={{
                  background: '#1a1a1a',
                  padding: '30px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#C97A2A',
                  }}
                >
                  {s.value}
                </div>

                <div
                  style={{
                    color: 'rgba(245,240,232,0.45)',
                    fontSize: '0.75rem',
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </RevealEl>

        {/* Partners Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '16px',
          }}
        >
          {partners.map((partner, i) => (
            <RevealEl key={partner.name} delay={i * 80}>
              <PartnerCard partner={partner} />
            </RevealEl>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Partner Card ─────────────────────────────────────────────────────────────
function PartnerCard({ partner }) {
  const { name, tag, accent, letter, logo, logoBg } = partner

  const [imgError, setImgError] = useState(false)

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: '18px',
        overflow: 'hidden',
        background: '#1a1a1a',
        border: '1px solid rgba(255,255,255,0.07)',
        padding: '30px 26px 38px',
        transition: '0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      {/* Logo */}
      <div
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '16px',
          background: logoBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: '10px',
        }}
      >
        {!imgError ? (
          <img
            src={logo}
            alt={name}
            loading="lazy"
            onError={() => setImgError(true)}
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
              borderRadius: '12px',
              background: accent,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '2rem',
              fontWeight: 'bold',
            }}
          >
            {letter}
          </div>
        )}
      </div>

      {/* Text */}
      <div>
        <h3
          style={{
            color: '#F5F0E8',
            marginBottom: '8px',
            marginTop: 0,
          }}
        >
          {name}
        </h3>

        <p
          style={{
            color: 'rgba(245,240,232,0.6)',
            margin: 0,
            fontSize: '0.85rem',
          }}
        >
          {tag}
        </p>
      </div>

      {/* Accent line */}
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
