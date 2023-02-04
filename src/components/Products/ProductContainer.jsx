import ProductCard from './ProductCard'
import stock from '../../assets/Stock/stock.json'
import { useContext } from 'react'
import { ProviderContext } from '../../provider/Provider'

const ProductsContainer = (props) => {
  const { productType } = useContext(ProviderContext)
  let Cards = []
  stock.forEach((a) => {
    const product = Object.values(a)
    if (productType == null) {
      Cards.push(<ProductCard key={product} product={product} />)
    } else if (product.includes(productType)) {
      Cards.push(<ProductCard key={product} product={product} />)
    }
  })

  return (
    <div
      id={productType ? productType : 'Products'}
      className=" 
      w-full min-h-[calc(100vh-2.75rem)] bg-red-500 
      
      flex flex-col  gap-5 md:px-[8%] lg:gap-9 pt-12 px-2">
      <h2 className="text-5xl font-bold italic text-white">
        {productType ? productType : 'Products'}
      </h2>
      <div className="flex flex-row flex-wrap w-full justify-center gap-5 md:justify-start ">
        {Cards}
      </div>
    </div>
  )
}

export default ProductsContainer
