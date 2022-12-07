import React from "react";

function AddEvent({ setToggleAddEvent }) {
  return (
    <div className="absolute  w-[100%] h-[100vh]  left-0 top-0  flex  justify-end  bg-[#17171994] z-40">
      {/* component */}
      <div className="w-[28rem]  bg-[#f6f6f8] h-full">
        <div className="flex items-center justify-between bg-white  px-6 h-14">
          <p className="text-gray-700  font-semibold">Create Event</p>
          <div
            className=" w-9 h-9 justify-center flex   items-center  rounded-full hover:bg-slate-100 cursor-pointer"
            onClick={() => setToggleAddEvent(false)}
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEvent;
