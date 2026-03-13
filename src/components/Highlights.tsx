import styles from './Highlights.module.css'

const highlights = [
  {
    icon: '✦',
    title: 'Personalized with your name',
    description: 'Every necklace is engraved with the name or word of your choice — truly one of a kind.',
  },
  {
    icon: '◎',
    title: 'Gold, Silver & Rose Gold',
    description: 'Choose from three stunning finishes, each crafted for lasting beauty and elegance.',
  },
  {
    icon: '◈',
    title: 'Tarnish-resistant finish',
    description: 'Our durable plating withstands daily wear, water, and time — so it stays beautiful for years.',
  },
  {
    icon: '♡',
    title: 'Meaningful gift for any occasion',
    description: 'From birthdays to anniversaries, a name necklace is the gift they\'ll wear close to their heart.',
  },
  {
    icon: '◇',
    title: 'Lightweight and comfortable',
    description: 'Delicately crafted to be worn all day. Barely there, yet impossible to overlook.',
  },
  {
    icon: '⊹',
    title: 'Handmade with care',
    description: 'Each piece is shaped and finished by hand in our studio — never mass-produced.',
  },
]

export default function Highlights() {
  return (
    <section className={styles.section} aria-labelledby="highlights-title">
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Why our customers love it</p>
          <h2 id="highlights-title" className={styles.title}>
            A necklace as unique as she is
          </h2>
          <p className={styles.subtitle}>
            Crafted by hand, made with intention — every detail is designed to delight.
          </p>
        </div>
        <div className={styles.grid}>
          {highlights.map((h) => (
            <div key={h.title} className={styles.card}>
              <div className={styles.iconWrap}>
                <span className={styles.icon}>{h.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{h.title}</h3>
              <p className={styles.cardDesc}>{h.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
