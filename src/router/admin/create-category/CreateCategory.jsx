import React, { useState } from 'react'
import "./CreateCategory.css"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../../server"

function CreateCategory() {
  const [name, setName] = useState("")
  const [urls, setUrls] = useState("")
  const [category, setCategory] = useState("phone")
  const [loading, setLoading] = useState(false)
  
  const categoryColRef = collection ( db, "category" )

  const createHomeBanner = async (e)=>{
    e.preventDefault()
    setLoading(true)
    let newCategory = {
      name,
      urls: [urls],
      category
    }
    await addDoc(categoryColRef, newCategory)
    .then(res=> {console.log(res)
      setName("")
      setUrls("")
      setCategory("Phone")
      setLoading(true)
      alert("Category successfully created !")
    })
    .catch(err=> console.log(err))
  }
  return (
    <div>
    <h1 className='product__name'>Create category</h1>
    <form className='create__form' onSubmit={createHomeBanner} action="">
      <input required value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Name'/>
      <input required value={urls} onChange={e => setUrls(e.target.value)} type="text" placeholder='Urls'/>
      <select value={category} onChange={e => setCategory(e.target.value)} name="" id="">
        <option value="phone">Phone</option>
        <option value="tv">TV</option>
        <option value="laptop">Laptop</option>
        <option value="technique">Technique</option>
        <option value="clothes">Clothes</option>
        <option value="accessories">Accessories</option>
      </select>
      <button className='btn__create__pro' disabled={loading} type="submit">{loading ? "Loading..." : "Create category"}</button>
    </form>
  </div>
  )
}

export default CreateCategory