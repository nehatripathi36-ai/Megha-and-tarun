import './Events.css'
import haldiImg from "../images/haldi.jpeg";
import sunderkandImg from "../images/sunderkand.jpeg";
import hennaImg from "../images/henna.jpeg";
import weddingImg from "../images/shadi.jpeg";

function EventCard({ theme, icon, title, titleClass, subtitleHindi, subtitleText, img, imgAlt, children }) {
  return (
    <article className={`event-card ${theme}`}>
      <div className="ev-accent" />
      <div className="ev-header">
        <span className="ev-icon" aria-hidden="true">{icon}</span>
        <h3 className={`ev-title ${titleClass || ''}`}>{title}</h3>
        {subtitleHindi && <p className="ev-hindi">{subtitleHindi}</p>}
        {subtitleText && <p className="ev-sub-text">{subtitleText}</p>}
      </div>
      {img && (
        <div className="ev-img-wrap">
          <img src={img} alt={imgAlt || title} loading="lazy" />
          <div className="ev-img-glow" />
        </div>
      )}
      <div className="ev-body">{children}</div>
    </article>
  )
}

function Location({ address }) {
  return (
    <div className="ev-location">
      <span className="loc-pin">📍</span>
      <div className="loc-text" dangerouslySetInnerHTML={{ __html: address }} />
    </div>
  )
}

function DateTime({ day, month, weekday, time }) {
  return (
    <div className="ev-datetime">
      {day && (
        <div className="ev-date">
          <span className="day-num">{day}</span>
          <div className="day-info">
            <span className="day-month">{month}</span>
            <span className="day-week">{weekday}</span>
          </div>
        </div>
      )}
      {time && (
        <div className="ev-time">
          <span className="time-main">{time}</span>
          <span className="time-sfx">ONWARDS</span>
        </div>
      )}
    </div>
  )
}

export default function Events() {
  return (
    <section id="events" className="events-section">
      <div className="section-overlay medium">
        <div className="container">
          <h2 className="section-title fade-in">Wedding Celebrations</h2>
          <p className="section-subtitle fade-in">Join us through our journey of love</p>
          <div className="divider fade-in"><span /><span className="diamond" /><span /></div>

          {/* ---- SUNDERKAND ---- */}
          <div className="fade-in">
            <EventCard
              theme="sunderkand"
              icon="🕐"
              title="The Holy Prelude"
              subtitleHindi="। शुभ लाभ ।"
              img={sunderkandImg }
              imgAlt="Sunderkand Ceremony"
            >
              <p className="ev-desc">WRAPPED IN PRAYERS,<br />PEACE &amp; SACRED VIBERATIONS</p>
              <p className="ev-invite">YOU ARE INVITED TO THE</p>
              <h4 className="ev-name">{'{SUNDERKAND}'}</h4>
              <DateTime day="5" month="MAY, 2026" weekday="TUESDAY" time="11 AM" />
              <Location address="<strong>2G/28</strong><br/>Near ESI dispensary<br/>NIT-2, FARIDABAD" />
            </EventCard>
          </div>

          {/* ---- HENNA AFFAIRS ---- */}
          <div className="fade-in">
            <EventCard
              theme="henna"
              icon="🌸"
              title="Henna Affairs"
              subtitleText="MEHENDI CEREMONY"
              img={hennaImg}
              imgAlt="Henna Affairs - Mehendi Ceremony"
            >
              <p className="ev-desc">We joyfully welcome you to the</p>
              <h4 className="ev-name script">Henna Affairs</h4>
              <p className="ev-sub-text">MEHENDI CEREMONY</p>
              <p className="ev-of">of</p>
              <p className="ev-bride">M E G H A</p>
              <Location address="<strong>2G/28</strong><br/>Near ESI dispensary<br/>NIT-2, FARIDABAD" />
            </EventCard>
          </div>

          {/* ---- HALDI / TURMERIC TALES ---- */}
          <div className="fade-in">

            <EventCard
              theme="haldi"
              icon="🌼"
              title="Turmeric Tales"
              subtitleText="{HALDI}"
              img={haldiImg}
              imgAlt="Turmeric Tales - Haldi Ceremony"
            >

              <p className="ev-desc">SOAKING IN SUNSHINE,<br />LOVE, &amp; A LITTLE BIT OF HALDI MAGIC</p>
              <p className="ev-invite">YOU ARE INVITED TO THE</p>
              <h4 className="ev-name script haldi-name">Turmeric Tales</h4>
              <DateTime day="9" month="MAY, 2026" weekday="SATURDAY" time="11 AM" />
              <Location address="<strong>2G/28</strong><br/>Near ESI dispensary<br/>NIT-2, FARIDABAD" />
            </EventCard>
          </div>

          {/* ---- GRAND WEDDING ---- */}
          <div className="fade-in">
            <EventCard
              theme="wedding"
              icon="💍"
              title="The Grand Wedding"
              img={weddingImg}
              imgAlt="Wedding Invitation"
            >
              <p className="ev-quote-big"><em>Once in a lifetime<br />Love gives rise to a Fairytale</em></p>
              <p className="ev-parents">Smt. Pushpa Chhabra &amp; Lt. Shri. Satish Kumar Chhabra</p>
              <p className="ev-solicit">Solicit your gracious presence &amp; blessing on the auspicious occasion of the wedding of their beloved daughter</p>
              <p className="ev-bride wedding-bride">Megha</p>
              <p className="ev-weds">weds</p>
              <p className="ev-groom">Tarun</p>
              <p className="ev-groom-parents">( S/o Smt. Meenu Dudeja &amp; Shri. Nand Lal Dudeja )</p>
              <p className="ev-solicit">Cordially invite you to join the occasion of their joyous commitment on</p>
              <div className="ev-datetime wedding-dt">
                <div className="ev-date">
                  <span className="day-num">10</span>
                  <div className="day-info">
                    <span className="day-month">MAY, 2026</span>
                    <span className="day-week">SUNDAY</span>
                  </div>
                </div>
                <div className="ev-time">
                  <span className="time-main">8 PM</span>
                </div>
              </div>
              <Location address="<strong>Govindam Palace</strong><br/>near Tyagi Temple<br/>Hodal" />
            </EventCard>
          </div>

        </div>
      </div>
    </section>
  )
}
