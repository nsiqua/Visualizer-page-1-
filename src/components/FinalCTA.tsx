import styles from './FinalCTA.module.css'

export default function FinalCTA() {
  return (
    <section className={styles.section} aria-labelledby="cta-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.decor} aria-hidden="true">✦</div>
        <p className={styles.eyebrow}>Handmade · Personalized · Loved</p>
        <h2 id="cta-title" className={styles.title}>
          Create a necklace they'll treasure&nbsp;every&nbsp;day
        </h2>
        <p className={styles.subtitle}>
          Personalized, elegant, and handmade just for you. Give the gift that says
          their name — and means the world.
        </p>
        <div className={styles.actions}>
          <button
            className={styles.ctaPrimary}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ✦ &nbsp;Personalize yours now
          </button>
          <a href="#reviews" className={styles.ctaSecondary}>Read 2,847 reviews →</a>
        </div>
        <div className={styles.trust}>
          <span>🔒 Secure checkout</span>
          <span>📦 Free gift packaging</span>
          <span>✓ 30-day guarantee</span>
          <span>🚚 Ships in 1–3 days</span>
        </div>
      </div>
    </section>
  )
}
