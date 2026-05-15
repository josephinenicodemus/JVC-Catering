import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useReveal } from '../hooks/useReveal'
import { FileDown } from 'lucide-react'

const TABS = [
  { key: 'starters', items: ['sambusa', 'maandazi', 'kitumbua', 'kachori', 'mishkaki', 'urojo'] },
  { key: 'mains', items: ['pilau', 'nyamachoma', 'walinazi', 'maharage', 'ndizi', 'biryani'] },
  { key: 'desserts', items: ['icecream', 'cake', 'fruit', 'halwa', 'pudding', 'sweetmaan'] },
  { key: 'beverages', items: ['muwa', 'juice', 'cocktail', 'mocktail', 'chai', 'bev'] },
]

const IMAGES = {
  /* STARTERS */

  sambusa:
    'https://images.unsplash.com/photo-1601050690294-397f3c324515?auto=format&fit=crop&w=2400&q=100',

  maandazi: '/menu/maandazi.png',

  kitumbua: '/menu/kitumbua.png',
  
  kachori: '/menu/kachori.png',

  mishkaki: '/menu/mshikaki.png',

  urojo:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Urojo_Zanzibar_112018.jpg/1920px-Urojo_Zanzibar_112018.jpg',

  /* MAINS */

  pilau:'/menu/pilau.png',
    
  nyamachoma:'/menu/nyamachoma.png',

  walinazi:'/menu/walinazi.png',

  maharage:'/menu/maharage.png',

  ndizi:'/menu/ndizinyama.png',

  biryani:
    'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=2400&q=100',

  /* DESSERTS */

  icecream:
    'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=2400&q=100',

  cake:
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=2400&q=100',

  fruit:
    'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=2400&q=100',

  halwa:'/menu/halwa.png',

  pudding:'/menu/coconutpudding.png',

  sweetmaan:'/menu/maandazihoney.png',

  /* BEVERAGES */

  muwa:'/menu/sugarcanejuice.png',

  juice:
    'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=2400&q=100',

  cocktail:
    'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=2400&q=100',

  mocktail:
    'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=2400&q=100',

  chai:
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2400&q=100',

  bev:
    'https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?auto=format&fit=crop&w=2400&q=100',
}

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

function openMenuPDF() {
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>JVC Catering — Full Menu 2026</title>

    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" rel="stylesheet">

    <style>
      *{
        box-sizing:border-box;
        margin:0;
        padding:0;
      }

      body{
        font-family:'Plus Jakarta Sans',sans-serif;
        background:#fff;
        color:#1F2937;
      }

      .page{
        max-width:900px;
        margin:auto;
        padding:2rem;
      }
    </style>
  </head>

  <body>
    <div class="page">
      <h1>JVC Catering Menu</h1>
    </div>
  </body>
  </html>
  `

  const w = window.open('', '_blank', 'width=900,height=700,scrollbars=yes')

  if (w) {
    w.document.write(html)
    w.document.close()
  }
}

export default function MenuSection() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('starters')

  const currentItems =
    TABS.find(tab => tab.key === activeTab)?.items || []

  return (
    <section
      id="menu"
      className="section-pad relative overflow-hidden"
      style={{ background: '#111827' }}
    >
      {/* Background Glows */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'rgba(27,107,58,0.15)',
          filter: 'blur(100px)',
        }}
      />

      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'rgba(201,122,42,0.12)',
          filter: 'blur(100px)',
        }}
      />

      <div className="container-xl relative z-10">
        {/* Heading */}
        <RevealEl>
          <div className="mb-10">
            <div
              className="eyebrow mb-3"
              style={{ color: '#E8A05C' }}
            >
              {t('menu.eyebrow')}
            </div>

            <h2
              style={{
                fontFamily: '"Playfair Display", serif',
              }}
              className="text-4xl md:text-5xl font-semibold text-white mt-3 mb-4"
            >
              {t('menu.heading1')}{' '}
              <em
                style={{
                  color: '#E8A05C',
                  fontStyle: 'italic',
                }}
              >
                {t('menu.heading2')}
              </em>
            </h2>

            <p className="text-white/40 text-sm leading-relaxed max-w-lg">
              {t('menu.sub')}
            </p>
          </div>
        </RevealEl>

        {/* Tabs */}
        <RevealEl delay={100}>
          <div className="flex flex-wrap gap-2 mb-8">
            {TABS.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300"
                style={
                  activeTab === tab.key
                    ? {
                        background: '#C97A2A',
                        color: '#fff',
                        boxShadow:
                          '0 4px 16px rgba(201,122,42,0.35)',
                      }
                    : {
                        background: 'transparent',
                        color: 'rgba(255,255,255,0.4)',
                        border:
                          '1.5px solid rgba(255,255,255,0.08)',
                      }
                }
              >
                {t(`menu.tab_${tab.key}`)}
              </button>
            ))}
          </div>
        </RevealEl>

        {/* Food Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          key={activeTab}
          style={{
            animation: 'fadeUp 0.4s ease both',
          }}
        >
          {currentItems.map((itemKey, i) => {
            const item = t(`menu.items.${itemKey}`, {
              returnObjects: true,
            })

            return (
              <div
                key={itemKey}
                className="group rounded-xl overflow-hidden transition-all duration-350 hover:-translate-y-1 cursor-default"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border:
                    '1px solid rgba(255,255,255,0.07)',
                  animationDelay: `${i * 60}ms`,
                }}
              >
                {/* Image */}
                <div className="h-44 overflow-hidden bg-[#1a2030]">
                  <img
                    src={IMAGES[itemKey]}
                    alt={item?.name || itemKey}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={e => {
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2400&q=100'
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h4
                    style={{
                      fontFamily:
                        '"Playfair Display", serif',
                    }}
                    className="text-lg font-semibold text-white mb-1.5"
                  >
                    {item?.name}
                  </h4>

                  <p className="text-sm text-white/40 leading-relaxed mb-3">
                    {item?.desc}
                  </p>

                  <span
                    className="inline-block px-3 py-1 rounded-full text-[0.62rem] font-bold tracking-widest uppercase"
                    style={{
                      background:
                        'rgba(201,122,42,0.12)',
                      border:
                        '1px solid rgba(201,122,42,0.2)',
                      color: '#E8A05C',
                    }}
                  >
                    {item?.tag}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Download Button */}
        <RevealEl delay={200}>
          <div className="mt-12 text-center flex flex-col items-center gap-3">
            <button
              onClick={openMenuPDF}
              className="btn-primary"
            >
              <FileDown size={16} />
              {t('menu.download')}
            </button>

            <p className="text-white/25 text-xs">
              {t('menu.downloadSub')}
            </p>
          </div>
        </RevealEl>
      </div>
    </section>
  )
}
