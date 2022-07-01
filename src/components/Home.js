import React, { useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import UserRouter from '../router/UserRouter'
import { Container, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser, healthCheckFunc } from '../redux/Actions/Login'
import ScrollToTop from './ScrollToTop'
import { resetAll } from '../redux/Actions/Pricing'
import { routes } from '../util/Constants'

const Home = (props) => {
  const { path } = useRouteMatch()
  let history = useHistory()
  const { SIGNIN } = routes

  const { logoutUser, resetAll, healthCheckFunc, error, isLoading } = props

  useEffect(() => {
    const token = localStorage.getItem('_jsonwebtoken')
    if (token) {
      healthCheckFunc()
    }
  }, [])

  useEffect(() => {
    if (error) {
      localStorage.removeItem('_jsonwebtoken')
      logoutUser()
      resetAll()
      history.push(SIGNIN)
    }
  }, [error, SIGNIN])

  if (isLoading) {
    return <div>Loading....</div>
  }

  return (
    <Container>
      <br />
      <Button
        variant="primary"
        type="button"
        onClick={() => {
          localStorage.removeItem('_jsonwebtoken')
          logoutUser()
          resetAll()
          history.push(SIGNIN)
        }}
      >
        Sign Out
      </Button>
      <br />
      <hr />
      <ScrollToTop />
      <UserRouter path={path} />
    </Container>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    resetAll: () => dispatch(resetAll()),
    healthCheckFunc: () => dispatch(healthCheckFunc()),
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.loginReducer.error,
    isLoading: state.loginReducer.isLoading,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
