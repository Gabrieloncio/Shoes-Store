import ProductCard from './ProductCard'
import stock from '../../assets/Stock/stock.json'
import { useContext } from 'react'
import { ProviderContext } from '../../provider/Provider'

const ProductsContainer = (props) => {
  const { productType } = useContext(ProviderContext)
  let Cards = []
  stock.forEach((product) => {
    // console.log(product)
    if (productType == null) {
      Cards.push(<ProductCard key={product.id} product={product} />)
    } else if (product.name ===(productType)) {
      Cards.push(<ProductCard key={product.id} product={product} />)
    }
  })

  return (
    <div id='Products'
      className=" 
      w-full min-h-[calc(100vh-2.75rem)] bg-red-500 
      
      flex flex-col gap-5 md:px-[8%] lg:gap-9 py-12 px-5">
      <h2  className="text-5xl font-bold italic text-white">
        {productType ? productType : 'Products'}
      </h2>
      <div className='flex'>
        <div className="flex flex-row w-full flex-wrap justify-between gap-6 md:justify-start">
          {Cards}
        </div>
      </div>
    </div>
  )
}

export default ProductsContainer
