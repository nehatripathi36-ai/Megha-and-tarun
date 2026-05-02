import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#countdown', label: 'Save the Date' },
  { href: '#events', label: 'Events' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#venue', label: 'Venue' },
  { href: '#family', label: 'Blessings' },
  { href: '#rsvp', label: 'RSVP' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    if (!('IntersectionObserver' in window)) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
    }, { threshold: 0.3 })
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const close = e => { if (!e.target.closest('.navbar')) setOpen(false) }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [])

  const handleLink = e => {
    e.preventDefault()
    const id = e.currentTarget.getAttribute('href').slice(1)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className="navbar">
      <button
        className={`nav-toggle${open ? ' active' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span /><span /><span />
      </button>
      <ul className={`nav-menu${open ? ' active' : ''}`} role="menu">
        {links.map(l => (
          <li key={l.href} role="none">
            <a
              href={l.href}
              role="menuitem"
              className={active === l.href.slice(1) ? 'active' : ''}
              onClick={handleLink}
            >{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
