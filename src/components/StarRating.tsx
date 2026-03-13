import styles from './StarRating.module.css'

interface StarRatingProps {
  rating: number
  size?: 'sm' | 'md'
}

export default function StarRating({ rating, size = 'sm' }: StarRatingProps) {
  const stars = [1, 2, 3, 4, 5]
  return (
    <div className={`${styles.stars} ${styles[size]}`} aria-label={`Rating: ${rating} out of 5`} role="img">
      {stars.map((star) => {
        const filled = rating >= star
        const partial = !filled && rating > star - 1
        const pct = partial ? Math.round((rating - (star - 1)) * 100) : 0
        return (
          <span key={star} className={styles.starWrapper}>
            <svg
              viewBox="0 0 24 24"
              className={styles.starBg}
              aria-hidden="true"
              fill="none"
              stroke="none"
            >
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                fill="#e8ddd0"
              />
            </svg>
            <svg
              viewBox="0 0 24 24"
              className={styles.starFg}
              aria-hidden="true"
              style={{ clipPath: filled ? 'none' : `inset(0 ${100 - pct}% 0 0)` }}
            >
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                fill="#c9a96e"
              />
            </svg>
          </span>
        )
      })}
    </div>
  )
}
