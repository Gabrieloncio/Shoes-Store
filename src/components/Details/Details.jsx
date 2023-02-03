import RedBoxButton from '../Buttons/RedBoxButton'
import BoxButton from '../Buttons/BoxButton'
import SizeButton from '../Buttons/SizeButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
// import { useState } from 'react'
import { useContext, useEffect, useState } from 'react'
import { ProviderContext } from '../../provider/Provider'
import { NavLink } from 'react-router-dom'
import localforage from 'localforage'

const Details = () => {
  const {
    detailsIsVisible,
    handleDetailsSection,
    handleSection,
    section,
    productDetails,
    UpdateShoppingCart,
    visibleImage,
    letVisible
  } = useContext(ProviderContext)
  const [type, name, color, image, frontImage, sizes, price] = productDetails
  const ShoeSizes = []

  const [selectedButton, setSelectedButton] = useState(null)
  const SelectButton = (button) => {
    setSelectedButton(selectedButton === button ? null : button)
  }

  if (sizes) {
    sizes.forEach((size) =>
      ShoeSizes.push(
        <SizeButton
          key={size}
          onClick={() => SelectButton(size)}
          selectedButton={selectedButton}
          product={[name, color, image, price, size]}
        />
      )
    )
  }

  // const [visibleImage, setVisibleImage] = useState(1)
  // const letVisible = (number) => {
  //   setVisibleImage(number)
  // }

  return (
    <div
      className={`fixed w-full h-screen bg-white duration-300 top-10 overflow-y-auto ${
        detailsIsVisible ? 'left-0 ' : '-left-full'
      }`}>
      <div
        onClick={() => {
          if (section) {
            handleSection()
          }
        }}
        className={`w-full bg-white z-30 md:px-40 py-10 flex flex-col md:flex-row gap-8 `}>
        <div className="absolute top-0 left-3 md:left-40 text-base md:text-2xl font-semibold flex flex-row gap-1">
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
          className="absolute top-3 right-4 text-4xl overflow-hidden"
          onClick={() => {
            handleDetailsSection('close')
          }}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <div className="flex flex-col sm:flex-row md:flex-col gap-4 items-center justify-center md:min-w-[30rem]">
          <ul className="flex flex-row min-w-[20rem] lg:w-[30rem] aspect-square overflow-x-hidden">
            <li
              className={`duration-200 ${
                visibleImage === 1 ? 'w-full' : 'w-0'
              }`}>
              <img
                alt={`${name}-${color}`}
                src={frontImage}
                className="h-full"
              />
            </li>
            <li
              className={`duration-200 ${
                visibleImage === 2 ? 'w-full' : 'w-0'
              }`}>
              <img alt={`${name}-${color}`} src={image} className="h-full" />
            </li>
            <li
              className={`duration-200 ${
                visibleImage === 3 ? 'w-full' : 'w-0'
              }`}>
              <img
                alt={`${name}-${color}`}
                src={image}
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
              <img alt={`${name - color}`} src={frontImage} />
            </li>
            <li
              className="w-1/3 aspect-square"
              onClick={() => {
                letVisible(2)
              }}>
              <img alt={`${name - color}`} src={image} />
            </li>
            <li
              className="w-1/3 aspect-square"
              onClick={() => {
                letVisible(3)
              }}>
              <img
                alt={`${name - color}`}
                src={image}
                className="-scale-x-100"
              />
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-full">
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
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            repellat nostrum a quia culpa tempore sit saepe consequatur ipsa
            odit accusantium, exercitationem velit esse totam, dolorum eius
            vero. Eos, quidem? Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
            <span className="lg:hidden">
              .. <button> See more</button>
            </span>
            <p>
              Beatae cum quod dolores dolorum, sapiente voluptas iusto, esse
              ipsa perspiciatis inventore sint rerum sit eaque non. Non fugiat
              sunt in nobis? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Dolorem eveniet excepturi unde hic. Cumque impedit sapiente
              suscipit et quaerat temporibus harum, similique ab, aut ratione
              voluptate rem. Nobis, possimus laborum.
            </p>
            <button className="lg:hidden">See less</button> */}
          </p>
          <h3 className="text-xl pt-4 pb-2">Sizes</h3>
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
                UpdateShoppingCart('add')
              }}
              className="flex justify-center items-center bg-red-500 border-2 border-red-500 py-2 px-5 lg:px-8 text-xl text-white font-semibold">
              {' '}
              Buy Now!
            </button>
            <button
              onClick={() => {
                console.log(detailsIsVisible)
              }}
              className="flex justify-center items-center py-2 px-5 lg:px-8  text-xl border-2 border-red-500 text-red-500 font-semibold">
              Add to Cart
            </button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Details
