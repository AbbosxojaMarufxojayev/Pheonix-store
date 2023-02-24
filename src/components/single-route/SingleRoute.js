import React, {useState, useEffect} from 'react'
import "./SingleRoute.css"
import { useDispatch, useSelector } from "react-redux"
import { ADD_TO_LIKE} from "../../context/action/actionType"
import { useParams } from "react-router-dom"
import { BsHeart } from "react-icons/bs"
import { ADD_TO_CART } from '../../context/action/actionType'

import { db } from "../../server"
import { collection, getDocs } from "firebase/firestore"

function SingleRoute({karzinka}) {
    const dispatch = useDispatch()
    const likes = useSelector(s=>s.heart)

    const [ data, setData ] = useState([])
    const productsColRef = collection(db, "single-route")
  
    useEffect(()=>{
      const getProducts = async () => {
        const products = await getDocs(productsColRef)
        setData(products.docs.map((pro)=> ({ ...pro.data(), id: pro.id }) ))
      }
      getProducts()
    }, [])


    const addHeart = (item)=>{
        let index = likes.findIndex(i=> i.id === item.id)
        if(index > -1){
          return
        }
    
        dispatch({type: ADD_TO_LIKE, payload: item})
      }

      const addToCart = (item)=>{
        let index = karzinka.findIndex(i => i.id === item.id)
        if( index < 0 ){
          return dispatch({type: ADD_TO_CART, payload: [...karzinka, {...item, qty: 1}]})
        }
        let newCart = karzinka.map((pro, inx)=> inx === index ? {...pro, qty: pro.qty + 1} : pro)
        dispatch( {type: ADD_TO_CART, payload: newCart} )
      }

      const params = useParams()
      const oneItem = data?.find(el => el.id === params.id)





  return (
    <div className='single_route'>
        <div className="first__part">
            <div className="inner__big__part1">
                <div className="img__part__inner"><img src={oneItem?.urls[0]} alt="" /></div>
                <div className="more__images__container">
                    <div className="more__img__card"><img src={oneItem?.urls[0]} alt="" /></div>
                    <div className="more__img__card"><img src={oneItem?.urls[1]} alt="" /></div>
                </div>
            </div>
        </div>
        <div className="second__part">
            <h1 className='name__single'>{oneItem?.title}</h1>
            <div className="description">{oneItem?.desc}</div>
        </div>
        <div className="third__part">
            <p className="price__single">{oneItem?.price.brm()} so'm</p>
            <div className="buttons">
                <button className="buy">Sotib olish</button>
                <button onClick={()=> addHeart(oneItem)} className="liked">Sevimlilar <BsHeart/></button>
                <button onClick={()=> addToCart(oneItem)} className="to__cart">Savatchaga qo'shish</button>
            </div>
            <p className="dostavka">Yetkazib berish xizmati bepul!</p>
        </div>
    </div>
  )
}

export default SingleRoute    