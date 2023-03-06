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
  const shoesRoutes = [
    'regular',
    'slip_on',
    'old_school',
    'high',
    'limited'
  ].map((shoeTypeURL) => {
    return currentURl.split('/').at(2) === shoeTypeURL ? true : false
  })

  useEffect(() => {
    if (currentURl === '/home' || currentURl === '/') {
      setTimeout(() => {
        setComp(
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        )
      }, 600)
    } else if (currentURl === '/products' || shoesRoutes.includes(true)) {
      setTimeout(() => {
        setComp(
          <>
            <Navbar />
            <ProductsContainer />
            <Footer />
          </>
        )
      }, 600)
    } else if (currentURl === '/checkout') {
      setTimeout(() => {
        setComp(
          <>
            <Checkout />
            <Footer />
          </>
        )
      }, 600)
    } else {
      setTimeout(() => {
        setComp(<NotFound />)
      }, 600)
    }
  }, [currentURl])

  return comp
}

export default ContentContainer
