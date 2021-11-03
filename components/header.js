import Link from 'next/link'
import Container from '../components/container'
import { useRouter } from "next/router";


function Header() {

  const router = useRouter();

  
  const menu = [
    { title: 'Home', path: '/' },
    { title: 'O Blog', path: '/blog' },
    { title: 'Posts', path: '/posts' },
  ]
  
  return (
    <header className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Container>
        <nav >

        <div className="flex space-x-10">
          {menu.map((item, index) => {
            return (
              <Link key={index} href={item.path}>
                <a
                  className={`cursor-pointer ${
                    router.pathname === item.path
                      ? 'text-blue-500'
                      : 'hover:text-blue-500' 
                  }`}
                >
                  {item.title}
                </a>
              </Link>
            )
          })}
        </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header
