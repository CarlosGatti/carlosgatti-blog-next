import {  
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoYoutube,
  IoLogoGithub 
  } from "react-icons/io5";

export default function Footer() {

  return (
    <footer className="text-gray-600 body-font">
      <div
        className="
          container
          px-5
          py-24
          mx-auto
          flex
          md:items-center
          lg:items-start
          md:flex-row md:flex-nowrap
          flex-wrap flex-col
        "
      >
        <div
          className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left"
        >
          <a
            href=""
            className="
              flex
              title-font
              font-medium
              items-center
              md:justify-start
              justify-center
              text-gray-900
            "
          >
            <i className="fas fa-cubes fa-lg text-purple-500"></i>
            <span className="ml-3 text-xl">Carlos Gatti</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Sharing the things I like and developing this project is a joy for me.
          </p>
        </div>
        <div
          className="
            flex-grow flex flex-wrap
            md:pl-20
            -mb-10
            md:mt-0
            mt-10
            md:text-left
            text-center
          "
        >
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="
                title-font
                font-medium
                text-gray-900
                tracking-widest
                text-sm
                mb-3
              "
            >
              The Blog
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800"
                  >Posts</a>
              </li>
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800"
                  >About</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="
                title-font
                font-medium
                text-gray-900
                tracking-widest
                text-sm
                mb-3
              "
            >
              Tradingview
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="https://www.tradingview.com/u/tdgatti/#published-charts" className="text-gray-600 hover:text-gray-800"
                  >Ideas</a>
              </li>
              <li>
                <a href="https://www.tradingview.com/u/tdgatti/#published-scripts" className="text-gray-600 hover:text-gray-800"
                  >Pine Script</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="
                title-font
                font-medium
                text-gray-900
                tracking-widest
                text-sm
                mb-3
              "
            >
              Mining Crypto
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800"
                  >RIG </a>
              </li>
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800"
                  >Amazon - Material</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="
                title-font
                font-medium
                text-gray-900
                tracking-widest
                text-sm
                mb-3
              "
            >
              GitHub
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800"
                  >Repositores</a>
              </li>
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800"
                  >Python Finance</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-white shadon">
        <div
          className="
            container
            mx-auto
            py-4
            px-5
            flex flex-wrap flex-col
            sm:flex-row
          "
        >
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2021 Copyright:
            <a
              href="https://www.tailwind-elements.com/"
              className="text-gray-600 ml-1"
              target="_blank"
              >Carlos Gatti</a>
          </p>
          <span
            className="
              inline-flex
              sm:ml-auto sm:mt-0
              mt-2
              justify-center
              sm:justify-start
            "
          >
            <a href="" className="ml-3 text-gray-500">
              <IoLogoGithub  className="ml-3 text-gray-500"/>
            </a>    
            <a href="" className="ml-3 text-gray-500">
              <IoLogoLinkedin  className="ml-3 text-gray-500"/>
            </a>
            <a href="" className="ml-3 text-gray-500">
              <IoLogoYoutube  className="ml-3 text-gray-500"/>
            </a>
            <a href="" className="ml-3 text-gray-500">
              <IoLogoInstagram  className="ml-3 text-gray-500"/>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}


