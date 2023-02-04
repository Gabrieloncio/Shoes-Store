import { Route, Routes, useRoutes } from 'react-router-dom'
import ContentContainer from './ContentContainer'

const Content = () => {
  const HomeComponent = <ContentContainer/>
  const HomeRoutes = () =>
    useRoutes(['/', '/home']).map((path) => ({ path, HomeComponent }))

  return (
    <>
      <HomeRoutes />
      <Routes>
        <Route path="/products" element={<ContentContainer  />} />
        <Route
          path="/products/slip_on"
          element={<ContentContainer  />}
        />
        <Route
          path="/products/regular"
          element={<ContentContainer />}
        />
        <Route
          path="/products/high"
          element={<ContentContainer />}
        />
        <Route
          path="/products/old_school"
          element={<ContentContainer />}
        />
        <Route
          path="/products/limited"
          element={<ContentContainer/>}
        />
        <Route path="/checkout" element={<ContentContainer/>} />
      </Routes>
    </>
  )
}

export default Content
