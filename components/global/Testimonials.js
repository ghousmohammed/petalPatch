import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// import required modules

import { Pagination, Autoplay } from "swiper";
import flower from "../../public/flower.jpg";
import { FaQuoteRight } from "react-icons/fa";
function Testimonials() {
  return (
    <>
      <div className="flex  justify-center items-start backDEX w-[100vw] h-[65vh] lg:h-[80vh]">
        <div className="w-[100%] lg:h-[70vh] h-[55vh] bg-[#faf7f8]">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center w-[70vw] h-full ">
                <div className="flex flex-col items-center justify-center space-y-[4vh]">
                  <FaQuoteRight className="text-[4vw] text-[#79a03f]" />
                  <p className="text-[3vw] lg:text-[1.20vw] lg:w-[80%]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eaque, veritatis optio. Iste numquam aliquid Lorem ipsum,
                    dolor sit autem
                  </p>
                </div>

                <div className="mt-[4vh] flex flex-col items-center justify-center space-y-[1vh]">
                  <div className="w-[]">
                    <Image
                      src={flower}
                      width={100}
                      height={100}
                      className="rounded-full"
                    ></Image>
                  </div>
                  <div>
                    {" "}
                    <h1 className="text-[4vw] lg:text-[1.50vw] font-medium ">
                      Red Rose
                    </h1>
                    <h2 className="text-[3vw] lg:text-[1.10vw] ">
                      CEO Of Gardens
                    </h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center w-[70vw] h-full ">
                <div className="flex flex-col items-center justify-center space-y-[4vh]">
                  <FaQuoteRight className="text-[4vw] text-[#79a03f]" />
                  <p className="text-[3vw] lg:text-[1.20vw] lg:w-[80%]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eaque, veritatis optio. Iste numquam aliquid Lorem ipsum,
                    dolor sit autem
                  </p>
                </div>

                <div className="mt-[4vh] flex flex-col items-center justify-center space-y-[1vh]">
                  <div className="w-[]">
                    <Image
                      src={flower}
                      width={100}
                      height={100}
                      className="rounded-full"
                    ></Image>
                  </div>
                  <div>
                    {" "}
                    <h1 className="text-[4vw] lg:text-[1.50vw] font-medium ">
                      Red Rose
                    </h1>
                    <h2 className="text-[3vw] lg:text-[1.10vw] ">
                      CEO Of Gardens
                    </h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center w-[70vw] h-full ">
                <div className="flex flex-col items-center justify-center space-y-[4vh]">
                  <FaQuoteRight className="text-[4vw] text-[#79a03f]" />
                  <p className="text-[3vw] lg:text-[1.20vw] lg:w-[80%]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eaque, veritatis optio. Iste numquam aliquid Lorem ipsum,
                    dolor sit autem
                  </p>
                </div>

                <div className="mt-[4vh] flex flex-col items-center justify-center space-y-[1vh]">
                  <div className="w-[]">
                    <Image
                      src={flower}
                      width={100}
                      height={100}
                      className="rounded-full"
                    ></Image>
                  </div>
                  <div>
                    {" "}
                    <h1 className="text-[4vw] lg:text-[1.50vw] font-medium ">
                      Red Rose
                    </h1>
                    <h2 className="text-[3vw] lg:text-[1.10vw] ">
                      CEO Of Gardens
                    </h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
