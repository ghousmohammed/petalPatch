import Image from "next/image";
import React from "react";
import award1 from "../../public/award1.jpg";
import award2 from "../../public/award2.jpeg";
import award3 from "../../public/award3.jpg";
function Awards() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mont text-[6vw] lg:text-[2.50vw] font-bold text-[#4f4038]">
          Awards
        </h1>
        <h2 className="text-[5vw] lg:text-[2vw]">🏆🏆🏆</h2>
      </div>
      <div className="grid items-center justify-center place-items-center grid-cols-3 gap-[2vw] w-[100vw] h-[30vh] lg:h-[80vh] ">
        <div className="hover:scale-110 transitionCustom cursor-pointer hover:shadow-xl w-[80%]">
          <Image src={award1}></Image>
        </div>
        <div className="hover:scale-110 transitionCustom cursor-pointer hover:shadow-xl w-[80%]">
          <Image src={award2}></Image>
        </div>
        <div className="hover:scale-110 transitionCustom cursor-pointer hover:shadow-xl w-[80%]">
          <Image src={award3}></Image>
        </div>
      </div>
    </>
  );
}

export default Awards;
