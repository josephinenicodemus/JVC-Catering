# JVC Catering — React Application

A premium, production-ready React application for JVC Catering by Veronica Nguma. Built with modern best practices, multilingual support, and a luxury design aesthetic.

## Tech Stack

- **React 18** — Functional components, hooks
- **Vite** — Fast dev server & build tool
- **Tailwind CSS** — Utility-first styling
- **react-i18next** — Multilingual (English, French, Kiswahili)
- **Lucide React** — Icon library

## Features

- ✅ **Multilingual** — EN / FR / SW language switcher
- ✅ **WhatsApp Order Form** — 3-step form that generates a formatted WhatsApp message
- ✅ **Menu PDF Download** — Branded printable/downloadable menu opens in new window
- ✅ **Scroll animations** — IntersectionObserver-based reveal animations
- ✅ **Preloader** — Elegant branded loading screen
- ✅ **Mobile responsive** — Mobile-first, tablet & desktop optimized
- ✅ **Gallery section** with lightbox
- ✅ **Sticky navbar** with scroll behaviour
- ✅ **WhatsApp FAB** — Floating action button with pulse animation
- ✅ **Scroll to top** button

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+

### Installation

```bash
# Clone or unzip the project
cd jvc-catering

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Responsive nav + language switcher
│   ├── Hero.jsx            # Full-screen hero section
│   ├── Marquee.jsx         # Animated text marquee band
│   ├── About.jsx           # Founder story + values grid
│   ├── Services.jsx        # Wedding / Corporate / Private cards
│   ├── MenuSection.jsx     # Tabbed menu + PDF download
│   ├── Testimonials.jsx    # Client reviews
│   ├── Contact.jsx         # 3-step WhatsApp quote form
│   ├── CTABand.jsx         # CTA section
│   ├── Footer.jsx          # Full footer
│   ├── WhatsAppFAB.jsx     # Floating WhatsApp button
│   └── Preloader.jsx       # Loading screen
├── hooks/
│   └── useReveal.js        # Scroll reveal IntersectionObserver hook
├── i18n/
│   ├── index.js            # i18next configuration
│   ├── en.json             # English translations
│   ├── fr.json             # French translations
│   └── sw.json             # Kiswahili translations
├── App.jsx
├── main.jsx
└── index.css               # Tailwind + global styles
```

## Adding a New Language

1. Create `src/i18n/xx.json` with translations (copy `en.json` as template)
2. In `src/i18n/index.js`, import and add to `resources`:
   ```js
   import xx from './xx.json'
   // ...
   resources: { en: ..., fr: ..., sw: ..., xx: { translation: xx } }
   ```
3. In `src/components/Navbar.jsx`, add to `LANGS` array:
   ```js
   { code: 'xx', label: 'XX', full: 'Language Name' }
   ```

## Business Contact

- **WhatsApp:** +255 767 620 509
- **Email:** veronica.wlff@gmail.com
- **Instagram:** @jvc.catering._tz
- **Address:** Sinza Mori, Lagana Street, Dar es Salaam, Tanzania

## Customization

- **Colors** — Edit `tailwind.config.js` or CSS variables in `index.css`
- **Fonts** — Update Google Fonts link in `index.html` and font families in `tailwind.config.js`
- **WhatsApp Number** — Search for `255767620509` and replace with your number
- **Images** — Replace Unsplash URLs with your own images in each component
 
