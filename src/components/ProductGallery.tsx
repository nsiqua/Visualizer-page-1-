import { useState, useRef, useEffect } from 'react'
import styles from './ProductGallery.module.css'

interface GalleryItem {
  id: number
  type: 'image' | 'video'
  label: string
  src: string
}

const galleryItems: GalleryItem[] = [
  { id: 1, type: 'image', label: 'Gold Finish — Name Necklace',    src: '/pic1.png' },
  { id: 2, type: 'image', label: 'Worn Look — Lifestyle Shot',     src: '/pic2.png' },
  { id: 3, type: 'image', label: 'Silver Finish — Name Necklace',  src: '/pic3.png' },
  { id: 4, type: 'image', label: 'Rose Gold Finish',               src: '/pic4.png' },
  { id: 5, type: 'image', label: 'Gift Box — Ready to Ship',       src: '/pic5.png' },
  { id: 6, type: 'image', label: 'Clasp Detail — Premium Quality', src: '/pic6.png' },
  { id: 7, type: 'video', label: 'Watch — Crafting Process',       src: '/vid1.mp4' },
]

export default function ProductGallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const active = galleryItems[activeIndex]

  // Pause video whenever we navigate to a different slide
  useEffect(() => {
    if (active.type !== 'video') {
      videoRef.current?.pause()
    }
  }, [activeIndex, active.type])

  const goTo = (i: number) => setActiveIndex(i)
  const prev = () => goTo((activeIndex - 1 + galleryItems.length) % galleryItems.length)
  const next = () => goTo((activeIndex + 1) % galleryItems.length)

  return (
    <div className={styles.gallery}>
      {/* Badge */}
      <div className={styles.badge}>✦ Bestseller · Handmade</div>

      {/* Main viewer */}
      <div className={styles.mainWrapper} key={activeIndex}>
        <div className={styles.mainImage} role="img" aria-label={active.label}>
          {active.type === 'video' ? (
            <video
              ref={videoRef}
              src={active.src}
              controls
              className={styles.mainVideo}
              aria-label={active.label}
            />
          ) : (
            <img
              src={active.src}
              alt={active.label}
              className={styles.mainImg}
            />
          )}
        </div>

        {/* Arrows */}
        <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Previous image">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Next image">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Dots — hide when video is active so they don't overlap controls */}
        {active.type !== 'video' && (
          <div className={styles.dots} role="tablist" aria-label="Gallery slides">
            {galleryItems.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Go to slide ${i + 1}`}
                className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      <div className={styles.thumbnails} role="list">
        {galleryItems.map((item, i) => (
          <button
            key={item.id}
            role="listitem"
            className={`${styles.thumb} ${i === activeIndex ? styles.thumbActive : ''}`}
            onClick={() => goTo(i)}
            aria-label={item.label}
            aria-pressed={i === activeIndex}
          >
            <div className={styles.thumbInner}>
              {item.type === 'video' ? (
                <>
                  <div className={styles.thumbVideoBg} aria-hidden="true" />
                  <div className={styles.thumbPlayIcon} aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </>
              ) : (
                <img src={item.src} alt={item.label} className={styles.thumbImg} />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
