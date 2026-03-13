import styles from './HowItWorks.module.css'

const steps = [
  {
    number: '01',
    title: 'Choose your finish & length',
    description: 'Pick from 18K gold, sterling silver, or rose gold plating. Select the chain length that suits your style — we offer four options.',
  },
  {
    number: '02',
    title: 'Enter your name or word',
    description: 'Type the name, word, or initials you want engraved. Up to 12 characters — keep it personal, keep it you.',
  },
  {
    number: '03',
    title: 'We handcraft your necklace',
    description: 'Our artisans shape and finish your necklace by hand in our studio. Every curve, every letter, every clasp — made with care.',
  },
  {
    number: '04',
    title: 'Receive it ready for gifting',
    description: 'Your necklace arrives in a premium presentation box, beautifully wrapped and ready to gift — or to keep for yourself.',
  },
]

export default function HowItWorks() {
  return (
    <section className={styles.section} aria-labelledby="hiw-title">
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Simple & beautiful</p>
          <h2 id="hiw-title" className={styles.title}>How customization works</h2>
        </div>
        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepLeft}>
                <div className={styles.stepNumber}>{step.number}</div>
                {i < steps.length - 1 && <div className={styles.connector} aria-hidden="true" />}
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.ctaRow}>
          <button className={styles.cta} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Start customizing your necklace ↑
          </button>
        </div>
      </div>
    </section>
  )
}
