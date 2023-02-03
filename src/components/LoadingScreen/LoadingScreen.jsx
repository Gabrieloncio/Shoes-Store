import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { ProviderContext } from '../../provider/Provider'

const LoadingScreen = () => {
  const { loading } = useContext(ProviderContext)

  return (
    <div
      className={`bg-black fixed z-50 h-full w-full transition-transform duration-200 top-0 left-0 flex justify-center items-center pb-16 ${
        loading ? 'scale-x-100 origin-left' : 'scale-x-0 origin-right'
      } `}>
      <p className="text-white text-5xl font-semibold italic">Loading</p>
    </div>
  )
}

export default LoadingScreen
