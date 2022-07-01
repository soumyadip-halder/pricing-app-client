import React from 'react'

const ErrorPage = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      color: 'red',
    }}
  >
    <p style={{ fontSize: '24px', marginTop: 10 }} className="text-danger">
      Error Page
    </p>
  </div>
)

export default ErrorPage
