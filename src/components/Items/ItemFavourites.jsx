import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'
import localforage from 'localforage'
import { ProviderContext } from '../../provider/Provider'

const ItemFavourite = (props) => {
  const {
    UpdateFavourites,
    handleSection,
    OpenProductDetails,
    detailsIsVisible,
    handleDetailsSection
  } = useContext(ProviderContext)
  const [, name, color, image, , , price] = props.product
  const [value, setValue] = useState(false)

  const handleFunctions = () => {
    if (detailsIsVisible) {
      handleDetailsSection('close')
      setTimeout(() => {
        OpenProductDetails(props.product)
        handleDetailsSection('open')
      }, 1000)
    }
    if (!detailsIsVisible) {
      OpenProductDetails(props.product)
      handleDetailsSection('open')
    }
    handleSection()
    console.log(detailsIsVisible)
  }

  const handleClick = () => {
    setValue(!value)
    localforage.setItem(`${name}-${color}`, !value)
  }

  return (
    <li className="flex flex-row justify-between gap-2 items-start">
      <div className="flex flex-row gap-2 items-start">
        <img src={image} alt="img" className="w-14 md:w-20 h-14 md:h-20" />
        <ul className="flex flex-col text-lg">
          <button
            onClick={() => {
              handleFunctions()
            }}
            className="font-bold text-start">
            {name}-{color}
          </button>
          <li className="font-semibold">
            {price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            })}
          </li>
        </ul>
      </div>
      <button
        onClick={() => {
          UpdateFavourites(props.product, 'remove')
          handleClick()
        }}>
        <FontAwesomeIcon icon={faX} />
      </button>
    </li>
  )
}

export default ItemFavourite
