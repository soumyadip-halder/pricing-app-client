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
} from '../Actions/Pricing/Type'

const initPricingState = {
  pricingList: [],
  isLoading: false,
  errorMessage: '',
  oneprice: {},
  patched: false,
  uploadsuccess: false,
}
const pricingReducer = (state = initPricingState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_ALL_PRICE_REQUEST:
    case GET_ALL_PRICE_BY_USERID_REQUEST:
    case GET_ALL_PRICE_BY_ID_REQUEST:
    case PATCH_PRICE_ID_REQUEST:
    case POST_PRICES_REQUEST:
      return {
        ...state,
        isLoading: true,
        pricingList: [],
        errorMessage: '',
        oneprice: {},
        patched: false,
        uploadsuccess: false,
      }
    case GET_ALL_PRICE_SUCCESS:
    case GET_ALL_PRICE_BY_USERID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pricingList: payload,
        errorMessage: '',
        oneprice: {},
      }
    case GET_ALL_PRICE_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pricingList: [],
        errorMessage: '',
        oneprice: payload,
      }

    case GET_ALL_PRICE_ERROR:
    case GET_ALL_PRICE_BY_USERID_ERROR:
    case GET_ALL_PRICE_BY_ID_ERROR:
      return {
        ...state,
        isLoading: false,
        pricingList: [],
        errorMessage: payload,
        oneprice: {},
      }
    case PATCH_PRICE_ID_SUCCESS:
      return {
        ...state,
        oneprice: payload,
        isLoading: false,
        errorMessage: '',
        patched: true,
      }
    case PATCH_PRICE_ID_ERROR:
      return {
        ...state,
        oneprice: {},
        isLoading: false,
        errorMessage: payload,
        patched: false,
      }
    case POST_PRICES_SUCCESS:
      return {
        ...state,
        pricingList: payload,
        isLoading: false,
        errorMessage: '',
        uploadsuccess: true,
      }
    case POST_PRICES_ERROR:
      return {
        ...state,
        pricingList: [],
        errorMessage: payload,
        isLoading: false,
        uploadsuccess: false,
      }
    case RESET_ALL:
      return initPricingState
    default:
      return state
  }
}

export default pricingReducer
