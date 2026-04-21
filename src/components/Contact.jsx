import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useReveal } from '../hooks/useReveal'
import { MessageCircle, Phone, Mail, Instagram, MapPin, Lock, ArrowRight, ArrowLeft, Check, X } from 'lucide-react'

const WA = '255767620509'

function RevealEl({ children, delay = 0, dir = 'up', className = '' }) {
  const [ref, visible] = useReveal()
  const base = dir === 'left' ? { opacity: 0, transform: 'translateX(-36px)' }
             : dir === 'right' ? { opacity: 0, transform: 'translateX(36px)' }
             : { opacity: 0, transform: 'translateY(28px)' }
  return (
    <div ref={ref} className={className}
      style={{
        ...base,
        transition: `opacity 0.7s ${delay}ms ease, transform 0.7s ${delay}ms ease`,
        ...(visible ? { opacity: 1, transform: 'none' } : {}),
      }}>
      {children}
    </div>
  )
}

const EVENT_TYPES = [
  { icon: '💍', key: 'ev_wedding' },
  { icon: '💼', key: 'ev_corporate' },
  { icon: '🎂', key: 'ev_birthday' },
  { icon: '🥂', key: 'ev_anniversary' },
  { icon: '🎉', key: 'ev_party' },
  { icon: '✨', key: 'ev_other' },
]

