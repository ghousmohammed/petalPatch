import React from "react";
import { AiFillShop } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";

import { AiFillTwitterCircle } from "react-icons/ai";

import { AiFillInstagram } from "react-icons/ai";
import { FaYelp } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="bg-[#352923] text-white flex lg:flex-row lg:justify-around lg:items-center flex-col items-center justify-center w-[100vw] h-[80vh] lg:h-[60vh] ">
        {/* first container start
         */}

        <div className="flex flex-col justify-evenly items-start w-[60%] h-full ">
          <div>
            <h1 className="text-[5vw] lg:text-[2.40vw] font-bold text-green-500">
              The Petal Patch
            </h1>
            <p className="text-[2vw] lg:text-[1vw] lg:w-[50%] ">
              We here at The Petal Patch are more than just a florist we are
              family. We love what we do Our arrangements are made with smiles
              and love.
            </p>
          </div>
          <div className=" space-y-[2.40vh] flex flex-col w-[100%] items-start justify-center">
            {/* info start */}
            <div className="space-x-[1vh] footerInfoParent flex  items-center">
              <AiFillShop className="footerInfoChild text-[5vw] lg:text-[2vw]" />
              <h2 className="footerInfoChild font-medium text-[2vw] lg:text-[1.10vw] text-center">
                12715-2 McGregor Boulevard, Fort Myers, FL, 33919, United States
              </h2>
            </div>
            {/* info end */}

            {/* info start */}
            <div className="space-x-[1vh]  footerInfoParent flex  items-center">
              <BsFillTelephoneFill className="footerInfoChild text-[5vw] lg:text-[2vw]" />
              <a
                className="footerInfoChild font-medium text-[2vw] lg:text-[1.10vw] text-center"
                href="tel:239-208-3116"
              >
                239-208-3116
              </a>
            </div>
            {/* info end */}

            {/* info start */}
            <div className="space-x-[1vh] footerInfoParent flex  items-center">
              <MdEmail className="footerInfoChild text-[5vw] lg:text-[2vw]" />
              <a
                className="footerInfoChild font-medium text-[2vw] lg:text-[1.10vw]  text-center"
                href="mailto:fortmyerspetalpatch@gmail.com"
              >
                fortmyerspetalpatch@gmail.com
              </a>
            </div>
            {/* info end */}
          </div>
        </div>
        {/* first container end */}

        {/* social container start */}
        <div className="flex justify-evenly items-center  flex-col w-[30%]  h-full">
          <h1 className="text-[5vw] lg:text-[2.40vw] font-bold text-gray-400">
            Social Links
          </h1>
          <div className="flex flex-col items-center justify-center space-y-[3vh]">
            <BsFacebook className="cursor-pointer hover:scale-125 transitionCustom text-[8vw] lg:text-[3vw] hover:text-blue-500" />

            <AiFillTwitterCircle className="cursor-pointer hover:scale-125 transitionCustom text-[8vw] lg:text-[3vw] hover:text-blue-400" />

            <AiFillInstagram className="cursor-pointer hover:scale-125 transitionCustom text-[8vw] lg:text-[3vw] hover:text-orange-400" />

            <FaYelp className="cursor-pointer hover:scale-125 transitionCustom text-[8vw] lg:text-[3vw] hover:text-red-500" />
          </div>
        </div>
        {/* social container end */}
      </div>
      <div className="bg-[#352923] text-white flex justify-center items-center w-[100vw] h-[5vh] ">
        <p className="text-[2vw] lg:text-[1.14vw] font-medium">
          {" "}
          &copy; &nbsp;The Petal Patch
        </p>
      </div>
    </>
  );
}

export default Footer;
