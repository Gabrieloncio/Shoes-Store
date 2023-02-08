import { useContext } from 'react'
import { ProviderContext } from '../../provider/Provider'

const SizeButton = (props) => {
  const { selectSize, selectedProductSize, setSelectedProductSize, setChooseSize } = useContext(ProviderContext)
  const selectedButton =
    selectedProductSize === null
      ? false
      : selectedProductSize.includes(props.product.at(4))

  return (
    <li>
      <button
        onClick={() => {
          // selectSize(JSON.stringify(props.product))
          setChooseSize(false)
          selectedButton
            ? setSelectedProductSize(null)
            : selectSize(JSON.stringify(props.product))
        }}
        className={`flex border-2  h-14 w-14 items-center justify-center ${
          selectedButton ? 'border-red-600 border-4' : 'border-black border-2'
        }`}>
        {props.product.at(4)}
      </button>
    </li>
  )
}

export default SizeButton