export default function Contact() {
  const { t, i18n } = useTranslation()
  const [step, setStep] = useState(1)
  const [selEv, setSelEv] = useState('')
  const [form, setForm] = useState({ name: '', phone: '', date: '', location: '', guests: 50, notes: '' })
  const [showModal, setShowModal] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const guestPct = ((form.guests - 10) / (1000 - 10)) * 100

  const handleField = (k, v) => setForm(prev => ({ ...prev, [k]: v }))

  const goNext = () => {
    if (step === 1 && !selEv) { alert(i18n.language === 'sw' ? 'Tafadhali chagua aina ya tukio.' : i18n.language === 'fr' ? 'Veuillez choisir un type d\'événement.' : 'Please select an event type.'); return }
    if (step === 2) {
      if (!form.name || !form.phone || !form.date || !form.location) {
        alert(i18n.language === 'sw' ? 'Tafadhali jaza sehemu zote.' : i18n.language === 'fr' ? 'Veuillez remplir tous les champs.' : 'Please fill in all required fields.')
        return
      }
    }
    setStep(s => s + 1)
  }

  const handleSubmit = () => {
    setSubmitting(true)
    const d = form.date ? new Date(form.date).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : ''
    const isSw = i18n.language === 'sw', isFr = i18n.language === 'fr'
    let msg
    if (isSw) {
      msg = `🍽️ *OMBI JIPYA LA CATERING — JVC Catering* 🍽️\n\nHabari Veronica!\n\n👤 *Jina:* ${form.name}\n📱 *Simu:* ${form.phone}\n🎊 *Tukio:* ${selEv}\n👥 *Wageni:* ${form.guests}\n📅 *Tarehe:* ${d}\n📍 *Mahali:* ${form.location}\n📝 *Maelezo:* ${form.notes || 'Hakuna'}\n\nTafadhali tuma bei na upatikanaji. Asante sana! 🙏`
    } else if (isFr) {
      msg = `🍽️ *NOUVELLE DEMANDE DE TRAITEUR — JVC Catering* 🍽️\n\nBonjour Veronica!\n\n👤 *Nom:* ${form.name}\n📱 *Téléphone:* ${form.phone}\n🎊 *Événement:* ${selEv}\n👥 *Invités:* ${form.guests}\n📅 *Date:* ${d}\n📍 *Lieu:* ${form.location}\n📝 *Notes:* ${form.notes || 'Aucune'}\n\nMerci de partager les tarifs et disponibilités. Merci beaucoup! 🙏`
    } else {
      msg = `🍽️ *NEW CATERING INQUIRY — JVC Catering* 🍽️\n\nHabari Veronica!\n\n👤 *Name:* ${form.name}\n📱 *Phone:* ${form.phone}\n🎊 *Event:* ${selEv}\n👥 *Guests:* ${form.guests}\n📅 *Date:* ${d}\n📍 *Location:* ${form.location}\n📝 *Notes:* ${form.notes || 'None'}\n\nPlease share pricing and availability. Asante sana! 🙏`
    }
    setTimeout(() => {
      window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank')
      setSubmitting(false)
      setShowModal(true)
      setForm({ name: '', phone: '', date: '', location: '', guests: 50, notes: '' })
      setSelEv('')
      setStep(1)
    }, 850)
  }

  const today = new Date().toISOString().split('T')[0]

  const StepDot = ({ n }) => (
    <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all duration-400"
      style={
        step > n ? { background: '#1B6B3A', color: '#fff' }
        : step === n ? { background: '#C97A2A', color: '#fff', boxShadow: '0 4px 12px rgba(201,122,42,0.35)' }
        : { background: '#F4EDE0', color: '#71717A', border: '2px solid #E4E4E7' }
      }>
      {step > n ? <Check size={13} /> : n}
    </div>
  )

  const StepLine = ({ n }) => (
    <div className="flex-1 h-0.5 relative overflow-hidden" style={{ background: '#E4E4E7' }}>
      <div className="absolute inset-0 transition-all duration-500"
        style={{ background: 'linear-gradient(90deg,#1B6B3A,#C97A2A)', width: step > n ? '100%' : '0%' }} />
    </div>
  )

  const inputCls = "w-full px-4 py-3 rounded-xl border border-zinc-200 bg-[#FAF9F6] text-sm text-[#0D0D0D] outline-none transition-all duration-300 focus:border-[#C97A2A] focus:bg-white focus:shadow-[0_0_0_3px_rgba(201,122,42,0.1)]"
  const labelCls = "block text-[0.68rem] font-bold tracking-widest uppercase text-[#0D0D0D] mb-1.5"

  return (
    <>
      <section id="contact" className="section-pad" style={{ background: '#FAF9F6' }}>
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

            {/* Left info */}
            <RevealEl dir="left">
              <div className="eyebrow mb-4">{t('contact.eyebrow')}</div>
              <h2 style={{ fontFamily: '"Playfair Display", serif' }}
                className="text-4xl md:text-5xl font-semibold text-[#0D0D0D] mb-5">
                {t('contact.heading1')}{' '}
                <em style={{ color: '#C97A2A', fontStyle: 'italic' }}>{t('contact.heading2')}</em>
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-9">{t('contact.sub')}</p>

              <div className="flex flex-col gap-5 mb-8">
                {[
                  { icon: MessageCircle, label: t('contact.wa'), val: '+255 767 620 509', color: '#C97A2A', href: `https://wa.me/${WA}` },
                  { icon: Phone, label: t('contact.phone_label'), val: '+255 715 602 509 · +255 688 407 366', color: '#1B6B3A', href: 'tel:+255715602509' },
                  { icon: Mail, label: t('contact.email'), val: 'veronica.wlff@gmail.com', color: '#C97A2A', href: 'mailto:veronica.wlff@gmail.com' },
                  { icon: Instagram, label: t('contact.instagram'), val: '@jvc.catering._tz', color: '#1B6B3A', href: 'https://instagram.com/jvc.catering._tz' },
                  { icon: MapPin, label: t('contact.address_label'), val: t('contact.address'), color: '#C97A2A', href: null },
                ].map(({ icon: Icon, label, val, color, href }, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${color}18`, color }}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <strong className="block text-[0.82rem] font-semibold text-[#0D0D0D]">{label}</strong>
                      {href
                        ? <a href={href} target="_blank" rel="noreferrer" className="text-sm text-zinc-500 hover:text-[#C97A2A] transition-colors">{val}</a>
                        : <span className="text-sm text-zinc-500">{val}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>

              {/* Social icons */}
              <div className="flex gap-3">
                {[
                  { href: 'https://instagram.com/jvc.catering._tz', icon: Instagram },
                  { href: `https://wa.me/${WA}`, icon: MessageCircle },
                  { href: 'mailto:veronica.wlff@gmail.com', icon: Mail },
                ].map(({ href, icon: Icon }, i) => (
                  <a key={i} href={href} target="_blank" rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 transition-all duration-300 hover:bg-[#C97A2A] hover:text-white hover:border-[#C97A2A] hover:-translate-y-0.5">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </RevealEl>

            {/* Right form */}
            <RevealEl dir="right" delay={100}>
              <div className="bg-white rounded-2xl p-7 md:p-9 border border-zinc-200 shadow-[0_4px_30px_rgba(0,0,0,0.06)]">
                {/* Step bar */}
                <div className="flex items-center gap-0 mb-1">
                  <StepDot n={1} /><StepLine n={1} /><StepDot n={2} /><StepLine n={2} /><StepDot n={3} />
                </div>
                <div className="flex justify-between mb-6">
                  {[t('contact.step1'), t('contact.step2'), t('contact.step3')].map((l, i) => (
                    <span key={i} className="text-[0.58rem] tracking-widest uppercase text-zinc-400"
                      style={i === 1 ? { textAlign: 'center' } : i === 2 ? { textAlign: 'right' } : {}}>{l}</span>
                  ))}
                </div>

                {/* Step 1 */}
                {step === 1 && (
                  <div style={{ animation: 'fadeUp 0.35s ease both' }}>
                    <h3 style={{ fontFamily: '"Playfair Display", serif' }} className="text-2xl font-semibold text-[#0D0D0D] mb-1">{t('contact.step1_title')}</h3>
                    <p className="text-sm text-zinc-400 mb-5">{t('contact.step1_sub')}</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                      {EVENT_TYPES.map(({ icon, key }) => (
                        <button key={key} type="button" onClick={() => setSelEv(t(`contact.${key}`))}
                          className="flex flex-col items-center gap-1.5 p-4 rounded-xl border text-center transition-all duration-300"
                          style={selEv === t(`contact.${key}`)
                            ? { borderColor: '#C97A2A', background: 'rgba(201,122,42,0.05)' }
                            : { borderColor: '#E4E4E7', background: '#FAF9F6' }}>
                          <span className="text-2xl">{icon}</span>
                          <span className="text-[0.72rem] font-semibold text-[#0D0D0D]">{t(`contact.${key}`)}</span>
                        </button>
                      ))}
                    </div>
                    <button type="button" onClick={goNext}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold tracking-widest uppercase text-white transition-all hover:-translate-y-0.5"
                      style={{ background: '#C97A2A', boxShadow: '0 4px 18px rgba(201,122,42,0.3)' }}>
                      {t('contact.continue')} <ArrowRight size={16} />
                    </button>
                  </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <div style={{ animation: 'fadeUp 0.35s ease both' }}>
                    <h3 style={{ fontFamily: '"Playfair Display", serif' }} className="text-2xl font-semibold text-[#0D0D0D] mb-1">{t('contact.step2_title')}</h3>
                    <p className="text-sm text-zinc-400 mb-5">{t('contact.step2_sub')}</p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className={labelCls}>{t('contact.name')}</label>
                        <input className={inputCls} value={form.name} onChange={e => handleField('name', e.target.value)} placeholder="Amina Hassan" />
                      </div>
                      <div>
                        <label className={labelCls}>{t('contact.phone')}</label>
                        <input className={inputCls} type="tel" value={form.phone} onChange={e => handleField('phone', e.target.value)} placeholder="+255 7XX XXX XXX" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className={labelCls}>{t('contact.date')}</label>
                        <input className={inputCls} type="date" min={today} value={form.date} onChange={e => handleField('date', e.target.value)} />
                      </div>
                      <div>
                        <label className={labelCls}>{t('contact.location')}</label>
                        <input className={inputCls} value={form.location} onChange={e => handleField('location', e.target.value)} placeholder="Dar es Salaam..." />
                      </div>
                    </div>
                    {/* Guest slider */}
                    <div className="mb-5">
                      <div style={{ fontFamily: '"Playfair Display", serif', color: '#C97A2A' }} className="text-3xl font-semibold text-center leading-none">{form.guests}</div>
                      <div className="text-[0.62rem] tracking-widest uppercase text-zinc-400 text-center mb-2">{t('contact.guests')}</div>
                      <input type="range" className="slider" min={10} max={1000} step={5} value={form.guests}
                        style={{ '--pct': `${guestPct}%` }}
                        onChange={e => handleField('guests', Number(e.target.value))} />
                      <div className="flex justify-between text-[0.68rem] text-zinc-400 mt-1"><span>10</span><span>1,000+</span></div>
                    </div>
                    <div className="flex gap-3">
                      <button type="button" onClick={() => setStep(1)}
                        className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-zinc-500 border border-zinc-200 hover:border-zinc-400 transition-all">
                        <ArrowLeft size={15} /> {t('contact.back')}
                      </button>
                      <button type="button" onClick={goNext}
                        className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold tracking-widest uppercase text-white transition-all hover:-translate-y-0.5"
                        style={{ background: '#C97A2A', boxShadow: '0 4px 18px rgba(201,122,42,0.3)' }}>
                        {t('contact.continue')} <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <div style={{ animation: 'fadeUp 0.35s ease both' }}>
                    <h3 style={{ fontFamily: '"Playfair Display", serif' }} className="text-2xl font-semibold text-[#0D0D0D] mb-1">{t('contact.step3_title')}</h3>
                    <p className="text-sm text-zinc-400 mb-5">{t('contact.step3_sub')}</p>
                    <div className="mb-4">
                      <label className={labelCls}>{t('contact.notes')}</label>
                      <textarea className={`${inputCls} resize-none h-20`} value={form.notes}
                        onChange={e => handleField('notes', e.target.value)}
                        placeholder={t('contact.notes_ph')} />
                    </div>
                    {/* Summary */}
                    <div className="bg-[#FAF9F6] rounded-xl p-5 mb-5">
                      <div className="text-[0.62rem] font-bold tracking-widest uppercase text-zinc-400 mb-3">{t('contact.summary')}</div>
                      {[
                        ['Event', selEv], ['Name', form.name], ['Phone', form.phone],
                        ['Date', form.date ? new Date(form.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : ''],
                        ['Location', form.location],
                        ['Guests', `${form.guests}`],
                      ].map(([k, v]) => v ? (
                        <div key={k} className="flex gap-3 text-sm mb-1.5">
                          <span className="text-zinc-400 min-w-[72px]">{k}</span>
                          <strong className="text-[#0D0D0D]">{v}</strong>
                        </div>
                      ) : null)}
                    </div>
                    <div className="flex gap-3">
                      <button type="button" onClick={() => setStep(2)}
                        className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-zinc-500 border border-zinc-200 hover:border-zinc-400 transition-all">
                        <ArrowLeft size={15} /> {t('contact.back')}
                      </button>
                      <button type="button" onClick={handleSubmit} disabled={submitting}
                        className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold tracking-widest uppercase text-white transition-all hover:-translate-y-0.5 disabled:opacity-70"
                        style={{ background: 'linear-gradient(135deg,#1B6B3A,#2A9D5C)', boxShadow: '0 4px 18px rgba(27,107,58,0.28)' }}>
                        {submitting ? '⏳' : <MessageCircle size={16} />}
                        {submitting ? '...' : t('contact.submit')}
                      </button>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-3 text-[0.68rem] text-zinc-400">
                      <Lock size={11} style={{ color: '#4ade80' }} /> {t('contact.secure')}
                    </div>
                  </div>
                )}
              </div>
            </RevealEl>
          </div>
        </div>
      </section>

      {/* Success modal */}
      {showModal && (
        <div className="fixed inset-0 z-[700] flex items-center justify-center p-5"
          style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)' }}>
          <div className="bg-white rounded-2xl p-10 max-w-sm w-full text-center" style={{ animation: 'scaleIn 0.4s ease' }}>
            <div className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg,#1B6B3A,#2A9D5C)' }}>
              <Check size={28} color="#fff" />
            </div>
            <h3 style={{ fontFamily: '"Playfair Display", serif' }} className="text-2xl font-semibold text-[#0D0D0D] mb-3">{t('contact.modal_h')}</h3>
            <p className="text-sm text-zinc-500 leading-relaxed mb-7">{t('contact.modal_p')}</p>
            <button onClick={() => setShowModal(false)}
              className="w-full py-3.5 rounded-xl text-sm font-bold tracking-widest uppercase text-white transition-all hover:opacity-90"
              style={{ background: '#C97A2A' }}>
              {t('contact.modal_btn')}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
