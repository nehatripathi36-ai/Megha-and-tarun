import { useState, useEffect, useRef } from 'react'
import './App.css'
import coupleImg from './images/couple.jpeg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import Events from './components/Events'
import Gallery from './components/Gallery'
import Venue from './components/Venue'
import Family from './components/Family'
import RSVP from './components/RSVP'
import Footer from './components/Footer'

// Floating petal component
function Petals() {
  const containerRef = useRef(null)
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const count = window.innerWidth < 480 ? 14 : 22
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div')
      p.className = 'petal'
      const size = 7 + Math.random() * 9
      const colors = [
        'radial-gradient(ellipse, #ffb3c1 0%, #ff6b8a 60%, transparent 100%)',
        'radial-gradient(ellipse, #ffd4a8 0%, #ffab6b 60%, transparent 100%)',
        'radial-gradient(ellipse, #ffe0b2 0%, #C9A96E 60%, transparent 100%)',
        'radial-gradient(ellipse, #f8bbd0 0%, #E91E63 60%, transparent 100%)',
      ]
      p.style.cssText = `
        left:${Math.random()*100}%;
        width:${size}px; height:${size}px;
        background:${colors[Math.floor(Math.random()*colors.length)]};
        --dx:${(Math.random()-.5)*200}px;
        --rot:${Math.random()*720-360}deg;
        animation-duration:${9+Math.random()*12}s;
        animation-delay:${Math.random()*18}s;
      `
      container.appendChild(p)
    }
    return () => { if (container) container.innerHTML = '' }
  }, [])
  return <div className="petals-wrap" ref={containerRef} aria-hidden="true" />
}

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1600)
    return () => clearTimeout(t)
  }, [])

  // Scroll-reveal
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in')
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('visible'))
      return
    }
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [loaded])

  return (
    <>
      {/* Preloader */}
      <div className={`preloader${loaded ? ' gone' : ''}`}>
        <div className="preloader-inner">
          <div className="preloader-bar" />
          <p className="preloader-name">Megha &amp; Tarun</p>
          <div className="preloader-ring" />
        </div>
      </div>

      {/* Fixed background - couple image */}
      <div
        className="fixed-bg"
        aria-hidden="true"
        style={{ backgroundImage: `url(${coupleImg})` }}
      />

      {/* Floating petals */}
      <Petals />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <Countdown />
        <Events />
        <Gallery />
        <Venue />
        <Family />
        <RSVP />
        <Footer />
      </main>
    </>
  )
}
