import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import MenuSection from './components/MenuSection'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import CTABand from './components/CTABand'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'
import Preloader from './components/Preloader'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Preloader loaded={loaded} />
      <div className={loaded ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}>
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Services />
          <MenuSection />
          <Testimonials />
          <Contact />
          <CTABand />
        </main>
        <Footer />
        <WhatsAppFAB />
      </div>
    </>
  )
}
