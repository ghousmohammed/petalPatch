import React from "react";
import Image from "next/image";
import Link from "next/link";
import roseglam from "../../public/roseglamm.png";
function Card() {
  return (
    <>
      <Link href="/product">
        <div className="flex justify-evenly cursor-pointer items-center  flex-col w-[80vw] lg:w-[20vw]  lg:h-[65vh] ">
          <div className="flex justify-center items-center bg-[#f7f7f7] w-[80vw] lg:w-[20vw] h-[55vh]">
            <div className="transitionCustom hover:scale-110  w-[50%]">
              <Image src={roseglam}></Image>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[5vw] lg:text-[1.30vw] font-medium text-[#666] ">
              Rose Glam
            </h2>
            <h3 className="text-[5vw] lg:text-[1.30vw] font-semibold text-[#79a03f]">
              $4.99
            </h3>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
