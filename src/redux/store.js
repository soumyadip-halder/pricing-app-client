import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import loginReducer from './Reducers/loginReducer'
import pricingReducer from './Reducers/pricingReducer'

const reducer = combineReducers({
  loginReducer: loginReducer,
  pricingReducer: pricingReducer,
})

let middlewares = [thunk]
if (process.env.REACT_APP_ENV === `dev`) {
  middlewares.push(logger)
}

const store = createStore(reducer, applyMiddleware(...middlewares))

export default store
