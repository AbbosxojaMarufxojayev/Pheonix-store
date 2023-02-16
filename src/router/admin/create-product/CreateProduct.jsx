import React, {useState} from 'react'
import "./CreateProduct.css"

function CreateProduct() {
  const [title, setTitle] = useState("")

  return (
    <div>
        <h2 className='product__name'>Create product</h2>
        <form action="" className='create__form'>
          <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='Title' />
          <input type="number" placeholder='Price' />
          <input type="text" placeholder='Urls' />
          <input type="text" placeholder='Desc' />
          <select name="" id="">
            <option value="">Tanlang</option>
            <option value="phone">Phone</option>
            <option value="tv">TV</option>
            <option value="laptop">Laptop</option>
            <option value="technique">Technique</option>
          </select>
          <button className='btn__create__pro' type='submit'>Create Product</button>
        </form>
    </div>
  )
}

export default CreateProduct