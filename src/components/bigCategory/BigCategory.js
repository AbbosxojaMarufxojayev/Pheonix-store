import React from 'react'
import "./BigCategory.css"
import { Big_Category_data } from "../../static"


function BigCategory() {
  return (
    <div>
        <div className="bigCategory__container">
        {
          Big_Category_data?.map((item, inx)=> <div key={inx} className="bigCategory__card">
          <div className="img__part10"><img src={item?.img} alt="" /></div>
          <div className="text__part10"><p>{item.title}</p></div>
        </div>
        )
        }
        </div>
    </div>
  )
}

export default BigCategory