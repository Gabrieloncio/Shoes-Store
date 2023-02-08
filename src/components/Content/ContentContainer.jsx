import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Home from '../Home/Home'
import Checkout from '../Checkout/Checkout'
import ProductsContainer from '../Products/ProductContainer'
import NotFound from '../NotFound/NotFound'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const ContentContainer = () => {
  const [comp, setComp] = useState(<Home />)
  const currentURl = useLocation().pathname

  useEffect(() => {
    if (currentURl.includes('home') || currentURl === '/') {
      setTimeout(() => {
        setComp(
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        )
      }, 1000)
    } else if (currentURl.includes('products')) {
      setTimeout(() => {
        setComp(
          <>
            <Navbar />
            <ProductsContainer />
            <Footer />
          </>
        )
      }, 1000)
    } else if (currentURl.includes('checkout')) {
      setTimeout(() => {
        setComp(
          <>
            <Checkout />
            <Footer />
          </>
        )
      }, 1000)
    } else {
      setTimeout(() => {
        setComp(<NotFound />)
      }, 1000)
    }
  }, [currentURl])

  return comp
}

export default ContentContainer
