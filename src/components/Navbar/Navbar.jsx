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
  const { handleSection, section, detailsIsVisible, shoppingCart } =
    useContext(ProviderContext)
  let URL = useLocation().pathname

  return (
    <nav
      className={`fixed z-40 w-full flex top-0 h-10 items-center duration-500 ${
        (URL.includes('home') || URL === '/') && detailsIsVisible === false
          ? 'bg-transparent text-white'
          : 'bg-white text-black'
      } ${URL.includes('checkout') ? '-top-full' : 'top-0'}`}>
      <ul className="w-full flex flex-row justify-between relative px-4 lg:px-8 h-full">
        <li className="flex items-center text-xl">
          <NavLink to="/home" className="italic font-semibold">
            <FontAwesomeIcon icon={faMountain} /> Logo
          </NavLink>
        </li>
        <li className="flex flex-row gap-5 text-xl">
          <button id="favourites" onClick={handleSection}>
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <FavouriteSection />
          <button
            id="shoppingCart"
            onClick={handleSection}
            className="relative">
            <FontAwesomeIcon icon={faShoppingCart} />
            <div
              className={`absolute top-4 -right-3 aspect-square w-5 bg-red-600 rounded-full text-sm font-semibold text-white ${
                shoppingCart.length === 0 ? 'hidden' : null
              }`}>
              {shoppingCart
                .map((product) => {
                  return product.quantity
                })
                .reduce((a, b) => a + b, 0)}
            </div>
          </button>
          <ShoppingCartSection />
          <button id="menu" onClick={handleSection}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <MenuSection />
        </li>
      </ul>
      <div
        onClick={handleSection}
        className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 ${
          section && !URL.includes('checkout') ? 'visible' : 'hidden'
        }`}></div>
    </nav>
  )
}

export default Navbar
