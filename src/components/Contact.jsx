import { useState } from 'react'
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

function RevealEl({
  children,
  delay = 0,
  dir = 'up',
  className = '',
}) {
  const [ref, visible] = useReveal()

  const base =
    dir === 'left'
      ? { opacity: 0, transform: 'translateX(-32px)' }
      : dir === 'right'
      ? { opacity: 0, transform: 'translateX(32px)' }
      : { opacity: 0, transform: 'translateY(26px)' }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...base,
        transition: `opacity 0.55s ${delay}ms ease, transform 0.55s ${delay}ms ease`,
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
  const [showModal, setShowModal] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    location: '',
    guests: 50,
    notes: '',
  })

  const handleField = (k, v) => {
    setForm(prev => ({
      ...prev,
      [k]: v,
    }))
  }

  const guestPct = ((form.guests - 10) / (1000 - 10)) * 100

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
      ? new Date(form.date).toLocaleDateString('en-GB', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : ''

    const isSw = i18n.language === 'sw'
    const isFr = i18n.language === 'fr'

    let msg

    if (isSw) {
      msg = `🍽️ *OMBI JIPYA LA CATERING — JVC Catering* 🍽️

👤 *Jina:* ${form.name}
📱 *Simu:* ${form.phone}
🎊 *Tukio:* ${selEv}
👥 *Wageni:* ${form.guests}
📅 *Tarehe:* ${d}
📍 *Mahali:* ${form.location}
📝 *Maelezo:* ${form.notes || 'Hakuna'}

Tafadhali tuma bei na upatikanaji.`
    } else if (isFr) {
      msg = `🍽️ *NOUVELLE DEMANDE — JVC Catering* 🍽️

👤 *Nom:* ${form.name}
📱 *Téléphone:* ${form.phone}
🎊 *Événement:* ${selEv}
👥 *Invités:* ${form.guests}
📅 *Date:* ${d}
📍 *Lieu:* ${form.location}
📝 *Notes:* ${form.notes || 'Aucune'}

Merci de partager les tarifs et disponibilités.`
    } else {
      msg = `🍽️ *NEW CATERING INQUIRY — JVC Catering* 🍽️

👤 *Name:* ${form.name}
📱 *Phone:* ${form.phone}
🎊 *Event:* ${selEv}
👥 *Guests:* ${form.guests}
📅 *Date:* ${d}
📍 *Location:* ${form.location}
📝 *Notes:* ${form.notes || 'None'}

Please share pricing and availability.`
    }

    setTimeout(() => {
      window.open(
        `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`,
        '_blank'
      )

      setSubmitting(false)
      setShowModal(true)

      setForm({
        name: '',
        phone: '',
        date: '',
        location: '',
        guests: 50,
        notes: '',
      })

      setSelEv('')
      setStep(1)
    }, 850)
  }

  const today = new Date().toISOString().split('T')[0]

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
              boxShadow: '0 6px 20px rgba(201,122,42,0.35)',
            }
          : {
              background: '#F4EDE0',
              color: '#71717A',
              border: '2px solid #E4E4E7',
            }
      }
    >
      {step > n ? <Check size={14} /> : n}
    </div>
  )

  const StepLine = ({ n }) => (
    <div
      className="relative h-[2px] flex-1 overflow-hidden rounded-full"
      style={{ background: '#E4E4E7' }}
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
        className="section-pad overflow-hidden bg-[#FAF9F6]"
      >
        <div className="container-xl">
          <div
            className="
              grid
              grid-cols-1
              items-start
              gap-12
              md:gap-14
              lg:grid-cols-2
              lg:gap-16
              xl:gap-24
            "
          >
            {/* LEFT SIDE */}
            <RevealEl dir="left">
              <div className="eyebrow mb-4">
                {t('contact.eyebrow')}
              </div>

              {/* Heading */}
              <h2
                className="
                  mb-5
                  font-serif
                  text-[2.8rem]
                  font-semibold
                  leading-[0.95]
                  tracking-[-0.02em]
                  text-[#0D0D0D]
                  sm:text-[3.4rem]
                  md:text-[4.2rem]
                  lg:text-[4.8rem]
                "
                style={{
                  fontFamily: '"Playfair Display", serif',
                }}
              >
                <span>{t('contact.heading1')}</span>{' '}
                <span
                  className="italic text-[#C97A2A]"
                  style={{
                    fontFamily:
                      '"Playfair Display", serif',
                  }}
                >
                  {t('contact.heading2')}
                </span>
              </h2>

              <p
                className="
                  mb-10
                  max-w-xl
                  text-sm
                  leading-relaxed
                  text-zinc-500
                  sm:text-base
                "
              >
                {t('contact.sub')}
              </p>

              {/* Contact Items */}
              <div className="mb-10 flex flex-col gap-5">
                {[
                  {
                    icon: MessageCircle,
                    label: t('contact.wa'),
                    val: '+255 767 602 509',
                    color: '#C97A2A',
                    href: `https://wa.me/${WA}`,
                  },
                  {
                    icon: Phone,
                    label: t('contact.phone_label'),
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
                    label: t('contact.instagram'),
                    val: '@jvc.catering._tz',
                    color: '#1B6B3A',
                    href: 'https://instagram.com/jvc.catering._tz',
                  },
                  {
                    icon: MapPin,
                    label: t('contact.address_label'),
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
                          flex
                          h-12
                          w-12
                          flex-shrink-0
                          items-center
                          justify-center
                          rounded-2xl
                        "
                        style={{
                          background: `${color}18`,
                          color,
                        }}
                      >
                        <Icon size={18} />
                      </div>

                      <div className="min-w-0">
                        <strong
                          className="
                            block
                            break-words
                            text-[0.82rem]
                            font-semibold
                            text-[#0D0D0D]
                          "
                        >
                          {label}
                        </strong>

                        {href ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="
                              break-words
                              text-sm
                              text-zinc-500
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

              {/* Social Icons */}
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
                ].map(({ href, icon: Icon }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-zinc-200
                      bg-white
                      text-zinc-500
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#C97A2A]
                      hover:bg-[#C97A2A]
                      hover:text-white
                    "
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </RevealEl>

            {/* RIGHT SIDE */}
            <RevealEl dir="right" delay={100}>
              <div
                className="
                  rounded-[28px]
                  border
                  border-zinc-200
                  bg-white
                  p-5
                  shadow-[0_4px_30px_rgba(0,0,0,0.06)]
                  sm:p-7
                  md:p-8
                  lg:p-9
                "
              >
                {/* Steps */}
                <div className="mb-2 flex items-center gap-0">
                  <StepDot n={1} />
                  <StepLine n={1} />
                  <StepDot n={2} />
                  <StepLine n={2} />
                  <StepDot n={3} />
                </div>

                <div className="mb-7 flex justify-between">
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
                      className="
                        mb-1
                        font-serif
                        text-2xl
                        font-semibold
                        text-[#0D0D0D]
                      "
                      style={{
                        fontFamily:
                          '"Playfair Display", serif',
                      }}
                    >
                      {t('contact.step1_title')}
                    </h3>

                    <p className="mb-6 text-sm text-zinc-400">
                      {t('contact.step1_sub')}
                    </p>

                    <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                      {EVENT_TYPES.map(({ icon, key }) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() =>
                            setSelEv(
                              t(`contact.${key}`)
                            )
                          }
                          className="
                            flex
                            min-h-[120px]
                            flex-col
                            items-center
                            justify-center
                            gap-2
                            rounded-2xl
                            border
                            p-4
                            text-center
                            transition-all
                            duration-300
                          "
                          style={
                            selEv ===
                            t(`contact.${key}`)
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

                          <span
                            className="
                              text-[0.75rem]
                              font-semibold
                              text-[#0D0D0D]
                            "
                          >
                            {t(`contact.${key}`)}
                          </span>
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={goNext}
                      className="
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        py-4
                        text-sm
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-white
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                      "
                      style={{
                        background: '#C97A2A',
                        boxShadow:
                          '0 4px 18px rgba(201,122,42,0.3)',
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
                      className="
                        mb-1
                        font-serif
                        text-2xl
                        font-semibold
                        text-[#0D0D0D]
                      "
                    >
                      {t('contact.step2_title')}
                    </h3>

                    <p className="mb-6 text-sm text-zinc-400">
                      {t('contact.step2_sub')}
                    </p>

                    <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className={labelCls}>
                          {t('contact.name')}
                        </label>

                        <input
                          className={inputCls}
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
                        <label className={labelCls}>
                          {t('contact.phone')}
                        </label>

                        <input
                          type="tel"
                          className={inputCls}
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

                    <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className={labelCls}>
                          {t('contact.date')}
                        </label>

                        <input
                          type="date"
                          min={today}
                          className={inputCls}
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
                        <label className={labelCls}>
                          {t('contact.location')}
                        </label>

                        <input
                          className={inputCls}
                          value={form.location}
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

                    {/* Guests */}
                    <div className="mb-6">
                      <div
                        className="
                          text-center
                          font-serif
                          text-4xl
                          font-semibold
                          leading-none
                          text-[#C97A2A]
                        "
                      >
                        {form.guests}
                      </div>

                      <div
                        className="
                          mb-3
                          text-center
                          text-[0.62rem]
                          uppercase
                          tracking-[0.2em]
                          text-zinc-400
                        "
                      >
                        {t('contact.guests')}
                      </div>

                      <input
                        type="range"
                        className="slider"
                        min={10}
                        max={1000}
                        step={5}
                        value={form.guests}
                        style={{
                          '--pct': `${guestPct}%`,
                        }}
                        onChange={e =>
                          handleField(
                            'guests',
                            Number(e.target.value)
                          )
                        }
                      />

                      <div className="mt-1 flex justify-between text-[0.68rem] text-zinc-400">
                        <span>10</span>
                        <span>1,000+</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="
                          flex
                          items-center
                          gap-2
                          rounded-xl
                          border
                          border-zinc-200
                          px-5
                          py-3.5
                          text-sm
                          font-medium
                          text-zinc-500
                          transition-all
                          hover:border-zinc-400
                        "
                      >
                        <ArrowLeft size={15} />
                        {t('contact.back')}
                      </button>

                      <button
                        type="button"
                        onClick={goNext}
                        className="
                          flex-1
                          rounded-xl
                          py-3.5
                          text-sm
                          font-bold
                          uppercase
                          tracking-[0.15em]
                          text-white
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                        "
                        style={{
                          background: '#C97A2A',
                          boxShadow:
                            '0 4px 18px rgba(201,122,42,0.3)',
                        }}
                      >
                        {t('contact.continue')}
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <div>
                    <h3
                      className="
                        mb-1
                        font-serif
                        text-2xl
                        font-semibold
                        text-[#0D0D0D]
                      "
                    >
                      {t('contact.step3_title')}
                    </h3>

                    <p className="mb-5 text-sm text-zinc-400">
                      {t('contact.step3_sub')}
                    </p>

                    <div className="mb-5">
                      <label className={labelCls}>
                        {t('contact.notes')}
                      </label>

                      <textarea
                        className={`${inputCls} h-24 resize-none`}
                        value={form.notes}
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

                    {/* Summary */}
                    <div className="mb-5 rounded-2xl bg-[#FAF9F6] p-5">
                      <div
                        className="
                          mb-3
                          text-[0.62rem]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-zinc-400
                        "
                      >
                        {t('contact.summary')}
                      </div>

                      {[
                        ['Event', selEv],
                        ['Name', form.name],
                        ['Phone', form.phone],
                        [
                          'Date',
                          form.date
                            ? new Date(
                                form.date
                              ).toLocaleDateString(
                                'en-GB',
                                {
                                  day: 'numeric',
                                  month: 'short',
                                  year: 'numeric',
                                }
                              )
                            : '',
                        ],
                        ['Location', form.location],
                        ['Guests', `${form.guests}`],
                      ].map(([k, v]) =>
                        v ? (
                          <div
                            key={k}
                            className="
                              mb-2
                              flex
                              gap-3
                              text-sm
                            "
                          >
                            <span className="min-w-[72px] text-zinc-400">
                              {k}
                            </span>

                            <strong className="break-words text-[#0D0D0D]">
                              {v}
                            </strong>
                          </div>
                        ) : null
                      )}
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="
                          flex
                          items-center
                          gap-2
                          rounded-xl
                          border
                          border-zinc-200
                          px-5
                          py-3.5
                          text-sm
                          font-medium
                          text-zinc-500
                          transition-all
                          hover:border-zinc-400
                        "
                      >
                        <ArrowLeft size={15} />
                        {t('contact.back')}
                      </button>

                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={submitting}
                        className="
                          flex
                          flex-1
                          items-center
                          justify-center
                          gap-2
                          rounded-xl
                          py-3.5
                          text-sm
                          font-bold
                          uppercase
                          tracking-[0.15em]
                          text-white
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                          disabled:opacity-70
                        "
                        style={{
                          background:
                            'linear-gradient(135deg,#1B6B3A,#2A9D5C)',
                          boxShadow:
                            '0 4px 18px rgba(27,107,58,0.28)',
                        }}
                      >
                        {submitting ? (
                          '⏳'
                        ) : (
                          <MessageCircle size={16} />
                        )}

                        {submitting
                          ? '...'
                          : t('contact.submit')}
                      </button>
                    </div>

                    <div
                      className="
                        mt-3
                        flex
                        items-center
                        justify-center
                        gap-2
                        text-[0.68rem]
                        text-zinc-400
                      "
                    >
                      <Lock
                        size={11}
                        style={{
                          color: '#4ade80',
                        }}
                      />

                      {t('contact.secure')}
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
            background: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div
            className="
              w-full
              max-w-sm
              rounded-[28px]
              bg-white
              p-8
              text-center
              sm:p-10
            "
          >
            <div
              className="
                mx-auto
                mb-5
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
              "
              style={{
                background:
                  'linear-gradient(135deg,#1B6B3A,#2A9D5C)',
              }}
            >
              <Check size={28} color="#fff" />
            </div>

            <h3
              className="
                mb-3
                font-serif
                text-2xl
                font-semibold
                text-[#0D0D0D]
              "
            >
              {t('contact.modal_h')}
            </h3>

            <p className="mb-7 text-sm leading-relaxed text-zinc-500">
              {t('contact.modal_p')}
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="
                w-full
                rounded-xl
                py-3.5
                text-sm
                font-bold
                uppercase
                tracking-[0.15em]
                text-white
                transition-all
                duration-300
                hover:opacity-90
              "
              style={{
                background: '#C97A2A',
              }}
            >
              {t('contact.modal_btn')}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
