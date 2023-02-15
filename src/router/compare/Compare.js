import React from 'react'
import "./Compare.css"
import { GiScales } from "react-icons/gi"
import Empty from "../../components/empty/Empty"

function Compare() {
  return (
    <div className='container compare'>
        <Empty icon={<GiScales/>} url={""} text={"Solishtirishga mahsulotlar tanlanmadi"}/>
    </div>
  )
}

export default Compare