import { useTranslation } from 'react-i18next'

const items = ['Wedding Catering', 'Pilau & Biryani', 'Nyama Choma', 'Corporate Events', 'Sambusa & Maandazi', 'Buffet Service', 'Zanzibari Cuisine', 'Private Celebrations', 'Dar es Salaam Tanzania']

export default function Marquee() {
  const doubles = [...items, ...items, ...items, ...items]

  return (
    <div className="overflow-hidden py-3.5" style={{ background: '#C97A2A' }}>
      <div className="flex w-max animate-marquee">
        {doubles.map((item, i) => (
          <div key={i} className="flex items-center gap-5 px-6 text-[0.68rem] font-bold tracking-[0.22em] uppercase text-white whitespace-nowrap">
            {item}
            <span className="w-1 h-1 rounded-full bg-white/40 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  )
}
