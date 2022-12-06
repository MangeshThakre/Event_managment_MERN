import React from "react";

function Navbar() {
  const userData = true;

  return (
    <nav className="p-3  h-16 w-full fixed top-0 left-0  bg-[#283895] ">
      <div
        className="container flex  items-center   mx-auto"
        style={
          userData
            ? { justifyContent: "space-between" }
            : { justifyContent: "center" }
        }
      >
        <div className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            SOLGURUZ
          </span>
        </div>
        {userData ? (
          <div className=" bg-[#909ce1] rounded-full h-10 w-10 flex justify-center items-center">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
          </div>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
