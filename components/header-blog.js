import Link from 'next/link'

export default function Header() {

  const menu = [
    { title: 'Home', path: '/' },
  ]

  return (

      <nav> 
          {menu.map((item, index) => {
            return (
              <Link key={index} href={item.path}>
                <h2 className="inline-flex text-2xl md:text-4xl no-underline hover:underline font-bold tracking-tight md:tracking-tighter leading-tight mb-15 mt-8 mr-5 cursor-pointer"
                >
                  {item.title}
                </h2>
              </Link>
            )
          })}
        </nav>






  )
}


