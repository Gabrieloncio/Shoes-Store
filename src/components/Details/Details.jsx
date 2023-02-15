import SizeButton from '../Buttons/SizeButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { ProviderContext } from '../../provider/Provider'
import { NavLink } from 'react-router-dom'

const Details = () => {
  const {
    detailsIsVisible,
    handleDetailsSection,
    handleSection,
    section,
    productDetails,
    UpdateShoppingCart,
    visibleImage,
    letVisible,
    selectedProductSize,
    setSelectedProductSize,
    chooseSize,
    setChooseSize,
    isProductInCart,
    setIsProductInCart
  } = useContext(ProviderContext)
  const {type, name, color, img, imgfront, sizes, price, quantity} = productDetails
  const ShoeSizes = []
  if (sizes) {
    sizes.forEach((size) =>
      ShoeSizes.push(
        <SizeButton key={size} product={{name, color, img, price, size, quantity}} />
      )
    )
  }

  const isSizeButtonSelected = selectedProductSize === null ? false : true
  if(isProductInCart === true){
    setTimeout(()=>{
      setIsProductInCart(false)
    },5000)
  }

  return (
    <div
      className={`fixed w-full flex flex-col h-screen bg-white duration-300 top-0 py-10 md:px-36 overflow-y-auto ${
        detailsIsVisible ? 'left-0 ' : '-left-full'
      }`}>
      <div className="flex flex-row justify-between items-center px-3 md:px-0 pt-5">
        <div className="text-base md:text-2xl font-semibold flex flex-row gap-1">
          <NavLink
            to="/products"
            className="text-blue-500"
            onClick={() => {
              setTimeout(() => {
                handleDetailsSection('close')
              }, 300)
            }}>
            Products
          </NavLink>{' '}
          /
          <NavLink
            to={`/products/${type}`}
            className="text-blue-500"
            onClick={() => {
              setTimeout(() => {
                handleDetailsSection('close')
              }, 300)
            }}>
            {' '}
            {name}
          </NavLink>
          /<h2>{color}</h2>
        </div>
        <button
          className="text-4xl overflow-hidden"
          onClick={() => {
            handleDetailsSection('close')
          }}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
      </div>
      <div
        onClick={() => {
          if (section) {
            handleSection()
          }
        }}
        className={`w-full bg-white z-30 flex flex-col lg:flex-row gap-8 `}>
        <div className="flex flex-col sm:flex-row md:flex-col gap-4 items-center justify-center md:min-w-[30rem] px-3 md:px-0">
          <ul className="flex flex-row min-w-[20rem] lg:w-[30rem] aspect-square overflow-x-hidden border-gray-300 border-[1px]">
            <li
              className={`duration-200  ${
                visibleImage === 1 ? 'w-full' : 'w-0'
              }`}>
              <img
                alt={`${name}-${color}`}
                src={imgfront}
                className="h-full"
              />
            </li>
            <li
              className={`duration-200 ${
                visibleImage === 2 ? 'w-full' : 'w-0'
              }`}>
              <img alt={`${name}-${color}`} src={img} className="h-full" />
            </li>
            <li
              className={`duration-200 ${
                visibleImage === 3 ? 'w-full' : 'w-0'
              }`}>
              <img
                alt={`${name}-${color}`}
                src={img}
                className="-scale-x-100 h-full"
              />
            </li>
          </ul>
          <ul className="flex flex-row sm:flex-col md:flex-row gap-4 lg:w-[30rem]">
            <li
              className="w-1/3 aspect-square"
              onClick={() => {
                letVisible(1)
              }}>
              <img alt={`${name - color}`} src={imgfront} />
            </li>
            <li
              className="w-1/3 aspect-square"
              onClick={() => {
                letVisible(2)
              }}>
              <img alt={`${name - color}`} src={img} />
            </li>
            <li
              className="w-1/3 aspect-square"
              onClick={() => {
                letVisible(3)
              }}>
              <img
                alt={`${name - color}`}
                src={img}
                className="-scale-x-100"
              />
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-full px-3 md:px-0">
          <h2 className="text-lg font-bold">
            {price
              ? price.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD'
                })
              : null}
          </h2>
          <h3 className="text-xl font-bold italic text-red-700">
            {name} - {color}
          </h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            repellat nostrum a quia culpa tempore sit saepe consequatur ipsa
            odit accusantium, exercitationem velit esse totam, dolorum eius
            vero. Eos, quidem? Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <p className="text-lg hidden md:flex">
            Beatae cum quod dolores dolorum, sapiente voluptas iusto, esse ipsa
            perspiciatis inventore sint rerum sit eaque non. Non fugiat sunt in
            nobis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorem eveniet excepturi unde hic. Cumque impedit sapiente suscipit
            et quaerat temporibus harum, similique ab, aut ratione voluptate
            rem. Nobis, possimus laborum.
          </p>
          {/* <h3 className="text-xl pt-4 pb-2">Sizes</h3> */}
          <span className="text-xl pt-4 pb-2 flex flex-row gap-2 font-semibold">
            Sizes{' '}
            <p
              className={`${
                chooseSize === true ? 'flex' : 'hidden'
              } text-red-500`}>
              · Please choose the size
            </p>
            <p className={`${isProductInCart === true ? 'flex' : 'hidden'} text-red-500`}>
              · This product has already been added to the cart
            </p>
          </span>
          <ul className="text-2xl font-bold flex flex-row gap-4 flex-wrap">
            {ShoeSizes}
          </ul>
          <div className="bg-black h-px w-full mt-4"></div>
          <ul>
            <li></li>
          </ul>
          <ul className="flex flex-row justify-between py-3">
            <button
              onClick={() => {
                if (!isSizeButtonSelected) {
                  setChooseSize(true)
                }
              }}
              className={`flex justify-center items-center duration-100 py-2 px-5 lg:px-8 text-xl text-white font-semibold ${
                isSizeButtonSelected
                  ? 'bg-red-500'
                  : 'bg-gray-300 cursor-default'
              }`}>
              <NavLink
                onClick={() => {
                  UpdateShoppingCart('add')
                  setSelectedProductSize(null)
                  // setIsProductInCart(false)
                }}
                to="/checkout"
                className={`${isSizeButtonSelected ? 'flex' : 'hidden'}`}>
                Buy Now!
              </NavLink>
              <p className={`${isSizeButtonSelected ? 'hidden' : 'flex'}`}>
                Buy Now!
              </p>
            </button>

            <button
              onClick={() => {
                // isSizeButtonSelected
                //   ? UpdateShoppingCart('add') && setSelectedProductSize(null)
                //   : setChooseSize(true)
                if (isSizeButtonSelected) {
                  UpdateShoppingCart('add')
                  setSelectedProductSize(null)
                } else {
                  setChooseSize(true)
                  setIsProductInCart(false)
                }
              }}
              className={`py-2 px-5 lg:px-8 flex justify-center items-center text-xl border-2 duration-100 ${
                isSizeButtonSelected
                  ? 'border-red-500 text-red-500'
                  : 'border-gray-300 text-gray-300 cursor-default'
              } font-semibold`}>
              Add to Cart
            </button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Details
