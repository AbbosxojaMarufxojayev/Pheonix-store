import React from 'react'
import "./Like.css"
import Empty from "../../components/empty/Empty"
import img from "../../assets/parashut.png"
import { useSelector, useDispatch } from 'react-redux'
import  {REMOVE_LIKE} from "../../context/action/actionType"
import { ADD_TO_CART } from "../../context/action/actionType"
import { Link } from "react-router-dom"


function Like({karzinka}) {
  const like = useSelector(s=> s.heart)
  const dispatch = useDispatch()

  const addToCart = (item)=>{
    let index = karzinka.findIndex(i => i.id === item.id)
    if( index < 0 ){
      return dispatch({type: ADD_TO_CART, payload: [...karzinka, {...item, qty: 1}]})
    }
    let newCart = karzinka.map((pro, inx)=> inx === index ? {...pro, qty: pro.qty + 1} : pro)
    dispatch( {type: ADD_TO_CART, payload: newCart} )
  }

  return (
    <div className='container like'>
      {
        like.length === 0 ?  <Empty url={img} text="Sevimli mahsulotlar yo'q"/> 
        : 
    <div>
      {
        like?.map((item, inx)=><div key={inx} className="like__card">
        <img className='like__imgs' src={item?.urls[0]} alt="" />
        <Link to={`/products/${item.id}`}><p className='name'>{item?.title}</p></Link>
      <div>
        
      <del className='two'>
        {item?.price} so'm</del>
        <br />
        <p className='three'>{Math.floor(item?.price / 1.3)} so'm</p>
      </div>
      
        <button></button>
      <div className='like__btn'>
        <button onClick={()=> addToCart(item)} className='like__btn2'>Savatchaga qo'shish</button>
        <button onClick={()=> dispatch({type: REMOVE_LIKE, payload: item.id})} className='like__btn3'>O'chirish</button>
      </div>
      </div>)
      }
    </div>
      }
    </div>

  )
}

export default Like