import { signInAPI, signUpAPI, healthCheck } from '../../../api/Fetch'

import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOGOUT_USER_REQUEST,
  HEALTH_CHECK_REQUEST,
  HEALTH_CHECK_SUCCESS,
  HEALTH_CHECK_FAILURE,
} from './Type'

export const loginUser = (req) => (dispatch) => {
  dispatch(loginUserRequest())
  signInAPI(req)
    .then((result) => {
      const { data } = result
      if ('token' in data) {
        localStorage.setItem(
          '_jsonwebtoken',
          JSON.stringify(data && data.token)
        )
      } else {
        return dispatch(loginUserError('Invalid Login'))
      }
      dispatch(loginUserSuccess(data))
    })
    .catch((error) => {
      dispatch(loginUserError(error.response.data.errorMessage))
    })
}

const loginUserRequest = () => {
  return {
    type: LOGIN_USER_REQUEST,
  }
}

export const loginUserSuccess = (payload) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload,
  }
}

export const loginUserError = (payload) => {
  return {
    type: LOGIN_USER_FAILURE,
    payload,
  }
}

export const signUpUserRequest = () => {
  return {
    type: SIGN_UP_REQUEST,
  }
}

export const signUpUserSuccess = (payload) => {
  return {
    type: SIGN_UP_SUCCESS,
    payload,
  }
}

export const signUpUserError = (payload) => {
  return {
    type: SIGN_UP_FAILURE,
    payload,
  }
}

export const signUpUser = (req) => (dispatch) => {
  dispatch(signUpUserRequest())
  signUpAPI(req)
    .then((result) => {
      const { data } = result
      if ('token' in data) {
        localStorage.setItem(
          '_jsonwebtoken',
          JSON.stringify(data && data.token)
        )
      } else {
        return dispatch(signUpUserError('Invalid Login'))
      }
      dispatch(signUpUserSuccess(data))
    })
    .catch((error) => {
      dispatch(signUpUserError(error.response.data.errorMessage))
    })
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER_REQUEST,
  }
}

export const healthCheckRequest = () => {
  return {
    type: HEALTH_CHECK_REQUEST,
  }
}

export const healthCheckSuccess = (payload) => {
  return {
    type: HEALTH_CHECK_SUCCESS,
    payload,
  }
}

export const healthCheckFailure = (payload) => {
  return {
    type: HEALTH_CHECK_FAILURE,
    payload,
  }
}

export const healthCheckFunc = () => (dispatch) => {
  dispatch(healthCheckRequest())
  healthCheck()
    .then((result) => {
      const { data } = result
      dispatch(healthCheckSuccess(data && data.userId))
    })
    .catch((error) => {
      dispatch(healthCheckFailure(error.response.data.errorMessage))
      localStorage.removeItem('_jsonwebtoken')
    })
}
