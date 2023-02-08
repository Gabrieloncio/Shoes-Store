import Provider from './provider/Provider'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import Details from './components/Details/Details'
import { BrowserRouter } from 'react-router-dom'
import ContentContainer from './components/Content/ContentContainer'

const App = () => {
  return (
    <BrowserRouter>
      <Provider>
        <LoadingScreen />
        <ContentContainer />
        <Details />
      </Provider>
    </BrowserRouter>
  )
}

export default App
