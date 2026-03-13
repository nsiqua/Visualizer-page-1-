import styles from './Footer.module.css'

const footerLinks = {
  Shop: ['All Necklaces', 'Gold Finish', 'Silver Finish', 'Rose Gold Finish', 'Gift Sets'],
  Help: ['FAQ', 'Shipping & Delivery', 'Returns Policy', 'Size Guide', 'Care Guide'],
  Company: ['About Auris Jewels', 'Sustainability', 'Reviews', 'Press', 'Contact Us'],
}

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <a href="#" className={styles.logo} aria-label="Auris Jewels — Home">
            <span className={styles.logoIcon}>✦</span>
            <span className={styles.logoText}>Auris <em>Jewels</em></span>
          </a>
          <p className={styles.tagline}>
            Handcrafted personalized jewelry for the people you love most.
            Each piece tells a story — yours.
          </p>
          <div className={styles.socials}>
            {['Instagram', 'Pinterest', 'TikTok'].map((s) => (
              <a key={s} href="#" className={styles.social} aria-label={s}>{s[0]}</a>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading} className={styles.column}>
            <h3 className={styles.columnTitle}>{heading}</h3>
            <ul className={styles.linkList}>
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className={styles.link}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>© 2026 Auris Jewels. All rights reserved.</p>
            <div className={styles.legal}>
              <a href="#" className={styles.legalLink}>Privacy Policy</a>
              <a href="#" className={styles.legalLink}>Terms of Service</a>
              <a href="#" className={styles.legalLink}>Cookie Settings</a>
            </div>
            <div className={styles.payments} aria-label="Accepted payment methods">
              {['Visa', 'MC', 'PayPal', 'Apple Pay'].map((p) => (
                <span key={p} className={styles.payment}>{p}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
