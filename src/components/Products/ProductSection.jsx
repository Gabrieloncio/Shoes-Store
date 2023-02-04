import { Route, Routes } from 'react-router-dom'
import Checkout from '../Checkout/Checkout'
import ProductsContainer from './ProductContainer'

const ProductSection = () => {

  return (
    <section
      id="products"
      className="w-full min-h-[calc(100vh-2.75rem)] bg-red-500 flex flex-col overflow-x-hidden">
      <Routes>
        <Route path='/products' element={<ProductsContainer/>}/>
        <Route
          path="/products/slip_on"
          element={<ProductsContainer/>}
        />
        <Route
          path="/products/regular"
          element={<ProductsContainer/>}
        />
        <Route
          path="/products/high"
          element={<ProductsContainer/>}
        />
        <Route
          path="/products/old_school"
          element={<ProductsContainer/>}
        />
        <Route
          path="/products/limited"
          element={<ProductsContainer/>}
        />
        <Route
          path="/checkout"
          element={<Checkout />}
        />
      </Routes>
    </section>
  )
}

export default ProductSection
