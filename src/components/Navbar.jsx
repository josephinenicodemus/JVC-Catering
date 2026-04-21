import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X, Globe } from 'lucide-react'

const LANGS = [
  { code: 'en', label: 'EN', full: 'English' },
  { code: 'fr', label: 'FR', full: 'Français' },
  { code: 'sw', label: 'SW', full: 'Kiswahili' },
]

const links = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.services', href: '#services' },
  { key: 'nav.menu', href: '#menu' },
  { key: 'nav.gallery', href: '#gallery' },
  { key: 'nav.contact', href: '#contact' },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 55)
      const sections = document.querySelectorAll('section[id]')
      let cur = ''
      sections.forEach(s => { if (window.scrollY >= s.offsetTop - 160) cur = s.id })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const changeLang = (code) => {
    i18n.changeLanguage(code)
    setLangOpen(false)
    setOpen(false)
  }

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); setOpen(false) }
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[500] transition-all duration-400"
        style={scrolled ? {
          background: 'rgba(250,249,246,0.97)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 2px 28px rgba(0,0,0,0.06)',
        } : {}}
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-[76px]">
            {/* Logo */}
            <a href="#hero" onClick={e => { e.preventDefault(); scrollTo('#hero') }}
              style={{ fontFamily: '"Playfair Display", serif' }}
              className={`text-2xl font-bold tracking-wider transition-colors duration-300 ${scrolled ? 'text-[#0D0D0D]' : 'text-white'}`}>
              JVC <span style={{ color: '#C97A2A' }}>Catering</span>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {links.map(l => (
                <a key={l.key} href={l.href} onClick={e => { e.preventDefault(); scrollTo(l.href) }}
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                    active === l.href.slice(1)
                      ? 'text-[#C97A2A]'
                      : scrolled ? 'text-zinc-500 hover:text-[#C97A2A]' : 'text-white/75 hover:text-[#E8A05C]'
                  }`}>
                  {t(l.key)}
                </a>
              ))}
            </div>

            {/* Right controls */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Lang switcher */}
              <div className="relative">
                <button onClick={() => setLangOpen(!langOpen)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                    scrolled
                      ? 'bg-amber-pale border border-amber-DEFAULT/20 text-amber-DEFAULT'
                      : 'bg-white/10 border border-white/20 text-white/70 hover:text-white'
                  }`}>
                  <Globe size={13} />
                  {LANGS.find(l => l.code === i18n.language)?.label || 'EN'}
                </button>
                {langOpen && (
                  <div className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-2xl border border-zinc-100 overflow-hidden py-1 min-w-[140px]">
                    {LANGS.map(l => (
                      <button key={l.code} onClick={() => changeLang(l.code)}
                        className={`w-full text-left px-4 py-2.5 text-xs font-semibold transition-colors hover:bg-zinc-50 ${
                          i18n.language === l.code ? 'text-[#C97A2A]' : 'text-zinc-600'
                        }`}>
                        {l.full}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <a href="#contact" onClick={e => { e.preventDefault(); scrollTo('#contact') }}
                className="btn-primary text-xs">
                {t('nav.quote')}
              </a>
            </div>

            {/* Mobile hamburger */}
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2"
              aria-label="Toggle menu">
              {open
                ? <X size={22} color={scrolled ? '#0D0D0D' : '#fff'} />
                : <Menu size={22} color={scrolled ? '#0D0D0D' : '#fff'} />
              }
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className="fixed inset-0 z-[490] lg:hidden transition-all duration-300"
        style={{ visibility: open ? 'visible' : 'hidden', opacity: open ? 1 : 0 }}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>
      <div
        className="fixed top-0 right-0 bottom-0 z-[495] lg:hidden w-[300px] bg-[#0D0D0D] flex flex-col transition-transform duration-[400ms]"
        style={{ transform: open ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <div className="p-6 pt-24 flex flex-col gap-1 flex-1">
          {links.map(l => (
            <a key={l.key} href={l.href} onClick={e => { e.preventDefault(); scrollTo(l.href) }}
              className="flex items-center gap-3 py-3.5 px-4 text-sm text-white/55 border-b border-white/5 rounded-xl transition-all hover:text-white hover:bg-white/5">
              {t(l.key)}
            </a>
          ))}
          <div className="mt-4 flex gap-2">
            {LANGS.map(l => (
              <button key={l.code} onClick={() => changeLang(l.code)}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  i18n.language === l.code
                    ? 'bg-[#C97A2A] text-white'
                    : 'border border-white/15 text-white/40 hover:text-white'
                }`}>
                {l.full}
              </button>
            ))}
          </div>
          <a href="#contact" onClick={e => { e.preventDefault(); scrollTo('#contact') }}
            className="mt-4 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#C97A2A] text-white text-sm font-bold">
            {t('nav.quote')}
          </a>
        </div>
      </div>
    </>
  )
}
