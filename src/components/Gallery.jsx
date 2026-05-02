import { useState, useCallback } from 'react'
import './Gallery.css'
import meghaTarun from "../images/megha-tarun.jpeg";
import sunderkand from "../images/sunderkand.jpeg";
import henna from "../images/henna.jpeg";
import haldi from "../images/haldi.jpeg";
import wedding from "../images/celibrity.jpeg";
import saveDate from "../images/5.jpeg";
import couple from "../images/goal.jpeg";

const images = [
  { src: meghaTarun, alt: 'Megha & Tarun', span: 'large' },
  { src: sunderkand, alt: 'Sunderkand', span: '' },
  { src: henna, alt: 'Henna Affairs', span: '' },
  { src: haldi, alt: 'Turmeric Tales - Haldi', span: 'wide' },
  { src: wedding, alt: 'Wedding Invitation', span: '' },
  { src: saveDate, alt: 'Save the Date', span: '' },
  { src: couple, alt: 'The Couple', span: 'wide' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  const close = useCallback(() => setLightbox(null), [])

  const onKey = useCallback(e => {
    if (e.key === 'Escape') close()
  }, [close])

  return (
    <section id="gallery" className="gallery-section">
      <div className="section-overlay light">
        <div className="container">
          <h2 className="section-title fade-in">Our Moments</h2>
          <p className="section-subtitle fade-in">A glimpse into our celebrations</p>
          <div className="divider fade-in"><span /><span className="diamond" /><span /></div>

          <div className="gallery-grid fade-in">
            {images.map((img, i) => (
              <button
                key={i}
                className={`gallery-item${img.span ? ` span-${img.span}` : ''}`}
                onClick={() => setLightbox(img)}
                aria-label={`View ${img.alt}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="gal-overlay"><span>{img.alt}</span></div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={close} onKeyDown={onKey} role="dialog" aria-modal="true">
          <button className="lb-close" onClick={close} aria-label="Close">×</button>
          <img src={lightbox.src} alt={lightbox.alt} onClick={e => e.stopPropagation()} />
        </div>
      )}
    </section>
  )
}
