import React, { lazy } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import withSuspense from '@/hoc/withSuspense'

const Driver = lazy(() => import('@/routes/Driver'))

const PageIndexView = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={withSuspense(Driver)} />
      </Switch>
    </BrowserRouter>
  )
}

export default PageIndexView
