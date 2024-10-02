import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

// images
import onephoto from '../../assets/pic1.jpg';
import twophoto from '../../assets/pic2.jpg';
import threephoto from '../../assets/pic3.jpg';
import fourphoto from '../../assets/download 3.jpeg';
import fivephoto from '../../assets/download.jpeg';
import sixphoto from '../../assets/download4.jpeg';

import './_news.scss';
import CardNews from "../CardNew/cardNews";
const News = () => {
    return (
        <section className="secNews my-5">
            <div className="container">
                <div className="secDetails ">
                    <div className="text-center">
                        <h6>Latest News</h6>
                        <h2>Our Latest News</h2>
                    </div>
                    <div className="cardNews">

                   
                        <Swiper
                            breakpoints={{
                                0: {
                                    slidesPerView: 1, // تظهر بطاقة واحدة
                                    spaceBetween: 10, // المسافة بين البطاقات
                                },
                                // الشاشات المتوسطة (بين 768px و 1200px)
                                768: {
                                    slidesPerView: 2, // تظهر بطاقتين
                                    spaceBetween: 20,
                                },
                                // الشاشات الكبيرة (أكبر من 1200px)
                                1200: {
                                    slidesPerView: 3, // تظهر 3 بطاقات
                                    spaceBetween: 30,
                                },
                            }}
                            spaceBetween={30}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
          
                        <SwiperSlide>
                            <CardNews photo={onephoto} img={fivephoto} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardNews photo={twophoto} img={fourphoto} />

                        </SwiperSlide>
                        <SwiperSlide>
                            <CardNews photo={threephoto} img={sixphoto} />

                        </SwiperSlide>
                        <SwiperSlide>
                            <CardNews photo={onephoto} img={sixphoto} />

                        </SwiperSlide>
                        <SwiperSlide>
                            <CardNews photo={twophoto} img={fourphoto} />

                        </SwiperSlide>
                        <SwiperSlide>
                            <CardNews photo={threephoto} img={fivephoto} />

                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>

        </div>
        </section>
    )
}
export default News;