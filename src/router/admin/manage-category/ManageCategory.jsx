import React from 'react'
import BigCategory from '../../../components/bigCategory/BigCategory'
import "./ManageCategory.css"

function ManageCategory() {
  return (
    <div>
        <h2 className='product__name'>Manage Category</h2>
        <BigCategory admin={true}/>
    </div>
  )
}

export default ManageCategory