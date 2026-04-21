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
  sambusa: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&h=350&fit=crop&q=85',
  maandazi: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=350&fit=crop&q=85',
  kitumbua: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&h=350&fit=crop&q=85',
  kachori: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&h=350&fit=crop&q=85',
  mishkaki: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=350&fit=crop&q=85',
  urojo: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=350&fit=crop&q=85',
  pilau: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&h=350&fit=crop&q=85',
  nyamachoma: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=350&fit=crop&q=85',
  walinazi: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=600&h=350&fit=crop&q=85',
  maharage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=350&fit=crop&q=85',
  ndizi: 'https://images.unsplash.com/photo-1528823872057-9c018a7a7553?w=600&h=350&fit=crop&q=85',
  biryani: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=350&fit=crop&q=85',
  icecream: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=350&fit=crop&q=85',
  cake: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=350&fit=crop&q=85',
  fruit: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=600&h=350&fit=crop&q=85',
  halwa: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=350&fit=crop&q=85',
  pudding: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=350&fit=crop&q=85',
  sweetmaan: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&h=350&fit=crop&q=85',
  muwa: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=350&fit=crop&q=85',
  juice: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&h=350&fit=crop&q=85',
  cocktail: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&h=350&fit=crop&q=85',
  mocktail: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&h=350&fit=crop&q=85',
  chai: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=350&fit=crop&q=85',
  bev: 'https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?w=600&h=350&fit=crop&q=85',
}

