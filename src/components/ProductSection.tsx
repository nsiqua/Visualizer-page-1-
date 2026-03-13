import ProductGallery from './ProductGallery'
import ProductInfo from './ProductInfo'
import styles from './ProductSection.module.css'

export default function ProductSection() {
  return (
    <section className={styles.section} aria-label="Product details">
      <div className={`container ${styles.inner}`}>
        <div className={styles.gallery}>
          <ProductGallery />
        </div>
        <div className={styles.info}>
          <ProductInfo />
        </div>
      </div>
    </section>
  )
}
