export default function Preloader({ loaded }) {
  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6 bg-[#0D0D0D] transition-all duration-700"
      style={{ opacity: loaded ? 0 : 1, visibility: loaded ? 'hidden' : 'visible', pointerEvents: loaded ? 'none' : 'auto' }}
    >
      <div className="text-center">
        <div style={{ fontFamily: '"Playfair Display", serif' }} className="text-4xl md:text-5xl font-bold text-white tracking-widest">
          JVC <span style={{ color: '#C97A2A' }}>Catering</span>
        </div>
        <div className="mt-2 text-xs tracking-[0.35em] uppercase text-white/30">
          Tailored Tastes · Warm Moments
        </div>
      </div>
      <div className="w-36 h-px bg-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C97A2A] to-transparent animate-[shimmer_1s_ease_infinite]" />
      </div>
    </div>
  )
}
