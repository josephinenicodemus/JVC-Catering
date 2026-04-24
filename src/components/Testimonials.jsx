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

// ─── Partner data — logo paths match /public/logo/ filenames exactly ──────────
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
]

const stats = [
  { value: '25+',  label: 'Years of Experience' },
  { value: '8+',   label: 'Trusted Partners'    },
  { value: '500+', label: 'Events Catered'       },
  { value: '4',    label: 'Cuisine Styles'       },
]

// ─── Main section ─────────────────────────────────────────────────────────────
export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{ background: '#111', position: 'relative', overflow: 'hidden' }}
    >
      {/* Ambient glows */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(201,122,42,0.06) 0%, transparent 60%),
          radial-gradient(circle at 80% 20%, rgba(27,107,58,0.07) 0%, transparent 50%)`,
      }} />

      {/* Side rules */}
      <div style={{
        position: 'absolute', top: 0, left: '5%', bottom: 0, width: '1px', pointerEvents: 'none',
        background: 'linear-gradient(to bottom, transparent, rgba(201,122,42,0.2), transparent)',
      }} />
      <div style={{
        position: 'absolute', top: 0, right: '5%', bottom: 0, width: '1px', pointerEvents: 'none',
        background: 'linear-gradient(to bottom, transparent, rgba(27,107,58,0.2), transparent)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(60px,8vw,100px) clamp(16px,4vw,24px)' }}>

        {/* ── Header ── */}
        <RevealEl>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'rgba(201,122,42,0.1)', border: '1px solid rgba(201,122,42,0.25)',
              borderRadius: '100px', padding: '6px 18px', marginBottom: '20px',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C97A2A', display: 'inline-block' }} />
              <span style={{ color: '#C97A2A', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
                Our Culinary Collaborations
              </span>
            </div>

            <h2 style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 700, color: '#F5F0E8', lineHeight: 1.15, marginBottom: '18px',
            }}>
              Trusted by{' '}
              <em style={{ color: '#C97A2A', fontStyle: 'italic' }}>Leading Organisations</em>
              <br />Across East Africa
            </h2>

            <p style={{
              color: 'rgba(245,240,232,0.55)', fontSize: '1.05rem',
              lineHeight: 1.8, maxWidth: '540px', margin: '0 auto',
            }}>
              From international NGOs to prestigious vineyards — Veronica has brought
              warmth, flavour and excellence to every table.
            </p>
          </div>
        </RevealEl>

        {/* ── Stats bar ── */}
        <RevealEl delay={100}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '1px',
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '16px', overflow: 'hidden', marginBottom: '72px',
          }}>
            {stats.map((s) => (
              <div key={s.label} style={{ background: '#1a1a1a', padding: 'clamp(20px,3vw,32px) 20px', textAlign: 'center' }}>
                <div style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: 'clamp(1.8rem,3.5vw,2.4rem)',
                  fontWeight: 700, color: '#C97A2A', lineHeight: 1, marginBottom: '8px',
                }}>{s.value}</div>
                <div style={{ color: 'rgba(245,240,232,0.45)', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </RevealEl>

        {/* ── Partner cards ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '16px',
        }}>
          {partners.map((p, i) => (
            <RevealEl key={p.name} delay={i * 80}>
              <PartnerCard partner={p} />
            </RevealEl>
          ))}
        </div>

        {/* ── Bottom quote ── */}
        <RevealEl delay={300}>
          <div style={{
            marginTop: '72px', textAlign: 'center',
            borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '48px',
          }}>
            <p style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              color: 'rgba(245,240,232,0.7)', fontStyle: 'italic', lineHeight: 1.6,
            }}>
              "From intimate private gatherings to grand corporate events —{' '}
              <span style={{ color: '#C97A2A' }}>every table deserves the best."</span>
            </p>
            <div style={{
              marginTop: '8px', color: 'rgba(245,240,232,0.35)',
              fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>
              — Veronica Nguma, Founder · JVC Catering
            </div>
          </div>
        </RevealEl>

      </div>
    </section>
  )
}

// ─── Partner card with real logo ──────────────────────────────────────────────
function PartnerCard({ partner }) {
  const { name, tag, accent, letter, logo, logoBg } = partner

  const onEnter = (e) => {
    e.currentTarget.style.transform   = 'translateY(-5px)'
    e.currentTarget.style.borderColor = `${accent}66`
    e.currentTarget.style.boxShadow   = `0 24px 48px rgba(0,0,0,0.45), 0 0 0 1px ${accent}33`
  }
  const onLeave = (e) => {
    e.currentTarget.style.transform   = 'translateY(0)'
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
    e.currentTarget.style.boxShadow   = 'none'
  }

  // On image error → hide img, show fallback letter badge
  const onError = (e) => {
    e.currentTarget.style.display = 'none'
    const fb = e.currentTarget.parentNode.querySelector('[data-fallback]')
    if (fb) fb.style.display = 'flex'
  }

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        position: 'relative', borderRadius: '16px', overflow: 'hidden',
        background: '#1a1a1a',
        border: '1px solid rgba(255,255,255,0.07)',
        padding: '28px 24px 36px',
        transition: 'transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
        cursor: 'default',
        display: 'flex', flexDirection: 'column', gap: '18px',
        height: '100%',
      }}
    >
      {/* Corner accent glow */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100px', height: '100px',
        borderRadius: '0 0 100px 0',
        background: `radial-gradient(circle, ${accent}1a 0%, transparent 72%)`,
        pointerEvents: 'none',
      }} />

      {/* ── Logo container ── */}
      <div style={{
        width: '72px', height: '72px',
        borderRadius: '14px',
        background: logoBg,
        border: `1px solid rgba(255,255,255,0.10)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden', flexShrink: 0,
        boxShadow: `0 4px 20px rgba(0,0,0,0.35)`,
        position: 'relative',
        padding: '8px',
      }}>
        {/* Real logo image — 4K quality via object-fit contain */}
        <img
          src={logo}
          alt={`${name} logo`}
          loading="lazy"
          onError={onError}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center',
            display: 'block',
            imageRendering: 'high-quality',
            /* Start greyscale → full colour on card hover via CSS transition */
            filter: 'grayscale(30%) brightness(0.95)',
            transition: 'filter 0.4s ease, transform 0.4s ease',
          }}
        />

        {/* Fallback letter badge — only shown if image fails to load */}
        <span
          data-fallback
          style={{
            display: 'none',
            position: 'absolute', inset: 0,
            alignItems: 'center', justifyContent: 'center',
            background: `linear-gradient(135deg, ${accent}, ${accent}99)`,
            fontFamily: '"Playfair Display", serif',
            fontSize: '1.6rem', fontWeight: 700, color: '#fff',
            borderRadius: '14px',
          }}
        >
          {letter}
        </span>
      </div>

      {/* ── Text ── */}
      <div>
        <div style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: '1.05rem', fontWeight: 700,
          color: '#F5F0E8', marginBottom: '6px', lineHeight: 1.3,
        }}>
          {name}
        </div>
        <div style={{
          fontSize: '0.75rem',
          color: 'rgba(245,240,232,0.42)',
          letterSpacing: '0.03em', lineHeight: 1.55,
        }}>
          {tag}
        </div>
      </div>

      {/* ── Bottom accent rule ── */}
      <div style={{
        position: 'absolute', bottom: 0, left: '24px', right: '24px', height: '2px',
        background: `linear-gradient(to right, ${accent}88, transparent)`,
        borderRadius: '2px',
      }} />

      {/* ── Hover logo colour reveal via CSS ── */}
      <style>{`
        div:hover > div > img {
          filter: grayscale(0%) brightness(1.05) !important;
          transform: scale(1.04);
        }
      `}</style>
    </div>
  )
}
