import { useState } from 'react'
import styles from './FAQ.module.css'

const faqs = [
  {
    id: 1,
    question: 'How long can the personalized name be?',
    answer: 'You can engrave up to 12 characters, including letters and spaces. We recommend keeping names between 3–10 characters for the most elegant appearance. Longer names are possible but may require a slight size adjustment to fit the pendant elegantly.',
  },
  {
    id: 2,
    question: 'Will the necklace tarnish over time?',
    answer: 'Our necklaces use a high-quality tarnish-resistant plating process that ensures lasting shine. With proper care — avoiding harsh chemicals, perfumes, and prolonged water exposure — your necklace will stay beautiful for years. We offer sterling silver as it naturally develops a warm patina, which many customers love.',
  },
  {
    id: 3,
    question: 'How long does shipping take?',
    answer: 'Each necklace is handmade to order and typically dispatched within 1–2 business days. Standard tracked shipping takes 2–5 business days within the EU, and 5–10 business days internationally. Express shipping options are available at checkout.',
  },
  {
    id: 4,
    question: 'Can I add gift wrapping?',
    answer: 'Yes! All necklaces come in a premium jewellery presentation box as standard. You can upgrade to our full gift packaging option (ribbon, tissue paper, and a handwritten gift card) for an additional €2.00. Simply check the gift packaging option before adding to your basket.',
  },
  {
    id: 5,
    question: 'Can I return a personalized item?',
    answer: 'Because each necklace is custom-made to your specifications, we are unable to accept returns for change of mind. However, if your item arrives damaged, defective, or with an engraving error, we will replace or refund it at no cost. Please contact us within 7 days of delivery with a photo.',
  },
  {
    id: 6,
    question: 'What materials are used?',
    answer: 'Our necklaces are crafted from a high-quality brass base with one of three finishes: 18K gold plating, rhodium-plated sterling silver, or 18K rose gold plating. All materials are nickel-free and hypoallergenic, making them safe for sensitive skin. The chains are available in 40cm, 45cm, 50cm, and 55cm lengths.',
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-title">
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Got questions?</p>
          <h2 id="faq-title" className={styles.title}>Frequently asked questions</h2>
        </div>
        <div className={styles.list} role="list">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div key={faq.id} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`} role="listitem">
                <button
                  className={styles.question}
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-question-${faq.id}`}
                >
                  <span>{faq.question}</span>
                  <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${faq.id}`}
                  className={`${styles.answer} ${isOpen ? styles.answerOpen : ''}`}
                >
                  <p className={styles.answerText}>{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
