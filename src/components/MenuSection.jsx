import { useState, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useReveal } from '../hooks/useReveal'
import { FileDown, Loader2 } from 'lucide-react'

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
const TABS = [
  {
    key: 'starters',
    items: ['sambusa', 'maandazi', 'kitumbua', 'kachori', 'mishkaki', 'urojo'],
  },
  {
    key: 'mains',
    items: ['pilau', 'nyamachoma', 'walinazi', 'maharage', 'ndizi', 'biryani'],
  },
  {
    key: 'desserts',
    items: ['icecream', 'cake', 'fruit', 'halwa', 'pudding', 'sweetmaan'],
  },
  {
    key: 'beverages',
    items: ['muwa', 'juice', 'cocktail', 'mocktail', 'chai', 'bev'],
  },
]

const IMAGES = {
  /* STARTERS */
  sambusa:   '/menu/sambusa.webp',
  maandazi:  '/menu/maandazi.webp',
  kitumbua:  '/menu/kitumbua.webp',
  kachori:   '/menu/kachori.webp',
  mishkaki:  '/menu/mshikaki.webp',
  urojo:     '/menu/urojo.webp',
  /* MAINS */
  pilau:      '/menu/pilau.webp',
  nyamachoma: '/menu/nyamachoma.webp',
  walinazi:   '/menu/walinazi.webp',
  maharage:   '/menu/maharage.webp',
  ndizi:      '/menu/ndizinyama.webp',
  biryani:    '/menu/biryani.webp',
  /* DESSERTS */
  icecream:  '/menu/icecream.webp',
  cake:      '/menu/cake.webp',
  fruit:     '/menu/fruit.webp',
  halwa:     '/menu/halwa.webp',
  pudding:   '/menu/coconutpudding.webp',
  sweetmaan: '/menu/maandazihoney.webp',
  /* BEVERAGES */
  muwa:     '/menu/sugarcanejuice.webp',
  juice:    '/menu/juice.webp',
  cocktail: '/menu/cocktail.webp',
  mocktail: '/menu/mocktail.webp',
  chai:     '/menu/chai.webp',
  bev:      '/menu/beverage.webp',
}

/* ─────────────────────────────────────────────────────────────
   REVEAL WRAPPER
───────────────────────────────────────────────────────────── */
function RevealEl({ children, delay = 0 }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate3d(0,0,0)' : 'translate3d(0,30px,0)',
        transition: `opacity 0.7s ${delay}ms cubic-bezier(0.22,1,0.36,1),
                     transform 0.7s ${delay}ms cubic-bezier(0.22,1,0.36,1)`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   MENU CARD
───────────────────────────────────────────────────────────── */
const MenuCard = memo(function MenuCard({ itemKey, item }) {
  return (
    <div
      className="group rounded-2xl overflow-hidden cursor-default"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease',
        willChange: 'transform',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.5)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden bg-[#111827]" style={{ height: '13rem' }}>
        {/* Skeleton shimmer */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, #1a2030 25%, #222d3f 50%, #1a2030 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
          }}
        />
        <img
          src={IMAGES[itemKey]}
          alt={item?.name || itemKey}
          loading="lazy"
          decoding="async"
          width="600"
          height="400"
          className="relative z-10 w-full h-full object-cover"
          style={{
            transition: 'transform 0.7s cubic-bezier(0.22,1,0.36,1)',
          }}
          onLoad={e => {
            // Hide skeleton once loaded
            const skeleton = e.currentTarget.previousSibling
            if (skeleton) skeleton.style.display = 'none'
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.07)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
          onError={e => {
            e.currentTarget.src = '/menu/fallback.webp'
            e.currentTarget.onerror = null
          }}
        />
        {/* Bottom gradient overlay */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }}
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h4
          className="text-lg font-semibold text-white mb-1.5 leading-snug"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          {item?.name}
        </h4>
        <p className="text-[0.8rem] leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
          {item?.desc}
        </p>
        <span
          className="inline-flex items-center px-3 py-1 rounded-full text-[0.6rem] font-bold tracking-[0.15em] uppercase"
          style={{
            background: 'rgba(201,122,42,0.12)',
            border: '1px solid rgba(201,122,42,0.28)',
            color: '#E8A05C',
          }}
        >
          {item?.tag}
        </span>
      </div>
    </div>
  )
})

