import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

 
export default function Carousel(props:any) {

  return (
    <div  >
      
      <Swiper
      // install Swiper modules
      modules={[Navigation,  Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
       
       
       
       
    >
      {props.children}
    </Swiper>

    </div>

  );
}
