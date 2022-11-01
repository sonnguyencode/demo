import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../../assets/style/swiper.scss"
import anh1 from "../../assets/image/anh1.jpg";
import anh2 from "../../assets/image/anh2.jpg";
import anh3 from "../../assets/image/anh3.jpg"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider () {
  return (
    <>
      <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={anh1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={anh2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={anh3} alt="" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}
