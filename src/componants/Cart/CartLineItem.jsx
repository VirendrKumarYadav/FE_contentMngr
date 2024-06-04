import React from 'react'
import "../../App.css"

const CartLineItem = (prop) => {
  
  return (
    <div className='line-item'>
      <label>{prop.title}</label>
      <p>{prop?.qunatity}</p>
      <span><em>{prop?.price}</em></span>
    </div>
  )
}

export default CartLineItem