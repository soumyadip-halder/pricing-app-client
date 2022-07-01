import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const AuthRoute = ({ path, component: Component }) => {
  const token = localStorage.getItem('_jsonwebtoken')

  if (token) {
    return <Route component={Component} path={path} />
  } else {
    return <Redirect to="/login" />
  }
}

export default AuthRoute
