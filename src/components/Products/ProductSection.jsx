// import ProductCard from "./ProductCard"
import { Route, Routes, useRoutes } from 'react-router-dom'
import Checkout from '../Checkout/Checkout'
import ProductsContainer from './ProductContainer'

const ProductSection = () => {
  const element = <ProductsContainer />
  const Products = () =>
    useRoutes(['/', '/home', '/products'].map((path) => ({ path, element })))

  return (
    <section
      id="products"
      className="w-full min-h-[calc(100vh-2.75rem)] bg-red-500 flex flex-col overflow-x-hidden">
      <Products />
      <Routes>
        <Route
          path="/products/slip_on"
          element={<ProductsContainer products={'Slip On'} />}
        />
        <Route
          path="/products/regular"
          element={<ProductsContainer products={'Regular'} />}
        />
        <Route
          path="/products/high"
          element={<ProductsContainer products={'High'} />}
        />
        <Route
          path="/products/old_school"
          element={<ProductsContainer products={'Old School'} />}
        />
        <Route
          path="/products/limited"
          element={<ProductsContainer products={'Limited'} />}
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
