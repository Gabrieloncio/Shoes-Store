import { faMountain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { ProviderContext } from '../../provider/Provider'
import ProductCart from '../Items/ProductCart'
import { useForm } from 'react-hook-form'

const Checkout = () => {
  const { shoppingCart } = useContext(ProviderContext)
  const hasItems = shoppingCart.length >= 1 ? true : false
  const { register, handleSubmit } = useForm()
  const [checked, setChecked] = useState(false)
  const [totalValue, setTotalValue] = useState(0)
  const [subTotalValue, setSubTotalValue] = useState(0)
  const [validCoupon, setValidCoupon] = useState(null)
  const [coupon, setCoupon] = useState('')
  const [couponValue, setCouponValue] = useState(0)

  const onSubmit = (data) => {
    setCoupon('')
    console.log(data)
    if (data.Coupon || data === '20%DISCOUNT') {
      setCouponValue(subTotalValue * 0.2)
      setValidCoupon(true)
      setTimeout(() => {
        setValidCoupon(null)
      }, 10000)
    } else {
      setValidCoupon(false)
      setTimeout(() => {
        setValidCoupon(null)
      }, 10000)
    }
  }

  useEffect(() => {
    setSubTotalValue(
      shoppingCart
        .map((data) => {
          return data.price * data.quantity
        })
        .reduce((a, b) => a + b, 0)
    )
  }, [shoppingCart])

  useEffect(() => {
    if (couponValue === 0) setTotalValue(subTotalValue)
    else {
      setTotalValue(subTotalValue - couponValue)
      setCouponValue(subTotalValue * 0.2)
    }
  }, [subTotalValue])
  useEffect(() => {
    setTotalValue(subTotalValue - couponValue)
  }, [couponValue])

  return (
    <section
      className={`bg-[#F3F3F3] flex flex-col items-center justify-center w-full md:px-32 h-[calc(100vh-2.75rem)] ${
        hasItems ? null : 'items-center gap-5'
      } `}
    >
      {hasItems ? (
        <>
          <div className="flex py-5 lg:pt-0 flex-row items-end justify-center gap-2 text-4xl">
            <FontAwesomeIcon icon={faMountain} />
            <h1 className="italic font-bold">Logo</h1>
            <h2 className="text-lg font-semibold">"FOOTWEAR & STYLE"</h2>
          </div>
          <div className="flex flex-col h-full lg:pt-20 pb-10 lg:h-4/5 lg:flex-row w-full lg:justify-between overflow-y-auto items-center lg:items-stretch">
            <ul className="w-11/12 lg:w-3/5 flex flex-col gap-2  h-2/4 lg:h-full">
              <li>
                <ul className="flex flex-row justify-between pr-12 font-bold text-lg">
                  <li>Product</li>
                  <li>
                    <ul className="flex flex-row gap-10 pr-4">
                      <li>Quantity</li>
                      <li>Price</li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="flex flex-col gap-4 h-4/5 overflow-y-auto">
                {shoppingCart.map((product) => {
                  return (
                    <ProductCart
                      key={[product.id, product.size]}
                      product={product}
                    />
                  )
                })}
              </li>
            </ul>
            <div className="border-2 relative border-gray-400 rounded-lg w-11/12 lg:w-1/3 h-min flex flex-col items-center p-5 gap-4">
              <div
                className={` absolute left-1/2 -translate-x-1/2 w-full text-center -top-10 px-5 py-1 bg-black text-[#F3F3F3] rounded-md duration-500 ${
                  validCoupon === null ? 'hidden' : 'animate-couponAnimation'
                }`}
              >
                {validCoupon === false
                  ? 'Invalid code. Try with "20%DISCOUNT"'
                  : 'Coupon has been applied succesfully'}
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="relative flex flex-row gap-2"
              >
                <input
                  type="text"
                  {...register('Coupon')}
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setCoupon(e.target.value)
                      onSubmit(e.target.value)
                      e.preventDefault()
                    }
                  }}
                  placeholder="Discount code"
                  className="border-2 rounded-lg px-2 py-1 w-full"
                ></input>
                <input type="submit" hidden />
                <input
                  type="submit"
                  className="border-[2px] px-2 py-1 rounded-lg border-black font-semibold duration-200 hover:bg-red-600 hover:text-[#F3F3F3]"
                  value="Apply"
                ></input>
              </form>
              <span className="w-full border-t-2 border-gray-400"></span>
              <ul className="grid grid-cols-2 justify-between w-full text-gray-400">
                <li className={`${couponValue === 0 ? 'hidden' : 'visible'}`}>
                  Discount
                </li>
                <li
                  className={` ${
                    couponValue === 0 ? 'hidden' : 'visible'
                  } text-end`}
                >
                  {couponValue.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  })}
                </li>
                <li className="">Subtotal</li>
                <li className="text-end">
                  {subTotalValue.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  })}
                </li>
              </ul>
              <span className="w-full border-t-2 border-gray-400"></span>
              <ul className="flex flex-row justify-between w-full text-xl font-bold">
                <li>Total</li>
                <li>
                  {totalValue.toLocaleString('en-US', {
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
                <a
                  href="../assets/documents/GMCVS.pdf"
                  className="text-blue-600"
                  target="_blank"
                >
                  Terms & Conditions
                </a>
              </form>
              <button
                onClick={() => {
                  console.log(hasItems)
                }}
                className={` text-[#F3F3F3] w-full py-3 font-semibold duration-200 ${
                  checked ? 'bg-red-600' : 'bg-gray-300 cursor-default'
                }`}
              >
                <a
                  rel="noopener noreferrer"
                  target="_blanck"
                  href="https://www.linkedin.com/in/gabriel-mendez-m/"
                  className={`${checked ? 'visible' : 'hidden'}`}
                >
                  PROCEED TO CHECKOUT
                </a>
                <p className={`${checked ? 'hidden' : 'visible'}`}>
                  PROCEED TO CHECKOUT
                </p>
              </button>
              <NavLink to="/products" className="underline underline-offset-2">
                Continue Shopping
              </NavLink>
            </div>
          </div>
        </>
      ) : (
        <>
          <nav className="absolute top-0 left-0 h-10 w-full flex items-center justify-center bg-black  text-2xl text-[#F3F3F3] italic font-semibold">
            <NavLink to="/home">
              <FontAwesomeIcon icon={faMountain} /> Logo
            </NavLink>
          </nav>
          <p className="text-4xl w-1/3 text-center font-bold">
            THERE ARE NO ITEMS IN YOUR CART
          </p>
          <NavLink
            to="/products"
            className="text-[#F3F3F3] text-lg bg-red-600 px-6 py-2"
          >
            Continue Shopping
          </NavLink>
        </>
      )}
    </section>
  )
}

export default Checkout
