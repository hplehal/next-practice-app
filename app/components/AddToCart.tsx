'use client';   //this will send this component to the client side

import React from 'react'

const AddToCart = () => {
  return (
    <div>
        <button onClick={() => console.log('Hello')}> Add To Cart</button>
    </div>
  )
}

export default AddToCart