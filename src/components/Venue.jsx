import './Venue.css'

const venues = [
  {
    icon: '📍',
    tag: 'Pre-Wedding Functions',
    name: 'Residence Venue',
    address: '2G/28<br/>Near ESI dispensary<br/>NIT-2, FARIDABAD',
    events: ['Sunderkand — May 5', 'Henna Affairs', 'Turmeric Tales — May 9'],
    map: 'https://maps.google.com/?q=NIT+2+Faridabad+ESI+dispensary',
  },
  {
    icon: '🏛️',
    tag: 'Wedding Ceremony',
    name: 'Govindam Palace',
    address: 'near Tyagi Temple<br/>Hodal',
    events: ['Wedding — May 10, 8 PM'],
    map: 'https://maps.google.com/?q=Govindam+Palace+Hodal',
    featured: true,
  },
]

export default function Venue() {
  return (
    <section id="venue" className="venue-section">
      <div className="section-overlay medium">
        <div className="container fade-in">
          <h2 className="section-title">Venue</h2>
          <p className="section-subtitle">Where the magic happens</p>
          <div className="divider"><span /><span className="diamond" /><span /></div>
          <div className="venue-cards">
            {venues.map((v, i) => (
              <div key={i} className={`venue-card${v.featured ? ' featured' : ''}`}>
                {v.featured && <div className="venue-badge">Grand Venue</div>}
                <div className="venue-icon">{v.icon}</div>
                <span className="venue-tag">{v.tag}</span>
                <h3 className="venue-name">{v.name}</h3>
                <p className="venue-addr" dangerouslySetInnerHTML={{ __html: v.address }} />
                <ul className="venue-events">
                  {v.events.map((ev, j) => <li key={j}>{ev}</li>)}
                </ul>
                <a href={v.map} target="_blank" rel="noopener noreferrer" className="venue-btn">
                  View on Map →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
