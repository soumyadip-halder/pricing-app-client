import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_REQUEST,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  HEALTH_CHECK_REQUEST,
  HEALTH_CHECK_SUCCESS,
  HEALTH_CHECK_FAILURE,
} from '../Actions/Login/Type'

const initLoginState = {
  error: false,
  isLoading: false,
  errorMessage: '',
  token: null,
  userId: null,
}

const loginReducer = (state = initLoginState, action) => {
  const { type, payload } = action
  switch (type) {
    case LOGIN_USER_REQUEST:
    case SIGN_UP_REQUEST:
      return {
        ...state,
        isLoading: true,
        token: null,
        userId: null,
        errorMessage: '',
        error: false,
      }
    case LOGIN_USER_FAILURE:
    case SIGN_UP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        token: null,
        userId: null,
        errorMessage: payload,
      }
    case LOGIN_USER_SUCCESS:
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: payload.token,
        userId: payload.userId,
        error: false,
        errorMessage: '',
      }
    case LOGOUT_USER_REQUEST:
      return {
        ...state,
        token: null,
        error: false,
        errorMessage: '',
        isLoading: false,
        userId: null,
      }
    case HEALTH_CHECK_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
        errorMessage: '',
        userId: null,
      }
    case HEALTH_CHECK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        errorMessage: '',
        userId: payload,
      }
    case HEALTH_CHECK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: payload,
        userId: null,
      }
    default:
      return state
  }
}

export default loginReducer
