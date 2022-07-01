import { Button } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import SignForm from '../components/SignForm'
import { connect } from 'react-redux'
import { loginUser } from '../redux/Actions/Login'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { routes } from '../util/Constants'

function SignIn(props) {
  const { isLoading, loginUser, errorMessage, error, token } = props
  const { DEFAULT, GET_PRICE, SIGNUP } = routes
  let history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const token1 = localStorage.getItem('_jsonwebtoken')
    if (token1) {
      history.push(`${DEFAULT}${GET_PRICE}`)
    }
  }, [history, DEFAULT, GET_PRICE, token])

  if (isLoading) {
    return <div>Loading....</div>
  }

  return (
    <Container>
      <br />
      <h2>SignIn Form</h2>
      <hr />
      <SignForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />
      <br />
      <div className="d-flex flex-row">
        <div className="mr-10">
          <Button
            variant="primary"
            type="button"
            onClick={() => loginUser({ email, password })}
          >
            SignIn
          </Button>
        </div>
        <div>&nbsp;&nbsp;&nbsp;</div>
        <div>
          <Button
            variant="primary"
            type="button"
            onClick={() => history.push(SIGNUP)}
          >
            Create New
          </Button>
        </div>
      </div>
      <br />
      {error ? <div className="text-danger">{errorMessage}</div> : null}
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    error: state.loginReducer.error,
    isLoading: state.loginReducer.isLoading,
    errorMessage: state.loginReducer.errorMessage,
    token: state.loginReducer.token,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (req) => dispatch(loginUser(req)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
