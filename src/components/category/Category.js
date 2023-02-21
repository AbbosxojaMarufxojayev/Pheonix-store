import React from 'react'
import "./Category.css"
import img1 from "../../assets/15.png"
import img2 from "../../assets/16.png"
import img3 from "../../assets/17.png"
import img4 from "../../assets/18.png"
import img5 from "../../assets/19.png"
import img6 from "../../assets/20.png"
import img7 from "../../assets/21.png"
import img8 from "../../assets/22.png"
import img9 from "../../assets/23.png"
import img10 from "../../assets/24.png"
import img11 from "../../assets/26.png"
import img12 from "../../assets/27.png"
import img13 from "../../assets/divan.png"
import img14 from "../../assets/28.png"
import img15 from "../../assets/29.png"
import img16 from "../../assets/30.png"
import img17 from "../../assets/31.png"
import img18 from "../../assets/32.png"
import img19 from "../../assets/33.png"
import img20 from "../../assets/foiz.png"




const Category__data = [
  {
    image: img1,
    text: "Televizor, video va audio"
  },
  {
    image: img2,
    text: "Noutbuk, printer va kompyuterlar"
  },
  {
    image: img3,
    text: "Smartfon, gadjet va aksessuarlar"
  },
  {
    image: img4,
    text: "Maishiy texnika"
  },
  {
    image: img5,
    text: "Barchasi oshxona uchun"
  },
  {
    image: img6,
    text: "Sport anjomlari"
  },
  {
    image: img7,
    text: "Go'zallik va salomatlik"
  },
  {
    image: img8,
    text: "Avto jihozlar"
  },
  {
    image: img9,
    text: "Barchasi ofis va uy uchun"
  },
  {
    image: img10,
    text: "Bolalar uchun oyinchoq va mahsulotlar"
  },
  {
    image: img11,
    text: "Kiyim va poyabzallar"
  },
  {
    image: img12,
    text: "Kitoblar"
  },
  {
    image: img13,
    text: "Mebel"
  },
  {
    image: img14,
    text: "Geymerlar uchun"
  },
  {
    image: img15,
    text: "Barchasi ta'mirlash uchun"
  },
  {
    image: img16,
    text: "Kantselyariya tovarlari"
  },
  {
    image: img17,
    text: "Elektrotransport"
  },
  {
    image: img18,
    text: "Sovg'alar va suvernirlar"
  },
  {
    image: img19,
    text: "Aqlli uy"
  },
  {
    image: img20,
    text: "Qulay takliflar"
  },
]




function Category() {

  return (
    <div>
        <div className="category__container">
          {
            Category__data?.map((el, inx)=> <div key={inx} className="category__products">
            <div className="img__part"><img src={el?.image} alt="" /></div>
            <div className="text__part">{el?.text}</div>
          </div>
          )
          }
        </div>
    </div>
  )
}

export default Category