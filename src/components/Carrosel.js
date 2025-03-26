import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import slide_image from "../assets/travel1.jpg";
import slide_image2 from "../assets/travel2.jpg";
import slide_image3 from "../assets/travel3.jpg";
import slide_image4 from "../assets/travel4.jpg";
import { click } from "@testing-library/user-event/dist/click";

function Carrosel() {
  return (
    <div style={{ marginTop: "50px", padding: "20px" }}>
      <h1>Anual Gallery</h1>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        grabCursor={true}
        effect={"coverflow"}
        centeredSlides={true}
        loop={true}
        slidesperview={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
      >
        <SwiperSlide>
          <img
            src={slide_image}
            alt="Travel Slide 1"
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide_image2}
            alt="Travel Slide 1"
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide_image3}
            alt="Travel Slide 1"
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide_image4}
            alt="Travel Slide 1"
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>

        <div className="slider-controler">
          <div className=" swiper-button-prev slider-arrow">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </div>
          <div className=" swiper-button-next slider-arrow">
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Carrosel;

// <Swiper
// // install Swiper modules
// effect={'coverflow'}
// grabCursor={true}
// centeredSlides={true}
// loop={true}
// slidesperview={'auto'}
// coverflowEffect={{
//   rotate: 0,
//   stretch: 0,
//   depth: 100,
//   modifier: 2.5,

// }}
// pagination={{ clickable: true }}

// modules={[Navigation, Pagination, Scrollbar, A11y]}
// className="swiper_container"
// >
// <SwiperSlide>
// <img src={slide_image} alt="Travel Slide 1" styles={{width:"100px", height:"30px"}}/>
// </SwiperSlide>
// <SwiperSlide><img src={slide_image2} alt="Travel Slide 1"  styles={{width:"100px", height:"30px"}} /></SwiperSlide>
// <SwiperSlide><img src={slide_image3} alt="Travel Slide 1"  styles={{width:"100px", height:"30px"}}/></SwiperSlide>
// <SwiperSlide><img src={slide_image4} alt="Travel Slide 1"   styles={{width:"100px", height:"30px"}}/></SwiperSlide>
// ...
// </Swiper>

// <div className="slider_controler">
//  <div className=" swiper-button-prev slider-arrow">
//    <ion-icon name="chevron-back-outline"></ion-icon>
//  </div>
//  <div className=" swiper-button-next slider-arrow">
//    <ion-icon name="chevron-forward-outline"></ion-icon>
//  </div>

//  <div className="swiper-pagination">

//  </div>
// </div>
