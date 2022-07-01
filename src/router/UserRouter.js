import { Switch } from 'react-router-dom'
import React from 'react'
import PriceList from '../screens/PriceList'
import PriceUpdate from '../screens/PriceUpdate'
import { routes } from '../util/Constants'
import AuthRoute from './AuthRoute'
import PageNotFound from '../components/PageNotFound'

const UserRouter = ({ path }) => {
  const { GET_PRICE, PATCH_PRICE_ID } = routes
  return (
    <Switch>
      <AuthRoute path={`${path}${GET_PRICE}`} component={PriceList} />
      <AuthRoute path={`${path}${PATCH_PRICE_ID}`} component={PriceUpdate} />
      <AuthRoute path={`${path}/*`} component={PageNotFound} />
    </Switch>
  )
}

export default UserRouter
