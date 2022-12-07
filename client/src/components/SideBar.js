import React, { useState } from "react";

import { Link } from "react-router-dom";

function SideBar() {
  const [ToggleSidebar, setToggleSideBar] = useState(true);

  return (
    <div
      className="h-full px-4  flex flex-col relative   bg-white   gap-4 py-4"
      style={!ToggleSidebar ? { width: "4rem" } : null}
    >
      {ToggleSidebar ? (
        <>
          <Link
            to="/dashbord"
            className="rounded-md  w-40 h-8 flex  font-semibold   px-2 items-center hover:text-[#283895] hover:bg-[#c0c7ee] text-gray-600  cursor-pointer"
          >
            <p>Dashbord</p>
          </Link>
          <Link
            to="/events"
            className="rounded-md w-40 h-8 flex  font-semibold px-2 items-center hover:text-[#283895] hover:bg-[#c0c7ee]  text-gray-600 cursor-pointer"
          >
            <p>Events</p>
          </Link>
        </>
      ) : null}

      <div
        onClick={() => setToggleSideBar((preVal) => !preVal)}
        className=" absolute  bottom-8   h-8 w-8 rounded-full flex justify-center items-center shadow-lg  bg-gray-100 hover:bg-slate-200 cursor-pointer "
        style={{ right: "-16px" }}
      >
        <svg
          className="w-6 h-6"
          fill="gray"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
          <path
            fillRule="evenodd"
            d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default SideBar;
