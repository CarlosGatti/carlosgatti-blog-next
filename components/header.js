import Link from 'next/link'
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'

function Header() {

  const router = useRouter();

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
                <button className={`class="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white cursor-pointer`}
                >
                 {item.title}
                </button>
              </Link>
            )
          })}
        </nav>
      </div>



  </header>
  )
}

export default Header
