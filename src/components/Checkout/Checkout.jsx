import { faMountain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { ProviderContext } from '../../provider/Provider'
import ProductCart from '../Items/ProductCart'

const Checkout = () => {
  const { shoppingCart } = useContext(ProviderContext)
  const [checked, setChecked] = useState(false)
  const hasItems = shoppingCart.length >= 1 ? true : false
  const open = true
  const [TotalValue, setTotalValue] = useState(0)
  useEffect(() => {
    setTotalValue(
      shoppingCart
        .map((data) => {
          return JSON.parse(JSON.parse(data)).at(3)
        })
        .reduce((a, b) => a + b, 0)
    )
  }, [shoppingCart])

  return (
    <section
      className={`bg-white flex flex-col items-center justify-center w-full md:px-32 md:py-10 h-[calc(100vh-2.75rem)] ${
        hasItems ? null : 'items-center gap-5'
      } ${open ? 'bottom-0' : '-bottom-full'}`}>
      {hasItems ? (
        <>
          <NavLink className="absolute top-5 md:top-10 flex flex-row items-end gap-2 w-auto text-4xl">
            <FontAwesomeIcon icon={faMountain} />
            <h1 className="italic font-bold">Logo</h1>
            <h2 className="text-lg font-semibold">"FOOTWEAR & STYLE"</h2>
          </NavLink>
          <div className="flex flex-col h-full pt-20 md:h-4/5 md:flex-row w-full md:justify-between overflow-y-auto items-center md:items-stretch">
            <ul className="w-11/12 md:w-2/3 flex flex-col gap-4  h-2/4 md:h-full">
              <li>
                <ul className="flex flex-row justify-between pr-12 font-bold text-lg">
                  <li>Product</li>
                  <li>Price</li>
                </ul>
              </li>

              <li className="flex flex-col gap-4 h-4/5 overflow-y-auto">
                {shoppingCart.map((product) => {
                  return (
                    <ProductCart
                      key={Object.values(product)}
                      product={JSON.parse(product)}
                    />
                  )
                })}
              </li>
            </ul>
            <div className="border-2 border-gray-400 rounded-lg w-11/12 md:w-1/4 h-min flex flex-col items-center p-5 gap-4">
              <form className="flex flex-row gap-2">
                <input
                  type="text"
                  placeholder="Discount code"
                  className="border-2 rounded-lg px-2 py-1 w-full"></input>
                <button className="border-[2px] px-2 py-1 rounded-lg border-black font-semibold duration-200 hover:bg-red-600 hover:text-white">
                  Apply
                </button>
              </form>
              <span className="w-full border-t-2 border-gray-400"></span>
              <ul className="flex flex-row justify-between w-full text-gray-400">
                <li>Subtotal</li>
                <li>b</li>
              </ul>
              <span className="w-full border-t-2 border-gray-400"></span>
              <ul className="flex flex-row justify-between w-full text-xl font-bold">
                <li>Total</li>
                <li>
                  {TotalValue.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  })}
                </li>
              </ul>
              <form className="">
                <input
                  type="checkbox"
                  onClick={() => {
                    setChecked(!checked)
                  }}
                />{' '}
                I accept the{' '}
                <button className="text-blue-600">Terms & Conditions</button>
              </form>
              <button
                onClick={() => {
                  console.log(hasItems)
                }}
                className={`bg-red-600 text-white w-full py-3 font-semibold duration-200 ${
                  checked ? 'bg-red-600' : 'bg-gray-300 cursor-default'
                }`}>
                <a
                  rel="noopener noreferrer"
                  target="_blanck"
                  href="https://www.linkedin.com/in/gabriel-mendez-m/"
                  className={`${checked ? 'visible' : 'hidden'}`}>
                  PROCEED TO CHECKOUT
                </a>
                <p className={`${checked ? 'hidden' : 'visible'}`}>PROCEED TO CHECKOUT</p>
              </button>
              <NavLink to="/products" className="underline underline-offset-2">
                Continue Shopping
              </NavLink>
            </div>
          </div>
        </>
      ) : (
        <>
          <nav className="absolute top-0 left-0 h-10 w-full flex items-center justify-center bg-black  text-2xl text-white italic font-semibold">
            <NavLink>
              <FontAwesomeIcon icon={faMountain} /> Logo
            </NavLink>
          </nav>
          <p className="text-4xl w-1/3 text-center font-bold">
            THERE ARE NO ITEMS IN YOUR CART
          </p>
          <NavLink
            to="/products"
            className="text-white text-lg bg-red-600 px-6 py-2">
            Continue Shopping
          </NavLink>
        </>
      )}
      {/* <NavLink className="flex flex-row gap-2 w-min text-4xl italic font-semibold">
        <FontAwesomeIcon icon={faMountain} /> Logo
      </NavLink>
      <div className="flex flex-row w-full justify-between">
        <ul className="w-2/3 flex flex-col gap-4 pt-10">
          {shoppingCart.map((product) => {
            return (
              <ProductCart
                key={Object.values(product)}
                product={JSON.parse(product)}
              />
            )
          })}
        </ul>
        <div className="border-2 border-gray-400 rounded-lg w-1/4 h-min flex flex-col items-center p-5 gap-4">
          <form className="flex flex-row gap-2">
            <input
              type="text"
              placeholder="Discount code"
              className="border-2 rounded-lg px-2 py-1 w-full"></input>
            <button className="border-[2px] px-2 py-1 rounded-lg border-black font-semibold">
              Apply
            </button>
          </form>
          <span className="w-full border-t-2 border-gray-400"></span>
          <ul className="flex flex-row justify-between w-full text-gray-400">
            <li>Subtotal</li>
            <li>b</li>
          </ul>
          <span className="w-full border-t-2 border-gray-400"></span>
          <ul className="flex flex-row justify-between w-full text-xl font-bold">
            <li>Total</li>
            <li>d</li>
          </ul>
          <form className="">
            <input
              type="checkbox"
              onClick={() => {
                setChecked(!checked)
              }}
            />{' '}
            I accept the{' '}
            <button className="text-blue-600">Terms & Conditions</button>
          </form>
          <button
            onClick={() => {
              console.log(hasItems)
            }}
            className={`bg-red-600 text-white w-full py-3 font-semibold duration-200 ${
              checked ? 'bg-red-600' : 'bg-gray-300 cursor-default'
            }`}>
            PROCEED TO CHECKOUT
          </button>
          <NavLink className="underline underline-offset-2">
            Continue Shopping
          </NavLink>
        </div>
      </div> */}
    </section>
  )
}

export default Checkout
