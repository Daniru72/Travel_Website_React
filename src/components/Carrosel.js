import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

import slide_image from "../assets/travel1.jpg";
import slide_image2 from "../assets/travel2.jpg";
import slide_image3 from "../assets/travel3.jpg";
import slide_image4 from "../assets/travel4.jpg";

function Carrosel() {
  return (
    <div style={{ marginTop: "50px", padding: "20px" }}>
      <h1>Anual Gallery</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        grabCursor={true}
        effect="coverflow"
        centeredSlides={true}
        loop={true}
        slidesPerView={3} // Adjust this for better visuals
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        <SwiperSlide>
          <img src={slide_image} alt="slide_image" style={{ width: "100%", height: "auto" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image2} alt="slide_image" style={{ width: "100%", height: "auto" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image3} alt="slide_image" style={{ width: "100%", height: "auto" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image4} alt="slide_image" style={{ width: "100%", height: "auto" }} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carrosel;
