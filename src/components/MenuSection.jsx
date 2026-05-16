import { useState, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useReveal } from '../hooks/useReveal'
import { FileDown } from 'lucide-react'

const TABS = [
  {
    key: 'starters',
    items: [
      'sambusa',
      'maandazi',
      'kitumbua',
      'kachori',
      'mishkaki',
      'urojo',
    ],
  },
  {
    key: 'mains',
    items: [
      'pilau',
      'nyamachoma',
      'walinazi',
      'maharage',
      'ndizi',
      'biryani',
    ],
  },
  {
    key: 'desserts',
    items: [
      'icecream',
      'cake',
      'fruit',
      'halwa',
      'pudding',
      'sweetmaan',
    ],
  },
  {
    key: 'beverages',
    items: [
      'muwa',
      'juice',
      'cocktail',
      'mocktail',
      'chai',
      'bev',
    ],
  },
]

const IMAGES = {
  /* STARTERS */
  sambusa: '/menu/sambusa.webp',
  maandazi: '/menu/maandazi.webp',
  kitumbua: '/menu/kitumbua.webp',
  kachori: '/menu/kachori.webp',
  mishkaki: '/menu/mshikaki.webp',
  urojo: '/menu/urojo.webp',

  /* MAINS */
  pilau: '/menu/pilau.webp',
  nyamachoma: '/menu/nyamachoma.webp',
  walinazi: '/menu/walinazi.webp',
  maharage: '/menu/maharage.webp',
  ndizi: '/menu/ndizinyama.webp',
  biryani: '/menu/biryani.webp',

  /* DESSERTS */
  icecream: '/menu/icecream.webp',
  cake: '/menu/cake.webp',
  fruit: '/menu/fruit.webp',
  halwa: '/menu/halwa.webp',
  pudding: '/menu/coconutpudding.webp',
  sweetmaan: '/menu/maandazihoney.webp',

  /* BEVERAGES */
  muwa: '/menu/sugarcanejuice.webp',
  juice: '/menu/juice.webp',
  cocktail: '/menu/cocktail.webp',
  mocktail: '/menu/mocktail.webp',
  chai: '/menu/chai.webp',
  bev: '/menu/beverage.webp',
}

function RevealEl({ children, delay = 0 }) {
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? 'translateY(0)'
          : 'translateY(20px)',
        transition: `all 0.7s ${delay}ms ease`,
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
    <title>JVC Catering Menu</title>

    <style>
      body{
        font-family:Arial,sans-serif;
        padding:40px;
        color:#111827;
      }

      h1{
        margin-bottom:10px;
      }

      p{
        line-height:1.6;
      }
    </style>
  </head>

  <body>
    <h1>JVC Catering Menu</h1>
    <p>Authentic Tanzanian cuisine crafted with fresh local ingredients.</p>
  </body>
  </html>
  `

  const w = window.open(
    '',
    '_blank',
    'width=900,height=700'
  )

  if (w) {
    w.document.write(html)
    w.document.close()
  }
}

const MenuCard = memo(function MenuCard({
  itemKey,
  item,
}) {
  return (
    <div
      className="group overflow-hidden rounded-3xl bg-white/[0.03] border border-white/[0.06] transition-all duration-300 hover:-translate-y-1"
      style={{
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#1a2030]">
        <img
          src={IMAGES[itemKey]}
          alt={item?.name || itemKey}
          loading="lazy"
          decoding="async"
          draggable="false"
          sizes="(max-width: 768px) 100vw, 33vw"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={e => {
            e.currentTarget.src =
              '/menu/fallback.webp'
          }}
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h4
          style={{
            fontFamily: '"Playfair Display", serif',
          }}
          className="text-xl font-semibold text-white mb-2"
        >
          {item?.name}
        </h4>

        <p className="text-sm text-white/60 leading-relaxed mb-4 min-h-[48px]">
          {item?.desc}
        </p>

        <span
          className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase"
          style={{
            background: 'rgba(201,122,42,0.14)',
            color: '#E8A05C',
          }}
        >
          {item?.tag}
        </span>
      </div>
    </div>
  )
})

export default function MenuSection() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('starters')

  const currentItems =
    TABS.find(tab => tab.key === activeTab)?.items || []

  return (
    <section
      id="menu"
      className="relative overflow-hidden py-24 px-5"
      style={{
        background:
          'linear-gradient(to bottom, #0f172a, #111827)',
      }}
    >
      {/* Background Glow */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at top left, rgba(201,122,42,0.12), transparent 30%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <RevealEl>
          <div className="mb-12 text-center md:text-left">
            <h2
              style={{
                fontFamily: '"Playfair Display", serif',
              }}
              className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-4 leading-tight"
            >
              Explore Our{' '}
              <em
                style={{
                  color: '#E8A05C',
                  fontStyle: 'italic',
                }}
              >
                Menu
              </em>
            </h2>

            <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
              Authentic Swahili cuisine crafted with fresh local ingredients.
            </p>
          </div>
        </RevealEl>

        {/* Tabs */}
        <RevealEl delay={100}>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
            {TABS.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="px-5 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300"
                style={
                  activeTab === tab.key
                    ? {
                        background: '#C97A2A',
                        color: '#fff',
                        boxShadow:
                          '0 6px 18px rgba(201,122,42,0.35)',
                      }
                    : {
                        background: 'rgba(255,255,255,0.04)',
                        color: 'rgba(255,255,255,0.6)',
                        border:
                          '1px solid rgba(255,255,255,0.08)',
                      }
                }
              >
                {t(`menu.tab_${tab.key}`)}
              </button>
            ))}
          </div>
        </RevealEl>

        {/* Food Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {currentItems.map(itemKey => {
            const item = t(`menu.items.${itemKey}`, {
              returnObjects: true,
            })

            return (
              <MenuCard
                key={itemKey}
                itemKey={itemKey}
                item={item}
              />
            )
          })}
        </div>

        {/* Download Button */}
        <RevealEl delay={200}>
          <div className="mt-14 flex flex-col items-center">
            <button
              onClick={openMenuPDF}
              className="flex items-center gap-2 bg-[#C97A2A] hover:bg-[#d88a3a] text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg"
            >
              <FileDown size={18} />
              {t('menu.download')}
            </button>

            <p className="text-white/30 text-xs mt-3">
              {t('menu.downloadSub')}
            </p>
          </div>
        </RevealEl>

      </div>
    </section>
  )
}
