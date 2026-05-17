import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useReveal } from '../hooks/useReveal'

import {
  MessageCircle,
  Phone,
  Mail,
  Instagram,
  MapPin,
  Lock,
  ArrowRight,
  ArrowLeft,
  Check,
} from 'lucide-react'

const WA = '255767602509'

const EVENT_TYPES = [
  { icon: '💍', key: 'ev_wedding' },
  { icon: '💼', key: 'ev_corporate' },
  { icon: '🎂', key: 'ev_birthday' },
  { icon: '🥂', key: 'ev_anniversary' },
  { icon: '🎉', key: 'ev_party' },
  { icon: '✨', key: 'ev_other' },
]

function RevealEl({
  children,
  delay = 0,
  dir = 'up',
  className = '',
}) {
  const [ref, visible] = useReveal()

  const base =
    dir === 'left'
      ? {
          opacity: 0,
          transform: 'translateX(-36px)',
        }
      : dir === 'right'
        ? {
            opacity: 0,
            transform: 'translateX(36px)',
          }
        : {
            opacity: 0,
            transform: 'translateY(28px)',
          }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...base,
        transition: `opacity 0.6s ${delay}ms cubic-bezier(0.4,0,0.2,1),
        transform 0.6s ${delay}ms cubic-bezier(0.4,0,0.2,1)`,

        ...(visible
          ? {
              opacity: 1,
              transform: 'none',
            }
          : {}),
      }}
    >
      {children}
    </div>
  )
}

