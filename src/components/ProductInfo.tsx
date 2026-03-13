import { useState } from 'react'
import styles from './ProductInfo.module.css'
import StarRating from './StarRating'

const finishOptions = ['18K Gold Plated', 'Sterling Silver', 'Rose Gold Plated']
const lengthOptions = ['40 cm (15.7")', '45 cm (17.7")', '50 cm (19.7")', '55 cm (21.7")']
const fontOptions = ['Classic Script', 'Modern Thin', 'Bold Block', 'Romantic Cursive']

const MAX_NAME_LENGTH = 12

export default function ProductInfo() {
  const [finish, setFinish] = useState(finishOptions[0])
  const [length, setLength] = useState(lengthOptions[1])
  const [font, setFont] = useState(fontOptions[0])
  const [giftWrap, setGiftWrap] = useState(false)
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(1)

  const adjustQty = (delta: number) => setQuantity((q) => Math.max(1, q + delta))

  return (
    <div className={styles.productInfo}>
      {/* Price */}
      <div className={styles.priceRow}>
        <span className={styles.price}>€15.02+</span>
        <span className={styles.priceOriginal}>€30.04</span>
        <span className={styles.saleBadge}>50% off · Limited time</span>
      </div>
      <p className={styles.taxNote}>VAT included · Free shipping on orders over €30</p>

      {/* Title */}
      <h1 className={styles.title}>
        Custom Name Necklace, 18K Gold Plated Personalized Necklace, Handmade Gift for Her, Birthday Gift, Mother's Day Jewelry
      </h1>

      {/* Brand */}
      <a href="#" className={styles.brand}>✦ Auris Jewels</a>

      {/* Rating */}
      <div className={styles.ratingRow}>
        <StarRating rating={4.9} />
        <span className={styles.ratingScore}>4.9</span>
        <a href="#reviews" className={styles.ratingCount}>2,847 reviews</a>
        <span className={styles.divider}>·</span>
        <span className={styles.salesCount}>3,200+ sold</span>
      </div>

      <div className={styles.dividerLine} />

      {/* Selectors */}
      <div className={styles.selectors}>
        {/* Finish */}
        <div className={styles.selectGroup}>
          <label className={styles.label} htmlFor="finish-select">
            Finish
            <span className={styles.selectedValue}>— {finish}</span>
          </label>
          <div className={styles.finishSwatches}>
            {finishOptions.map((f) => (
              <button
                key={f}
                className={`${styles.swatch} ${finish === f ? styles.swatchActive : ''}`}
                style={{
                  background: f.includes('Gold Plated') && !f.includes('Rose')
                    ? 'linear-gradient(135deg, #f0d080, #c9a96e)'
                    : f.includes('Silver')
                    ? 'linear-gradient(135deg, #d8dce4, #9ba4af)'
                    : 'linear-gradient(135deg, #e8c4bc, #c4786a)',
                }}
                onClick={() => setFinish(f)}
                aria-label={f}
                aria-pressed={finish === f}
                title={f}
              />
            ))}
          </div>
          <select
            id="finish-select"
            className={styles.select}
            value={finish}
            onChange={(e) => setFinish(e.target.value)}
          >
            {finishOptions.map((f) => <option key={f} value={f}>{f}</option>)}
          </select>
        </div>

        {/* Length */}
        <div className={styles.selectGroup}>
          <label className={styles.label} htmlFor="length-select">
            Chain Length
            <span className={styles.selectedValue}>— {length}</span>
          </label>
          <select
            id="length-select"
            className={styles.select}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          >
            {lengthOptions.map((l) => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>

        {/* Font Style */}
        <div className={styles.selectGroup}>
          <label className={styles.label} htmlFor="font-select">
            Font Style
            <span className={styles.selectedValue}>— {font}</span>
          </label>
          <select
            id="font-select"
            className={styles.select}
            value={font}
            onChange={(e) => setFont(e.target.value)}
          >
            {fontOptions.map((f) => <option key={f} value={f}>{f}</option>)}
          </select>
        </div>

        {/* Gift packaging */}
        <div className={styles.giftRow}>
          <button
            className={`${styles.giftToggle} ${giftWrap ? styles.giftToggleActive : ''}`}
            onClick={() => setGiftWrap(!giftWrap)}
            aria-pressed={giftWrap}
          >
            <div className={styles.giftCheckbox}>
              {giftWrap && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
            <div>
              <span className={styles.giftLabel}>Add gift packaging +€2.00</span>
              <span className={styles.giftSub}>Premium jewellery box with ribbon</span>
            </div>
          </button>
        </div>
      </div>

      <div className={styles.dividerLine} />

      {/* Personalization */}
      <div className={styles.personalization}>
        <h2 className={styles.sectionHeading}>✦ Create your item</h2>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="name-input">
            Name or word to engrave
            <span className={`${styles.charCount} ${name.length === MAX_NAME_LENGTH ? styles.charCountMax : ''}`}>
              {name.length}/{MAX_NAME_LENGTH}
            </span>
          </label>
          <input
            id="name-input"
            type="text"
            className={styles.nameInput}
            placeholder="e.g. Emma, Sofia, Love…"
            value={name}
            maxLength={MAX_NAME_LENGTH}
            onChange={(e) => setName(e.target.value)}
            aria-describedby="name-hint"
          />
          <p id="name-hint" className={styles.inputHint}>
            Up to {MAX_NAME_LENGTH} characters. Each letter is crafted by hand — extra characters may wrap naturally into the design.
          </p>
        </div>
      </div>

      <div className={styles.dividerLine} />

      {/* Quantity + CTA */}
      <div className={styles.actions}>
        <div className={styles.qtySelector}>
          <button
            className={styles.qtyBtn}
            onClick={() => adjustQty(-1)}
            disabled={quantity === 1}
            aria-label="Decrease quantity"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /></svg>
          </button>
          <span className={styles.qtyValue} aria-live="polite" aria-label={`Quantity: ${quantity}`}>{quantity}</span>
          <button
            className={styles.qtyBtn}
            onClick={() => adjustQty(1)}
            aria-label="Increase quantity"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
          </button>
        </div>

        <button className={styles.ctaPrimary} onClick={() => alert('Added to basket!')} disabled={!name.trim()}>
          {name.trim() ? 'Add to Basket' : 'Enter a name to continue'}
        </button>
        <button className={styles.ctaSecondary} onClick={() => alert('Buy now!')} disabled={!name.trim()}>
          Buy Now
        </button>
      </div>

      {/* Reassurance */}
      <ul className={styles.reassurance} aria-label="Product guarantees">
        {[
          { icon: '✦', text: 'Handmade to order, ships in 1–3 business days' },
          { icon: '◈', text: 'Tarnish-resistant, water-friendly finish' },
          { icon: '♡', text: 'Gift-ready presentation box included' },
          { icon: '↩', text: '30-day satisfaction guarantee' },
        ].map(({ icon, text }) => (
          <li key={text} className={styles.reassuranceItem}>
            <span className={styles.reassuranceIcon}>{icon}</span>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
