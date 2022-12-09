import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { GlobalContex } from "../context/Context.js";
import AddImage from "./AddImage.js";

function AddEvent({ setToggleAddEvent }) {
  const { notify, eventData, setEventData, currentEvent, setCurrentEvent } =
    useContext(GlobalContex);
  const IsEdit = Object.keys(currentEvent).length > 1 ? true : false;
  const URL = process.env.REACT_APP_URL;

  // file
  const [imageOne, setImageOne] = useState(null);
  const [imageTwo, setImageTwo] = useState(null);
  const [imageThree, setImageThree] = useState(null);
  const [imageFour, setImageFour] = useState(null);

  // preview
  const [imageOnePreview, setimageOnePreview] = useState("");
  const [imageTwoPreview, setimageTwoPreview] = useState("");
  const [imageThreePreview, setimageThreePreview] = useState("");
  const [imageFourPreview, setimageFourPreview] = useState("");

  const [newEventLoading, setNewEventLoading] = useState(false);

  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (IsEdit) {
      setStatus(currentEvent.status);
      if (currentEvent.images.imageOne.url)
        setimageOnePreview(currentEvent.images.imageOne.url);
      if (currentEvent.images.imageTwo.url)
        setimageTwoPreview(currentEvent.images.imageTwo.url);
      if (currentEvent.images.imageThree.url)
        setimageThreePreview(currentEvent.images.imageThree.url);
      if (currentEvent.images.imageFour.url)
        setimageFourPreview(currentEvent.images.imageFour.url);
    }
  }, [currentEvent]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      !imageOnePreview &&
      !imageTwoPreview &&
      !imageThreePreview &&
      !imageFourPreview
    ) {
      return notify("At least one image is required", "warning");
    }
    const formData = new FormData(e.target);
    if (imageOne) formData.append("imageOne", imageOne);
    if (imageTwo) formData.append("imageTwo", imageTwo);
    if (imageThree) formData.append("imageThree", imageThree);
    if (imageFour) formData.append("imageFour", imageFour);
    formData.append("status", status);

    setNewEventLoading(true);
    try {
      if (IsEdit) {
        formData.append("eventId", currentEvent._id);
        formData.append("images", JSON.stringify(currentEvent.images));
        const response = await axios({
          method: "patch",
          url: URL + "/api/event",
          withCredentials: true,
          data: formData
        });
        const data = await response.data.data;
        if (response.data.success) {
          setEventData(
            eventData.map((event) => (event._id === data._id ? data : event))
          );
          notify("updated successfuly", "success");
          setToggleAddEvent(false);
        }
      } else {
        const response = await axios({
          method: "post",
          url: URL + "/api/event",
          withCredentials: true,
          data: formData
        });
        if (response.data.success) {
          setEventData([...eventData, response.data.data]);
          notify("New Event created successfuly", "success");
        }
      }

      setNewEventLoading(false);
    } catch (error) {
      setNewEventLoading(false);
      notify(error.response.data.message, "error");
    }
  }

  return (
    <div className="absolute  w-[100%] h-[100vh]  left-0 top-0  flex  justify-end  bg-[#17171994] z-40">
      {/* component */}
      <div className="w-[30rem]  bg-[#f6f6f8] h-full overflow-scroll">
        {/* header */}
        <div className="flex items-center justify-between bg-white  px-6 h-14">
          <p className="text-gray-700  font-semibold">Create Event</p>
          <div
            className=" w-9 h-9 justify-center flex   items-center  rounded-full hover:bg-slate-100 cursor-pointer"
            onClick={() => {
              setToggleAddEvent(false);
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
        {/* form */}
        <form
          className="space-y-6  px-6  py-8"
          onSubmit={(e) => handleSubmit(e)}
        >
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
              defaultValue={IsEdit ? currentEvent.title : ""}
            />
          </div>
          {/* title end */}
          {/* descriotion */}
          <div className="flex  items-center  gap-2">
            <label
              htmlFor="description"
              className="block md:w-28 text-start mb-1 text-sm font-medium text-gray-800"
            >
              Description
            </label>
            <textarea
              type="text"
              name="description"
              id="description"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 "
              placeholder="Enter Description"
              required
              defaultValue={IsEdit ? currentEvent.description : ""}
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
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 "
              placeholder="Enter Email Id"
              required
              defaultValue={IsEdit ? currentEvent.email : ""}
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
              type="tel"
              id="phoneNo"
              name="phone"
              pattern="[0-9]{10}"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 "
              placeholder="Enter Phone Number 0000000000"
              required
              defaultValue={IsEdit ? currentEvent.phone : ""}
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
              name="address"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 "
              placeholder="Enter Adderss"
              required
              defaultValue={IsEdit ? currentEvent.address : ""}
              autoComplete="off"
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
              name="city"
              type="text"
              id="city"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 "
              placeholder="Enter City"
              required
              defaultValue={IsEdit ? currentEvent.city : ""}
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
              name="organizerName"
              type="text"
              id="OrgName"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 "
              placeholder="Enter Organizer Name"
              required
              defaultValue={IsEdit ? currentEvent.organizerName : ""}
              autoComplete="off"
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
            <label className="inline-flex relative items-center  cursor-pointer">
              <input
                id="status"
                type="checkbox"
                name="status"
                defaultChecked={IsEdit ? currentEvent.status : false}
                className="sr-only peer"
                onChange={() => setStatus(!status)}
              />
              <div className="w-11 h-6 bg-gray-500 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
            </label>
          </div>
          {/*  end status */}
          {/* image */}
          <div className="flex  items-center  gap-2">
            <label
              htmlFor="image"
              className="block md:w-28 text-start mb-1 text-sm font-medium text-gray-800"
            >
              image
            </label>
            <div className="flex flex-wrap gap-3 justify-center items-center">
              <AddImage
                setImage={setImageOne}
                imagePreveiw={imageOnePreview}
                setImagePreview={setimageOnePreview}
              />
              <AddImage
                setImage={setImageTwo}
                imagePreveiw={imageTwoPreview}
                setImagePreview={setimageTwoPreview}
              />
              <AddImage
                setImage={setImageThree}
                imagePreveiw={imageThreePreview}
                setImagePreview={setimageThreePreview}
              />
              <AddImage
                setImage={setImageFour}
                imagePreveiw={imageFourPreview}
                setImagePreview={setimageFourPreview}
              />
            </div>
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
              type="datetime-local"
              id="publish"
              name="publishDate"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 "
              placeholder="Select Date and Time"
              required
              defaultValue={IsEdit ? currentEvent.publishDate.slice(0, 16) : ""}
              autoComplete="off"
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
              {newEventLoading ? (
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline ml-3 w-4 h-4 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
              ) : null}
            </button>
          </div>
        </form>
        {/* form end */}
      </div>
    </div>
  );
}

export default AddEvent;
