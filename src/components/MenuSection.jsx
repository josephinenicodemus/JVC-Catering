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
    'https://images.unsplash.com/photo-1601050690294-397f3c324515?auto=format&fit=crop&w=1200&q=80',

  maandazi: '/menu/maandazi.png',

  kitumbua: '/menu/kitumbua.png',

  kachori: '/menu/kachori.png',

  mishkaki: '/menu/mshikaki.png',

  urojo:
    'https://upload.wikimedia.org/wikipedia/commons/e/e7/Urojo_Zanzibar_112018.jpg',

  /* MAINS */

  pilau: '/menu/pilau.png',

  nyamachoma: '/menu/nyamachoma.png',

  walinazi: '/menu/walinazi.png',

  maharage: '/menu/maharage.png',

  ndizi: '/menu/ndizinyama.png',

  biryani:
    'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80',

  /* DESSERTS */

  icecream:
    'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=80',

  cake:
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',

  fruit:
    'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=1200&q=80',

  halwa: '/menu/halwa.png',

  pudding: '/menu/coconutpudding.png',

  sweetmaan: '/menu/maandazihoney.png',

  /* BEVERAGES */

  muwa: '/menu/sugarcanejuice.png',

  juice:
    'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=80',

  cocktail: '/menu/cocktail.png',

  mocktail:
    'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=80',

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
        transition: `all 0.7s ${delay}ms ease`,
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
    <html lang="en">

    <head>
      <meta charset="UTF-8" />

      <title>JVC Catering Menu</title>

      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <style>

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          font-family:'Inter',sans-serif;
          background:#f8f5ef;
          color:#1f2937;
          line-height:1.8;
        }

        .hero{
          background:#14532d;
          padding:80px 40px;
          text-align:center;
          color:white;
        }

        .hero h1{
          font-family:'Playfair Display',serif;
          font-size:60px;
          margin-bottom:20px;
          font-weight:700;
          color:#ffffff;
        }

        .hero p{
          max-width:760px;
          margin:auto;
          font-size:18px;
          color:rgba(255,255,255,0.85);
        }

        .container{
          max-width:1100px;
          margin:auto;
          padding:60px 35px;
        }

        .section{
          background:white;
          border-radius:24px;
          padding:35px;
          margin-bottom:35px;
          box-shadow:0 10px 30px rgba(0,0,0,0.06);
        }

        .section-title{
          font-family:'Playfair Display',serif;
          font-size:38px;
          color:#14532d;
          margin-bottom:25px;
          border-bottom:2px solid #E8A05C;
          padding-bottom:12px;
        }

        .menu-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
          gap:18px;
        }

        .menu-item{
          padding:18px;
          border-radius:18px;
          background:#faf7f2;
          border:1px solid rgba(0,0,0,0.05);
        }

        .menu-item h3{
          font-family:'Playfair Display',serif;
          font-size:24px;
          margin-bottom:10px;
          color:#111827;
        }

        .menu-item p{
          font-size:15px;
          color:#4b5563;
        }

        .tag{
          display:inline-block;
          margin-top:14px;
          padding:7px 14px;
          border-radius:999px;
          background:#14532d10;
          color:#E8A05C;
          font-size:11px;
          font-weight:700;
          letter-spacing:1px;
          text-transform:uppercase;
        }

        .footer{
          background:#14532d;
          color:white;
          padding:60px 30px;
          text-align:center;
          margin-top:40px;
        }

        .footer h2{
          font-family:'Playfair Display',serif;
          font-size:42px;
          margin-bottom:14px;
        }

        .footer p{
          color:rgba(255,255,255,0.82);
        }

        .contact{
          margin-top:22px;
          line-height:2;
          font-size:15px;
        }

        .download-btn{
          position:fixed;
          top:20px;
          right:20px;
          background:#E8A05C;
          color:white;
          border:none;
          padding:12px 22px;
          border-radius:999px;
          font-weight:600;
          cursor:pointer;
          font-size:14px;
          box-shadow:0 10px 20px rgba(0,0,0,0.15);
        }

        @media print{
          .download-btn{
            display:none;
          }
        }

      </style>
    </head>

    <body>

      <button
        class="download-btn"
        onclick="window.print()"
      >
        Download PDF
      </button>

      <!-- HERO -->

      <section class="hero">

        <h1>
          Explore Our Menu
        </h1>

        <p>
          Authentic Tanzanian cuisine crafted with fresh local ingredients,
          premium hospitality, and unforgettable culinary experiences.
        </p>

      </section>

      <div class="container">

        <!-- STARTERS -->

        <section class="section">

          <h2 class="section-title">
            Signature Starters
          </h2>

          <div class="menu-grid">

            <div class="menu-item">
              <h3>Sambusa</h3>

              <p>
                Crispy golden pastry filled with flavorful spiced meat
                and vegetables.
              </p>

              <span class="tag">
                Popular Choice
              </span>
            </div>

            <div class="menu-item">
              <h3>Maandazi</h3>

              <p>
                Soft East African fried bread with delicate sweetness
                and fluffy texture.
              </p>

              <span class="tag">
                Traditional
              </span>
            </div>

            <div class="menu-item">
              <h3>Kitumbua</h3>

              <p>
                Traditional coconut rice cakes with authentic Swahili flavor.
              </p>

              <span class="tag">
                Coastal Favorite
              </span>
            </div>

            <div class="menu-item">
              <h3>Urojo</h3>

              <p>
                Authentic Zanzibar street-style soup layered with potatoes,
                bhajias, coconut, mango, and tangy spices.
              </p>

              <span class="tag">
                Zanzibar Flavor
              </span>
            </div>

          </div>

        </section>

        <!-- MAINS -->

        <section class="section">

          <h2 class="section-title">
            Main Dishes
          </h2>

          <div class="menu-grid">

            <div class="menu-item">
              <h3>Pilau</h3>

              <p>
                Aromatic Tanzanian spiced rice infused with rich coastal flavors.
              </p>

              <span class="tag">
                Signature Dish
              </span>
            </div>

            <div class="menu-item">
              <h3>Biryani</h3>

              <p>
                Slow-cooked fragrant rice layered with premium spices
                and tender meat.
              </p>

              <span class="tag">
                Premium
              </span>
            </div>

            <div class="menu-item">
              <h3>Wali wa Nazi</h3>

              <p>
                Coconut-infused rice served with traditional Swahili accompaniments.
              </p>

              <span class="tag">
                Coastal Cuisine
              </span>
            </div>

            <div class="menu-item">
              <h3>Nyama Choma</h3>

              <p>
                Tender grilled meat seasoned with East African spices
                and served fresh.
              </p>

              <span class="tag">
                BBQ Favorite
              </span>
            </div>

          </div>

        </section>

        <!-- DESSERTS -->

        <section class="section">

          <h2 class="section-title">
            Desserts
          </h2>

          <div class="menu-grid">

            <div class="menu-item">
              <h3>Halwa</h3>

              <p>
                Rich traditional Swahili dessert prepared with aromatic spices.
              </p>

              <span class="tag">
                Sweet Treat
              </span>
            </div>

            <div class="menu-item">
              <h3>Coconut Pudding</h3>

              <p>
                Creamy tropical pudding infused with coconut flavor.
              </p>

              <span class="tag">
                Tropical
              </span>
            </div>

            <div class="menu-item">
              <h3>Fresh Fruit Selection</h3>

              <p>
                Seasonal tropical fruits beautifully prepared and served fresh.
              </p>

              <span class="tag">
                Freshly Served
              </span>
            </div>

          </div>

        </section>

        <!-- BEVERAGES -->

        <section class="section">

          <h2 class="section-title">
            Premium Beverages
          </h2>

          <div class="menu-grid">

            <div class="menu-item">
              <h3>Sugarcane Juice</h3>

              <p>
                Freshly pressed Tanzanian sugarcane blended with lemon
                and ginger.
              </p>

              <span class="tag">
                Refreshing
              </span>
            </div>

            <div class="menu-item">
              <h3>Mocktails</h3>

              <p>
                Tropical fruit blends crafted for vibrant celebrations
                and events.
              </p>

              <span class="tag">
                Alcohol-Free
              </span>
            </div>

            <div class="menu-item">
              <h3>Signature Cocktails</h3>

              <p>
                Crafted cocktails with local spirits and premium tropical mixers.
              </p>

              <span class="tag">
                Adults Only
              </span>
            </div>

            <div class="menu-item">
              <h3>Fresh Juices</h3>

              <p>
                Seasonal tropical juices prepared fresh with natural ingredients.
              </p>

              <span class="tag">
                Freshly Made
              </span>
            </div>

          </div>

        </section>

      </div>

      <!-- FOOTER -->

      <footer class="footer">

        <h2>
          JVC Catering
        </h2>

        <p>
          Tailored Tastes. Warm Moments. Spectacular Impressions.
        </p>

        <div class="contact">

          <div>+255 767 620 509</div>

          <div>+255 715 602 509</div>

          <div>@jvc.catering._tz</div>

          <div>Dar es Salaam, Tanzania</div>

        </div>

      </footer>

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
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* IMAGE */}

      <div className="relative h-48 overflow-hidden bg-[#1a2030]">

        <img
          src={IMAGES[itemKey]}
          alt={item?.name || itemKey}
          loading="lazy"
          decoding="async"
          draggable="false"
          sizes="(max-width:768px) 100vw, 33vw"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80'
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

        <p className="text-sm text-white/60 leading-relaxed mb-3 min-h-[48px]">
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
        background:
          'linear-gradient(to bottom, #0f172a, #111827)',
      }}
    >

      {/* GLOW EFFECT */}

      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at top left, rgba(201,122,42,0.08), transparent 30%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADING */}

        <RevealEl>

          <div className="text-center mb-14">

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-5"
              style={{
                fontFamily: '"Playfair Display", serif',
                color: '#ffffff',
                lineHeight: '1.1',
              }}
            >
              Explore Our Menu
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Authentic Swahili cuisine crafted with fresh local ingredients,
              premium hospitality, and unforgettable culinary experiences.
            </p>

          </div>

        </RevealEl>

        {/* TABS */}

        <RevealEl delay={100}>

          <div className="flex flex-wrap justify-center gap-3 mb-12">

            {TABS.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
                style={
                  activeTab === tab.key
                    ? {
                        background: '#C97A2A',
                        color: '#fff',
                        boxShadow:
                          '0 6px 20px rgba(201,122,42,0.35)',
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

        {/* DOWNLOAD BUTTON */}

        <RevealEl delay={200}>

          <div className="mt-16 flex flex-col items-center gap-3">

            <button
              onClick={openMenuPDF}
              className="flex items-center gap-2 px-7 py-3 rounded-full text-white transition-all duration-300 hover:scale-105"
              style={{
                background: '#C97A2A',
                boxShadow:
                  '0 10px 30px rgba(201,122,42,0.35)',
              }}
            >
              <FileDown size={18} />

              {t('menu.download')}
            </button>

            <p className="text-white/30 text-xs">
              Download our premium catering menu
            </p>

          </div>

        </RevealEl>

      </div>

    </section>
  )
}
