import Provider from './provider/Provider'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import Details from './components/Details/Details'
import { BrowserRouter } from 'react-router-dom'
import ProductSection from './components/Products/ProductSection'
import Footer from './components/Footer/Footer'
// import Checkout from './components/Checkout/Checkout'

const App = () => {
  return (
    <BrowserRouter>
      <Provider>
        <Home />
        <Navbar />
        <ProductSection />
        <Details />
        <LoadingScreen />
        <Footer />
      </Provider>
    </BrowserRouter>
  )
}

export default App
