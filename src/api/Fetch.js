import config from '../config/Config'

import { serviceRequest } from './ServiceRequest'
const {
  BASE_URL,
  SIGNIN,
  SIGNUP,
  GET_PRICE,
  GET_PRICE_BY_USER,
  GET_PRICE_BY_ID,
  PATCH_PRICE_ID,
  POST_PRICES,
  HEALTH_CHECK,
} = config

export const signInAPI = (req) => {
  const url = `${BASE_URL}${SIGNIN}`
  let reqBody = `${JSON.stringify(req)}`
  return serviceRequest(url, 'POST', reqBody)
}

export const signUpAPI = (req) => {
  const url = `${BASE_URL}${SIGNUP}`
  let reqBody = `${JSON.stringify(req)}`
  return serviceRequest(url, 'POST', reqBody)
}

export const getPrice = (params = null) => {
  const url = `${BASE_URL}${GET_PRICE}`
  return serviceRequest(url, 'GET', undefined, params)
}

export const getPriceByUser = (userId, params) => {
  let url = `${BASE_URL}${GET_PRICE_BY_USER}`
  url = url.replace('{userId}', userId)
  return serviceRequest(url, 'GET', undefined, params)
}

export const getPriceById = (id, params) => {
  console.log(id)
  let url = `${BASE_URL}${GET_PRICE_BY_ID}`
  url = url.replace('{id}', id)
  return serviceRequest(url, 'GET', undefined, params)
}

export const patchPrice = (req, id) => {
  let url = `${BASE_URL}${PATCH_PRICE_ID}`
  url = url.replace('{id}', id)
  let reqBody = `${JSON.stringify(req)}`
  return serviceRequest(url, 'PATCH', reqBody)
}

export const postPrice = (req) => {
  const url = `${BASE_URL}${POST_PRICES}`
  let reqBody = `${JSON.stringify(req)}`
  return serviceRequest(url, 'POST', reqBody)
}

export const healthCheck = () => {
  const url = `${BASE_URL}${HEALTH_CHECK}`
  return serviceRequest(url, 'GET', undefined)
}
