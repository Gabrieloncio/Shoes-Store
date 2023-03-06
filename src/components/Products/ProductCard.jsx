import { faBagShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as RegularHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useContext } from 'react'
import { ProviderContext } from '../../provider/Provider'
import { useEffect } from 'react'

const ProductCard = (props) => {
  const {
    UpdateFavourites,
    favourites,
    OpenProductDetails,
    handleDetailsSection,
    OpenProductBuyNow,
    handleBuyNowSection
  } = useContext(ProviderContext)

  const { name, color, img, price } = props.product
  const [value, setValue] = useState(false)

  useEffect(() => {
    favourites
      .map((product) => {
        return product.name === name && product.color === color
      })
      .includes(true)
      ? setValue(true)
      : setValue(false)
  }, [favourites])

  return (
    <div className="aspect-[2/3] w-full z-0 bg-white relative rounded-2xl flex overflow-hidden justify-center">
      <div className="flex flex-col p-2 items-center w-full top-0 left-0">
        <img
          onClick={() => {
            OpenProductDetails(props.product)
            handleDetailsSection('open')
          }}
          src={img}
          alt="img"
          className="h-1/2 cursor-pointer"
        />
        <div className="h-1/2 w-full px-3 text-lg flex flex-col justify-start">
          <span>
            <button
              onClick={() => {
                OpenProductDetails(props.product)
                handleDetailsSection('open')
              }}
              className="font-extrabold text-ownred"
            >
              {name}
            </button>
          </span>
          <span className="text-sm font-bold">{color}</span>
          <span className="font-extrabold text-ownred">
            {price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            })}
          </span>
        </div>
        <button
          id={`${name}-${color}`}
          onClick={() => {
            UpdateFavourites(props.product, 'toggle')
          }}
          className="absolute top-4 right-4"
        >
          {value ? (
            <FontAwesomeIcon
              icon={faHeart}
              className="text-3xl text-red-600 animate-addToFav"
            />
          ) : (
            <FontAwesomeIcon
              icon={RegularHeart}
              className="text-3xl text-red-600"
            />
          )}
        </button>
        <button
          onClick={() => {
            OpenProductBuyNow(props.product)
            handleBuyNowSection('open')
          }}
        >
          <FontAwesomeIcon
            icon={faBagShopping}
            className="text-3xl text-red-600 absolute bottom-4 right-4"
          />
        </button>
        <div className="flex flex-row">
          <button
            onClick={() => {
              OpenProductDetails(props.product)
              handleDetailsSection('open')
            }}
            className="text-xl absolute bottom-4 left-5 font-bold hover:underline"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
