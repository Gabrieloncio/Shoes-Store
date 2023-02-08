import { Route, Routes, useRoutes } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'
import ContentContainer from './ContentContainer'

const Content = () => {
  const Component = <ContentContainer />
  const Roots = () =>
    useRoutes([
      '/',
      '/home',
      '/products',
      '/products/slip_on',
      '/products/regular',
      '/products/high',
      '/products/old_school',
      '/products/limited',
      '/checkout',
    ]).map((path) => ({ path, Component }))
  return (
    <>
      <Roots />
      {/* <Routes>
        <Route path='*' element={<NotFound/>}/>
      </Routes> */}
    </>
  )
}

export default Content
