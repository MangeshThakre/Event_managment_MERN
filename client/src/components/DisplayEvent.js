import React, { useContext } from "react";
import { GlobalContex } from "../context/Context";

function DisplayEvent() {
  const { currentEvent, setCurrentEvent, setToggleDisplayEvent } =
    useContext(GlobalContex);

  function eventImage() {
    if (currentEvent.images.imageOne.url)
      return currentEvent.images.imageOne.url;
    if (currentEvent.images.imageTwo.url)
      return currentEvent.images.imageTwo.url;
    if (currentEvent.images.imageThree.url)
      return currentEvent.images.imageThree.url;
    if (currentEvent.images.imageFour.url)
      return currentEvent.images.imageFour.url;
  }

  return (
    <div className="absolute  w-[100%] h-[100vh]  left-0 top-0  flex  justify-end  bg-[#17171994] z-40">
      {/* component */}
      <div className="w-[30rem]  bg-[#f6f6f8] h-full overflow-scroll">
        {/* header */}
        <div className="flex items-center justify-between bg-white  px-6 h-14">
          <p className="text-gray-700  font-semibold">Blog Info</p>
          <div
            className=" w-9 h-9 justify-center flex   items-center  rounded-full hover:bg-slate-100 cursor-pointer"
            onClick={() => {
              setToggleDisplayEvent();
              setCurrentEvent({});
            }}
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
        {/* header end */}

        <div className="  mt-12   pl-10 pr-6  flex flex-col gap-4">
          <div className="w-full  mb-5 flex items-center justify-center ">
            <img
              src={eventImage()}
              alt="img"
              className="h-32 w-32 rounded-lg shadow-2xl "
            />
          </div>
          <div className="flex">
            <p className=" font-semibold text-black   text-start  w-32  mr-5">
              Event Title :
            </p>
            <p>{currentEvent.title}</p>
          </div>
          <div className="flex">
            <p className=" font-semibold text-black   text-start  w-32  mr-5">
              Description :
            </p>
            <p>{currentEvent.description}</p>
          </div>{" "}
          <div className="flex">
            <p className=" font-semibold text-black   text-start  w-32  mr-5">
              E Mail:
            </p>
            <p>{currentEvent.email}</p>
          </div>{" "}
          <div className="flex">
            <p className=" font-semibold text-black   text-start  w-32  mr-5">
              Phone :
            </p>
            <p>{currentEvent.phone}</p>
          </div>{" "}
          <div className="flex">
            <p className=" font-semibold text-black   text-start  w-32 mr-5">
              Address :
            </p>
            <p>{currentEvent.address}</p>
          </div>{" "}
          <div className="flex">
            <p className=" font-semibold text-black   text-start  w-32 mr-5">
              City :
            </p>
            <p>{currentEvent.city}</p>
          </div>{" "}
          <div className="flex">
            <p className=" font-semibold text-black   text-start  w-32  mr-5">
              Organizer Name :
            </p>
            <p>{currentEvent.organizerName}</p>
          </div>
          <div className="flex">
            <p className=" font-semibold text-black   text-start  w-32  mr-5">
              Publist date and Time :
            </p>
            <p>{currentEvent.publishDate}</p>
          </div>
          <div className="flex">
            <p className=" font-semibold text-black   text-start  w-32  mr-5">
              Total likes :
            </p>
            <p>{currentEvent.publishDate}</p>
          </div>
          <div className="flex">
            <p className=" font-semibold text-black   text-start  w-32    mr-5 ">
              Status :
            </p>
            <label className="inline-flex relative items-center  cursor-pointer">
              <input
                id="status"
                type="checkbox"
                defaultChecked={currentEvent.status}
                className="sr-only peer"
                disabled
              />
              <div className="w-11 h-6 bg-gray-500 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayEvent;