function RevealEl({ children, delay = 0 }) {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ${delay}ms ease, transform 0.7s ${delay}ms ease`,
      }}>
      {children}
    </div>
  )
}

function openMenuPDF() {
  const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>JVC Catering — Full Menu 2026</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" rel="stylesheet">
  <style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:'Plus Jakarta Sans',sans-serif;background:#fff;color:#1F2937}
  .no-print{position:fixed;top:1rem;right:1rem;display:flex;gap:.6rem;z-index:100}
  .no-print button{padding:.6rem 1.4rem;border-radius:8px;border:none;font-family:inherit;font-size:.82rem;font-weight:600;cursor:pointer}
  .pb{background:#C97A2A;color:#fff}.cb{background:#1F2937;color:#fff}
  .page{max-width:800px;margin:0 auto;padding:2.5rem}
  .header{padding:2.5rem;background:linear-gradient(135deg,#134F2B,#C97A2A);border-radius:16px;margin-bottom:2.5rem;color:#fff;text-align:center}
  .logo{font-family:'Playfair Display',serif;font-size:2.5rem;font-weight:700}
  .logo span{color:rgba(255,255,255,.65)}
  .sub{font-size:.72rem;letter-spacing:.28em;text-transform:uppercase;color:rgba(255,255,255,.6);margin:.5rem 0 1rem}
  .founder{font-size:.88rem;color:rgba(255,255,255,.7);font-style:italic}
  .contact-row{display:flex;justify-content:center;gap:2rem;margin-top:1.2rem;flex-wrap:wrap}
  .contact-row span{font-size:.74rem;color:rgba(255,255,255,.6)}
  .st{font-family:'Playfair Display',serif;font-size:1.5rem;font-weight:600;color:#1F2937;margin-bottom:1rem;padding-bottom:.6rem;border-bottom:2px solid #C97A2A}
  .stag{display:inline-block;padding:.22rem .7rem;border-radius:6px;background:rgba(201,122,42,.1);color:#C97A2A;font-size:.67rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;margin-bottom:.75rem}
  .sb{margin-bottom:2.5rem}
  .dg{display:grid;grid-template-columns:1fr 1fr;gap:.6rem}
  .dish{padding:.8rem 1rem;background:#FAF9F6;border-radius:10px;border-left:3px solid #C97A2A}
  .dish h4{font-family:'Playfair Display',serif;font-size:1.05rem;font-weight:600;color:#1F2937;margin-bottom:.22rem}
  .dish p{font-size:.75rem;color:#71717A;line-height:1.5}
  .dish .t{font-size:.62rem;color:#1B6B3A;font-weight:700;margin-top:.28rem;display:block;text-transform:uppercase;letter-spacing:.1em}
  .footer{text-align:center;margin-top:2.5rem;padding:1.5rem;background:#FAF9F6;border-radius:12px}
  .footer p{font-size:.8rem;color:#71717A;line-height:1.7}
  .footer strong{color:#C97A2A}
  @media print{.no-print{display:none}}
  @media(max-width:600px){.dg{grid-template-columns:1fr}}
  </style></head><body>
  <div class="no-print"><button class="pb" onclick="window.print()">🖨️ Print / Save PDF</button><button class="cb" onclick="window.close()">✕ Close</button></div>
  <div class="page">
  <div class="header"><div class="logo">JVC <span>Catering</span></div><div class="sub">Tailored Tastes · Warm Moments · Spectacular Impressions</div><div class="founder">By Veronica Nguma · Dar es Salaam, Tanzania · Est. 2016</div><div class="contact-row"><span>📞 +255 767 620 509</span><span>✉️ veronica.wlff@gmail.com</span><span>📍 Sinza Mori, Lagana Street</span></div></div>
  <div class="sb"><div class="st">Vitafunio — Starters</div><div class="stag">Tanzanian Street Food & Appetisers</div><div class="dg"><div class="dish"><h4>Sambusa</h4><p>Crispy pastry parcels with spiced meat or vegetables, tamarind chutney</p><span class="t">Street Classic</span></div><div class="dish"><h4>Maandazi</h4><p>Soft East African fried bread, lightly sweetened</p><span class="t">Coastal Favourite</span></div><div class="dish"><h4>Kitumbua</h4><p>Rice pancakes with coconut and cardamom</p><span class="t">Zanzibar Style</span></div><div class="dish"><h4>Kachori</h4><p>Golden pastry filled with spiced lentils or potatoes</p><span class="t">Popular Pick</span></div><div class="dish"><h4>Mishkaki</h4><p>Marinated beef skewers grilled over charcoal</p><span class="t">Grilled Delight</span></div><div class="dish"><h4>Urojo</h4><p>Zanzibari tangy soup bowl with fritters and coconut</p><span class="t">Zanzibari Special</span></div></div></div>
  <div class="sb"><div class="st">Chakula Kikuu — Mains</div><div class="stag">Authentic Tanzanian Mains</div><div class="dg"><div class="dish"><h4>Pilau</h4><p>Fragrant spiced rice with tender beef, cumin and cardamom</p><span class="t">Signature Dish</span></div><div class="dish"><h4>Nyama Choma</h4><p>Charcoal-roasted beef or goat with kachumbari salad</p><span class="t">Crowd Favourite</span></div><div class="dish"><h4>Wali wa Nazi</h4><p>Coconut rice with fish or chicken curry</p><span class="t">Coastal Classic</span></div><div class="dish"><h4>Maharage ya Nazi</h4><p>Kidney beans in rich coconut milk and spices</p><span class="t">Vegetarian</span></div><div class="dish"><h4>Ndizi za Kupika</h4><p>Green bananas braised in coconut milk with meat</p><span class="t">Traditional</span></div><div class="dish"><h4>Biryani ya Nyama</h4><p>Layered spiced rice with tender lamb or chicken</p><span class="t">Festive Special</span></div></div></div>
  <div class="sb"><div class="st">Vitamu — Desserts</div><div class="stag">Sweet Endings</div><div class="dg"><div class="dish"><h4>Tropical Ice Cream</h4><p>Mango, passion fruit and coconut scoops made daily</p><span class="t">Refreshing</span></div><div class="dish"><h4>Celebration Cake</h4><p>Custom tiered cakes — chocolate, vanilla or coconut</p><span class="t">Custom Orders</span></div><div class="dish"><h4>Fresh Fruit Platter</h4><p>Watermelon, papaya, banana, pineapple and mango</p><span class="t">Naturally Sweet</span></div><div class="dish"><h4>Halwa ya Zanzibar</h4><p>Aromatic halwa with rosewater and saffron</p><span class="t">Zanzibari Classic</span></div><div class="dish"><h4>Coconut Pudding</h4><p>Silky coconut milk pudding with caramelised banana</p><span class="t">Light & Creamy</span></div><div class="dish"><h4>Sweet Maandazi & Honey</h4><p>Warm doughnuts with Tanzanian wildflower honey</p><span class="t">Comfort Sweet</span></div></div></div>
  <div class="sb"><div class="st">Vinywaji — Beverages</div><div class="stag">Drinks & Refreshments</div><div class="dg"><div class="dish"><h4>Sugarcane Juice (Muwa)</h4><p>Fresh-pressed sugarcane with lemon and ginger</p><span class="t">100% Natural</span></div><div class="dish"><h4>Tropical Juice</h4><p>Mango, passion fruit, pineapple and guava blends</p><span class="t">Fresh Daily</span></div><div class="dish"><h4>Signature Cocktails</h4><p>Local spirits and tropical fruit mixers</p><span class="t">Adults Only</span></div><div class="dish"><h4>Mocktails</h4><p>Hibiscus lemonade, tamarind fizz, passion fruit spritz</p><span class="t">Alcohol-Free</span></div><div class="dish"><h4>Tangawizi Chai</h4><p>Spiced ginger tea with cardamom and cinnamon</p><span class="t">Swahili Classic</span></div><div class="dish"><h4>Premium Beverages</h4><p>Mineral water, soft drinks, Stoney Tangawizi</p><span class="t">All Events</span></div></div></div>
  <div class="footer"><p>For <strong>custom menus, special dietary requirements, or event-specific pricing</strong>, contact Veronica directly.</p><p style="margin-top:.5rem">📞 <strong>+255 767 620 509</strong> | ✉️ veronica.wlff@gmail.com | 📱 @jvc.catering._tz</p></div>
  </div></body></html>`

  const w = window.open('', '_blank', 'width=900,height=700,scrollbars=yes')
  if (w) { w.document.write(html); w.document.close() }
}

