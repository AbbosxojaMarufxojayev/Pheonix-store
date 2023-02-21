import React, { useState } from 'react'
import Products from '../../../components/products/Products'
import "./ManageProduct.css"

function ManageProduct() {

  return (
    <div>
      <h2 className='product__name'>Manage and change products</h2>
      <Products admin={true}/>
    </div>
  )
}

export default ManageProduct