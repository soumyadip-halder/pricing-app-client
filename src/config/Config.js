const envDetails = {
  dev: {
    BASE_URL: 'http://localhost:1500',
    SIGNIN: '/signin',
    SIGNUP: '/signup',
    GET_PRICE: '/prices',
    GET_PRICE_BY_USER: '/prices/{userId}',
    GET_PRICE_BY_ID: '/price/{id}',
    PATCH_PRICE_ID: '/price/{id}',
    POST_PRICES: '/prices',
    HEALTH_CHECK: '/health',
  },
  sit: {
    BASE_URL: 'http://localhost:1500',
    SIGNIN: '/signin',
    SIGNUP: '/signup',
    GET_PRICE: '/prices',
    GET_PRICE_BY_USER: '/prices/{userId}',
    GET_PRICE_BY_ID: '/price/{id}',
    PATCH_PRICE_ID: '/price/{id}',
    POST_PRICES: '/prices',
    HEALTH_CHECK: '/health',
  },
  prd: {
    BASE_URL: 'http://localhost:1500',
    SIGNIN: '/signin',
    SIGNUP: '/signup',
    GET_PRICE: '/prices',
    GET_PRICE_BY_USER: '/prices/{userId}',
    GET_PRICE_BY_ID: '/price/{id}',
    PATCH_PRICE_ID: '/price/{id}',
    POST_PRICES: '/prices',
    HEALTH_CHECK: '/health',
  },
}

const env = process.env.REACT_APP_ENV ? process.env.REACT_APP_ENV : 'dev'

export default envDetails[env]
