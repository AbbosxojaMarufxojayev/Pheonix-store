import React from 'react'
import "./Footer.css"
import appStore from "../../assets/footerRasmlar/appStore.svg"
import google from "../../assets/footerRasmlar/google.svg"
import appGallery from "../../assets/footerRasmlar/appGallery.svg"
import footerImg from "../../assets/footerRasmlar/footerImg.webp"
import apelsin from "../../assets/footerRasmlar/apelsin.png"
import uzcard from "../../assets/footerRasmlar/uzcard.png"
import click from "../../assets/footerRasmlar/click.png"
import payme from "../../assets/footerRasmlar/paynet.png"
import humo from "../../assets/footerRasmlar/humo.png"
import paynet from "../../assets/footerRasmlar/noname.png"

import {GoLocation} from "react-icons/go"
import { RxEnvelopeClosed } from "react-icons/rx"
import { BsArrowRightShort } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"
import { BsInstagram, BsTelegram } from "react-icons/bs"

import { useLocation } from "react-router-dom"

function Footer() {
  const { pathname } = useLocation()
  if(pathname.includes("admin")){
    return <></>
  }

  return (
    <div className='footer'>
        <div className="container">
            <div className="footer__container">
                <div className="footer__top">
                  <div className="first__part1">
                    <h2>Bizning mobil ilovamiz AppGallery, AppStore va Google-Play da </h2>
                    <div className="icons__container">
                      <div className='play__market1'><img src={appStore} alt="" /></div>
                      <div className='play__market2'><img src={google} alt="" /></div>
                      <div className='play__market3'><img src={appGallery} alt="" /></div>
                    </div>
                  </div>
                  <div className="second__part1"><img src={footerImg} alt="" /></div>
                </div>
                <hr className="line" />
                <div className="footer__middle">
                  <div className="first__part__middle">
                    <h1 className="olcha">Pheonix</h1>
                    <p className="support">Qo'llab-quvvatlash raqami</p>
                    <a href="+998971044161" className="phone__number">+998 (97) 104 41 61</a>
                    <p className='location'><GoLocation style={{color: "red", marginRight: "5px"}}/><span>Chorsu, Namangan</span></p>
                    <p className='envelope'><RxEnvelopeClosed style={{marginRight: "10px"}}/><span>info@pheonix.uz</span></p>
                  </div>
                  <div className="sec__part__middle">
                    <h2 className="information">Ma'lumot</h2>
                    <ul className="collection">
                      <li className="item">Biz haqimizda <BsArrowRightShort className='arrow__right'/></li>
                      <li className="item">Bo'sh ish o'rinlari <BsArrowRightShort className='arrow__right'/></li>
                      <li className="item">To'lovni qaytarish va tovarlarni almashtirish <BsArrowRightShort className='arrow__right'/></li>
                      <li className="item">Muddatli to'lov shartlari <BsArrowRightShort className='arrow__right'/></li>
                      <li className="item">Yetkazib berish <BsArrowRightShort className='arrow__right'/></li>
                    </ul>
                  </div>
                  <div className="third__part__middle">
                    <div className="collection2">
                      <div className="item2">Eco-friendly <BsArrowRightShort className='arrow__right'/></div>
                      <div className="item2">Bonus va aksiyalar <BsArrowRightShort className='arrow__right'/></div>
                      <div className="item2">To'lov va yetkazib berish <BsArrowRightShort className='arrow__right'/></div>
                      <div className="item2">Pheonixda soting <BsArrowRightShort className='arrow__right'/></div>
                      <div className="item2">Servis markazlari <BsArrowRightShort className='arrow__right'/></div>
                    </div>
                  </div>
                  <div className="forth__part__middle">
                    <div className="img__container">
                      <div className="img__card"><img src={apelsin} alt="" /></div>
                      <div className="img__card"><img src={uzcard} alt="" /></div>
                      <div className="img__card"><img src={click} alt="" /></div>
                      <div className="img__card"><img src={payme} alt="" /></div>
                      <div className="img__card"><img src={humo} alt="" /></div>
                      <div className="img__card"><img src={paynet} alt="" /></div>
                    </div>
                  </div>
                </div>
                <hr className="line" />
                <div className="footer__bottom">
                  <div className="first__container">
                    <p>2.12.2023. OOO "Pheonix store"</p>
                    <p>Ommaviy oferta</p>
                    <p>Maxfiylik siyosati</p>
                  </div>
                  <div className="sec__container">
                      <p><FaFacebook/></p>
                      <p><BsInstagram/></p>
                      <p><BsTelegram/></p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer