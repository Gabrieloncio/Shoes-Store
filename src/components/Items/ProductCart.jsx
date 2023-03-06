import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { ProviderContext } from '../../provider/Provider'

const ProductCart = (props) => {
  const { UpdateShoppingCart, OpenProductDetails, handleDetailsSection } =
    useContext(ProviderContext)
  const { name, color, img, price, size, quantity } = props.product

  return (
    <li className="flex flex-col gap-4">
      <span className="w-full border-t-[1px] border-gray-400"></span>
      <ul className="flex flex-row justify-between">
        <ul
          // onClick={() => {
          //   OpenProductDetails(props.product)
          //   handleDetailsSection('open')
          // }}
          className="flex flex-row items-center gap-5 text-base font-semibold"
        >
          <li>
            <img
              src={img}
              alt="img"
              className="w-14 md:w-20 aspect-square border-[1px] border-gray-400 rounded-lg"
            />
          </li>
          <li>
            {name} - {color} - Size {size}
          </li>
        </ul>
        <ul className="flex flex-row items-center gap-5 pr-5">
          <li>
            <ul className="flex flex-row gap-5">
              <li className="flex gap-2 border-2 rounded-md text-lg w-min">
                <button
                  onClick={() => {
                    quantity > 1
                      ? UpdateShoppingCart('remove', props.product)
                      : console.log('no se puede mas mi pana')
                  }}
                  className={`${
                    quantity > 1 ? '' : 'bg-gray-400'
                  } w-8 rounded-l-md font-extrabold duration-75`}
                >
                  -
                </button>
                {quantity}
                <button
                  onClick={() => {
                    UpdateShoppingCart('add', props.product)
                  }}
                  className="w-8 rounded-l-md font-extrabold"
                >
                  +
                </button>
              </li>
              <li className="font-bold">
                {price.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD'
                })}
              </li>
            </ul>
          </li>
          <li>
            <button
              onClick={() => {
                UpdateShoppingCart('removeProduct', props.product)
              }}
            >
              <FontAwesomeIcon className="text-gray-500" icon={faTrashAlt} />
            </button>
          </li>
        </ul>
      </ul>
    </li>
  )
}

export default ProductCart
