import { useContext, useState } from 'react'
import { ProviderContext } from '../../provider/Provider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import ItemCart from '../Items/ItemCart'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const ShoppingCartSection = () => {
  const {
    handleSection,
    section,
    idButton,
    shoppingCart,
    handleDetailsSection
  } = useContext(ProviderContext)

  const [TotalValue, setTotalValue] = useState(0)
  useEffect(() => {
    setTotalValue(
      shoppingCart
        .map((data) => {
          return data.price * data.quantity
        })
        .reduce((a, b) => a + b, 0)
    )
  }, [shoppingCart])

  return (
    <div
      className={`w-5/6 md:w-1/2 xl:w-1/4 z-40 absolute h-screen flex flex-col justify-between bg-white text-black duration-300 top-0 p-4 pb-10 border-l-2 border-black ${
        idButton === 'shoppingCart' && section ? 'right-0' : '-right-full'
      }`}>
      <div className="w-full h-5/6 flex flex-col px-3 gap-5 ">
        <div className="w-full flex flex-row justify-between text-3xl font-bold">
          <button id="shoppingCart" onClick={handleSection}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <button
            onClick={() => {
              console.log(shoppingCart)
            }}>
            Cart
          </button>
        </div>
        {shoppingCart.length > 0 ? (
          <>
            <ul className="w-full flex flex-col gap-5 text pr-5 overflow-y-auto">
              {shoppingCart.map((product) => {
                return (
                  <ItemCart
                    key={[product.id, product.size]}
                    product={product}
                  />
                )
              })}
            </ul>
          </>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500 italic">
            Woah, it's so empty here :(
          </div>
        )}
      </div>
      <ul
        className={`flex-col justify-center gap-5 items-center text-xl font-semibold ${
          TotalValue === 0 ? 'hidden' : 'flex'
        }`}>
        <li>
          <p>
            TOTAL:{' '}
            {TotalValue.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            })}{' '}
          </p>
        </li>
        <li
          onClick={() => {
            handleDetailsSection('close')
            handleSection()
          }}>
          <NavLink to="/checkout" className="bg-red-500 py-3 px-8 text-white">
            CHECKOUT
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default ShoppingCartSection
