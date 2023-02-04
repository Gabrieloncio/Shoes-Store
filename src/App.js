import Provider from './provider/Provider'
import Navbar from './components/Navbar/Navbar'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import Details from './components/Details/Details'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import ContentContainer from './components/Content/ContentContainer'

const App = () => {
  return (
    <BrowserRouter>
      <Provider>
        <Navbar />
        <LoadingScreen />
        <ContentContainer />
        <Details />
        <Footer />
      </Provider>
    </BrowserRouter>
  )
}

export default App
