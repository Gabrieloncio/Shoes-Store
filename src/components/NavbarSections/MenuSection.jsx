import { useContext } from 'react'
import { ProviderContext } from '../../provider/Provider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const MenuSection = () => {
  const { handleSection, section, idButton, ScrollTo } =
    useContext(ProviderContext)
  const handleFunctions = () => {
    ScrollTo('Products')
    handleSection()
  }
  return (
    <div
      className={`w-5/6 md:w-1/2 z-50 xl:w-1/4 absolute h-screen bg-white text-black  top-0 p-4 border-l-2 border-black duration-300 ${
        idButton === 'menu' && section
          ? 'right-0'
          : '-right-full'
      }`}>
        
      <ul className="w-full flex flex-row justify-between px-3 lg:px-8 text-3xl font-bold">
        <li>
          <button id="menu" onClick={handleSection}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </li>
        <li onClick={handleFunctions}>
          <NavLink to="/products">Products</NavLink>
        </li>
      </ul>
      <ul className="w-full flex flex-col p-4 gap-4 lg:px-8 text-3xl">
        <li onClick={handleFunctions}>
          <NavLink to="/products/regular">Regular</NavLink>
        </li>
        <li onClick={handleFunctions}>
          <NavLink to="/products/slip_on">Slip-On</NavLink>
        </li>
        <li onClick={handleFunctions}>
          <NavLink to="/products/old_school">Old School</NavLink>
        </li>
        <li onClick={handleFunctions}>
          <NavLink to="/products/high">High</NavLink>
        </li>
        <li onClick={handleFunctions}>
          <NavLink to="/products/limited">Limited</NavLink>
        </li>
      </ul>
      
    </div>
  )
}

export default MenuSection
