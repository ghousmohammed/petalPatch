import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Autoplay } from "swiper";

function HeroSlider() {
  return (
    <>
      <div className="hidden lg:flex w-[100vw] h-[3vh]"></div>
      <div className="flex justify-center items-start backDEX w-[100vw] h-[80vh]">
        <div className="w-[100%] h-[85vh]">
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            autoplay={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex space-y-[4vh] flex-col justify-center items-center w-[100vw] h-[85vh] heroSliderBG1">
                <div className="text-white ">
                  <h1 className="text-[10vw] lg:text-[4vw] font-bold FDS">
                    New Arrival
                  </h1>
                  <p className="text-[4vw] lg:text-[1.40vw]">
                    purchase the best bouqets out there
                  </p>
                </div>
                <button className="text-white   font-medium bg-black hover:text-black hover:bg-white rounded-[4px] w-[25vw] lg:w-[9vw] h-[7vh] ">
                  Buy Now
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex space-y-[4vh] flex-col justify-center items-center w-[100vw] h-[85vh] heroSliderBG2">
                <div className="text-white ">
                  <h1 className="text-[10vw] lg:text-[4vw] font-bold FDS">
                    New Arrival
                  </h1>
                  <p className="text-[4vw] lg:text-[1.40vw]">
                    purchase the best bouqets out there
                  </p>
                </div>
                <button className="text-white   font-medium bg-black hover:text-black hover:bg-white rounded-[4px] w-[25vw] lg:w-[9vw] h-[7vh] ">
                  Buy Now
                </button>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="flex space-y-[4vh] flex-col justify-center items-center w-[100vw] h-[85vh] heroSliderBG3">
                <div className="text-white ">
                  <h1 className="text-[10vw] lg:text-[4vw] font-bold FDS">
                    New Arrival
                  </h1>
                  <p className="text-[4vw] lg:text-[1.40vw]">
                    purchase the best bouqets out there
                  </p>
                </div>
                <button className="text-white   font-medium bg-black hover:text-black hover:bg-white rounded-[4px] w-[25vw] lg:w-[9vw] h-[7vh] ">
                  Buy Now
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default HeroSlider;
