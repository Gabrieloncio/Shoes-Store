import { faHeart, faX } from '@fortawesome/free-solid-svg-icons'
import { faHeart as RegularHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useContext } from 'react'
import { ProviderContext } from '../../provider/Provider'
import localforage from 'localforage'
import { useEffect } from 'react'
// import useFavouriteIcon from '../../utils/useUpdateFavouriteIcon'

const ProductCard = (props) => {
  const { UpdateFavourites, favourites, OpenProductDetails, handleDetailsSection } =
    useContext(ProviderContext)

  const [, name, color, img, frontImage, sizes, price] = props.product

  const [value, setValue] = useState(false)

  useEffect(() => {
    const parsedFavourites = favourites.map((favouriteProduct) => {
      return favouriteProduct.replace(/"/g, '').includes(`${name},${color}`)
    })
    return parsedFavourites.includes(true) ? setValue(true) : setValue(false)
  }, [favourites])

  return (
    <div className="aspect-[2/3] w-[calc(50%-2rem)] sm:w-[calc(33%-2rem)] lg:w-[calc(25%-2rem)] xl:w-[calc(16%-2rem)] z-0 bg-white relative rounded-2xl flex overflow-hidden justify-center">
      <div className="flex flex-col p-2 items-center w-full top-0 left-0">
        <img src={img} alt="img" className="h-1/2" />
        <div className="h-1/2 w-full px-3 text-lg">
          <h3 className="font-extrabold text-ownred">{name}</h3>
          <h3 className="text-sm font-bold">{color}</h3>
          <h3 className="font-extrabold text-ownred">
            {price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            })}
          </h3>
        </div>
        <button
          id={`${name}-${color}`}
          onClick={() => {
            UpdateFavourites(props.product, 'toggle')
          }}
          className="absolute top-4 right-4">
          <FontAwesomeIcon
            icon={RegularHeart}
            className="absolute right-0 text-3xl text-red-600 "
          />
          {value ? (
            <FontAwesomeIcon icon={faHeart} className="text-3xl text-red-600" />
          ) : null}
        </button>
        <div className="flex flex-row justify-evenly">
          <button
            onClick={() => {
              OpenProductDetails(props.product)
              handleDetailsSection('open')
            }}
            className="rounded-xl bg-red-600 text-white text-xl px-4 pb-1">
            Buy Now!
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
