import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./MySwiper.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

function MySwiper({ json, clickChooseSelect }) {
  const [indexSlide, setIndexSlide] = useState(0);
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        onSlideChange={(e) => setIndexSlide(e.realIndex)}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {json.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              onClick={() => clickChooseSelect(indexSlide)}
            >
              <img src={item.content} alt={item.key} />
            </SwiperSlide>
          );
        })}

        <div className="slider-controler">
          <div className=" slider-arrow">
            {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
          </div>
          <div className=" slider-arrow">
            {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </>
  );
}

export default MySwiper;
