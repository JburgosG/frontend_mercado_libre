import React, { Suspense } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const Home = React.lazy(() => import('../pages/Home'))
const Result = React.lazy(() => import('../pages/Result'))
const ProductDetail = React.lazy(() => import('../pages/ProductDetail'))

const App = () => {
  return (
    <Suspense fallback={<div />}>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/items' exact component={Result} />
          <Route path='/items/:id' exact component={ProductDetail} />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default App
