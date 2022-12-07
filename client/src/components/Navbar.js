import React from "react";
import { useContext } from "react";
import { GlobalContex } from "../context/Context.js";
function Navbar() {
  const { userData } = useContext(GlobalContex);

  return (
    <nav className="p-3  h-16 w-full fixed top-0 left-0  bg-[#283895] ">
      <div
        className="container flex  items-center   mx-auto"
        style={
          Object.keys(userData).length > 1
            ? { justifyContent: "space-between" }
            : { justifyContent: "center" }
        }
      >
        <div className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            SOLGURUZ
          </span>
        </div>
        {Object.keys(userData).length > 1 ? (
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
