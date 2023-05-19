import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";

import "./styles.css";

import gallery1 from '../../../assets/gallery/lamborgini.webp'
import gallery2 from '../../../assets/gallery/Corolla.jpg'
import gallery3 from '../../../assets/gallery/Honda.jpg'
import gallery4 from '../../../assets/gallery/Audi.jpg'
import gallery5 from '../../../assets/gallery/Police2.jpg'
import gallery6 from '../../../assets/gallery/truck.jpg'

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const Gallery = () => {

    const swiperRef = useRef(null);
    const [initialSlideIndex, setInitialSlideIndex] = useState(0);

    useEffect(() => {
        setInitialSlideIndex(Math.floor(swiperRef.current.slides.length / 2));
    }, []);

    return (
        <>

            <div>
                <h2 className="text-center font-semibold text-3xl mt-3">Toy Gallery</h2>
            </div>
            <div className="w-8/12 mx-auto">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    loop={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    autoplay={{ delay: 2000 }} // Add autoplay with a delay of 3 seconds
                    initialSlide={initialSlideIndex} // Set the initial slide index
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={gallery1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={gallery2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={gallery3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={gallery4} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={gallery5} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={gallery6} />
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </>
    );
};

export default Gallery;