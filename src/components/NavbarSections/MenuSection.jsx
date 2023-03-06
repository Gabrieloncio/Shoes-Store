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
        idButton === 'menu' && section ? 'right-0' : '-right-full'
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
      <ul className="w-auto flex flex-col p-4 gap-4 lg:px-8 text-3xl">
        <li>
          <NavLink to="/products/regular">
            <button onClick={handleFunctions}>Regular</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/products/slip_on">
            <button onClick={handleFunctions}>Slip-On</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/products/old_school">
            <button onClick={handleFunctions}>Old School</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/products/high">
            <button onClick={handleFunctions}>High</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/products/limited">
            <button onClick={handleFunctions}>Limited</button>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default MenuSection
