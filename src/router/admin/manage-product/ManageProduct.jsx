import React, { useState } from 'react'
import "./ManageProduct.css"

function ManageProduct() {
  const [ title, setTitle ] = useState("")
  return (
    <div>
      <h2 className='product__name'>Manage and change products</h2>
    </div>
  )
}

export default ManageProduct