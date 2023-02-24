import React, {useState} from 'react'
import "./CreateProduct.css"
import { db } from "../../../server"
import { collection, addDoc } from "firebase/firestore"

// array - (javascript) => collection - (database)

function CreateProduct() {
  const [ title, setTitle ] = useState("")
  const [ price, setPrice ] = useState("")
  const [ urls, setUrls ] = useState("")
  const [ desc, setDesc ] = useState("")
  const [ category, setCategory ] = useState("phone")
  const [ loading, setLoading ] = useState(false)

  const productsColRef = collection(db, "products")

  const createProduct = async (e) => {
    e.preventDefault()
    setLoading(true)
    let newProduct = {
      title,
      price: +price,
      urls: [urls],
      desc
    }
    await addDoc(productsColRef, newProduct)
    .then(res=> {
      console.log(res)
      setTitle("")
      setPrice("")
      setUrls("")
      setDesc("")
      setCategory("")
      setLoading(false)
      alert("Product successfully created !")
    })
    .catch(err=> console.log(err))
  }

  return (
    <div>
        <h2 className='product__name'>Create product</h2>
        <form onSubmit={createProduct} action="" className='create__form'>
          <input required value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='Title' />
          <input required value={price} onChange={e => setPrice(e.target.value)} type="number" placeholder='Price' />
          <input required value={urls} onChange={e => setUrls(e.target.value)} type="text" placeholder='Urls' />
          <input required value={desc} onChange={e => setDesc(e.target.value)} type="text" placeholder='Description' />
          <select value={category} onChange={e=> setCategory(e.target.value)} name="" id="">
            {/* <option value="">Tanlang</option> */}
            <option value="phone">Phone</option>
            <option value="tv">TV</option>
            <option value="laptop">Laptop</option>
            <option value="technique">Technique</option>
            <option value="accessories">Accessories</option>
            <option value="cars">Cars</option>
          </select>
          <button disabled={loading} className='btn__create__pro' type='submit'>{loading ? "Loading..." : "Create product"}</button>
        </form>
    </div>
  )
}

export default CreateProduct