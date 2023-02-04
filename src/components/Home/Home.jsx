import { useContext } from 'react'
import { ProviderContext } from '../../provider/Provider'
import { NavLink } from 'react-router-dom'
const Home = () => {
  const { ScrollTo } = useContext(ProviderContext)
  return (
    <div
      className={`w-full bg-slate-400 h-screen flex flex-col justify-center items-center overflow-x-hidden bg-home-base md:bg-home-md bg-no-repeat bg-cover bg-center gap-3`}>
      <div className="bg-black text-white flex flex-col items-center p-4">
        <h2 className="text-6xl md:text-8xl">FOOTWEAR</h2>
        <ul className="text-2xl flex flex-row gap-2 justify-center ">
          <li
            onClick={() => {
              ScrollTo('products')
            }}>
            <NavLink to="/products/regular">REGULAR</NavLink>
          </li>
          <li>/</li>
          <li
            onClick={() => {
              ScrollTo('products')
            }}
            className="hidden md:flex">
            <NavLink to="/products/old_school">OLD SCHOOL</NavLink>
          </li>
          <li className="hidden md:flex">/</li>
          <li
            onClick={() => {
              ScrollTo('products')
            }}>
            <NavLink to="/products/limited">LIMITED</NavLink>
          </li>
        </ul>
      </div>
      <button
        onClick={() => {
          ScrollTo('products')
        }}>
        <NavLink
          to="/products"
          className="border-2 border-white px-3 text-xl text-white">
          SEE MORE!
        </NavLink>
      </button>
    </div>
  )
}

export default Home
