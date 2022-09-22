import Image from "next/image";
import React from "react";

import dancingbeauty from "../../public/dancingbeauty.jpeg";
import roseglam from "../../public/roseglam.jpeg";
import precious from "../../public/precious.jpg";
import shiningbeauty from "../../public/shiningbeauty.jpeg";
import moonstruck from "../../public/moonstruck.jpg";

const flowerOBJ = [
  {
    name: "Dancing Beauty",
    image: dancingbeauty,
    link: "",
  },
  {
    name: "Rose Glam",
    image: roseglam,
    link: "",
  },
  {
    name: "Precious in Pink",
    image: precious,
    link: "",
  },
  {
    name: "Shining Beauty",
    image: shiningbeauty,
    link: "",
  },
  {
    name: "Moonstruck Mercury",
    image: moonstruck,
    link: "",
  },
];

function CardsNav() {
  return (
    <>
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-5 gap-4 items-center place-items-center place-content-center justify-center w-[100vw] h-[160vh] lg:h-[60vh] ">
        {/* flower card start */}
        {flowerOBJ.map((item, key) => (
          <div
            key={key}
            className="w-[30vw] lg:w-[15vw] h-[auto] bg-transparent "
          >
            <div className="relative w-[100%]">
              <div className=" cursor-pointer flex justify-center items-center bottom-[4%] left-[15%] lg:left-[5%] rounded-full z-10 absolute w-[20vw] h-[10vh] lg:w-[14vw] lg:h-[8vh] hover:text-white hover:bg-[#eba1db] bg-[#f5d4ee] shadow-lg">
                <p className="text-[2vw] lg:text-[1.20vw] font-medium">
                  {item.name}
                </p>
              </div>
              <Image className="rounded-[14px]" src={item.image} />
            </div>
          </div>
        ))}
        {/* flower card end */}
      </div>
    </>
  );
}

export default CardsNav;
