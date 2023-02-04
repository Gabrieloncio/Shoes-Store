import { useContext } from 'react'
import { ProviderContext } from '../../provider/Provider'
import {
  faBars,
  faHeart,
  faMountain,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MenuSection from '../NavbarSections/MenuSection'
import ShoppingCartSection from '../NavbarSections/ShoppingCartSection'
import FavouriteSection from '../NavbarSections/FavouriteSection'
import { useLocation, NavLink } from 'react-router-dom'

const Navbar = () => {
  const { handleSection, section } = useContext(ProviderContext)
  let URL = useLocation().pathname

  return (
    <nav
      className={`fixed z-40 w-full flex top-0 h-10 items-center duration-500 ${
        !(URL.includes('home') || URL === '/')
          ? 'bg-white text-black'
          : 'bg-transparent text-white'
      } ${URL.includes('checkout') ? '-top-full' : 'top-0'}`}>
      <div
        onClick={handleSection}
        className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 ${
          section && !URL.includes('checkout') ? 'visible' : 'hidden'
        }`}></div>
      <ul className="w-full flex flex-row justify-between relative px-4 lg:px-8 h-full">
        <li className="flex items-center text-xl">
          <NavLink to='/home' className="italic font-semibold">
            <FontAwesomeIcon icon={faMountain} /> Logo
          </NavLink>
        </li>
        <li className="flex flex-row gap-5 text-xl">
          <button id="favourites" onClick={handleSection}>
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <FavouriteSection />
          {/* <button id="search" onClick={handleSection}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button> */}
          <button id="shoppingCart" onClick={handleSection}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
          <ShoppingCartSection />
          <button id="menu" onClick={handleSection}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <MenuSection />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
