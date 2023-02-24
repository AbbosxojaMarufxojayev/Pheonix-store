import React, { useState } from 'react'
import "./Navbar.css"
import { AiOutlineMenu, AiOutlineHeart } from "react-icons/ai"
import { FiSearch } from "react-icons/fi"
import {BiBarChart} from "react-icons/bi"
import {SlBasket} from "react-icons/sl"
import {BsPerson} from "react-icons/bs"
import { Link } from 'react-router-dom'
import { FiX } from "react-icons/fi"
import { useSelector, useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { LOG_IN, LOG_OUT } from "../../context/action/actionType"


function Navbar() {
  const [ show, setShow ] = useState(false)
  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ error, setError ] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  document.body.style.overflow = show ? "hidden" : "auto"
  const cart = useSelector(s=> s.cart)
  const auth = useSelector(s => s.auth)
  

  const defaultState = ()=>{
    setShow(false)
    setUsername("")
    setPassword("")
    setError(false)
  }


  const register = ()=>{
    if(username === "Pheonix" && password === "pheonix2006"){
      dispatch({type: LOG_IN, payload: {username, password}})
      navigate("/admin")
    }else{
      setError(true)
    }
  }

  const checkAdmin = ()=>{
    if(auth){
      return navigate("/admin")
    }

    setShow(true)
  }

  const logOut = ()=>{
    if(auth === null){
      dispatch({type: LOG_OUT, payload: {username, password}})
      navigate("/")
    }else{
      console.log("error");
    }
  }




  const {pathname} = useLocation()
  if(pathname.includes("admin")){
    return <></>
  }


  return (
    <>
      <div className="nav__container">
      <div className='container '>
        <div className='navbar'>
          <Link to={"/"}  className='nav__logo'>Pheonix</Link>
          <button className='btn nav__katalog'>
            <AiOutlineMenu/>
            <span>Katalog</span>
          </button>
          <div className="nav__search">
            <input type="text" placeholder='Qidirish...' />
            <button><FiSearch/></button>
          </div>
          <div className="nav__items">
              <Link to={"/compare"} className="nav__item">
                <BiBarChart/>
                <p>Taqqoslash</p>
              </Link>
              <Link to={"/like"} className="nav__item">
                <AiOutlineHeart/>
                <p>Sevimlilar</p>
              </Link>
              <Link to={"/cart"} className="nav__item">
                <SlBasket/>
                <p>Savatcha</p>
                <span className='nav__circle'>{cart.length}</span>
              </Link>
              <div onClick={checkAdmin} className="nav__item">
                <BsPerson/>
                <p>Kirish</p>
              </div>
          </div>
        </div>
      </div>
    </div>

    {
      show ? <>    <div onClick={defaultState} className="nav__shadow"></div>
                    <div className="nav__login">
                      <h2>Tizimga kirish yoki profil yaratish</h2>
                      <span style={{opacity: error ? 1 : 0}} className='error'>Username or password incorrect !</span>
                      <div className="inputs">
                        <div className="first__input"><input value={username} onChange={e => setUsername(e.target.value)} required type="text" placeholder='Username' /></div>
                        <div className="sec__input"><input value={password} onChange={e => setPassword(e.target.value)} required type="password" placeholder='Password' /></div>
                      </div>
                      <button onClick={register} className="tasdiqlash">Login</button>
                      <FiX onClick={defaultState} className='nav__close'/>
                    </div></>
          : <></>
    }
    </>
  )
}

export default Navbar