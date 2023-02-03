import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { ProviderContext } from '../../provider/Provider'
import { NavLink } from 'react-router-dom'

const ProductCart = (props) => {
  const { UpdateShoppingCart } = useContext(ProviderContext)
  const [name, color, image, price, size] = JSON.parse(props.product)

  return (
    <li className="flex flex-col gap-4">
      <span className="w-full border-t-[1px] border-gray-400"></span>
      <ul className="flex flex-row justify-between">
        <ul className="flex flex-row items-center gap-5 text-lg font-semibold">
          <li>
            <NavLink>
              <img
                src={image}
                alt="img"
                className="w-14 md:w-20 aspect-square border-[1px] border-gray-400 rounded-lg"
              />
            </NavLink>
          </li>
          <li>
            <NavLink>
              {name} - {color} - Size {size}
            </NavLink>
          </li>
        </ul>
        <ul className="flex flex-row items-center gap-5 pr-5">
          <li className='font-bold'>
            {price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            })}
          </li>
          <li>
            <button
              onClick={() => {
                UpdateShoppingCart('remove', JSON.stringify(props.product))
              }}>
              <FontAwesomeIcon className="text-gray-500" icon={faTrashAlt} />
            </button>
          </li>
        </ul>
      </ul>
    </li>
  )
}

export default ProductCart
