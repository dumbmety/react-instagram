import { lazy } from 'react'

const routes = [
  {
    exact: true,
    path: '/',
    component: lazy(() => import('../pages/Home/Home'))
  },
  {
    exact: true,
    path: '/direct/inbox',
    component: lazy(() => import('../pages/Direct/Direct'))
  }
]

export default routes
