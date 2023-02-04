import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Home from '../Home/Home'
import Checkout from '../Checkout/Checkout'
import ProductsContainer from '../Products/ProductContainer'

const ContentContainer = () => {
  const [comp, setComp] = useState(<Home />)
  const currentURl = useLocation().pathname

  useEffect(() => {
    if (currentURl.includes('home') || currentURl === '/') {
      setTimeout(() => {
        setComp(<Home />)
      }, 1000)
    } else if (currentURl.includes('products')) {
      setTimeout(() => {
        setComp(<ProductsContainer />)
      }, 1000)
    } else if (currentURl.includes('checkout')) {
      setTimeout(() => {
        setComp(<Checkout />)
      }, 1000)
    }
  }, [currentURl])

  return comp
}

export default ContentContainer
