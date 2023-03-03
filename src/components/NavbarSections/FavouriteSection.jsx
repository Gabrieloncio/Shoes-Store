import { useContext } from 'react'
import { ProviderContext } from '../../provider/Provider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import ItemFavourite from '../Items/ItemFavourites'

const FavouriteSection = () => {
  const { handleSection, section, idButton, favourites } =
    useContext(ProviderContext)

  return (
    <div
      className={`w-5/6 md:w-1/2 xl:w-1/4 z-40 absolute h-screen bg-white text-black duration-300 top-0 p-4 flex flex-col justify-between items-center border-l-2 border-black ${
        idButton === 'favourites' && section ? 'right-0' : '-right-full'
      }`}>
      <div className="w-full h-full flex flex-col px-3 pb-10 gap-5 ">
        <div className="w-full flex flex-row justify-between text-3xl font-bold">
          <button id="favourites" onClick={handleSection}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <h2>Favourites</h2>
        </div>

        {favourites.length > 0 ? (
          <ul className="w-full flex flex-col gap-3 text pr-5 overflow-y-auto">
            {favourites.map((product) => {
              return <ItemFavourite key={product.id} product={product} />
            })}
          </ul>
        ) : (
          <div className="h-5/6 flex items-center justify-center text-gray-500 italic">
            Woah, it's so empty here :(
          </div>
        )}
      </div>
      {/* <div
        className={`absolute duration-300 px-8 py-3 bg-black text-white ${
          wasRemoved ? 'bottom-3' : '-bottom-full'
        }`}>
        Product removed :(
      </div> */}
    </div>
  )
}

export default FavouriteSection
