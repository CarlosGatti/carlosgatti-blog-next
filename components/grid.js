
import styles from '../styles/Home.module.css'

export default function Grid() {
  
    return (
        <div className={styles.grid}>
            <a href="https://www.linkedin.com/in/carlos-gatti-693b909b/" className={styles.card}>
                <h3>LinkedIn</h3>
                <p>It is a good place to learn about my career.</p>
            </a>
            <a href="https://calendly.com/eduardo-gf/30min" className={styles.card}>
                <h3>My Calendly</h3>
                <p>If you're want talk , you can set up a call through my Calendly.</p>
            </a>
            <a href="https://github.com/carlosgatti/" className={styles.card}>
                <h3>GitHub</h3>
                <p>Repositories of my personal projects.</p>
            </a>
            <a href="/store" className={styles.card}>
                <h3>Store</h3>
                <p>My personal references for books, courses and products.</p>
            </a>
            <a href="https://www.amazon.com/hz/wishlist/ls/31NF3CK7UHQKG?ref_=wl_share" className={styles.card}>
                <h3>Rig (Mining ETH)</h3>
                <p>My personal mining project for ETH. List of Equipment.</p>
            </a>
            <a href="https://www.instagram.com/carloseduardogatti/" className={styles.card}>
                <h3>Instagram</h3>
                <p>Great place to follow my daily publications.</p>
            </a>
        </div>
    )
}
  
  
  








