import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContex } from "../context/Context";

function SideBar() {
  const [ToggleSidebar, setToggleSideBar] = useState(true);
  const { setPopup } = useContext(GlobalContex);
  return (
    <div
      className="h-full px-4  flex flex-col relative   w-56  bg-white   gap-4 py-4"
      style={!ToggleSidebar ? { width: "3rem" } : null}
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
          <div className="flex-1 items-end flex">
            <div
              className="rounded-md w-40 h-8 flex   justify-around  mb-5  font-semibold px-2 items-center hover:text-[#283895] hover:bg-[#c0c7ee]  text-gray-600 cursor-pointer"
              onClick={() =>
                setPopup({ type: "LOGOUT", eventId: "", show: true })
              }
            >
              <p>Logout</p>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                ></path>
              </svg>
            </div>
          </div>
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
            clipRule="evenodd"
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
