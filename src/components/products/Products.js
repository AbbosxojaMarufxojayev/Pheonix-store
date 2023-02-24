import React, { useEffect, useState } from 'react'
import "./Products.css"
import { BsHeart } from "react-icons/bs"
import { AiFillHeart } from "react-icons/ai"

import {PRODUCTS__DATA} from "../../static"
import { useDispatch, useSelector } from "react-redux"
import { ADD_TO_LIKE, REMOVE_LIKE } from "../../context/action/actionType"
import { ADD_TO_CART, REMOVE_CART } from '../../context/action/actionType'
import { Link } from "react-router-dom"

import { db } from "../../server"
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore"


function Products({admin}) {
  const dispatch = useDispatch()
  const likes = useSelector(s=>s.heart)
  const cart = useSelector(s=> s.cart)
  const [ data, setData ] = useState([])
  const [refresh, setRefresh] = useState(false)


  const productsColRef = collection(db, "products")


  useEffect(()=>{
    const getProducts = async () => {
      const products = await getDocs(productsColRef)
      setData(products.docs.map((pro)=> ({ ...pro.data(), id: pro.id }) ))
    }
    getProducts()
  }, [refresh])



  const addHeart = (item)=>{
    let index = likes.findIndex(i=> i.id === item.id)
    if(index > -1){
      return
    }

    dispatch({type: ADD_TO_LIKE, payload: item})
  }

  const addToCart = (item)=>{
    let index = cart.findIndex(i => i.id === item.id)
    if( index < 0 ){
      return dispatch({type: ADD_TO_CART, payload: [...cart, {...item, qty: 1}]})
    }
    let newCart = cart.map((pro, inx)=> inx === index ? {...pro, qty: pro.qty + 1} : pro)
    dispatch( {type: ADD_TO_CART, payload: newCart} )
  }

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id))
    .then(res => {
      console.log(res)
      setRefresh(!refresh)
    })
    .catch(res => console.log(res))
  }
  return (
    <div>
      <div className="products__container">
      {
        data?.map((items, inx)=> <div key={inx} className="products__cards">
        <div className="products_img__part"><Link to={`products/${items?.id}`}><img src={items?.urls} alt="" /></Link>
        <div className="like__icon">
          {
            likes?.some(i=> i.id === items.id) ? 
            <AiFillHeart style={{color: "red"}} onClick={()=> dispatch({type: REMOVE_LIKE, payload: items.id})}/> : 
            <BsHeart onClick={()=> addHeart(items)} />
          }
        </div>
        </div>
        <div className="products_text__part">
          <p className="name">{items?.title}</p>
          <p className="price">{items?.price.brm()} so'm</p>
          <button className="credit__btn"><p className="credit__price">{Math.floor(items?.price / 12).brm()} so'm x 12 oy</p></button>
          {
            admin ? 
            <button onClick={()=> deleteProduct(items.id)} className='products__btn'>Delete</button>
            :
            <button onClick={()=> addToCart(items)} className="products__btn">{items?.icon} Add to Cart</button>
          }
        </div>
      </div>)
      }
      </div>
    </div>
    
  )
}

export default Products