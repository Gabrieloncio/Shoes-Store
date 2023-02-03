import { useContext } from 'react'
import { ProviderContext } from '../../provider/Provider'

const SizeButton = (props) => {
  const { selectSize } = useContext(ProviderContext)
  // props.selectedButton
  
  return (
    <li>
      <button
        onClick={() => {
          selectSize(JSON.stringify(props.product))
        }}
        className={`flex border-2 rounded-2xl  h-14 w-14 items-center justify-center ${props.selectedButton? 'border-red-600 bg-red-600 text-white' : 'border-black text-black'}`}>
        {(props.product).at(4)}
      </button>
    </li>
  )
}

export default SizeButton
