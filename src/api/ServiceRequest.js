import axios from 'axios'

const getAccessToken = () => {
  const token = JSON.parse(
    localStorage && localStorage.getItem('_jsonwebtoken')
  )
  if (token) {
    return token
  } else {
    return undefined
  }
}

export const serviceRequest = (url, method, payload, params) => {
  const accessToken = getAccessToken()

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  }

  let serviceUrl = `${url}`

  if (params) {
    serviceUrl += `?${params}`
  }

  return axios({
    method: method,
    url: serviceUrl,
    headers: headers,
    data: payload,
  })
}
