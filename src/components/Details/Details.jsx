import SizeButton from '../Buttons/SizeButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faXmark,
  faAngleLeft,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'
import { ProviderContext } from '../../provider/Provider'
import { NavLink } from 'react-router-dom'

const Details = () => {
  const {
    detailsIsVisible,
    handleDetailsSection,
    handleSection,
    section,
    // nextImage,
    // previousImage,
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
  const { name, color, img, imgfront, sizes, price, quantity } = productDetails
  const shoeSizes = []
  if (sizes) {
    sizes.forEach((size) =>
      shoeSizes.push(
        <SizeButton
          key={size}
          product={{ name, color, img, imgfront, price, size, quantity }}
        />
      )
    )
  }

  const isSizeButtonSelected = selectedProductSize === null ? false : true
  if (isProductInCart === true) {
    setTimeout(() => {
      setIsProductInCart(false)
    }, 5000)
  }

  const [detailText, setDetailText] = useState(false)

  return (
    <div
      className={`fixed z-20 w-full flex h-screen justify-center lg:items-center duration-300 top-0 py-10 overflow-y-auto ${
        detailsIsVisible ? 'animate-detailsBackgroundActive' : 'hidden'
      }`}
    >
      <div
        onClick={() => {
          handleDetailsSection('close')
        }}
        className="fixed w-screen h-screen bg-neutral-900/60 top-0"
      ></div>
      <div className="absolute flex flex-col bg-white w-[90%] lg:w-auto p-5 md:pt-5 md:pb-10 md:px-10 rounded-2xl">
        <div className="flex flex-row justify-end items-center">
          <button
            className="text-4xl"
            onClick={() => {
              handleDetailsSection('close')
            }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div
          onClick={() => {
            if (section) {
              handleSection()
            }
          }}
          className={`w-full bg-white z-30 flex flex-col md:flex-row gap-8 `}
        >
          <div className="flex flex-col gap-4 items-center justify-center md:min-w-[20rem]">
            <ul className="flex relative flex-row sm:w-[20rem] aspect-square overflow-x-hidden border-gray-300 border-[1px]">
              <li
                className={`duration-200  ${
                  visibleImage === 1 ? 'w-full' : 'w-0'
                }`}
              >
                <img
                  alt={`${name}-${color}`}
                  src={imgfront}
                  className="h-full"
                />
              </li>
              <li
                className={`duration-200 ${
                  visibleImage === 2 ? 'w-full' : 'w-0'
                }`}
              >
                <img alt={`${name}-${color}`} src={img} className="h-full" />
              </li>
              <li
                className={`duration-200 ${
                  visibleImage === 3 ? 'w-full' : 'w-0'
                }`}
              >
                <img
                  alt={`${name}-${color}`}
                  src={img}
                  className="-scale-x-100 h-full"
                />
              </li>
            </ul>
            <ul className="flex flex-row gap-4 sm:w-[20rem]">
              <li
                className={`w-1/3 aspect-square cursor-pointer border-2 ${
                  visibleImage === 1 ? 'border-black' : null
                }`}
                onClick={() => {
                  letVisible(1)
                }}
              >
                <img alt={`${name - color}`} src={imgfront} />
              </li>
              <li
                className={`w-1/3 aspect-square cursor-pointer border-2 ${
                  visibleImage === 2 ? 'border-black' : null
                }`}
                onClick={() => {
                  letVisible(2)
                }}
              >
                <img alt={`${name - color}`} src={img} />
              </li>
              <li
                className={`w-1/3 aspect-square cursor-pointer border-2 ${
                  visibleImage === 3 ? 'border-black' : null
                }`}
                onClick={() => {
                  letVisible(3)
                }}
              >
                <img
                  alt={`${name - color}`}
                  src={img}
                  className="-scale-x-100"
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:w-[30rem]">
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
            <p className={`lg:hidden ${detailText ? 'hidden' : null}`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown...{' '}
              <button
                onClick={() => {
                  setDetailText(!detailText)
                }}
                className={`${
                  detailText ? 'hidden' : 'text-red-600 font-bold italic'
                }`}
              >
                {' '}
                see more
              </button>
            </p>
            <p className={`lg:hidden ${!detailText ? 'hidden' : null}`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.{' '}
              <button
                onClick={() => {
                  setDetailText(!detailText)
                }}
                className={`md:hidden ${
                  !detailText ? 'hidden' : 'text-red-600 font-bold italic'
                }`}
              >
                see less
              </button>
            </p>
            <p className="hidden lg:flex">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <span className="text-xl pt-4 pb-2 flex flex-row gap-2 font-semibold">
              Sizes{' '}
              <p
                className={`${
                  chooseSize === true ? 'flex' : 'hidden'
                } text-red-500`}
              >
                · Please choose the size
              </p>
              <p
                className={`${
                  isProductInCart === true ? 'flex' : 'hidden'
                } text-red-500`}
              >
                · This product has already been added to the cart
              </p>
            </span>
            <ul className="text-2xl font-bold flex flex-row gap-4 flex-wrap">
              {shoeSizes}
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
                }`}
              >
                <NavLink
                  onClick={() => {
                    UpdateShoppingCart('add')
                    setSelectedProductSize(null)
                  }}
                  to="/checkout"
                  className={`${isSizeButtonSelected ? 'flex' : 'hidden'}`}
                >
                  Buy Now!
                </NavLink>
                <p className={`${isSizeButtonSelected ? 'hidden' : 'flex'}`}>
                  Buy Now!
                </p>
              </button>

              <button
                onClick={() => {
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
                } font-semibold`}
              >
                Add to Cart
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
