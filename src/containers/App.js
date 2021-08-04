import { BrowserRouter as Router, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import Direct from '../pages/Direct/Direct'
import Home from '../pages/Home/Home'

export default function App() {
  return (
    <Router>
      <Layout>
        <Route path="/direct" component={Direct} />
        <Route path="/" exact component={Home} />
      </Layout>
    </Router>
  )
}
