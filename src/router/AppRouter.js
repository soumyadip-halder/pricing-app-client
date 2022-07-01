import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import AuthRoute from './AuthRoute'
import PageNotFound from '../components/PageNotFound'
import ErrorPage from '../components/ErrorPage'
import { routes } from '../util/Constants'
import Home from '../components/Home'

const AppRouter = () => {
  const { DEFAULT } = routes
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <AuthRoute path={`${DEFAULT}`} component={Home} />
          <Route path="/login" component={SignIn} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/" component={SignIn} />
          <Route exact path="/error" component={ErrorPage} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Container>
  )
}

export default AppRouter
