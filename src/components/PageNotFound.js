import React from 'react'

const PageNotFound = () => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: 10,
        }}
      >
        <h4 className="text-danger">Sorry Page Not Found</h4>
      </div>
    </div>
  )
}

export default PageNotFound
