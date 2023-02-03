import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faX } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { ProviderContext } from '../../provider/Provider'

const ItemCart = (props) => {
  const { UpdateShoppingCart } = useContext(ProviderContext)
  const [name, color, image, price, size] = JSON.parse(props.product)
  return (
    <li className="flex flex-row justify-between items-start">
      <div className="flex flex-row gap-2 items-start">
        {/* <div className="w-24 h-24 bg-black">{image}</div> */}
        <img src={image} alt="img" className="w-14 md:w-20 h-14 md:h-20" />
        <ul className="flex flex-col text-lg">
          <button className="font-bold text-start">
            {name} - {color}
          </button>
          <li className="text-gray-600">{size} </li>
          <li className="font-bold">{price
              ? price.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD'
                })
              : null}</li>
        </ul>
      </div>
      <button
        onClick={() => {
          // selectSize(data.product, data.size)
          UpdateShoppingCart('remove', JSON.stringify(props.product))
          // console.log(JSON.parse(props.product))
          // console.log(JSON.stringify(data))
        }}>
        <FontAwesomeIcon className='text-gray-500' icon={faTrashAlt} />
      </button>
    </li>
  )
}

export default ItemCart
