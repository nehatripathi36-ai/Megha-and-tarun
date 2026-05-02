import './Family.css'

export default function Family() {
  return (
    <section id="family" className="family-section">
      <div className="section-overlay light">
        <div className="container fade-in">
          <h2 className="section-title script-title">With Love &amp; Blessings</h2>
          <div className="divider"><span /><span className="diamond" /><span /></div>

          <div className="families-row">
            {/* Bride's Family */}
            <div className="fam-card">
              <div className="fam-badge">Bride&apos;s Family</div>
              <div className="fam-icon">❤️</div>
              <p className="fam-parents">Smt. Pushpa Chhabra<br />&amp; Lt. Shri. Satish Kumar Chhabra</p>
              <div className="fam-rule" />
              <p className="fam-name script">Megha</p>
              <p className="fam-role">The Bride</p>
            </div>

            <div className="fam-heart" aria-hidden="true">💕</div>

            {/* Groom's Family */}
            <div className="fam-card">
              <div className="fam-badge">Groom&apos;s Family</div>
              <div className="fam-icon">❤️</div>
              <p className="fam-parents">Smt. Meenu Dudeja<br />&amp; Shri. Nand Lal Dudeja</p>
              <div className="fam-rule" />
              <p className="fam-name script">Tarun</p>
              <p className="fam-role">The Groom</p>
            </div>
          </div>

          <div className="blessing-msg">
            <p>Your presence and blessings are the greatest gift we could ever receive.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
