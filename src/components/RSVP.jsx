import './RSVP.css'

const families = ['Chhabra Family', 'Madaan Family', 'Batra Family', 'Khanna Family']
const contacts = ['9311958955', '9891739455']

function copyLink() {
  const url = window.location.href
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(showToast)
  } else {
    const ta = document.createElement('textarea')
    ta.value = url
    ta.style.cssText = 'position:fixed;opacity:0;'
    document.body.appendChild(ta)
    ta.select()
    try { document.execCommand('copy'); showToast() } catch (_) {}
    document.body.removeChild(ta)
  }
}

function showToast() {
  const ex = document.querySelector('.rsvp-toast')
  if (ex) ex.remove()
  const t = document.createElement('div')
  t.className = 'rsvp-toast'
  t.textContent = '✓ Link copied!'
  document.body.appendChild(t)
  requestAnimationFrame(() => t.classList.add('show'))
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300) }, 2000)
}

export default function RSVP() {
  const shareWA = () => {
    const text = encodeURIComponent(
      `You're invited to the wedding of Megha & Tarun! 💍\n` +
      `May 10, 2026 | 8 PM\nGovindam Palace, near Tyagi Temple, Hodal\n\n#METAverified\n\n${window.location.href}`
    )
    window.open(`https://wa.me/?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="rsvp" className="rsvp-section">
      <div className="section-overlay medium">
        <div className="container fade-in">
          <h2 className="section-title script-title">Join Us</h2>
          <p className="section-subtitle">We would be honoured by your presence</p>
          <div className="divider"><span /><span className="diamond" /><span /></div>

          <div className="rsvp-card">
            {/* RSVP families */}
            <div className="rsvp-families">
              <p className="rsvp-label">R.S.V.P</p>
              <ul>
                {families.map(f => <li key={f}>{f}</li>)}
              </ul>
            </div>

            <div className="rsvp-divider" />

            {/* Contacts */}
            <div className="rsvp-contacts">
              <p className="rsvp-label">Contacts</p>
              {contacts.map(c => (
                <a key={c} href={`tel:${c}`} className="rsvp-phone">{c}</a>
              ))}
            </div>

            <div className="rsvp-divider" />

            {/* Actions */}
            <div className="rsvp-actions">
              <a
                href="https://maps.google.com/?q=Govindam+Palace+Hodal"
                target="_blank" rel="noopener noreferrer"
                className="rsvp-btn primary"
              >📍 Get Directions</a>
            </div>

            {/* Share */}
            <div className="rsvp-share">
              <p className="share-label">Share this invitation</p>
              <div className="share-btns">
                <button className="share-btn" onClick={shareWA} aria-label="Share on WhatsApp">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </button>
                <button className="share-btn" onClick={copyLink} aria-label="Copy link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
