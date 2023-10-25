'use client';   //this will send this component to the client side

import React from 'react'

const AddToCart = () => {
  return (
    <>
        <button className='btn btn-primary' onClick={() => console.log('Hello')}> Add To Cart</button>
    </>
  )
}

export default AddToCart