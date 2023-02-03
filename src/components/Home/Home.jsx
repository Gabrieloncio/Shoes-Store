import { useContext } from 'react'
import { ProviderContext } from '../../provider/Provider'
import { NavLink, useLocation } from 'react-router-dom'
const Home = () => {
  const { handleLoading, ScrollTo } = useContext(ProviderContext)
  return (
    <div
      className={`w-full bg-slate-400 h-screen flex flex-col justify-center items-center overflow-x-hidden bg-home-base md:bg-home-md bg-no-repeat bg-cover bg-center gap-3 ${useLocation().pathname.includes('checkout')? 'h-0' : 'h-screen'}`}>
      {/* <button
        className="bg-slate-500 p-4 rounded-xl border-black border-2 text-xl font-bold italic"
        onClick={handleLoading}></button> */}
      <div className="bg-black text-white flex flex-col items-center p-4">
        <h2 className="text-6xl md:text-8xl">FOOTWEAR</h2>
        {/* <div className='text-2xl flex flex-row gap-2 justify-center'>
          /
          /
          
        </div> */}
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
            }} className='hidden md:visible'>
            <NavLink to="/products/old_school">OLD SCHOOL</NavLink>
          </li>
          <li className='hidden md:visible'>/</li>
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
