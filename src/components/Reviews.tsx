import StarRating from './StarRating'
import styles from './Reviews.module.css'

const reviews = [
  {
    id: 1,
    name: 'Sophie M.',
    location: 'London, UK',
    rating: 5,
    date: 'February 2026',
    title: 'Absolutely gorgeous — she cried!',
    text: 'I bought this for my mum\'s birthday with her name in rose gold. It arrived so beautifully packaged and the quality blew me away. She actually teared up when she opened it. Will definitely be ordering again.',
    verified: true,
  },
  {
    id: 2,
    name: 'Valentina R.',
    location: 'Barcelona, Spain',
    rating: 5,
    date: 'January 2026',
    title: 'Better than I expected',
    text: 'I ordered the gold finish and it\'s stunning in person. The chain is delicate but strong, super lightweight, and the name looks so elegant. Arrived in 2 days. Packaging is premium. 10/10.',
    verified: true,
  },
  {
    id: 3,
    name: 'Amelia K.',
    location: 'Dublin, Ireland',
    rating: 5,
    date: 'March 2026',
    title: 'Perfect bridesmaid gift',
    text: 'Ordered 6 of these for my bridesmaids — each with their own name in silver. They each loved it so much. Great communication from the shop, fast shipping, and the quality was consistent across all 6.',
    verified: true,
  },
  {
    id: 4,
    name: 'Julia T.',
    location: 'Amsterdam, NL',
    rating: 5,
    date: 'December 2025',
    title: 'Wear it every single day',
    text: 'I\'ve been wearing mine for three months straight — in the shower, gym, everything — and it still looks brand new. The tarnish-resistant finish is real. So happy I found this shop.',
    verified: true,
  },
  {
    id: 5,
    name: 'Isabella F.',
    location: 'Milan, Italy',
    rating: 5,
    date: 'November 2025',
    title: 'Gift-ready and stunning',
    text: 'I gifted this to my best friend for her 30th birthday. The packaging alone made her gasp — it\'s so elegant. The necklace itself is delicate, beautiful, and the name sits just right. Highly recommend.',
    verified: true,
  },
  {
    id: 6,
    name: 'Freya L.',
    location: 'Stockholm, Sweden',
    rating: 4,
    date: 'October 2025',
    title: 'Lovely quality, fast delivery',
    text: 'Really happy with my purchase. The gold plating is beautiful and the chain is a great length. Shipping was quicker than expected. Would love more font options in the future, but overall very pleased.',
    verified: true,
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className={styles.section} aria-labelledby="reviews-title">
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Customer love</p>
          <h2 id="reviews-title" className={styles.title}>What our customers say</h2>
          <div className={styles.summary}>
            <StarRating rating={4.9} size="md" />
            <span className={styles.summaryScore}>4.9 out of 5 · 2,847 verified reviews</span>
          </div>
        </div>
        <div className={styles.grid}>
          {reviews.map((review) => (
            <article key={review.id} className={styles.card}>
              <header className={styles.cardHeader}>
                <div>
                  <div className={styles.reviewer}>
                    <span className={styles.avatar}>{review.name[0]}</span>
                    <div>
                      <span className={styles.reviewerName}>{review.name}</span>
                      <span className={styles.reviewerLocation}>{review.location}</span>
                    </div>
                  </div>
                </div>
                <span className={styles.date}>{review.date}</span>
              </header>
              <div className={styles.cardRating}>
                <StarRating rating={review.rating} />
                {review.verified && (
                  <span className={styles.verified}>✓ Verified purchase</span>
                )}
              </div>
              <h3 className={styles.reviewTitle}>{review.title}</h3>
              <p className={styles.reviewText}>{review.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
