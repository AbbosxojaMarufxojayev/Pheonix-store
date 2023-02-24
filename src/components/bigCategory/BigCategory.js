import React, {useState, useEffect} from 'react'
import "./BigCategory.css"
import { collection, getDocs } from "firebase/firestore"
import { deleteDoc, doc } from 'firebase/firestore'
import {db} from "../../server"



function BigCategory({admin}) {
  const [ data, setData ] = useState([])
  const categoryColRef = collection(db, "category")
  const [ refresh, setRefresh ] = useState(false)


  useEffect(()=>{
    const getCategory = async () => {
      const category = await getDocs(categoryColRef)
      setData(category.docs.map((pro)=> ({ ...pro.data(), id: pro.id }) ))
    }
    getCategory()
  }, [])

  const delCategory = async (id) => {
    await deleteDoc(doc(db, "category", id))
    .then(res => {
      console.log(res)
      setRefresh(!refresh)
    })
    .catch(err => console.log(err))
  }
  return (
    <div>
        <div className="bigCategory__container">
        {
            data?.map((el, inx)=> <div key={inx} className="category__products">
            <div className="img__part"><img src={el?.urls[0]} alt="" /></div>
            <div className="text__part">{el?.name}</div>
            {
              admin ?
              <button className='products__btn' onClick={()=> delCategory(el.id)}>Delete</button>
              :
              <></>
            }
          </div>
          )
          }
          </div>
    </div>
  )
}

export default BigCategory