import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link'

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gradient-to-r from-blue-400 to-green-300 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/" passHref>
              <div className="flex items-center flex-shrink-0 text-white mr-6  cursor-pointer">
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
                <li className="nav-item p-3" key="1">
                  <span className="text-white cursor-pointer">Tag (Comming Soon)</span>
                </li>
              </Link>
              <Link href="/#" passHref>
                <li className="nav-item  p-3" key="2">
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