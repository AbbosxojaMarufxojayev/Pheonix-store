import React from 'react'
import Banner from '../../components/banner/Banner'
import BigCategory from '../../components/bigCategory/BigCategory'
import Category from '../../components/category/Category'
import Products from "../../components/products/Products"
import "./Home.css"

function Home() {
  return (
    <div className='container'>
      <div className="home">
        <Banner/>
        <Category/>
        <Products/>
        <BigCategory/>
      </div>
    </div>
  )
}

export default Home