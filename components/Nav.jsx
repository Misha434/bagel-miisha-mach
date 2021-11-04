import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link'

const Nav = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gradient-to-r from-blue-400 to-green-300 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/" passHref>
              <div className="flex items-center flex-shrink-0 text-white mr-6  cursor-pointer">
                <svg
                  className="fill-current h-8 w-8 mr-2"
                  width={54}
                  height={54}
                  viewBox="0 0 54 54"
                  xmlns="http://www.w3.org/2000/svg"
                  >
                  <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                </svg>
                <span className="font-semibold text-xl tracking-tight">Bagel Miisha Mach</span>
              </div>
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
            <GiHamburgerMenu />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <Link href="/#" passHref>
                <li className="nav-item p-3">
                  <span className="text-white cursor-pointer">Tag (Comming Soon)</span>
                </li>
              </Link>
              <Link href="/#" passHref>
                <li className="nav-item  p-3">
                  <span className="text-white cursor-pointer">contact (Comming Soon)</span>
                </li>
              </Link>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Nav