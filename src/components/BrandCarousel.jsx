import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import brands1 from './brands.jpg'; 
import brands2 from './brands2.jpg'; 

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { data } from "autoprefixer";

export default function SliderComponent({ data }) {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img  src= {brands1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img   src={brands2} alt="" />

                </SwiperSlide>
            </Swiper>
        </>
    );
}