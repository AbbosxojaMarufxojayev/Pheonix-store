import React from 'react'
import "./CartItem.css"
import { useDispatch, useSelector } from "react-redux"
import { ADD_TO_CART, REMOVE_CART } from '../../context/action/actionType'
import { ADD_TO_LIKE } from '../../context/action/actionType'
import { BsHeart } from "react-icons/bs"
import { Link } from "react-router-dom"

function CartItem({karzinka}) {
    const dispatch = useDispatch()
    const likes = useSelector(s=> s.heart)


    const addToCart = (item)=>{
        let index = karzinka.findIndex(i => i.id === item.id)
        if( index < 0 ){
          return dispatch({type: ADD_TO_CART, payload: [...karzinka, {...item, qty: 1}]})
        }
        let newCart = karzinka.map((pro, inx)=> inx === index ? {...pro, qty: pro.qty + 1} : pro)
        dispatch( {type: ADD_TO_CART, payload: newCart} )
      }

    const decreaseQty = (item)=>{
        let index = karzinka.findIndex(i => i.id === item.id)
        if( index < 0 ){
          return dispatch({type: ADD_TO_CART, payload: [...karzinka, {...item, qty: 1}]})
        }
        let newCart = karzinka.map((pro, inx)=> inx === index ? {...pro, qty: pro.qty - 1} : pro)
        dispatch( {type: ADD_TO_CART, payload: newCart} )
    }

    const addHeart = (item)=>{
      let index = likes.findIndex(i=> i.id === item.id)
      if(index > -1){
        return
      }
  
      dispatch({type: ADD_TO_LIKE, payload: item})
    }
    

  return (
    <div className='cart'>
        <h2 className='total__price'>Jami narx: {karzinka.reduce((a, b)=> a + (b.price * b.qty), 0).brm()} so'm</h2>
        {
            karzinka?.map((item, inx)=> <div key={inx} className="the__biggest__cart">
                <div className="img__part_inner"><img src={item?.urls[0]} alt="" /></div>
                <div className="inner__container_cart">
                  <div className="inner__first__part">
                    <p className='name__cart'><Link to={`/products/${item.id}`}>{item?.title}</Link></p>
                    <p className='price__cart'>{item?.price.brm()} so'm</p>
                  </div>
                  <div className="inner__sec__part">
                    <button className='dec' disabled={item?.qty <= 1} onClick={()=> decreaseQty(item)}>-</button>
                    <span className='qty'>{item?.qty}</span>
                    <button className='inc' onClick={()=> addToCart(item)}>+</button>
                  </div>
                </div>
                <div className="buttons__container__cart">
                  <button className='buy__cart'>Sotib olish</button>
                  <button onClick={()=> addHeart(item)} className='liked__ones'>Sevimlilar <BsHeart/></button>
                  <button className='delete' onClick={()=> dispatch({type: REMOVE_CART, payload: item.id})}>O'chirish</button>
                </div>
            </div>)
        } 

        
    </div>
  )
}

export default CartItem