import styles from './InfoCards.module.css'

const cards = [
  { icon: '⭐', value: '4.9 / 5', label: 'Average Rating', sub: 'Based on 2,847 reviews' },
  { icon: '🤲', value: 'Handmade', label: 'Every Piece', sub: 'Crafted by hand with love' },
  { icon: '✦', value: 'Premium', label: 'Materials', sub: 'Sterling silver, gold & rose plating' },
  { icon: '♡', value: 'Gift-Ready', label: 'Packaging', sub: 'Elegant jewellery box included' },
  { icon: '◈', value: 'Made to Order', label: 'Personalised', sub: 'Your name, your way' },
  { icon: '→', value: '1–3 Days', label: 'Ships Fast', sub: 'Tracked & insured delivery' },
]

export default function InfoCards() {
  return (
    <section className={styles.section} aria-label="Product highlights">
      <div className="container">
        <div className={styles.grid}>
          {cards.map((card) => (
            <div key={card.label} className={styles.card}>
              <span className={styles.icon}>{card.icon}</span>
              <div className={styles.cardContent}>
                <span className={styles.value}>{card.value}</span>
                <span className={styles.label}>{card.label}</span>
                <span className={styles.sub}>{card.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
