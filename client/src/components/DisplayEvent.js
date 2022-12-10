import React, { useContext, useState } from "react";
import { GlobalContex } from "../context/Context";
import moment from "moment";

function DisplayEvent() {
  const URL = process.env.REACT_APP_URL;
  const [isCopied, setIscopied] = useState(false);
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

  const copyContent = async () => {
    console.log("lkjdf");
    try {
      await navigator.clipboard.writeText(URL + "/window/" + currentEvent._id);
      await setIscopied(true);
      setTimeout(() => setIscopied(false), 5000);
      console.log("copied");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="absolute  w-[100%] h-[100vh]  left-0 top-0  flex  justify-end  bg-[#17171994] z-40">
      {/* component */}
      <div className="w-[30rem] relative  bg-[#f6f6f8] h-full overflow-scroll">
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

        {isCopied ? (
          <div className="absolute left-8  items-center justify-center  w-28 h-8 bg-blue-300 top-20 rounded-lg">
            <p className=" font-semibold">Copied 🙌</p>
          </div>
        ) : null}
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
            <p>
              {moment(currentEvent.publishDate).format(
                "MMMM Do YYYY, h:mm:ss a"
              )}
            </p>
          </div>
          <div className="flex">
            <p className=" font-semibold text-black   text-start  w-32  mr-5">
              Total likes :
            </p>
            <p>{currentEvent.likes.length}</p>
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
          </div>{" "}
          {/*share */}
          <div
            className="flex relative  items-center"
            onClick={() => (!isCopied ? copyContent() : null)}
          >
            <div>
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
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                ></path>
              </svg>
            </div>
            <p className="text-blue-500 cursor-pointer">
              {URL + "/window/" + currentEvent._id}
            </p>
          </div>
          {/*share  end*/}
        </div>
      </div>
    </div>
  );
}

export default DisplayEvent;