/* ─────────────────────────────────────────────────────────────
   PDF GENERATOR — full menu, brand logo + Veronica signature
───────────────────────────────────────────────────────────── */
async function generateMenuPDF(t) {
  /* 1 ── Load html2pdf.js once */
  if (!window.html2pdf) {
    await new Promise((resolve, reject) => {
      const s = document.createElement('script')
      s.src =
        'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'
      s.crossOrigin = 'anonymous'
      s.onload = resolve
      s.onerror = () => reject(new Error('html2pdf failed to load'))
      document.head.appendChild(s)
    })
  }

  /* 2 ── Pre-load Google Fonts into the document so html2canvas picks them up */
  if (!document.getElementById('jvc-pdf-fonts')) {
    const link = document.createElement('link')
    link.id = 'jvc-pdf-fonts'
    link.rel = 'stylesheet'
    link.href =
      'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Pinyon+Script&display=swap'
    document.head.appendChild(link)
    await new Promise(r => setTimeout(r, 1400)) // let fonts paint
  }

  /* 3 ── Build HTML for every category + every item */
  const categoriesHTML = TABS.map(tab => {
    const tabLabel = t(`menu.tab_${tab.key}`) || tab.key

    const itemsHTML = tab.items
      .map(itemKey => {
        const item = t(`menu.items.${itemKey}`, { returnObjects: true }) || {}
        return `
          <div style="
            padding: 10px 14px;
            background: rgba(255,255,255,0.035);
            border: 1px solid rgba(201,122,42,0.18);
            border-radius: 10px;
            margin-bottom: 8px;
          ">
            <div style="
              font-family:'Playfair Display',serif;
              font-size:12px;
              font-weight:700;
              color:#F5F0E8;
              margin-bottom:3px;
            ">${item?.name || itemKey}</div>
            <div style="
              font-size:10px;
              color:rgba(245,240,232,0.55);
              margin-bottom:6px;
              line-height:1.5;
            ">${item?.desc || ''}</div>
            <span style="
              font-size:8.5px;
              font-weight:700;
              letter-spacing:0.14em;
              text-transform:uppercase;
              color:#E8A05C;
              background:rgba(201,122,42,0.1);
              border:1px solid rgba(201,122,42,0.25);
              padding:2px 9px;
              border-radius:99px;
            ">${item?.tag || ''}</span>
          </div>`
      })
      .join('')

    return `
      <div style="margin-bottom:26px; page-break-inside:avoid;">
        <!-- category heading with decorative lines -->
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
          <div style="flex:1;height:1px;background:linear-gradient(to right,rgba(201,122,42,0.55),transparent);"></div>
          <span style="
            font-family:'Playfair Display',serif;
            font-size:13px;
            font-weight:700;
            color:#C97A2A;
            letter-spacing:0.22em;
            text-transform:uppercase;
          ">${tabLabel}</span>
          <div style="flex:1;height:1px;background:linear-gradient(to left,rgba(201,122,42,0.55),transparent);"></div>
        </div>
        <!-- 2-column grid of items -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
          ${itemsHTML}
        </div>
      </div>`
  }).join('')

  /* 4 ── Assemble the full PDF document */
  const eyebrow  = t('menu.eyebrow')  || 'Our Menu'
  const heading1 = t('menu.heading1') || 'Crafted with'
  const heading2 = t('menu.heading2') || 'Passion'

  // Inline SVG utensil (matches Hero ornament)
  const utensilSVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="#C97A2A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 2v7c0 1.1.9 2 2 2h2v11h2V11h2a2 2 0 0 0 2-2V2h-2v5H7V2H5v5H3V2z"/>
    <path d="M18 2c0 0-3 2-3 6s3 6 3 6v8h2V2h-2z"/>
  </svg>`

  const html = `
    <div style="
      width:794px;
      background:#0D0D0D;
      color:#F5F0E8;
      font-family:'Playfair Display',serif;
      padding:44px 52px 48px;
      box-sizing:border-box;
    ">
      <!-- ── LEFT ACCENT BAR (matches Hero) ── -->
      <div style="
        position:absolute;left:0;top:0;bottom:0;width:4px;
        background:linear-gradient(to bottom,transparent 5%,#C97A2A 35%,#1B6B3A 65%,transparent 95%);
      "></div>

      <!-- ── BRAND HEADER ── -->
      <div style="text-align:center;margin-bottom:28px;">
        <!-- ornament row -->
        <div style="display:flex;align-items:center;justify-content:center;gap:14px;margin-bottom:14px;">
          <div style="height:1px;width:52px;background:rgba(201,122,42,0.6);"></div>
          ${utensilSVG}
          <div style="height:1px;width:52px;background:rgba(201,122,42,0.6);"></div>
        </div>

        <!-- JVC -->
        <div style="
          font-family:'Playfair Display',serif;
          font-size:60px;
          font-weight:400;
          color:#F5F0E8;
          line-height:0.88;
          letter-spacing:-0.015em;
        ">JVC</div>

        <!-- Catering -->
        <div style="
          font-family:'Playfair Display',serif;
          font-size:60px;
          font-weight:700;
          color:#F5F0E8;
          line-height:0.88;
          letter-spacing:-0.015em;
          margin-bottom:12px;
        ">Catering</div>

        <!-- Italic tagline -->
        <div style="display:flex;align-items:center;justify-content:center;gap:16px;margin-top:10px;">
          <div style="height:1px;width:32px;background:rgba(245,240,232,0.35);"></div>
          <span style="
            font-family:'Playfair Display',serif;
            font-size:12px;
            font-style:italic;
            color:rgba(245,240,232,0.7);
            letter-spacing:0.08em;
          ">The service you need</span>
          <div style="height:1px;width:32px;background:rgba(245,240,232,0.35);"></div>
        </div>
      </div>

      <!-- ── GOLD DIVIDER ── -->
      <div style="height:1px;background:linear-gradient(to right,transparent,rgba(201,122,42,0.55),transparent);margin:0 0 22px;"></div>

      <!-- ── VERONICA SIGNATURE ── -->
      <div style="text-align:center;margin:4px 0 22px;">
        <span style="
          font-family:'Pinyon Script',cursive;
          font-size:80px;
          color:#E8A05C;
          line-height:1.1;
          display:inline-block;
        ">Veronica</span>
      </div>

      <!-- ── GOLD DIVIDER ── -->
      <div style="height:1px;background:linear-gradient(to right,transparent,rgba(201,122,42,0.55),transparent);margin:0 0 28px;"></div>

      <!-- ── MENU EYEBROW ── -->
      <div style="text-align:center;margin-bottom:26px;">
        <div style="
          font-size:9px;
          letter-spacing:0.28em;
          text-transform:uppercase;
          font-weight:700;
          color:#E8A05C;
          margin-bottom:6px;
        ">${eyebrow}</div>
        <div style="
          font-family:'Playfair Display',serif;
          font-size:22px;
          font-weight:600;
          color:#F5F0E8;
        ">
          ${heading1} <em style="color:#E8A05C;font-style:italic;">${heading2}</em>
        </div>
      </div>

      <!-- ── ALL MENU CATEGORIES ── -->
      ${categoriesHTML}

      <!-- ── FOOTER ── -->
      <div style="
        height:1px;
        background:linear-gradient(to right,transparent,rgba(201,122,42,0.3),transparent);
        margin:8px 0 14px;
      "></div>
      <div style="text-align:center;">
        <span style="
          font-size:9px;
          color:rgba(245,240,232,0.35);
          letter-spacing:0.12em;
          text-transform:uppercase;
        ">© ${new Date().getFullYear()} JVC Catering · All Rights Reserved</span>
      </div>
    </div>`

  /* 5 ── Mount, render, save */
  const wrapper = document.createElement('div')
  wrapper.style.cssText =
    'position:fixed;left:-9999px;top:0;width:794px;z-index:-1;'
  wrapper.innerHTML = html
  document.body.appendChild(wrapper)

  // Extra delay so Pinyon Script renders properly in canvas
  await new Promise(r => setTimeout(r, 900))

  try {
    await window
      .html2pdf()
      .set({
        margin: 0,
        filename: 'JVC-Catering-Full-Menu.pdf',
        image: { type: 'jpeg', quality: 0.97 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#0D0D0D',
          logging: false,
          windowWidth: 794,
        },
        jsPDF: {
          unit: 'px',
          format: [794, 1123], // A4 at 96 dpi
          orientation: 'portrait',
          hotfixes: ['px_scaling'],
        },
        pagebreak: {
          mode: ['avoid-all', 'css', 'legacy'],
          before: '.page-break-before',
        },
      })
      .from(wrapper)
      .save()
  } finally {
    document.body.removeChild(wrapper)
  }
}

/* ─────────────────────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────────────────────── */
export default function MenuSection() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab]     = useState('starters')
  const [pdfLoading, setPdfLoading]   = useState(false)

  const currentItems = TABS.find(tab => tab.key === activeTab)?.items ?? []

  const handleDownload = useCallback(async () => {
    if (pdfLoading) return
    setPdfLoading(true)
    try {
      await generateMenuPDF(t)
    } catch (err) {
      console.error('PDF generation failed:', err)
    } finally {
      setPdfLoading(false)
    }
  }, [pdfLoading, t])

  return (
    <section
      id="menu"
      className="relative overflow-hidden"
      style={{
        padding: 'clamp(72px,10vw,120px) 0',
        background: 'linear-gradient(180deg, #0f172a 0%, #111827 50%, #0b1120 100%)',
      }}
    >
      {/* ── Ambient glow – top-left ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 rounded-full"
        style={{
          width: '480px',
          height: '480px',
          background: 'rgba(27,107,58,0.14)',
          filter: 'blur(110px)',
        }}
      />

      {/* ── Ambient glow – bottom-right ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 rounded-full"
        style={{
          width: '480px',
          height: '480px',
          background: 'rgba(201,122,42,0.11)',
          filter: 'blur(110px)',
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ════ HEADER ════ */}
        <RevealEl>
          <div className="text-center mb-12">

            {/* Logo */}
            <div className="flex flex-col items-center mb-6">
              <img
                src="/logo.png"
                alt="JVC Catering"
                loading="eager"
                fetchpriority="high"
                width="112"
                height="112"
                className="w-24 h-24 md:w-28 md:h-28 object-contain mb-3 drop-shadow-2xl"
                onError={e => { e.currentTarget.style.display = 'none' }}
              />

              {/* Veronica signature – visible on the page too */}
              <div
                aria-label="Veronica"
                style={{
                  fontFamily: '"Pinyon Script", cursive',
                  fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
                  color: '#E8A05C',
                  lineHeight: 1.2,
                }}
              >
                Veronica
              </div>
            </div>

            {/* Eyebrow */}
            <p
              className="text-xs font-bold uppercase tracking-[0.28em] mb-4"
              style={{ color: '#E8A05C' }}
            >
              {t('menu.eyebrow')}
            </p>

            {/* Heading */}
            <h2
              className="font-semibold text-white leading-tight mb-5"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              }}
            >
              {t('menu.heading1')}{' '}
              <em style={{ color: '#E8A05C', fontStyle: 'italic' }}>
                {t('menu.heading2')}
              </em>
            </h2>

            {/* Subtitle */}
            <p
              className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              {t('menu.sub')}
            </p>
          </div>
        </RevealEl>

        {/* ════ TABS ════ */}
        <RevealEl delay={100}>
          <div className="flex justify-center mb-10">
            <div className="flex flex-wrap justify-center gap-2.5">
              {TABS.map(tab => {
                const isActive = activeTab === tab.key
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className="px-5 py-2.5 rounded-full text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C97A2A]/60"
                    style={
                      isActive
                        ? {
                            background: '#C97A2A',
                            color: '#fff',
                            boxShadow: '0 8px 24px rgba(201,122,42,0.38)',
                            transform: 'translateY(-1px)',
                          }
                        : {
                            background: 'rgba(255,255,255,0.04)',
                            color: 'rgba(255,255,255,0.5)',
                            border: '1px solid rgba(255,255,255,0.08)',
                          }
                    }
                  >
                    {t(`menu.tab_${tab.key}`)}
                  </button>
                )
              })}
            </div>
          </div>
        </RevealEl>

        {/* ════ MENU GRID ════ */}
        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns:
              'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
          }}
        >
          {currentItems.map((itemKey, i) => {
            const item = t(`menu.items.${itemKey}`, { returnObjects: true })
            return (
              <RevealEl key={itemKey} delay={i * 65}>
                <MenuCard itemKey={itemKey} item={item} />
              </RevealEl>
            )
          })}
        </div>

        {/* ════ DOWNLOAD BUTTON ════ */}
        <RevealEl delay={200}>
          <div className="mt-16 flex flex-col items-center gap-3 text-center">
            <button
              onClick={handleDownload}
              disabled={pdfLoading}
              aria-label="Download Full Menu PDF"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-white tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C97A2A]/60 disabled:opacity-70 disabled:cursor-not-allowed"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '0.82rem',
                background: pdfLoading
                  ? 'rgba(201,122,42,0.6)'
                  : 'linear-gradient(135deg, #C97A2A 0%, #E8A05C 100%)',
                boxShadow: pdfLoading
                  ? 'none'
                  : '0 10px 30px rgba(201,122,42,0.35)',
                transform: pdfLoading ? 'none' : undefined,
              }}
              onMouseEnter={e => {
                if (!pdfLoading) {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = '0 18px 40px rgba(201,122,42,0.5)'
                }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(201,122,42,0.35)'
              }}
            >
              {pdfLoading ? (
                <>
                  <Loader2 size={17} className="animate-spin flex-shrink-0" />
                  Generating PDF…
                </>
              ) : (
                <>
                  <FileDown size={17} className="flex-shrink-0" />
                  {t('menu.download')}
                </>
              )}
            </button>

            <p
              className="text-xs md:text-sm max-w-xs"
              style={{ color: 'rgba(255,255,255,0.28)' }}
            >
              {t('menu.downloadSub')}
            </p>
          </div>
        </RevealEl>
      </div>

      {/* ── Global keyframes ── */}
      <style>{`
        @keyframes shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position:  200% 0; }
        }
        /* Load Pinyon Script for the Veronica signature */
        @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
      `}</style>
    </section>
  )
}
