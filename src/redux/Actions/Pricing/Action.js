import {
  getPrice,
  getPriceByUser,
  getPriceById,
  patchPrice,
  postPrice,
} from '../../../api/Fetch'

import {
  GET_ALL_PRICE_REQUEST,
  GET_ALL_PRICE_BY_USERID_REQUEST,
  GET_ALL_PRICE_BY_ID_REQUEST,
  GET_ALL_PRICE_SUCCESS,
  GET_ALL_PRICE_BY_USERID_SUCCESS,
  GET_ALL_PRICE_BY_ID_SUCCESS,
  GET_ALL_PRICE_ERROR,
  GET_ALL_PRICE_BY_USERID_ERROR,
  GET_ALL_PRICE_BY_ID_ERROR,
  PATCH_PRICE_ID_REQUEST,
  PATCH_PRICE_ID_SUCCESS,
  PATCH_PRICE_ID_ERROR,
  POST_PRICES_REQUEST,
  POST_PRICES_SUCCESS,
  POST_PRICES_ERROR,
  RESET_ALL,
} from './Type'

export const getAllPriceRequest = () => {
  return {
    type: GET_ALL_PRICE_REQUEST,
  }
}
export const getAllPriceRequestByUserid = () => {
  return {
    type: GET_ALL_PRICE_BY_USERID_REQUEST,
  }
}

export const getAllPriceRequestById = () => {
  return {
    type: GET_ALL_PRICE_BY_ID_REQUEST,
  }
}

export const getAllPriceSuccess = (payload) => {
  return {
    type: GET_ALL_PRICE_SUCCESS,
    payload,
  }
}
export const getAllPriceSuccessByUserid = (payload) => {
  return {
    type: GET_ALL_PRICE_BY_USERID_SUCCESS,
    payload,
  }
}

export const getAllPriceSuccessById = (payload) => {
  return {
    type: GET_ALL_PRICE_BY_ID_SUCCESS,
    payload,
  }
}

export const getAllPriceError = (payload) => {
  return {
    type: GET_ALL_PRICE_ERROR,
    payload,
  }
}
export const getAllPriceErrorByUserid = (payload) => {
  return {
    type: GET_ALL_PRICE_BY_USERID_ERROR,
    payload,
  }
}

export const getAllPriceErrorById = (payload) => {
  return {
    type: GET_ALL_PRICE_BY_ID_ERROR,
    payload,
  }
}
export const patchPriceRequest = () => {
  return {
    type: PATCH_PRICE_ID_REQUEST,
  }
}
export const postPriceRequest = () => {
  return {
    type: POST_PRICES_REQUEST,
  }
}
export const patchPriceSuccess = (payload) => {
  return {
    type: PATCH_PRICE_ID_SUCCESS,
    payload,
  }
}
export const postPriceSuccess = (payload) => {
  return {
    type: POST_PRICES_SUCCESS,
    payload,
  }
}
export const patchPriceError = (payload) => {
  return {
    type: PATCH_PRICE_ID_ERROR,
    payload,
  }
}
export const postPriceError = (payload) => {
  return {
    type: POST_PRICES_ERROR,
    payload,
  }
}

export const getAllPrice = (params) => (dispatch) => {
  dispatch(getAllPriceRequest())
  getPrice(params)
    .then((res) => dispatch(getAllPriceSuccess(res.data.pricings)))
    .catch((err) => dispatch(getAllPriceError(err.response.data.errorMessage)))
}

export const getAllPriceByUserid = (userId, params) => (dispatch) => {
  dispatch(getAllPriceRequestByUserid())
  console.log(userId)
  getPriceByUser(userId, params)
    .then((res) => dispatch(getAllPriceSuccessByUserid(res.data.pricings)))
    .catch((err) =>
      dispatch(getAllPriceErrorByUserid(err.response.data.errorMessage))
    )
}

export const getAllPriceById = (id, params) => (dispatch) => {
  dispatch(getAllPriceRequestById())
  getPriceById(id, params)
    .then((res) => dispatch(getAllPriceSuccessById(res.data.pricings)))
    .catch((err) =>
      dispatch(getAllPriceErrorById(err.response.data.errorMessage))
    )
}

export const patchPriceFunc = (req, id) => (dispatch) => {
  dispatch(patchPriceRequest())
  patchPrice(req, id)
    .then((res) => {
      dispatch(patchPriceSuccess(res.data.results))
    })
    .catch((err) => dispatch(patchPriceError(err.response.data.errorMessage)))
}

export const postPriceFunc = (req) => (dispatch) => {
  dispatch(postPriceRequest())
  postPrice(req)
    .then((res) => dispatch(postPriceSuccess(res.data.results)))
    .catch((err) => dispatch(postPriceError(err.response.data.errorMessage)))
}

export const resetAll = () => {
  return {
    type: RESET_ALL,
  }
}
