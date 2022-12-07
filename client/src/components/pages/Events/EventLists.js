import React from "react";

import Event from "./Event";

function EventLists({ eventLoading, eventData, filter, setFilter }) {
  return (
    <div className="overflow-x-auto relative mt-4  shadow-md flex-1">
      <table className="w-full text-sm text-left ">
        <thead className="text-xs text-gray-700   shadow-sm sticky  top-0 z-10 uppercase bg-[#eff1fb]   h-20">
          <tr>
            <th scope="col" className="py-3 px-6">
              No
            </th>
            <th scope="col" className="py-3 px-6">
              Image
            </th>
            <th scope="col" className="py-3 px-6">
              Title
            </th>
            <th scope="col" className="py-3 px-6">
              Description
            </th>
            <th scope="col" className="py-3 px-6">
              Phone
            </th>
            <th scope="col" className="py-3 px-6">
              Total Likes
            </th>
            <th scope="col" className="py-3 px-6">
              Status
            </th>
            <th scope="col" className="py-3 px-6">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {eventLoading
            ? "loading"
            : eventData.map((event) => <Event key={event._id} event={event} />)}
        </tbody>
      </table>
      <div className="   border-t-2 border-gray-100 bg-white border-b py-4 px-6  sticky bottom-0   flex  justify-between items-center w-full">
        <div
          scope="row"
          className="py-4 px-2 font-semibold text-sm text-gray-700  whitespace-nowrap "
        >
          Results
        </div>
        <div className="flex  items-center gap-9 ">
          <div className="h-9 w-9 rounded-full  flex items-center justify-center hover:bg-gray-100 cursor-pointer">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="h-8 w-8 rounded-md  text-white fron-bold    bg-[#283895] flex  items-center justify-center">
            1
          </div>
          <div className="h-9 w-9 rounded-full  flex items-center justify-center hover:bg-gray-100 cursor-pointer">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventLists;
