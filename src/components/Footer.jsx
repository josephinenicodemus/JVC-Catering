import { useTranslation } from 'react-i18next'
import { MessageCircle, Mail, Instagram, Facebook, ChevronRight, Phone, MapPin } from 'lucide-react'

const WA = '255767620509'

export default function Footer() {
  const { t } = useTranslation()

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About JVC', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Menu', href: '#menu' },
    { label: 'Contact', href: '#contact' },
  ]

  const serviceLinks = [
    'Wedding Catering', 'Corporate Events', 'Private Gatherings', 'Buffet Service', 'Takeaway & Delivery',
  ]

  const contactLinks = [
    { icon: Phone, val: '+255 767 620 509', href: 'tel:+255767620509' },
    { icon: Phone, val: '+255 715 602 509', href: 'tel:+255715602509' },
    { icon: MessageCircle, val: 'WhatsApp Us', href: `https://wa.me/${WA}` },
    { icon: Mail, val: 'veronica.wlff@gmail.com', href: 'mailto:veronica.wlff@gmail.com' },
    { icon: Instagram, val: '@jvc.catering._tz', href: 'https://instagram.com/jvc.catering._tz' },
    { icon: MapPin, val: 'Sinza Mori, Lagana St, DSM', href: null },
  ]

  return (
    <footer style={{ background: '#0D0D0D' }} className="px-5 md:px-8 lg:px-12 pt-20 pb-6">
      <div className="max-w-7xl mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/6">
          {/* Brand */}
          <div>
            <div style={{ fontFamily: '"Playfair Display", serif' }}
              className="text-2xl font-bold text-white tracking-wider mb-4">
              JVC <span style={{ color: '#C97A2A' }}>Catering</span>
            </div>
            <p className="text-sm text-white/34 leading-relaxed mb-6 max-w-[220px]">{t('footer.desc')}</p>
            <div className="flex gap-2.5">
              {[
                { href: 'https://instagram.com/jvc.catering._tz', Icon: Instagram },
                { href: `https://wa.me/${WA}`, Icon: MessageCircle },
                { href: 'mailto:veronica.wlff@gmail.com', Icon: Mail },
                { href: '#', Icon: Facebook },
              ].map(({ href, Icon }, i) => (
                <a key={i} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white/30 transition-all duration-300 hover:bg-[#C97A2A] hover:text-white"
                  style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h5 className="text-[0.6rem] font-bold tracking-[0.28em] uppercase text-white/22 mb-5">{t('footer.nav')}</h5>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <button onClick={() => scrollTo(href)}
                    className="flex items-center gap-2 text-sm text-white/38 hover:text-[#C97A2A] transition-colors duration-300">
                    <ChevronRight size={11} style={{ color: '#C97A2A', opacity: 0.4 }} />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-[0.6rem] font-bold tracking-[0.28em] uppercase text-white/22 mb-5">{t('footer.services')}</h5>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map(s => (
                <li key={s}>
                  <button onClick={() => scrollTo('#services')}
                    className="flex items-center gap-2 text-sm text-white/38 hover:text-[#C97A2A] transition-colors duration-300">
                    <ChevronRight size={11} style={{ color: '#C97A2A', opacity: 0.4 }} />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-[0.6rem] font-bold tracking-[0.28em] uppercase text-white/22 mb-5">{t('footer.contact')}</h5>
            <ul className="flex flex-col gap-2.5">
              {contactLinks.map(({ icon: Icon, val, href }, i) => (
                <li key={i}>
                  {href
                    ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                        className="flex items-center gap-2.5 text-sm text-white/38 hover:text-[#C97A2A] transition-colors duration-300">
                        <Icon size={12} style={{ color: '#C97A2A', flexShrink: 0 }} />
                        {val}
                      </a>
                    : <span className="flex items-center gap-2.5 text-sm text-white/38">
                        <Icon size={12} style={{ color: '#C97A2A', flexShrink: 0 }} />
                        {val}
                      </span>
                  }
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.76rem] text-white/28">
            &copy; {new Date().getFullYear()} JVC Catering · Veronica Nguma · Dar es Salaam, Tanzania. {t('footer.rights')}
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-[0.76rem] text-white/22 hover:text-[#C97A2A] transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="text-[0.76rem] text-white/22 hover:text-[#C97A2A] transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
