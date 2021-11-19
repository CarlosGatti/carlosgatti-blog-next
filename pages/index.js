import Layout from '../components/layouts/layout'
import styles from '../styles/Home.module.css'

function HomePage() {
  return (
    <>
    <Layout>
      <div className={styles.container}>
          <main className={styles.main}>
              <img src="/gatti-foto.png" alt="gatti-foto" className={styles.gatti} />
              <h1 className={styles.title}>
                  Carlos Gatti
              </h1>
              <p className={styles.description}>
                  Here you can learn a little more about me.
              </p>
              <div className={styles.grid}>
                  <a href="https://www.linkedin.com/in/carlos-gatti-693b909b/" className={styles.card}>
                      <h3>Experiance</h3>
                      <p>If you are a recruiter, I have something especially reserved for you.</p>
                  </a>
                  <a href="/blog/" className={styles.card}>
                      <h3>My Blog</h3>
                      <p>This blog was developed with the aim of structuring some themes that I routinely need to share.</p>
                  </a>
                  <a href="https://github.com/carlosgatti/" className={styles.card}>
                      <h3>GitHub</h3>
                      <p>Some of the repositories that I participated or created.</p>
                  </a>
                  <a href="https://www.amazon.com/hz/wishlist/ls/2TLSRSMJK0O6M?ref_=wl_share" className={styles.card}>
                      <h3>Amazon</h3>
                      <p>My personal references for books, courses and products.</p>
                  </a>
              </div>
          </main>
      </div>
    </Layout>
    </> 
  )
}

export default HomePage
