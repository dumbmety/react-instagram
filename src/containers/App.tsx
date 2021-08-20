import { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from '../components/Layout'
import routes from '../routes'

export default function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Suspense fallback="Loading...">
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Suspense>
        </Layout>
      </Switch>
    </Router>
  )
}
