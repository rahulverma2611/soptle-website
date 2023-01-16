import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
// import { data } from "autoprefixer";

export default function SliderComponent({ data }) {
    return (
        <>
            <div className="md:hidden">
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
                        <div className="md:w-[30%] w-[100%] bg-[#fff] p-6">
                            <h2 style = {{fontSize:11}} className=" text-justify">I think this us most reliable, trustable and most powerful app for the business purposes!!
                                But I have one suggestion pls include filter by price Low to High on every category.
                                It's reduced the time taken to create order for buyers..</h2>
                            <p style = {{fontSize:14}}  className='py-6 font-semibold'>Anand Kainya Shakambari-Foods</p>
                        </div>
                    </ SwiperSlide>
                    <SwiperSlide>
                        <div className="md:w-[30%] w-[100%] bg-[#fff] p-6">
                            <h2 style = {{fontSize:11}} className=" text-justify">Soptle has helped fruitheart brand by distributing the products in geographies that we thought were inaccessible by us.</h2>
                            <p style = {{fontSize:14}}  className='py-6 font-semibold'>Kabir Grover-Grover Agro Foods</p>
                        </div>
                    </ SwiperSlide>
                    <SwiperSlide>
                        <div className="md:w-[30%] w-[100%] bg-[#fff] p-6">
                            <h2 style = {{fontSize:11}} className=" text-justify">There has been a steady growth in sales soon after we join the Soptle platform using Soptle platform is easy and seamless.</h2>
                            <p  style = {{fontSize:14}}  className='py-6 font-semibold'>Kanishka Aggarwal-Hector Beverages</p>
                        </div>
                    </ SwiperSlide>
                    <SwiperSlide>

                        <div className="md:w-[30%] w-[100%] bg-[#fff] p-6">
                            <h2 style = {{fontSize:11}} className="text-justify">Soptle’s overall commitment to quality and customer satisfaction is excellent.</h2>
                            <p style = {{fontSize:14}} className='py-4 font-semibold'>- Vikas Bana
                                -Blue Bell Foods</p>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>


            <div className="hidden md:inline">


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
                        <div className='flex px-20 justify-between'>
                            <div className="w-[30%] bg-[#fff] p-6">
                                <h2  style = {{fontSize:12}}className=" text-justify">I think this us most reliable, trustable and most powerful app for the business purposes!!
                                    But I have one suggestion pls include filter by price Low to High on every category.
                                    It's reduced the time taken to create order for buyers..</h2>
                                <p className='py-6 font-semibold'>Venkatesh - Eastsun</p>
                            </div>
                            <div className="w-[30%]  bg-[#fff] p-6">
                                <h2  style = {{fontSize:12}} className=" text-justify">Very very useful app. All products are at best price only. I have using this app from 9 months .
                                    I will buy products from this app for selling products in my shop.</h2>
                                <p className='py-6 font-semibold'>Sourabh Kumar</p>
                            </div>
                            <div className="w-[30%]  bg-[#fff] p-6">
                                <h2  style = {{fontSize:12}} className=" text-justify">I tried many “so called” ecommerce platforms,
                                    but they were all so complicated. Soptle is super easy.
                                    I can manage my store from my phone just like using WhatsApp.
                                    Magical!</h2>
                                <p className='py-6 font-semibold'>Vansh Rana</p>
                            </div>

                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex px-20 justify-between '>
                            <div className="md:w-[30%] bg-[#fff] p-6">
                                <h2 style = {{fontSize:12}} className="text-justify">Soptle’s overall commitment to quality and customer satisfaction is excellent."</h2>
                                <p className='py-6 font-semibold'>- Vikas Bana
                                    Blue Bell Foods</p>
                            </div>
                            <div className="w-[30%] bg-[#fff] p-6">
                                <h2  style = {{fontSize:12}} className="text-justify">"The professionalism and skill Soptle uses in daily operation and for special projects are a welcome part of working with such a fine Platform. The expertise that Soptle brings to the table is by far world</h2>
                                <p className='py-6 font-semibold'>- Manish Bharot
                                    -SuperPride</p>
                            </div>
                            <div className="w-[30%] bg-[#fff] p-6">
                                <h2 style = {{fontSize:12}} className="text-justify">"I didn’t think we could have such an upturn in our profits
                                    after using Soptle’s services.Unlike other B2B Players Soptle has made a remarkable
                                    difference to our business.</h2>
                                <p className='py-6 font-semibold'>- Madan Lal-Daniel Foods</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}