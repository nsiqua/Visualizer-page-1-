import styles from './OccasionSection.module.css'

const occasions = [
  { icon: '🎂', title: 'Birthdays', description: 'Make every birthday unforgettable with a necklace that says their name.' },
  { icon: '💍', title: 'Anniversaries', description: 'A lasting symbol of your love — personalized and forever theirs.' },
  { icon: '🌸', title: "Mother's Day", description: "Tell her how much she means with a jewel that carries her children's names." },
  { icon: '💐', title: 'Bridesmaids', description: 'Gift each bridesmaid something truly personal they\'ll treasure forever.' },
  { icon: '✨', title: 'Best Friends', description: 'Celebrate your forever person with a necklace as special as your bond.' },
  { icon: '☀️', title: 'Everyday Wear', description: 'Minimal, elegant, and lightweight — designed to be worn from morning to night.' },
]

export default function OccasionSection() {
  return (
    <section className={styles.section} aria-labelledby="occasions-title">
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Perfect for every moment</p>
          <h2 id="occasions-title" className={styles.title}>A gift for every occasion</h2>
          <p className={styles.subtitle}>
            From milestones to everyday moments — a personalized necklace always says exactly the right thing.
          </p>
        </div>
        <div className={styles.grid}>
          {occasions.map((occ) => (
            <div key={occ.title} className={styles.card}>
              <span className={styles.icon}>{occ.icon}</span>
              <h3 className={styles.cardTitle}>{occ.title}</h3>
              <p className={styles.cardDesc}>{occ.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
