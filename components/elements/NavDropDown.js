import React from "react";

function NavDropDown({ onc }) {
  return (
    <>
      <div
        onClick={onc}
        className=" left-0 top-[100%]  absolute h-[83vh] w-[100vw]"
      >
        <div className="navDEX flex  justify-between items-start w-[44vw] top-[13%] px-[2vw] py-[2vh] right-[10%] h-auto border-t-[3px] border-t-[#79a03f] shadow-md bg-white absolute">
          <ul className="w-[30%] uppercase font-medium space-y-[1vh]  flex flex-col text-[1vw]">
            <li className="font-bold text-[1.20vw]">More</li>
            <hr className="border-[1px] border-gray-200" />
            <li className="cursor-pointer hover:font-bold">
              Bouquet of the Day
            </li>
            <li className="cursor-pointer hover:font-bold">Gift ideas</li>
            <li className="cursor-pointer hover:font-bold">Weddings</li>
            <li className="cursor-pointer hover:font-bold">
              Gift Certificates
            </li>
            <li className="cursor-pointer hover:font-bold">
              Plants & Succulents
            </li>
          </ul>

          {/* menu links start */}
          <ul className="w-[25%] uppercase font-medium space-y-[1vh]  flex flex-col text-[1vw]">
            <li className="font-bold text-[1.20vw]">Occasions</li>
            <hr className="border-[1px] border-gray-200" />
            <li className="cursor-pointer hover:font-bold">Birthday</li>
            <li className="cursor-pointer hover:font-bold">Get Well</li>
            <li className="cursor-pointer hover:font-bold">Sympathy</li>
            <li className="cursor-pointer hover:font-bold">All Occasions</li>
          </ul>
          {/* menu links end */}

          {/* menu links start */}
          <ul className="w-[30%] uppercase font-medium  space-y-[1vh]  flex flex-col text-[1vw]">
            <li className="font-bold text-[1.20vw]">Holidays</li>
            <hr className="border-[1px] border-gray-200" />
            <li className="cursor-pointer hover:font-bold">Mother's Day</li>
            <li className="cursor-pointer hover:font-bold">Valentine's Day</li>
            <li className="cursor-pointer hover:font-bold">
              St. Patrick's Day
            </li>
            <li className="cursor-pointer hover:font-bold">Easter</li>
            <li className="cursor-pointer hover:font-bold">
              Grandparent's Day
            </li>

            <li className="cursor-pointer hover:font-bold">Independence Day</li>

            <li className="cursor-pointer hover:font-bold">Fatther's Day</li>

            <li className="cursor-pointer hover:font-bold">Memorial Day</li>

            <li className="cursor-pointer hover:font-bold">Halloween</li>

            <li className="cursor-pointer hover:font-bold">Christmas</li>

            <li className="cursor-pointer hover:font-bold">Thanksgiving</li>

            <li className="cursor-pointer hover:font-bold">Hanukkah</li>
          </ul>
          {/* menu links end */}
        </div>
      </div>
    </>
  );
}

export default NavDropDown;
