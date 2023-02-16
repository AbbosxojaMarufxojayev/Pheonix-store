import React from 'react'
import "./Admin.css"
import CreateProduct from './create-product/CreateProduct'
import ManageProduct from './manage-product/ManageProduct'
import { Routes, Route, NavLink } from "react-router-dom"
import { AiOutlineHome, AiFillHeart } from "react-icons/ai"
import { IoMdCreate } from "react-icons/io"
import { MdOutlineManageSearch, MdOutlineAdminPanelSettings } from "react-icons/md"
import { GiScales } from "react-icons/gi"
import { BsCart2 } from "react-icons/bs"
import { FiSettings } from "react-icons/fi"


function Admin() {
  return (
    <div className='admin'>
      <div className="admin__sidebar">
        <h1 className='sidebar__name'>Admin Panel</h1>
        <ul className="collection__sidebar">
          <li className="item__sidebar"><NavLink to={"/"}><AiOutlineHome/> Home</NavLink></li>
          <li className="item__sidebar"><NavLink to={"create-product"}><IoMdCreate/> Create product</NavLink></li>
          <li className="item__sidebar"><NavLink to={"manage-product"}><MdOutlineManageSearch/> Manage product</NavLink></li>
          <li className="item__sidebar"><NavLink to={"/compare"}><GiScales/> Taqqoslash</NavLink></li>
          <li className="item__sidebar"><NavLink to={"/like"}><AiFillHeart/> Sevimlilar</NavLink></li>
          <li className="item__sidebar"><NavLink to={"/cart"}><BsCart2/> Savatcha</NavLink></li>
          <li className="item__sidebar"><NavLink><MdOutlineAdminPanelSettings/> Tizim</NavLink></li>
          <li className="item__sidebar"><NavLink><FiSettings/> Sozlamalar</NavLink></li>
        </ul>
      </div>
      <div className="admin__content">
        <Routes>
          <Route path='create-product' element={<CreateProduct/>}/>
          <Route path='manage-product' element={<ManageProduct/>}/>
        </Routes>
      </div> 
    </div>
  )
}

export default Admin