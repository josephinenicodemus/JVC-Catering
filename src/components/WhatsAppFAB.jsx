import { useState, useEffect } from 'react'
import { MessageCircle, ArrowUp } from 'lucide-react'

const WA = '255688407366'

export default function WhatsAppFAB() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* WhatsApp FAB */}
      <a
        href={`https://wa.me/${WA}?text=Hello%20JVC%20Catering%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[400] w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group animate-wa-pulse"
        style={{ background: '#25d366' }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} color="#fff" />
        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-[#0D0D0D] text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat Now!
        </span>
      </a>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 left-6 z-[400] w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C97A2A]"
        style={{
          background: 'rgba(13,13,13,0.85)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
          opacity: showTop ? 1 : 0,
          visibility: showTop ? 'visible' : 'hidden',
          color: showTop ? 'rgba(255,255,255,0.5)' : 'transparent',
        }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={16} />
      </button>

      {/* Mobile CTA strip */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[300] px-4 py-3 bg-white border-t border-zinc-200 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
        <a
          href={`https://wa.me/${WA}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-sm font-bold text-white"
          style={{ background: '#C97A2A' }}
        >
          <MessageCircle size={17} />
          Get Instant Quote on WhatsApp
        </a>
      </div>
    </>
  )
}
