import React, { useState } from 'react'
import "./CartItem.css"
import { useDispatch, useSelector } from "react-redux"
import { ADD_TO_CART, REMOVE_CART } from '../../context/action/actionType'
import { ADD_TO_LIKE } from '../../context/action/actionType'
import { BsHeart } from "react-icons/bs"
import { Link } from "react-router-dom"

const BOT_TOKEN = "6259790459:AAGg8ZTiFywTDaq8vUlzQxalz2b7AORj6FY"
const CHAT_ID = "-809539495"


// 1. Chatni id sini olish uchun
// https://api.telegram.org/bot6259790459:AAGg8ZTiFywTDaq8vUlzQxalz2b7AORj6FY/getUpdates


// 2. Xabarni chatga yuborish uchun
// https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]&parse_mode=html

function CartItem({karzinka}) {
    const [ name, setName ] = useState("") 
    const [ phone, setPhone ] = useState("") 
    const [ address, setAddress ] = useState("") 
    const [ description, setDescription ] = useState("") 


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

    const cart = useSelector(s => s.cart)
    
    const order = ()=>{
      let msg = ""
      msg += `Name: <b>${name}</b> %0A`
      msg += `Phone: ${phone} %0A`
      msg += `Address: ${address} %0A`
      msg += `Description: ${description} %0A`

      msg += "%0A<b>Buyurtmalar</b>%0A%0A"
      karzinka.forEach((order)=>{
        msg += `Name: ${order.title} %0A`
        msg += `Quantity: ${order.qty} %0A`
        msg += `Price: ${order.price} %0A%0A`
      })


      const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${msg}&parse_mode=html`
      let api = new XMLHttpRequest();
      api.open("GET", API_URL, true);
      api.send();
    }


  return (
    <div className='cart'>
        <h2 className='total__price'>Jami narx: {karzinka.reduce((a, b)=> a + (b.price * b.qty), 0).brm()} so'm</h2>
        <div className="inputs__delivery">
          <input className='name__delivery' value={name} onChange={e=> setName(e.target.value)} type="text" placeholder='Name' />
          <input className='phone__delivery' value={phone} onChange={e=> setPhone(e.target.value)} type="text" placeholder='Phone' />
          <input className='address__delivery' value={address} onChange={e=> setAddress(e.target.value)} type="text" placeholder='Address' />
          <textarea className='desc__delivery' value={description} onChange={e=> setDescription(e.target.value)} placeholder='Additional description...' name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button className='btn__delivery' onClick={order}>Buyurtma berish</button>
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