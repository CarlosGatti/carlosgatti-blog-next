import Link from 'next/link'
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'

function Header() {

  const router = useRouter();

  const menu = [
    //{ title: 'Home', path: '/' },
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
                  className={`cursor-pointer ${
                    router.pathname === item.path
                      ? 'text-gray-500'
                      : 'hover:text-gray-500' 
                  }`}
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
