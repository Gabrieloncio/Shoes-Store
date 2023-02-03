import { useContext } from 'react'
import { ProviderContext } from '../../provider/Provider'

const DarkScreen = () => {
  const { detailsIsVisible, section, handleSection, HideIt } =
    useContext(ProviderContext)

  return (
    <div
      onClick={() => {
        section ? handleSection() : HideIt()
      }}
      className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 ${
        detailsIsVisible || section ? 'visible' : 'hidden'
      }`}></div>
  )
}

export default DarkScreen
