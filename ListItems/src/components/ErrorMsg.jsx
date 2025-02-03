import React from 'react'

const ErrorMsg = ({items, msg}) => {

  return (
    <>
     {items.length === 0 && <h3>{msg}</h3>}
    </>
  )
}

export default ErrorMsg