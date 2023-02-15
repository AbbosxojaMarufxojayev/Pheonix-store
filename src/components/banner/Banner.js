import React, { useState } from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function Banner() {

  return (
    <div className="container banner">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://olcha.uz/image/original/sliders/oz/8yCndkkoNMMi3wtYQh5yz6n3PVOUdVw2okvDE5AWn45zztyweAUoqNPdMbZ9.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://olcha.uz/image/original/sliders/oz/Z7xfAwhWDG65l9JpHqiDYiaHEiziIjVU3iEfmrIp2XpNMjrzvD5a4ZeDDZKT.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://olcha.uz/image/original/sliders/oz/4KyyWzAnFrDWzrD89LejqgjUj4UIyphKKoI8oNsq4tkqQaNQSfFE08LNez7o.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://olcha.uz/image/original/sliders/oz/W7ZHLDt5yUy019gvFBLNpna5fJYXKbpXu4UOX8thIeywatadNA9YBTRlhyyn." alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://olcha.uz/image/original/sliders/ru/4Jlf91h9AwaZZZHo9FaKpjKmnTEVguEhnvDCP0fiN1GUshqFDVAKopAP2RF0.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://olcha.uz/image/original/sliders/oz/9VVX2y8DDDeSrYLzANUksKkO1AvaZm2OTs9cEuUt9NSm2Bsi2AXaTd7fLUKx.png" alt="" /></SwiperSlide>
      </Swiper>
        
    </div>
  );
}

export default Banner;
