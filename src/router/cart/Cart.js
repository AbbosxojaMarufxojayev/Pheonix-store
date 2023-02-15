import React from 'react'
import Empty from '../../components/empty/Empty'
import "./Cart.css"
import savatcha from "../../assets/savatcha.png"
import CartItem from '../../components/cart-item/CartItem'
import { useSelector } from "react-redux"

function Cart() {
  const cart = useSelector(s=> s.cart)


  return (
    <div className='container cart'>
      {
        cart.length === 0 ?
        <Empty url={savatcha} text={"Savatchangiz bo'sh"}/>
        :
        <CartItem karzinka={cart}/>
      }
    </div>
  )
}

export default Cart