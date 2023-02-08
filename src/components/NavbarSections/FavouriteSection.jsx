import { useContext } from 'react'
import { ProviderContext } from '../../provider/Provider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import ItemFavourite from '../Items/ItemFavourites'
import { useEffect} from 'react'

const FavouriteSection = () => {
  const {
    handleSection,
    section,
    idButton,
    wasRemoved,
    favourites
  } = useContext(ProviderContext)
  useEffect(() => {
    console.log(favourites)
  }, [favourites])

  return (
    <div
      className={`w-5/6 md:w-1/2 xl:w-1/4 z-40 absolute h-screen bg-white text-black duration-300 top-0 p-4 flex flex-col justify-between items-center border-l-2 border-black ${
        idButton === 'favourites' && section ? 'right-0' : '-right-full'
      }`}>
      <div className="w-full h-5/6 flex flex-col px-3 gap-5 ">
        <div className="w-full flex flex-row justify-between text-3xl font-bold">
          <button id="favourites" onClick={handleSection}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <button>Favourites</button>
        </div>
        <ul className="w-full flex flex-col gap-3 text pr-5 overflow-y-auto">
          {favourites.map((data) => {
            const product = JSON.parse(data)
            return <ItemFavourite key={product} product={product} />
          })}
        </ul>
      </div>
      <div
        className={`absolute duration-300 px-8 py-3 bg-black text-white ${
          wasRemoved ? 'bottom-3' : '-bottom-full'
        }`}>
        Product removed :(
      </div>
    </div>
  )
}

export default FavouriteSection
