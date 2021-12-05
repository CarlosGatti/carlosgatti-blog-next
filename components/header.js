import Link from 'next/link'
import styles from '../styles/Home.module.css'

function Header() {

  const menu = [
    { title: 'Home', path: '/' },
    { title: '.Blog', path: '/blog/'}
  ]
  
  return (
    <header className="text-2xl md:text-4xl font-bold">
      <div className={styles.header}>
      <div className={styles.header__wrapper}>
          <img src="/gatti-foto.png" alt="gatti-foto" className={styles.gattismall} />
      </div>
        <nav className={styles.nav}> 
          {menu.map((item, index) => {
            return (
              <Link key={index} href={item.path}>
                <a
                  className={`inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700 cursor-pointer`}
                >
                  {item.title}
                </a>
              </Link>
            )
          })}
        </nav>
      </div>
  </header>
  )
}

export default Header


