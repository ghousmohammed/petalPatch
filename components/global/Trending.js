import React from "react";
import Card from "../elements/Card";

function Trending() {
  return (
    <>
      <div className="w-[100vw]  h-auto ">
        <div className="flex pt-[14vh] pb-[5vh] flex-col items-center justify-center">
          <h1 className="mont text-[6vw] lg:text-[2.50vw] font-bold text-[#4f4038]">
            Trending Products
          </h1>
          <h2 className="text-[5vw] lg:text-[2vw]">🌼🌸🌷</h2>
        </div>

        {/* cards grid start */}

        <div className="px-[5vw] grid grid-cols-1 lg:grid-cols-4 gap-4 place-items-center place-content-center items-center justify-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        {/* cards grid end */}
      </div>
    </>
  );
}

export default Trending;
