import { useState, useEffect } from 'react'
import './Countdown.css'

const WEDDING = new Date('2026-05-10T20:00:00+05:30')

function pad(n) { return String(n).padStart(2, '0') }

function getTimeLeft() {
  const diff = WEDDING - Date.now()
  if (diff <= 0) return { days: '00', hours: '00', minutes: '00', seconds: '00' }
  return {
    days: pad(Math.floor(diff / 864e5)),
    hours: pad(Math.floor((diff % 864e5) / 36e5)),
    minutes: pad(Math.floor((diff % 36e5) / 6e4)),
    seconds: pad(Math.floor((diff % 6e4) / 1000)),
  }
}

function Unit({ value, label }) {
  const [tick, setTick] = useState(false)
  useEffect(() => { setTick(true); const t = setTimeout(() => setTick(false), 280); return () => clearTimeout(t) }, [value])
  return (
    <div className="time-unit">
      <span className={`time-val${tick ? ' tick' : ''}`}>{value}</span>
      <span className="time-label">{label}</span>
    </div>
  )
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft)
  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="countdown" className="countdown-section">
      <div className="cd-bg" aria-hidden="true" />
      <div className="cd-overlay">
        <div className="container fade-in">
          <h2 className="cd-title script">We Said Yes</h2>
          <p className="cd-sub">MAY ❤ 2026</p>
          <div className="cd-timer">
            <Unit value={time.days} label="Days" />
            <span className="sep">:</span>
            <Unit value={time.hours} label="Hours" />
            <span className="sep">:</span>
            <Unit value={time.minutes} label="Mins" />
            <span className="sep">:</span>
            <Unit value={time.seconds} label="Secs" />
          </div>
          <p className="cd-note">Until we say <em>"I do"</em></p>
        </div>
      </div>
    </section>
  )
}
