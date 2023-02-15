import { useContext } from 'react'
import { ProviderContext } from '../../provider/Provider'

const SizeButton = (props) => {
  const {
    selectSize,
    selectedProductSize,
    setSelectedProductSize,
    setChooseSize
  } = useContext(ProviderContext)
  const { size } = props.product
  const selectedButton =
    selectedProductSize === null ? false : selectedProductSize.size === size

  return (
    <li>
      <button
        onClick={() => {
          setChooseSize(false)
          selectedButton
            ? setSelectedProductSize(null)
            : selectSize(props.product)
        }}
        className={`flex border-2  h-14 w-14 items-center justify-center ${
          selectedButton ? 'border-red-600 border-4' : 'border-black border-2'
        }`}>
        {size}
      </button>
    </li>
  )
}

export default SizeButton
