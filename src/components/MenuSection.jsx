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
  sambusa:
    'https://images.unsplash.com/photo-1601050690294-397f3c324515?auto=format&fit=crop&w=900&q=75',

  maandazi: '/menu/maandazi.png',
  kitumbua: '/menu/kitumbua.png',
  kachori: '/menu/kachori.png',
  mishkaki: '/menu/mshikaki.png',

  urojo:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Urojo_Zanzibar_112018.jpg/1200px-Urojo_Zanzibar_112018.jpg',

  /* MAINS */
  pilau: '/menu/pilau.png',
  nyamachoma: '/menu/nyamachoma.png',
  walinazi: '/menu/walinazi.png',
  maharage: '/menu/maharage.png',
  ndizi: '/menu/ndizinyama.png',

  biryani:
    'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=75',

  /* DESSERTS */
  icecream:
    'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=75',

  cake:
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=75',

  fruit:
    'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=900&q=75',

  halwa: '/menu/halwa.png',
  pudding: '/menu/coconutpudding.png',
  sweetmaan: '/menu/maandazihoney.png',

  /* BEVERAGES */
  muwa: '/menu/sugarcanejuice.png',

  juice:
    'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=75',

  cocktail: '/menu/cocktail.png',

  mocktail:
    'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=75',

  chai: '/menu/chai.png',

  bev: '/menu/beverage.png',
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
        transition: `all 0.6s ${delay}ms ease`,
      }}
    >
      {children}
    </div>
  )
}

function openMenuPDF() {
  const pdfWindow = window.open('', '_blank')

  if (!pdfWindow) return

  pdfWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>JVC Catering Menu</title>

        <style>
          body{
            font-family: Arial, sans-serif;
            padding:40px;
            line-height:1.7;
            color:#111827;
          }

          h1{
            font-size:32px;
            margin-bottom:10px;
          }

          p{
            font-size:16px;
          }
        </style>
      </head>

      <body>
        <h1>JVC Catering Menu</h1>

        <p>
          Authentic Tanzanian cuisine crafted with fresh local ingredients.
        </p>

        <hr />

        <h2>Starters</h2>
        <ul>
          <li>Sambusa</li>
          <li>Maandazi</li>
          <li>Kitumbua</li>
          <li>Kachori</li>
        </ul>

        <h2>Main Dishes</h2>
        <ul>
          <li>Pilau</li>
          <li>Biryani</li>
          <li>Nyama Choma</li>
        </ul>
      </body>
    </html>
  `)

  pdfWindow.document.close()
}

const MenuCard = memo(function MenuCard({
  itemKey,
  item,
}) {
  return (
    <div
      className="group overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* IMAGE */}
      <div className="relative h-52 overflow-hidden bg-[#1a2030]">

        <img
          src={IMAGES[itemKey]}
          alt={item?.name || itemKey}
          loading="lazy"
          decoding="async"
          draggable="false"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=75'
          }}
        />

      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3
          className="text-xl text-white mb-2"
          style={{
            fontFamily: '"Playfair Display", serif',
          }}
        >
          {item?.name}
        </h3>

        <p className="text-sm text-white/60 leading-relaxed mb-3">
          {item?.desc}
        </p>

        <span
          className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider"
          style={{
            background: 'rgba(201,122,42,0.12)',
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

  const [activeTab, setActiveTab] =
    useState('starters')

  const currentItems =
    TABS.find(tab => tab.key === activeTab)?.items || []

  return (
    <section
      id="menu"
      className="relative overflow-hidden py-20 px-4"
      style={{
        background: '#111827',
      }}
    >

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <RevealEl>
          <div className="text-center mb-12">

            <h2
              className="text-4xl md:text-5xl font-semibold text-white mb-4"
              style={{
                fontFamily: '"Playfair Display", serif',
              }}
            >
              Explore Our{' '}

              <span
                style={{
                  color: '#E8A05C',
                  fontStyle: 'italic',
                }}
              >
                Menu
              </span>
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">
              Authentic Swahili cuisine crafted with fresh local ingredients.
            </p>

          </div>
        </RevealEl>

        {/* TABS */}
        <RevealEl delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">

            {TABS.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300"
                style={
                  activeTab === tab.key
                    ? {
                        background: '#C97A2A',
                        color: '#fff',
                      }
                    : {
                        background:
                          'rgba(255,255,255,0.05)',
                        color:
                          'rgba(255,255,255,0.65)',
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

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {currentItems.map(itemKey => {
            const item = t(
              `menu.items.${itemKey}`,
              {
                returnObjects: true,
              }
            )

            return (
              <MenuCard
                key={itemKey}
                itemKey={itemKey}
                item={item}
              />
            )
          })}

        </div>

        {/* DOWNLOAD */}
        <RevealEl delay={200}>
          <div className="mt-14 flex justify-center">

            <button
              onClick={openMenuPDF}
              className="flex items-center gap-2 px-6 py-3 rounded-full text-white transition-all duration-300"
              style={{
                background: '#C97A2A',
              }}
            >
              <FileDown size={18} />

              {t('menu.download')}
            </button>

          </div>
        </RevealEl>

      </div>
    </section>
  )
}