export default function Contact() {
  const { t, i18n } = useTranslation()

  const [step, setStep] = useState(1)
  const [selEv, setSelEv] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  /* AUTO FILL + SAVE */

  const [form, setForm] = useState(() => {
    const saved =
      localStorage.getItem('jvc-contact-form')

    return saved
      ? JSON.parse(saved)
      : {
          name: '',
          phone: '',
          date: '',
          location: '',
          guests: 50,
          notes: '',
        }
  })

  useEffect(() => {
    localStorage.setItem(
      'jvc-contact-form',
      JSON.stringify(form)
    )
  }, [form])

  const guestPct =
    ((form.guests - 10) / (1000 - 10)) * 100

  const handleField = (k, v) => {
    setForm(prev => ({
      ...prev,
      [k]: v,
    }))
  }

  const goNext = () => {
    if (step === 1 && !selEv) {
      alert(
        i18n.language === 'sw'
          ? 'Tafadhali chagua aina ya tukio.'
          : i18n.language === 'fr'
            ? "Veuillez choisir un type d'événement."
            : 'Please select an event type.'
      )

      return
    }

    if (step === 2) {
      if (
        !form.name ||
        !form.phone ||
        !form.date ||
        !form.location
      ) {
        alert(
          i18n.language === 'sw'
            ? 'Tafadhali jaza sehemu zote.'
            : i18n.language === 'fr'
              ? 'Veuillez remplir tous les champs.'
              : 'Please fill in all required fields.'
        )

        return
      }
    }

    setStep(prev => prev + 1)
  }

  const handleSubmit = () => {
    setSubmitting(true)

    const d = form.date
      ? new Date(form.date).toLocaleDateString(
          'en-GB',
          {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }
        )
      : ''

    const msg = `
✨ *NEW CATERING REQUEST — JVC Catering* ✨

━━━━━━━━━━━━━━━

👤 *Customer Details*
• Name: ${form.name}
• Phone: ${form.phone}

🎉 *Event Information*
• Occasion: ${selEv}
• Guests: ${form.guests}

📅 *Event Date*
${d}

📍 *Location*
${form.location}

📝 *Additional Notes*
${form.notes || 'No extra notes provided'}

━━━━━━━━━━━━━━━

💬 Customer is requesting:
✔️ Pricing
✔️ Availability
✔️ Catering Consultation

🙏 Thank you for choosing *JVC Catering*

🌍 Dar es Salaam, Tanzania
🍽️ Premium Catering Experiences
`

    setTimeout(() => {
      window.open(
        `https://wa.me/${WA}?text=${encodeURIComponent(
          msg
        )}`,
        '_blank'
      )

      setSubmitting(false)

      setShowModal(true)

      /* KEEP CUSTOMER DETAILS */

      setForm(prev => ({
        ...prev,
        date: '',
        location: '',
        guests: 50,
        notes: '',
      }))

      setSelEv('')
      setStep(1)
    }, 850)
  }

  const today =
    new Date().toISOString().split('T')[0]

  const inputCls = `
    w-full
    rounded-xl
    border
    border-zinc-200
    bg-[#FAF9F6]
    px-4
    py-3
    text-sm
    text-[#0D0D0D]
    outline-none
    transition-all
    duration-300
    placeholder:text-zinc-400
    focus:border-[#C97A2A]
    focus:bg-white
    focus:shadow-[0_0_0_3px_rgba(201,122,42,0.1)]
  `

  const labelCls = `
    mb-1.5
    block
    text-[0.68rem]
    font-bold
    uppercase
    tracking-[0.18em]
    text-[#0D0D0D]
  `

  const StepDot = ({ n }) => (
    <div
      className="
        flex
        h-9
        w-9
        flex-shrink-0
        items-center
        justify-center
        rounded-full
        text-xs
        font-bold
        transition-all
        duration-300
      "
      style={
        step > n
          ? {
              background: '#1B6B3A',
              color: '#fff',
            }
          : step === n
            ? {
                background: '#C97A2A',
                color: '#fff',
                boxShadow:
                  '0 6px 20px rgba(201,122,42,0.35)',
              }
            : {
                background: '#F4EDE0',
                color: '#71717A',
                border: '2px solid #E4E4E7',
              }
      }
    >
      {step > n ? (
        <Check size={14} />
      ) : (
        n
      )}
    </div>
  )

  const StepLine = ({ n }) => (
    <div
      className="relative h-[2px] flex-1 overflow-hidden rounded-full"
      style={{
        background: '#E4E4E7',
      }}
    >
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          width: step > n ? '100%' : '0%',
          background:
            'linear-gradient(90deg,#1B6B3A,#C97A2A)',
        }}
      />
    </div>
  )

  return (
    <>
      <section
        id="contact"
        className="relative overflow-hidden py-20 md:py-24 px-4 bg-[#FAF9F6]"
      >
        {/* BACKGROUND GLOW */}

        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{
            background:
              'rgba(201,122,42,0.05)',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-24 items-start">
            {/* LEFT SIDE */}

            <RevealEl dir="left">
              {/* EYEBROW */}

              <div
                className="uppercase tracking-[0.25em] text-xs font-semibold mb-5"
                style={{
                  color: '#C97A2A',
                }}
              >
                {t('contact.eyebrow')}
              </div>

              {/* HEADING */}

              <h2
                style={{
                  fontFamily:
                    '"Playfair Display", serif',
                  color: '#0D0D0D',
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                  fontWeight: 600,
                  fontSize:
                    'clamp(2.8rem, 5vw, 4.8rem)',
                }}
                className="mb-6"
              >
                {t('contact.heading1')}{' '}
                <span
                  style={{
                    color: '#C97A2A',
                    fontStyle: 'italic',
                  }}
                >
                  {t('contact.heading2')}
                </span>
              </h2>

              {/* SUBTEXT */}

              <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-xl mb-10">
                {t('contact.sub')}
              </p>

              {/* CONTACT ITEMS */}

              <div className="flex flex-col gap-5 mb-10">
                {[
                  {
                    icon: MessageCircle,
                    label: t('contact.wa'),
                    val: '+255 767 620 509',
                    color: '#C97A2A',
                    href: `https://wa.me/${WA}`,
                  },
                  {
                    icon: Phone,
                    label: t(
                      'contact.phone_label'
                    ),
                    val: '+255 715 602 509 · +255 688 407 366',
                    color: '#1B6B3A',
                    href: 'tel:+255715602509',
                  },
                  {
                    icon: Mail,
                    label: t('contact.email'),
                    val: 'veronica.wlff@gmail.com',
                    color: '#C97A2A',
                    href: 'mailto:veronica.wlff@gmail.com',
                  },
                  {
                    icon: Instagram,
                    label: t(
                      'contact.instagram'
                    ),
                    val: '@jvc.catering._tz',
                    color: '#1B6B3A',
                    href: 'https://instagram.com/jvc.catering._tz',
                  },
                  {
                    icon: MapPin,
                    label: t(
                      'contact.address_label'
                    ),
                    val: t('contact.address'),
                    color: '#C97A2A',
                    href: null,
                  },
                ].map(
                  (
                    {
                      icon: Icon,
                      label,
                      val,
                      color,
                      href,
                    },
                    i
                  ) => (
                    <div
                      key={i}
                      className="flex items-start gap-4"
                    >
                      <div
                        className="
                          w-12
                          h-12
                          rounded-2xl
                          flex
                          items-center
                          justify-center
                          flex-shrink-0
                        "
                        style={{
                          background: `${color}15`,
                          color,
                        }}
                      >
                        <Icon size={18} />
                      </div>

                      <div className="min-w-0">
                        <strong className="block text-[0.85rem] font-semibold text-[#0D0D0D] mb-1">
                          {label}
                        </strong>

                        {href ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="
                              text-sm
                              text-zinc-500
                              break-words
                              transition-colors
                              hover:text-[#C97A2A]
                            "
                          >
                            {val}
                          </a>
                        ) : (
                          <span className="text-sm text-zinc-500">
                            {val}
                          </span>
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* SOCIALS */}

              <div className="flex flex-wrap gap-3">
                {[
                  {
                    href: 'https://instagram.com/jvc.catering._tz',
                    icon: Instagram,
                  },
                  {
                    href: `https://wa.me/${WA}`,
                    icon: MessageCircle,
                  },
                  {
                    href: 'mailto:veronica.wlff@gmail.com',
                    icon: Mail,
                  },
                ].map(
                  (
                    {
                      href,
                      icon: Icon,
                    },
                    i
                  ) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        w-11
                        h-11
                        rounded-xl
                        border
                        border-zinc-200
                        bg-white
                        flex
                        items-center
                        justify-center
                        text-zinc-500
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-lg
                        hover:border-[#C97A2A]
                        hover:bg-[#C97A2A]
                        hover:text-white
                      "
                    >
                      <Icon size={17} />
                    </a>
                  )
                )}
              </div>
            </RevealEl>

            {/* RIGHT SIDE */}

            <RevealEl dir="right" delay={100}>
              <div
                className="
                  bg-white
                  rounded-[30px]
                  border
                  border-zinc-200
                  p-5
                  sm:p-7
                  md:p-8
                  lg:p-9
                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                "
              >
                {/* STEPS */}

                <div className="flex items-center gap-0 mb-2">
                  <StepDot n={1} />
                  <StepLine n={1} />
                  <StepDot n={2} />
                  <StepLine n={2} />
                  <StepDot n={3} />
                </div>

                <div className="flex justify-between mb-7">
                  {[
                    t('contact.step1'),
                    t('contact.step2'),
                    t('contact.step3'),
                  ].map((l, i) => (
                    <span
                      key={i}
                      className="
                        text-[0.58rem]
                        uppercase
                        tracking-[0.2em]
                        text-zinc-400
                      "
                    >
                      {l}
                    </span>
                  ))}
                </div>

                {/* STEP 1 */}

                {step === 1 && (
                  <div>
                    <h3
                      style={{
                        fontFamily:
                          '"Playfair Display", serif',
                      }}
                      className="text-2xl font-semibold text-[#0D0D0D] mb-1"
                    >
                      {t(
                        'contact.step1_title'
                      )}
                    </h3>

                    <p className="text-sm text-zinc-400 mb-6">
                      {t('contact.step1_sub')}
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-5">
                      {EVENT_TYPES.map(
                        ({
                          icon,
                          key,
                        }) => (
                          <button
                            key={key}
                            type="button"
                            onClick={() =>
                              setSelEv(
                                t(
                                  `contact.${key}`
                                )
                              )
                            }
                            className="
                              min-h-[120px]
                              rounded-2xl
                              border
                              p-4
                              flex
                              flex-col
                              items-center
                              justify-center
                              gap-2
                              text-center
                              transition-all
                              duration-300
                              hover:-translate-y-1
                              hover:shadow-lg
                            "
                            style={
                              selEv ===
                              t(
                                `contact.${key}`
                              )
                                ? {
                                    borderColor:
                                      '#C97A2A',
                                    background:
                                      'rgba(201,122,42,0.05)',
                                  }
                                : {
                                    borderColor:
                                      '#E4E4E7',
                                    background:
                                      '#FAF9F6',
                                  }
                            }
                          >
                            <span className="text-2xl">
                              {icon}
                            </span>

                            <span className="text-[0.75rem] font-semibold text-[#0D0D0D]">
                              {t(
                                `contact.${key}`
                              )}
                            </span>
                          </button>
                        )
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={goNext}
                      className="
                        w-full
                        flex
                        items-center
                        justify-center
                        gap-2
                        py-4
                        rounded-xl
                        text-sm
                        font-bold
                        tracking-[0.15em]
                        uppercase
                        text-white
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-lg
                      "
                      style={{
                        background:
                          '#C97A2A',
                      }}
                    >
                      {t('contact.continue')}

                      <ArrowRight size={16} />
                    </button>
                  </div>
                )}

                {/* STEP 2 */}

                {step === 2 && (
                  <div>
                    <h3
                      style={{
                        fontFamily:
                          '"Playfair Display", serif',
                      }}
                      className="text-2xl font-semibold text-[#0D0D0D] mb-1"
                    >
                      {t(
                        'contact.step2_title'
                      )}
                    </h3>

                    <p className="text-sm text-zinc-400 mb-6">
                      {t('contact.step2_sub')}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label
                          className={
                            labelCls
                          }
                        >
                          {t(
                            'contact.name'
                          )}
                        </label>

                        <input
                          autoComplete="name"
                          className={
                            inputCls
                          }
                          value={form.name}
                          onChange={e =>
                            handleField(
                              'name',
                              e.target.value
                            )
                          }
                          placeholder="Amina Hassan"
                        />
                      </div>

                      <div>
                        <label
                          className={
                            labelCls
                          }
                        >
                          {t(
                            'contact.phone'
                          )}
                        </label>

                        <input
                          autoComplete="tel"
                          type="tel"
                          className={
                            inputCls
                          }
                          value={form.phone}
                          onChange={e =>
                            handleField(
                              'phone',
                              e.target.value
                            )
                          }
                          placeholder="+255 7XX XXX XXX"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                      <div>
                        <label
                          className={
                            labelCls
                          }
                        >
                          {t(
                            'contact.date'
                          )}
                        </label>

                        <input
                          type="date"
                          min={today}
                          className={
                            inputCls
                          }
                          value={form.date}
                          onChange={e =>
                            handleField(
                              'date',
                              e.target.value
                            )
                          }
                        />
                      </div>

                      <div>
                        <label
                          className={
                            labelCls
                          }
                        >
                          {t(
                            'contact.location'
                          )}
                        </label>

                        <input
                          autoComplete="street-address"
                          className={
                            inputCls
                          }
                          value={
                            form.location
                          }
                          onChange={e =>
                            handleField(
                              'location',
                              e.target.value
                            )
                          }
                          placeholder="Dar es Salaam..."
                        />
                      </div>
                    </div>

                    {/* GUESTS */}

                    <div className="mb-6">
                      <div
                        style={{
                          fontFamily:
                            '"Playfair Display", serif',
                          color:
                            '#C97A2A',
                        }}
                        className="
                          text-4xl
                          font-semibold
                          text-center
                          leading-none
                        "
                      >
                        {form.guests}
                      </div>

                      <div className="text-[0.62rem] tracking-[0.2em] uppercase text-zinc-400 text-center mb-3">
                        {t(
                          'contact.guests'
                        )}
                      </div>

                      <input
                        type="range"
                        className="slider"
                        min={10}
                        max={1000}
                        step={5}
                        value={
                          form.guests
                        }
                        style={{
                          '--pct': `${guestPct}%`,
                        }}
                        onChange={e =>
                          handleField(
                            'guests',
                            Number(
                              e.target.value
                            )
                          )
                        }
                      />

                      <div className="flex justify-between text-[0.68rem] text-zinc-400 mt-1">
                        <span>10</span>
                        <span>1,000+</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          setStep(1)
                        }
                        className="
                          px-5
                          py-3.5
                          rounded-xl
                          border
                          border-zinc-200
                          text-sm
                          font-medium
                          text-zinc-500
                          flex
                          items-center
                          gap-2
                          transition-all
                          hover:border-zinc-400
                        "
                      >
                        <ArrowLeft
                          size={15}
                        />

                        {t(
                          'contact.back'
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={goNext}
                        className="
                          flex-1
                          py-3.5
                          rounded-xl
                          text-sm
                          font-bold
                          tracking-[0.15em]
                          uppercase
                          text-white
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:shadow-lg
                        "
                        style={{
                          background:
                            '#C97A2A',
                        }}
                      >
                        {t(
                          'contact.continue'
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}

                {step === 3 && (
                  <div>
                    <h3
                      style={{
                        fontFamily:
                          '"Playfair Display", serif',
                      }}
                      className="text-2xl font-semibold text-[#0D0D0D] mb-1"
                    >
                      {t(
                        'contact.step3_title'
                      )}
                    </h3>

                    <p className="text-sm text-zinc-400 mb-5">
                      {t('contact.step3_sub')}
                    </p>

                    <div className="mb-5">
                      <label
                        className={
                          labelCls
                        }
                      >
                        {t(
                          'contact.notes'
                        )}
                      </label>

                      <textarea
                        className={`${inputCls} resize-none h-24`}
                        value={
                          form.notes
                        }
                        onChange={e =>
                          handleField(
                            'notes',
                            e.target.value
                          )
                        }
                        placeholder={t(
                          'contact.notes_ph'
                        )}
                      />
                    </div>

                    {/* SUMMARY */}

                    <div className="bg-[#FAF9F6] rounded-2xl p-5 mb-5">
                      <div className="text-[0.62rem] font-bold tracking-[0.18em] uppercase text-zinc-400 mb-3">
                        {t(
                          'contact.summary'
                        )}
                      </div>

                      {[
                        [
                          'Event',
                          selEv,
                        ],
                        [
                          'Name',
                          form.name,
                        ],
                        [
                          'Phone',
                          form.phone,
                        ],
                        [
                          'Date',
                          form.date
                            ? new Date(
                                form.date
                              ).toLocaleDateString(
                                'en-GB',
                                {
                                  day: 'numeric',
                                  month:
                                    'short',
                                  year:
                                    'numeric',
                                }
                              )
                            : '',
                        ],
                        [
                          'Location',
                          form.location,
                        ],
                        [
                          'Guests',
                          `${form.guests}`,
                        ],
                      ].map(
                        ([k, v]) =>
                          v ? (
                            <div
                              key={k}
                              className="flex gap-3 text-sm mb-2"
                            >
                              <span className="min-w-[72px] text-zinc-400">
                                {k}
                              </span>

                              <strong className="text-[#0D0D0D] break-words">
                                {v}
                              </strong>
                            </div>
                          ) : null
                      )}
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          setStep(2)
                        }
                        className="
                          px-5
                          py-3.5
                          rounded-xl
                          border
                          border-zinc-200
                          text-sm
                          font-medium
                          text-zinc-500
                          flex
                          items-center
                          gap-2
                          transition-all
                          hover:border-zinc-400
                        "
                      >
                        <ArrowLeft
                          size={15}
                        />

                        {t(
                          'contact.back'
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={
                          handleSubmit
                        }
                        disabled={
                          submitting
                        }
                        className="
                          flex-1
                          py-3.5
                          rounded-xl
                          text-sm
                          font-bold
                          tracking-[0.15em]
                          uppercase
                          text-white
                          flex
                          items-center
                          justify-center
                          gap-2
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:shadow-lg
                          disabled:opacity-70
                        "
                        style={{
                          background:
                            'linear-gradient(135deg,#1B6B3A,#2A9D5C)',
                        }}
                      >
                        {submitting ? (
                          '⏳'
                        ) : (
                          <MessageCircle
                            size={16}
                          />
                        )}

                        {submitting
                          ? '...'
                          : t(
                              'contact.submit'
                            )}
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-3 text-[0.68rem] text-zinc-400">
                      <Lock
                        size={11}
                        style={{
                          color:
                            '#4ade80',
                        }}
                      />

                      {t(
                        'contact.secure'
                      )}
                    </div>
                  </div>
                )}
              </div>
            </RevealEl>
          </div>
        </div>
      </section>

      {/* SUCCESS MODAL */}

      {showModal && (
        <div
          className="
            fixed
            inset-0
            z-[700]
            flex
            items-center
            justify-center
            p-5
          "
          style={{
            background:
              'rgba(0,0,0,0.7)',
            backdropFilter:
              'blur(10px)',
          }}
        >
          <div
            className="
              bg-white
              rounded-[30px]
              p-8
              sm:p-10
              max-w-sm
              w-full
              text-center
            "
          >
            <div
              className="
                w-16
                h-16
                rounded-full
                mx-auto
                mb-5
                flex
                items-center
                justify-center
              "
              style={{
                background:
                  'linear-gradient(135deg,#1B6B3A,#2A9D5C)',
              }}
            >
              <Check
                size={28}
                color="#fff"
              />
            </div>

            <h3
              style={{
                fontFamily:
                  '"Playfair Display", serif',
              }}
              className="text-2xl font-semibold text-[#0D0D0D] mb-3"
            >
              {t(
                'contact.modal_h'
              )}
            </h3>

            <p className="text-sm text-zinc-500 leading-relaxed mb-7">
              {t(
                'contact.modal_p'
              )}
            </p>

            <button
              onClick={() =>
                setShowModal(false)
              }
              className="
                w-full
                py-3.5
                rounded-xl
                text-sm
                font-bold
                tracking-[0.15em]
                uppercase
                text-white
                transition-all
                duration-300
                hover:opacity-90
              "
              style={{
                background:
                  '#C97A2A',
              }}
            >
              {t(
                'contact.modal_btn'
              )}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
