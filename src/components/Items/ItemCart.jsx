import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { ProviderContext } from '../../provider/Provider'

const ItemCart = (props) => {
  const { UpdateShoppingCart } = useContext(ProviderContext)
  const { name, color, img, price, size, quantity } = props.product
  return (
    <li className="flex flex-row justify-between items-start">
      
      <div className="flex flex-row gap-2 items-start">
        <img src={img} alt="img" className="w-14 md:w-20 h-14 md:h-20" />
        <ul className="flex flex-col text-lg">
          <li className="font-bold text-start">
            {name} - {color}
          </li>
          <li className="text-gray-600">Size: {size} </li>
          <li className="font-bold">
            {price
              ? price.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD'
                })
              : null}
          </li>
          <li className="flex gap-2 border-2 rounded-md text-lg w-min">
            <button
              onClick={() => {
                quantity > 1
                  ? UpdateShoppingCart('remove', props.product)
                  : console.log('no se puede mas mi pana')
              }}
              className={`${
                quantity > 1 ? '' : 'bg-gray-300 text-white'
              } w-8 rounded-l-md font-extrabold duration-75`}>
              -
            </button>
            {quantity}
            <button
              onClick={() => {
                UpdateShoppingCart('add', props.product)
              }}
              className="w-8 rounded-l-md font-extrabold">
              +
            </button>
          </li>
        </ul>
      </div>
      <button
        onClick={() => {
          UpdateShoppingCart('removeProduct', props.product)
        }}>
        <FontAwesomeIcon className="text-gray-500" icon={faTrashAlt} />
      </button>
    </li>
  )
}

export default ItemCart
