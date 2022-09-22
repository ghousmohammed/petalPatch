import React, { useState } from "react";
import NavDropDown from "../elements/NavDropDown";
import Link from "next/link";

function Navbar() {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);

  const handleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const handleSearchBar = () => {
    setShowSearchBox(!showSearchBox);
  };

  return (
    <>
      <div className="z-50  fixed hidden lg:flex justify-start items-start px-[10vw] pt-[3vh] bg-[#79a03f] w-[100vw] h-[17vh]">
        {/* main white navbar start */}
        {showDropDown ? <NavDropDown onc={handleDropDown} /> : null}

        <div className=" flex justify-center items-end left-0 absolute bottom-[-60%]  w-[100vw] h-[19vh]">
          <div className="px-[4vw] flex items-center justify-between bg-white shadow-lg rounded-full w-[94vw] h-[19vh]">
            {/* first div start */}

            <Link href="/">
              <div className="flex items-center logo">
                <h1 className="text-[2.40vw] font-bold text-green-500">
                  Petal Patch
                </h1>
              </div>
            </Link>
            {/* first div end */}

            {/* second div start */}

            <div className=" flex items-center space-x-[1vw]">
              {/* link start */}
              <Link href="/">
                <div className="plantLINK cursor-pointer px-[1vw] py-[1vh] rounded-full flex items-center space-x-[2px]">
                  <h1 className="font-semibold text-[1.10vw]">Home</h1>
                </div>
              </Link>
              {/* link end */}
              {/* link start */}
              <Link href="/shop">
                <div className="plantLINK cursor-pointer px-[1vw] py-[1vh] rounded-full flex items-center space-x-[2px]">
                  <h1 className="font-semibold text-[1.10vw]">Shop</h1>
                </div>
              </Link>
              {/* link end */}
              {/* link start */}
              <Link href="/about">
                <div className="plantLINK cursor-pointer px-[1vw] py-[1vh] rounded-full flex items-center space-x-[2px]">
                  <h1 className="font-semibold text-[1.10vw]">About us </h1>
                </div>
              </Link>
              {/* link end */}
              {/* link start */}
              <div className="plantLINK cursor-pointer px-[1vw] py-[1vh] rounded-full flex items-center space-x-[2px]">
                <h1 className="font-semibold text-[1.10vw]">Contact us</h1>
              </div>
              {/* link end */}
              {/* link start */}
              <div
                onClick={handleDropDown}
                className="moreCategoryLink relative plantLINK cursor-pointer px-[1vw] py-[1vh] rounded-full flex items-center space-x-[2px]"
              >
                <h1 className="font-semibold text-[1.10vw]">More</h1>

                {showDropDown ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              {/* link end */}
            </div>
            {/* second div end */}

            {/* third div start */}

            <div className="flex items-center space-x-[2vw]">
              {/* icon start */}
              <div className=" relative cursor-pointer">
                <svg
                  onClick={handleSearchBar}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="svgHoov w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                {showSearchBox ? (
                  <div className="navDEX flex  justify-between items-start w-[22vw] top-[140%] px-[2vw] py-[2vh] right-[10%] h-auto border-t-[3px] border-t-[#79a03f] shadow-md bg-white absolute">
                    <div className="w-[30%] uppercase font-medium space-y-[1vh]  flex flex-col text-[1vw]">
                      <form action="">
                        <input
                          type="text"
                          placeholder="Search"
                          className="outline-none w-[18vw]"
                        />
                      </form>
                    </div>
                  </div>
                ) : null}
              </div>
              {/* icon end */}
            </div>
            {/* third div end */}
          </div>
        </div>

        {/* main white navbar end */}

        <div className="svgSideText cursor-pointer flex space-x-[0.40vw]  items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 svgSide text-white"
          >
            <path
              fillRule="evenodd"
              d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
              clipRule="evenodd"
            />
          </svg>

          <h2 className=" text-[0.90vw] tracking-[1px] flex items-center  text-white font-medium">
            Best & Fastest Online Flower Shop in Town
          </h2>
        </div>
      </div>

      {/* mobile menuBar start */}

      <div className="flex items-center justify-around w-[100vw] h-[12vh]">
        {/* first */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>

        {/* second */}
        <Link href="/">
          <div className="flex items-center logo">
            <h1 className="text-[8vw] font-bold text-green-500">Petal Patch</h1>
          </div>
        </Link>

        {/* third  */}
        {/* icon start */}
        <div className=" relative cursor-pointer">
          <svg
            onClick={handleSearchBar}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="svgHoov w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          {showSearchBox ? (
            <div className="z-40 flex  justify-between items-start w-[50vw] top-[140%] px-[2vw] py-[2vh] right-[10%] h-auto border-t-[3px] border-t-[#79a03f] shadow-md bg-white absolute">
              <div className="w-[30%] uppercase font-medium space-y-[1vh]  flex flex-col text-[1vw]">
                <form action="">
                  <input
                    type="text"
                    placeholder="Search"
                    className="text-[3vw]  outline-none w-[45vw]"
                  />
                </form>
              </div>
            </div>
          ) : null}
        </div>
        {/* icon end */}
      </div>

      {/* mobile menubar end */}
    </>
  );
}

export default Navbar;
