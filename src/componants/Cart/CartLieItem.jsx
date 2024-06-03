import React from 'react'

const CartLieItem = (prop) => {
  return (
    <div>
      <label>{prop.title}</label>
      <p>{prop?.description}</p>
      <span><em>{prop?.price}</em></span>
    </div>
  )
}

export default CartLieItem