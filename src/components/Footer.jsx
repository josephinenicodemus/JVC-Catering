import { useTranslation } from 'react-i18next'
import { MessageCircle, Mail, Instagram, Facebook, ChevronRight, Phone, MapPin } from 'lucide-react'

const WA = '255767620509'

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const GOLD        = '#C97A2A'        // orange/gold accent
const GREEN       = '#1B6B3A'        // forest green accent
const CREAM       = '#F5F0E8'        // primary text
const CREAM_80    = 'rgba(245,240,232,0.80)'
const CREAM_55    = 'rgba(245,240,232,0.55)'
const CREAM_38    = 'rgba(245,240,232,0.38)'
const DIVIDER     = 'rgba(245,240,232,0.08)'

export default function Footer() {
  const { t } = useTranslation()

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const navLinks = [
    { label: 'Home',      href: '#hero'     },
    { label: 'About JVC', href: '#about'    },
    { label: 'Services',  href: '#services' },
    { label: 'Menu',      href: '#menu'     },
    { label: 'Contact',   href: '#contact'  },
  ]

  const serviceLinks = [
    'Wedding Catering',
    'Corporate Events',
    'Private Gatherings',
    'Buffet Service',
    'Takeaway & Delivery',
  ]

  const contactLinks = [
    { Icon: Phone,         val: '+255 767 620 509',        href: 'tel:+255767620509'                          },
    { Icon: Phone,         val: '+255 715 602 509',        href: 'tel:+255715602509'                          },
    { Icon: MessageCircle, val: 'WhatsApp Us',             href: `https://wa.me/${WA}`                        },
    { Icon: Mail,          val: 'veronica.wlff@gmail.com', href: 'mailto:veronica.wlff@gmail.com'             },
    { Icon: Instagram,     val: '@jvc.catering._tz',       href: 'https://instagram.com/jvc.catering._tz'     },
    { Icon: MapPin,        val: 'Sinza Mori, Lagana St, DSM', href: null                                      },
  ]

  const socialIcons = [
    { href: 'https://instagram.com/jvc.catering._tz', Icon: Instagram,     label: 'Instagram' },
    { href: `https://wa.me/${WA}`,                    Icon: MessageCircle, label: 'WhatsApp'  },
    { href: 'mailto:veronica.wlff@gmail.com',         Icon: Mail,          label: 'Email'     },
    { href: '#',                                       Icon: Facebook,      label: 'Facebook'  },
  ]

  return (
    <footer style={{
      // Rich dark charcoal — warmer than pure black, matches hero
      background: 'linear-gradient(180deg, #0f0e0b 0%, #141210 60%, #0d0c0a 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* ── Top fade — blends with section above ── */}
      <div style={{
        position: 'absolute', top: 0, inset: 'auto',
        left: 0, right: 0, height: '1px',
        background: `linear-gradient(to right, transparent, ${GOLD}55, ${GREEN}55, transparent)`,
      }} />

      {/* ── Left accent bar — consistent with Hero ── */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px',
        background: `linear-gradient(to bottom, transparent 10%, ${GOLD} 38%, ${GREEN} 62%, transparent 90%)`,
        pointerEvents: 'none',
      }} />

      {/* ── Ambient glow spots ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          radial-gradient(ellipse at 10% 100%, rgba(201,122,42,0.06) 0%, transparent 50%),
          radial-gradient(ellipse at 90% 80%,  rgba(27,107,58,0.05) 0%, transparent 50%)`,
      }} />

      {/* ── Main content wrapper ── */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px clamp(20px,5vw,64px) 0' }}>

        {/* ══ Top brand strip ══ */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '20px',
          paddingBottom: '48px',
          borderBottom: `1px solid ${DIVIDER}`,
          marginBottom: '56px',
        }}>
          {/* Wordmark */}
          <div>
            <div style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(1.6rem, 3vw, 2rem)',
              fontWeight: 700, color: CREAM,
              letterSpacing: '0.04em',
              lineHeight: 1,
              marginBottom: '8px',
            }}>
              JVC <span style={{ color: GOLD }}>Catering</span>
            </div>
            <p style={{
              fontFamily: '"Playfair Display", serif',
              fontStyle: 'italic',
              fontSize: '0.85rem',
              color: CREAM_55,
              letterSpacing: '0.04em',
            }}>
              The service you need
            </p>
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '10px' }}>
            {socialIcons.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                style={{
                  width: '42px', height: '42px',
                  borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(245,240,232,0.06)',
                  border: `1px solid rgba(245,240,232,0.10)`,
                  color: CREAM_55,
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = GOLD
                  e.currentTarget.style.borderColor = GOLD
                  e.currentTarget.style.color = '#fff'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = `0 8px 20px rgba(201,122,42,0.35)`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(245,240,232,0.06)'
                  e.currentTarget.style.borderColor = 'rgba(245,240,232,0.10)'
                  e.currentTarget.style.color = CREAM_55
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* ══ Main 4-column grid ══ */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'clamp(32px, 4vw, 56px)',
          paddingBottom: '56px',
          borderBottom: `1px solid ${DIVIDER}`,
        }}>

          {/* ── Brand description column ── */}
          <div>
            <ColHeading>About JVC</ColHeading>
            <p style={{
              fontSize: '0.875rem',
              color: CREAM_55,
              lineHeight: 1.85,
              maxWidth: '220px',
            }}>
              {t('footer.desc')}
            </p>

            {/* Green accent tag */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              marginTop: '20px',
              background: `rgba(27,107,58,0.12)`,
              border: `1px solid rgba(27,107,58,0.25)`,
              borderRadius: '100px',
              padding: '5px 14px',
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: GREEN, display: 'inline-block' }} />
              <span style={{ color: GREEN, fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>
                Est. 2016 · Dar es Salaam
              </span>
            </div>
          </div>

          {/* ── Navigation column ── */}
          <div>
            <ColHeading>{t('footer.nav')}</ColHeading>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                      fontSize: '0.875rem', color: CREAM_80,
                      fontFamily: 'inherit',
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = GOLD
                      e.currentTarget.style.transform = 'translateX(4px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = CREAM_80
                      e.currentTarget.style.transform = 'translateX(0)'
                    }}
                  >
                    <ChevronRight size={12} style={{ color: GOLD, flexShrink: 0 }} />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services column ── */}
          <div>
            <ColHeading>{t('footer.services')}</ColHeading>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {serviceLinks.map(s => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#services')}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                      fontSize: '0.875rem', color: CREAM_80,
                      fontFamily: 'inherit',
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = GOLD
                      e.currentTarget.style.transform = 'translateX(4px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = CREAM_80
                      e.currentTarget.style.transform = 'translateX(0)'
                    }}
                  >
                    <ChevronRight size={12} style={{ color: GREEN, flexShrink: 0 }} />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact column ── */}
          <div>
            <ColHeading>{t('footer.contact')}</ColHeading>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '13px' }}>
              {contactLinks.map(({ Icon, val, href }, i) => (
                <li key={i}>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      style={{
                        display: 'flex', alignItems: 'flex-start', gap: '10px',
                        fontSize: '0.875rem', color: CREAM_80,
                        textDecoration: 'none',
                        transition: 'color 0.25s ease',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = GOLD}
                      onMouseLeave={e => e.currentTarget.style.color = CREAM_80}
                    >
                      <Icon size={13} style={{ color: GOLD, flexShrink: 0, marginTop: '2px' }} />
                      {val}
                    </a>
                  ) : (
                    <span style={{
                      display: 'flex', alignItems: 'flex-start', gap: '10px',
                      fontSize: '0.875rem', color: CREAM_55,
                    }}>
                      <Icon size={13} style={{ color: GREEN, flexShrink: 0, marginTop: '2px' }} />
                      {val}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ══ Bottom bar ══ */}
        <div style={{
          padding: '24px 0 32px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
        }}>
          <p style={{ fontSize: '0.78rem', color: CREAM_38 }}>
            &copy; {new Date().getFullYear()}{' '}
            <span style={{ color: CREAM_55 }}>JVC Catering</span>
            {' · '}Veronica Nguma{' · '}Dar es Salaam, Tanzania.{' '}
            {t('footer.rights')}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {[
              { label: t('footer.privacy'), href: '#' },
              { label: t('footer.terms'),   href: '#' },
            ].map(({ label, href }, i) => (
              <span key={label} style={{ display: 'flex', alignItems: 'center' }}>
                {i > 0 && (
                  <span style={{ color: CREAM_38, margin: '0 4px', fontSize: '0.7rem' }}>|</span>
                )}
                <a
                  href={href}
                  style={{
                    fontSize: '0.78rem', color: CREAM_38,
                    textDecoration: 'none', padding: '4px 8px',
                    transition: 'color 0.25s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = GOLD}
                  onMouseLeave={e => e.currentTarget.style.color = CREAM_38}
                >
                  {label}
                </a>
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}

// ─── Reusable column heading ──────────────────────────────────────────────────
function ColHeading({ children }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h5 style={{
        fontSize: '0.68rem',
        fontWeight: 700,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: '#C97A2A',
        marginBottom: '10px',
      }}>
        {children}
      </h5>
      {/* Underline rule */}
      <div style={{
        height: '1px', width: '32px',
        background: 'linear-gradient(to right, #C97A2A, #1B6B3A)',
        borderRadius: '2px',
      }} />
    </div>
  )
}
