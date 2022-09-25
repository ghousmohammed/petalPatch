import React from "react";
import Image from "next/image";
import Link from "next/link";
import roseglam from "../../public/roseglamm.png";
function Card({ productName, productPrice, productImage, productLink }) {
  return (
    <>
      <Link href={productLink}>
        <div className="flex justify-evenly cursor-pointer items-center  flex-col w-[80vw] lg:w-[20vw]  lg:h-[65vh] ">
          <div className="flex justify-center items-center bg-[#f7f7f7] w-[80vw] lg:w-[20vw] h-[55vh]">
            <div className="flex justify-center items-center transitionCustom hover:scale-110 lg:w-[100%] w-[60%]">
              <Image src={productImage} width={200} height={200}></Image>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[5vw] lg:text-[1.30vw] font-medium text-[#666] ">
              {productName}
            </h2>
            <h3 className="text-[5vw] lg:text-[1.30vw] font-semibold text-[#79a03f]">
              ${productPrice}
            </h3>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
