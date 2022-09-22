import React from "react";

function NavLink({ linkName }) {
  return (
    <>
      {/* link start */}
      <div className="plantLINK cursor-pointer px-[1vw] py-[1vh] rounded-full flex items-center space-x-[2px]">
        <h1 className="font-medium text-[1.10vw]">{linkName}</h1>
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
      </div>
      {/* link end */}
    </>
  );
}

export default NavLink;
