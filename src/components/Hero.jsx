import './Hero.css'

export default function Hero() {
  const scrollDown = () => {
    document.getElementById('countdown')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content fade-in">
          <div className="hero-bar-top" />
          <p className="hero-welcome">Together with their families</p>
          <h1 className="hero-names">
            <span className="name">Megha</span>
            <span className="amp">&amp;</span>
            <span className="name">Tarun</span>
          </h1>
          <div className="hero-rule">
            <span className="line" /><span className="star">✦</span><span className="line" />
          </div>
          <p className="hero-quote">
            <em>Once in a lifetime,<br />Love gives rise to a Fairytale</em>
          </p>
          <div className="hero-date-box">
            <span>May 10, 2026</span>
          </div>
          <p className="hero-hash">#METAverified</p>
          <div className="hero-bar-bottom" />
        </div>
      </div>
      <button className="scroll-cta" onClick={scrollDown} aria-label="Scroll down">
        <span>Scroll to explore</span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </button>
    </section>
  )
}
