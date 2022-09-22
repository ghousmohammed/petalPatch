import React from "react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import Card from "../components/elements/Card";
function shop() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col py-[2vh] justify-end items-center w-[100vw] h-auto lg:h-[30vh] bg-[#f5f5f5]">
        <h3 className="text-[4vw] lg:text-[1.20vw] text-[#909090] font-medium">
          Shop &nbsp; / &nbsp; Moonstruck Mercury
        </h3>
        <p className="text-[1vw] text-[#909090]">You're Listing 504 Items</p>
      </div>

      {/* you might also like section start */}

      <div className="w-[100vw]  h-auto ">
        <div className="flex pt-[4vh] pb-[5vh] flex-col items-center justify-center">
          <h1 className="mont text-[6vw] lg:text-[2.50vw] font-bold text-[#4f4038]">
            Shop
          </h1>
        </div>

        {/* cards grid start */}

        <div className="px-[5vw] grid grid-cols-1 lg:grid-cols-4 gap-4 place-items-center place-content-center items-center justify-center">
          {/* NOTE:: loop over products here */}

          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
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

      {/* you might also like section ends */}

      <Footer />
    </>
  );
}

export default shop;