export default function MenuSection() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('starters')

  const currentItems = TABS.find(tab => tab.key === activeTab)?.items || []

  return (
    <section id="menu" className="section-pad relative overflow-hidden" style={{ background: '#111827' }}>
      {/* Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'rgba(27,107,58,0.15)', filter: 'blur(100px)' }} />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'rgba(201,122,42,0.12)', filter: 'blur(100px)' }} />

      <div className="container-xl relative z-10">
        <RevealEl>
          <div className="mb-10">
            <div className="eyebrow mb-3" style={{ color: '#E8A05C' }}
              // override eyebrow::before
            >{t('menu.eyebrow')}</div>
            <h2 style={{ fontFamily: '"Playfair Display", serif' }}
              className="text-4xl md:text-5xl font-semibold text-white mt-3 mb-4">
              {t('menu.heading1')}{' '}
              <em style={{ color: '#E8A05C', fontStyle: 'italic' }}>{t('menu.heading2')}</em>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed max-w-lg">{t('menu.sub')}</p>
          </div>
        </RevealEl>

        {/* Tabs */}
        <RevealEl delay={100}>
          <div className="flex flex-wrap gap-2 mb-8">
            {TABS.map(tab => (
              <button key={tab.key} onClick={() => setActiveTab(tab.key)}
                className="px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300"
                style={activeTab === tab.key ? {
                  background: '#C97A2A',
                  color: '#fff',
                  boxShadow: '0 4px 16px rgba(201,122,42,0.35)',
                } : {
                  background: 'transparent',
                  color: 'rgba(255,255,255,0.4)',
                  border: '1.5px solid rgba(255,255,255,0.08)',
                }}>
                {t(`menu.tab_${tab.key}`)}
              </button>
            ))}
          </div>
        </RevealEl>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          key={activeTab}
          style={{ animation: 'fadeUp 0.4s ease both' }}>
          {currentItems.map((itemKey, i) => {
            const item = t(`menu.items.${itemKey}`, { returnObjects: true })
            return (
              <div key={itemKey}
                className="group rounded-xl overflow-hidden transition-all duration-350 hover:-translate-y-1 cursor-default"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  animationDelay: `${i * 60}ms`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                  e.currentTarget.style.borderColor = 'rgba(201,122,42,0.28)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                }}>
                <div className="h-44 overflow-hidden bg-[#1a2030]">
                  <img src={IMAGES[itemKey]} alt={item.name} loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={e => { e.target.src = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=350&fit=crop' }}
                  />
                </div>
                <div className="p-5">
                  <h4 style={{ fontFamily: '"Playfair Display", serif' }}
                    className="text-lg font-semibold text-white mb-1.5">{item.name}</h4>
                  <p className="text-sm text-white/40 leading-relaxed mb-3">{item.desc}</p>
                  <span className="inline-block px-3 py-1 rounded-full text-[0.62rem] font-bold tracking-widest uppercase"
                    style={{ background: 'rgba(201,122,42,0.12)', border: '1px solid rgba(201,122,42,0.2)', color: '#E8A05C' }}>
                    {item.tag}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Download */}
        <RevealEl delay={200}>
          <div className="mt-12 text-center flex flex-col items-center gap-3">
            <button onClick={openMenuPDF}
              className="btn-primary">
              <FileDown size={16} />
              {t('menu.download')}
            </button>
            <p className="text-white/25 text-xs">{t('menu.downloadSub')}</p>
          </div>
        </RevealEl>
      </div>
    </section>
  )
}
