import React from 'react'
import "./SubHeader.css"
import { useLocation } from "react-router-dom"

function SubHeader() {

  const { pathname } = useLocation()
  if(pathname.includes("admin")){
    return <></>
  }

  return (
    <div className='sub__header'>
      <div className="container">
        <div className="sub__container">
          <div>
            <button className='btn'>0% Muddatli to'lov</button>
            <button className='btn'>Chegirmalar</button>
            <span>Sayt xaritasi</span>
          </div>
          <div>
            <a href="tel:+998971044161">+998 97 104 4161</a>
            <button className='btn'>Olchada sotib olish</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubHeader