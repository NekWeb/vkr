import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Tracks} from './pages/Tracks'
import {AuthPage} from './pages/AuthPage'
import {UpLoad} from './pages/UpLoad'
import { Faq } from './pages/FAQ'
import { Subscribe } from './pages/Subscribe'

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/tracks" exact>
          <Tracks />
        </Route>
        <Route path="/upload" exact>
          <UpLoad />
        </Route>
        <Route path="/faq" exact>
          <Faq />
        </Route>
        <Route path="/subsribe" exact>
          <Subscribe />
        </Route>
        <Redirect to="/tracks" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}
