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
          ? 'translate3d(0,0,0)'
          : 'translate3d(0,30px,0)',
        transition: `all 0.7s ${delay}ms cubic-bezier(0.22,1,0.36,1)`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}

function openMenuPDF() {
  const link = document.createElement('a')

  link.href = '/menu/JVC-Catering-Full-Menu.pdf'
  link.download = 'JVC-Catering-Full-Menu.pdf'

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const MenuCard = memo(function MenuCard({
  itemKey,
  item,
  delay,
}) {
  return (
    <div
      className="
        group
        rounded-3xl
        overflow-hidden
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
        cursor-default
      "
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
        animationDelay: `${delay}ms`,
        willChange: 'transform',
        transform: 'translateZ(0)',
      }}
    >
      {/* IMAGE */}
      <div className="relative h-56 overflow-hidden bg-[#1a2030]">
        {/* Skeleton */}
        <div className="absolute inset-0 animate-pulse bg-gray-800" />

        <img
          src={IMAGES[itemKey]}
          alt={item?.name || itemKey}
          loading="lazy"
          decoding="async"
          fetchpriority="low"
          draggable="false"
          width="600"
          height="400"
          className="
            relative
            z-10
            w-full
            h-full
            object-cover
            transition-all
            duration-700
            group-hover:scale-105
          "
          style={{
            contentVisibility: 'auto',
          }}
          onError={(e) => {
            e.currentTarget.src = '/menu/fallback.webp'
          }}
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 z-20"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.45), transparent)',
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 md:p-6">
        <h4
          className="
            text-xl
            font-semibold
            text-white
            mb-2
            tracking-tight
          "
          style={{
            fontFamily: '"Playfair Display", serif',
          }}
        >
          {item?.name}
        </h4>

        <p className="text-sm text-white/55 leading-relaxed mb-4">
          {item?.desc}
        </p>

        <span
          className="
            inline-flex
            items-center
            px-3
            py-1.5
            rounded-full
            text-[0.65rem]
            font-bold
            tracking-[0.15em]
            uppercase
          "
          style={{
            background: 'rgba(201,122,42,0.12)',
            border: '1px solid rgba(201,122,42,0.25)',
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
      className="section-pad relative overflow-hidden"
      style={{
        background:
          'linear-gradient(to bottom, #0f172a, #111827, #0b1120)',
      }}
    >
      {/* TOP GLOW */}
      <div
        className="
          absolute
          -top-32
          -left-32
          w-96
          h-96
          rounded-full
          pointer-events-none
        "
        style={{
          background: 'rgba(27,107,58,0.15)',
          filter: 'blur(100px)',
        }}
      />

      {/* BOTTOM GLOW */}
      <div
        className="
          absolute
          -bottom-32
          -right-32
          w-96
          h-96
          rounded-full
          pointer-events-none
        "
        style={{
          background: 'rgba(201,122,42,0.12)',
          filter: 'blur(100px)',
        }}
      />

      <div className="container-xl relative z-10">
        {/* HEADER */}
        <RevealEl>
          <div className="mb-12 text-center">
            {/* LOGO */}
            <div className="flex flex-col items-center mb-6">
              <img
                src="/logo.png"
                alt="JVC Catering Logo"
                loading="eager"
                width="110"
                height="110"
                className="
                  w-24
                  h-24
                  md:w-28
                  md:h-28
                  object-contain
                  mb-3
                  drop-shadow-2xl
                "
              />

              {/* SIGNATURE */}
              <div
                className="
                  text-[#E8A05C]
                  text-3xl
                  md:text-4xl
                "
                style={{
                  fontFamily: '"Great Vibes", cursive',
                }}
              >
                Veronica
              </div>
            </div>

            {/* EYEBROW */}
            <div
              className="
                uppercase
                tracking-[0.25em]
                text-xs
                font-bold
                mb-4
              "
              style={{ color: '#E8A05C' }}
            >
              {t('menu.eyebrow')}
            </div>

            {/* TITLE */}
            <h2
              className="
                text-4xl
                md:text-5xl
                xl:text-6xl
                font-semibold
                text-white
                leading-tight
                mb-5
              "
              style={{
                fontFamily: '"Playfair Display", serif',
              }}
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

            {/* SUBTITLE */}
            <p
              className="
                text-white/50
                text-sm
                md:text-base
                leading-relaxed
                max-w-2xl
                mx-auto
              "
            >
              {t('menu.sub')}
            </p>
          </div>
        </RevealEl>

        {/* TABS */}
        <RevealEl delay={100}>
          <div
            className="
              flex
              overflow-x-auto
              gap-3
              pb-3
              mb-10
              scrollbar-hide
            "
          >
            {TABS.map(tab => (
              <button
                key={tab.key}
                aria-label={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="
                  shrink-0
                  px-5
                  py-3
                  rounded-full
                  text-xs
                  font-bold
                  tracking-[0.15em]
                  uppercase
                  transition-all
                  duration-300
                  hover:scale-105
                  focus:outline-none
                "
                style={
                  activeTab === tab.key
                    ? {
                        background: '#C97A2A',
                        color: '#fff',
                        boxShadow:
                          '0 8px 24px rgba(201,122,42,0.35)',
                      }
                    : {
                        background: 'rgba(255,255,255,0.03)',
                        color: 'rgba(255,255,255,0.55)',
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
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
            gap-5
            md:gap-6
          "
        >
          {currentItems.map((itemKey, i) => {
            const item = t(`menu.items.${itemKey}`, {
              returnObjects: true,
            })

            return (
              <MenuCard
                key={itemKey}
                itemKey={itemKey}
                item={item}
                delay={i * 70}
              />
            )
          })}
        </div>

        {/* DOWNLOAD */}
        <RevealEl delay={200}>
          <div className="mt-14 text-center flex flex-col items-center gap-3">
            <button
              onClick={openMenuPDF}
              aria-label="Download Full Menu"
              className="
                inline-flex
                items-center
                gap-2
                px-6
                py-3
                rounded-full
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-2xl
              "
              style={{
                background:
                  'linear-gradient(135deg,#C97A2A,#E8A05C)',
              }}
            >
              <FileDown size={18} />
              {t('menu.download')}
            </button>

            <p className="text-white/30 text-xs md:text-sm">
              {t('menu.downloadSub')}
            </p>
          </div>
        </RevealEl>
      </div>
    </section>
  )
}
