import React, { useState } from "react";
import axios from "axios";

function AddEvent({ setToggleAddEvent }) {
  const [newEventData, setNewEventData] = useState({
    title: "",
    discription: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    organizerName: "",
    status: false,
    imageOne: "",
    imageTwo: "",
    imageThree: "",
    imageFour: "",
    publishDate: ""
  });

  function handleSubmit() {}
  return (
    <div className="absolute  w-[100%] h-[100vh]  left-0 top-0  flex  justify-end  bg-[#17171994] z-40">
      {/* component */}
      <div className="w-[30rem]  bg-[#f6f6f8] h-full">
        {/* header */}
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
        {/* header end */}
        {/* form */}
        <form className="space-y-6  px-6  py-8" onSubmit={() => handleSubmit()}>
          {/* title */}
          <div className="flex  items-center  gap-2">
            <label
              htmlFor="title"
              className="block md:w-28 text-start mb-1 text-sm font-medium text-gray-800"
            >
              Event Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 "
              placeholder="Enter Title"
              required
              onClick={(e) =>
                setNewEventData({ ...newEventData, title: e.target.value })
              }
            />
          </div>
          {/* title end */}
          {/* descriotion */}
          <div className="flex  items-center  gap-2">
            <label
              htmlFor="Description"
              className="block md:w-28 text-start mb-1 text-sm font-medium text-gray-800"
            >
              Description
            </label>
            <textarea
              type="text"
              id="Description"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 "
              placeholder="Enter Description"
              required
              onClick={(e) =>
                setNewEventData({
                  ...newEventData,
                  discription: e.target.value
                })
              }
            />
          </div>
          {/* description end */}
          {/* emaail */}
          <div className="flex  items-center  gap-2">
            <label
              htmlFor="email"
              className="block md:w-28 text-start mb-1 text-sm font-medium text-gray-800"
            >
              E-Mail
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 "
              placeholder="Enter Email Id"
              required
              onClick={(e) =>
                setNewEventData({
                  ...newEventData,
                  email: e.target.value
                })
              }
            />
          </div>
          {/* email end */}
          {/* Phone */}
          <div className="flex  items-center  gap-2">
            <label
              htmlFor="phoneNo"
              className="block md:w-28 text-start mb-1 text-sm font-medium text-gray-800"
            >
              Phone
            </label>
            <input
              type="number"
              id="phoneNo"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 "
              placeholder="Enter Phone Number"
              required
              maxLength="10"
              minLength="10"
              onClick={(e) =>
                setNewEventData({
                  ...newEventData,
                  phone: e.target.value
                })
              }
            />
          </div>
          {/* phone */}
          {/* adderss */}
          <div className="flex  items-center  gap-2">
            <label
              htmlFor="adderss"
              className="block md:w-28 text-start mb-1 text-sm font-medium text-gray-800"
            >
              Adderss
            </label>
            <input
              type="text"
              id="adderss"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 "
              placeholder="Enter Adderss"
              required
              autoComplete="off"
              onClick={(e) =>
                setNewEventData({
                  ...newEventData,
                  address: e.target.value
                })
              }
            />
          </div>
          {/* Adderss end */}
          {/* city */}
          <div className="flex  items-center  gap-2">
            <label
              htmlFor="city"
              className="block md:w-28 text-start mb-1 text-sm font-medium text-gray-800"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 "
              placeholder="Enter City"
              required
              autoComplete="off"
            />
          </div>
          {/* city  end*/}
          {/*  Organizer Name */}
          <div className="flex  items-center  gap-2">
            <label
              htmlFor="OrgName"
              className="block md:w-28 text-start mb-1 text-sm font-medium text-gray-800"
            >
              Organizer Name
            </label>
            <input
              type="text"
              id="OrgName"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 "
              placeholder="Enter Organizer Name"
              required
              autoComplete="off"
              onClick={(e) =>
                setNewEventData({
                  ...newEventData,
                  organizerName: e.target.value
                })
              }
            />
          </div>
          {/*  Organizer Name  end*/}
          {/*  status */}
          <div className="flex items-center">
            <label
              htmlFor="status"
              className="block md:w-28 text-start mb-1 text-sm font-medium text-gray-800"
            >
              Status
            </label>
            <label class="inline-flex relative items-center  cursor-pointer">
              <input
                id="status"
                type="checkbox"
                value=""
                class="sr-only peer"
                onChange={(e) =>
                  setNewEventData({
                    ...newEventData,
                    status: !newEventData.organizerName
                  })
                }
              />

              <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
          {/*  end status */}
          {/* image */}
          <div className="flex  items-center  gap-2">
            <label
              htmlFor="image"
              className="block md:w-28 text-start mb-1 text-sm font-medium text-gray-800"
            >
              Organizer Name
            </label>
            <input
              type="file"
              id="image"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 "
              placeholder="select image (single & multiple)"
              required
            />
          </div>
          {/* images  end*/}
          {/* date and time */}
          <div className="flex  items-center  gap-2">
            <label
              htmlFor="publish"
              className="block md:w-28 text-start mb-1 text-sm font-medium text-gray-800"
            >
              Publish Date and time
            </label>
            <input
              type="date-time"
              id="publish"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 "
              placeholder="Select Date and Time"
              required
              autoComplete="off"
              onClick={(e) =>
                setNewEventData({
                  ...newEventData,
                  date: e.target.value
                })
              }
            />
          </div>
          {/* date and time end */}
          <div className="flex gap-6 justify-center items-center md:px-20   mt-4">
            <button
              onClick={() => setToggleAddEvent(false)}
              type="submit"
              className="w-full text-[#283895] bg-white border-[#283895]  border-[1px] hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-100    font-semibold rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Cancle
            </button>
            <button
              type="submit"
              className="w-full text-white bg-[#283895] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Save
            </button>
          </div>
        </form>
        {/* form end */}
      </div>
    </div>
  );
}

export default AddEvent;
