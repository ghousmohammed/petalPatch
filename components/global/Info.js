import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { BsAward } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
import Image from "next/image";
import wed from "../../public/wed.png";
import hbd from "../../public/hbd.png";
function Info() {
  return (
    <>
      {/* two redirect cards start */}

      <div className="px-[2vw] lg:px-[10vw] flex  items-center justify-between w-[100vw] h-[50vh] lg:h-[80vh] ">
        {/* square start */}

        <div className="flex bg-red-400 w-[48%] h-[24vh] lg:h-[60vh]">
          <div className="text-white flex flex-col items-center justify-center w-[50%] h-full">
            <h1 className="FDS font-semibold text-[5vw] lg:text-[3vw]">
              Wedding
            </h1>
            <h2 className="font-semibold text-[2vw]">Flower Bouquet</h2>
            <button className="mt-[4vh] text-[2vw] lg:text-[1.10vw] font-medium w-[15vw] lg:w-[8vw] h-[3vh] lg:h-[7vh] hover:bg-black hover:text-white  text-black bg-white">
              Shop Now
            </button>
          </div>
          <div className="hover:scale-110 transitionCustom  flex justify-end items-end  w-[60%] h-full">
            <Image src={wed} />
          </div>
        </div>

        {/* sqaure end */}

        {/* square start */}

        <div className="flex bg-yellow-400 w-[48%] h-[24vh] lg:h-[60vh]">
          <div className="text-white flex flex-col items-center justify-center w-[50%] h-full">
            <h1 className="FDS font-semibold text-[5vw] lg:text-[3vw]">
              Birthday
            </h1>
            <h2 className="font-semibold text-[2vw]">Flower Bouquet</h2>
            <button className="mt-[4vh] text-[2vw] lg:text-[1.10vw] font-medium w-[15vw] lg:w-[8vw] h-[3vh] lg:h-[7vh] hover:bg-black hover:text-white  text-black bg-white">
              Shop Now
            </button>
          </div>
          <div className="hover:scale-110 transitionCustom flex justify-end items-end  w-[60%] h-full">
            <Image src={hbd} />
          </div>
        </div>

        {/* sqaure end */}
      </div>

      {/* two redirect cards end */}

      <div className="grid grid-cols-2 lg:grid-cols-4 px-[6vw] justify-evenly items-center  w-[100vw] h-[50vh]">
        {/* info card start */}

        <div className=" flex justify-evenly items-center  ">
          <div className="infoSVG_P flex flex-col items-center justify-center ">
            <TbTruckDelivery className="stroke-[1.4px] infoSVG w-20 h-20" />
            <h2 className="text-[4vw] lg:text-[1.30vw] font-semibold mont">
              Fast Delivery
            </h2>
            <p className="text-[#666] text-[3vw] lg:text-[1vw] text-center">
              Faster delivery than others
            </p>
          </div>
        </div>

        {/* info card end */}

        {/* info card start */}

        <div className="flex justify-evenly items-center  ">
          <div className="infoSVG_P flex flex-col items-center justify-center ">
            <BiSupport className=" infoSVG w-20 h-20" />
            <h2 className="text-[4vw] lg:text-[1.30vw] font-semibold mont">
              24/7 Support
            </h2>
            <p className="text-[#666] text-[3vw] lg:text-[1vw] text-center">
              We&apos;re always here to help
            </p>
          </div>
        </div>

        {/* info card end */}

        {/* info card start */}

        <div className="flex justify-evenly items-center  ">
          <div className="infoSVG_P flex flex-col items-center justify-center ">
            <BsAward className="  infoSVG w-20 h-20" />
            <h2 className="text-[4vw] lg:text-[1.30vw] font-semibold mont">
              Best in town
            </h2>
            <p className="text-[#666] text-[3vw] lg:text-[1vw] text-center">
              We&apos;re the BEST
            </p>
          </div>
        </div>

        {/* info card end */}

        {/* info card start */}

        <div className="flex justify-evenly items-center ">
          <div className="infoSVG_P flex flex-col items-center justify-center ">
            <RiSecurePaymentLine className=" infoSVG w-20 h-20" />
            <h2 className="text-[4vw] lg:text-[1.30vw] font-semibold mont">
              Secure Payment
            </h2>
            <p className="text-[#666] text-[3vw] lg:text-[1vw] text-center">
              you can shop freely
            </p>
          </div>
        </div>

        {/* info card end */}
      </div>
    </>
  );
}

export default Info;
