import React from "react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
function contact() {
  return (
    <>
      <Navbar />

      <div className="flex pt-[5vh] lg:pt-[20vh] justify-center items-center lg:items-start w-[100vw]  h-auto ">
        <div className="flex lg:flex-row flex-col-reverse items-center lg:items-start  w-[90%]  h-auto lg:py-[4vh]">
          <div className=" w-[100%] lg:w-[40%] h-auto">
            <h1 className="text-[10vw] lg:text-[7vw] FDS">The Petal Patch</h1>

            <div className="mt-[5vh] lg:mt-[10vh] space-y-[1.50vh] lg:space-y-[4vh]">
              <h2 className="text-[3vw] lg:text-[1.30vw] w-[60%]">
                12715-2 McGregor Boulevard Fort Myers, FL, 33919 United States
              </h2>
              <h2 className="text-[3vw] lg:text-[1.30vw] w-[60%]">
                Call: 239-208-3116
              </h2>
              <h2 className="text-[3vw] lg:text-[1.30vw]">
                Email: fortmyerspetalpatch@gmail.com
              </h2>
              <h2 className="text-[3vw] lg:text-[1.30vw] w-[60%]">
                10AM-3PM Monday - Friday
              </h2>
              <h2 className="text-[3vw] lg:text-[1.30vw]">
                Saturday by appointment in off season.
              </h2>
              <h2 className="text-[3vw] lg:text-[1.30vw] w-[60%]">
                Closed Sunday
              </h2>
              <h2 className="text-[3vw] lg:text-[1.30vw] font-semibold w-[60%]">
                Hours may vary with holidays
              </h2>
            </div>
          </div>
          <div className="flex items-start justify-center lg:w-[60%] h-full">
            <div className="bg-yellow-400 w-[80vw] lg:w-[50vw] h-[40vh] lg:h-[70vh]"></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default contact;
