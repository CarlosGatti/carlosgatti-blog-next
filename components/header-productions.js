

import Link from 'next/link'

export default function Header() {


  return (



            <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                
                    <img src="/logo-black.png" alt="gatti-foto" class="w-10 h-10 text-white bg-indigo-500 rounded-full"/>

                     <span class="ml-3 text-xl">Gatti Productions</span>
                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a class="mr-5 hover:text-gray-900" href='/'>Home</a>
                <a class="mr-5 hover:text-gray-900" href='#Gallery'>My Gallery</a>
                <a class="mr-5 hover:text-gray-900" href="#Investing">Investing</a>
                <a class="mr-5 hover:text-gray-900" href="#Contact">Contact</a>
                </nav>
            </div>
            </header>
  )
}










