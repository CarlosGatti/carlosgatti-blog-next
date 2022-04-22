import Layout from '../components/layouts/layout'
import styles from '../styles/Home.module.css'
import ThemeToggle from '../components/theme-toogle'

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
              <div className='animate-pulse flex space-x-4'>
                <ThemeToggle/>
              </div>
              <div className={styles.grid}>
                  <a href="/resume" className={styles.card}>
                      <h3 animate-ping>Experiance</h3>
                      <p>If you are a recruiter, I have something especially reserved for you.</p>
                  </a>
                  <a href="/productions" className={styles.card}>
                      <h3>Photography</h3>
                      <p>I can transform your best moment into something unforgettable.</p>
                  </a>
                  <a href="/blog/" className={styles.card}>
                      <h3>My Blog</h3>
                      <p>This blog was developed with the aim of structuring some themes that I routinely need to share.</p>
                  </a>
                  <a href="https://github.com/carlosgatti/" className={styles.card}>
                      <h3>GitHub</h3>
                      <p>Some of the repositories that I participated or created.</p>
                  </a>

              </div>
          </main>
      </div>
    </Layout>
    </> 
  )
}

export default HomePage
