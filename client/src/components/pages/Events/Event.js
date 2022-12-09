import React from "react";
import { useRef, useContext, useState, useEffect } from "react";
import { GlobalContex } from "../../../context/Context.js";
import axios from "axios";

// image
import loding from "../../../asset/loading.svg";

function Event({ event, i }) {
  const URL = process.env.REACT_APP_URL;
  const {
    userData,
    setToggleAddEvent,
    eventData,
    setEventData,
    notify,
    setCurrentEvent
  } = useContext(GlobalContex);

  const [eventLoading, setEventLoading] = useState(false);
  const [status, setStatus] = useState(event.status);
  const checkbox = useRef(null);
  useEffect(() => {
    checkbox.current.checked = event.status;
    setStatus(event.status);
  }, [event]);

  function eventImage() {
    if (event.images.imageOne.url) return event.images.imageOne.url;
    if (event.images.imageTwo.url) return event.images.imageTwo.url;
    if (event.images.imageThree.url) return event.images.imageThree.url;
    if (event.images.imageFour.url) return event.images.imageFour.url;
  }

  useEffect(() => {
    if (status != event.status) handleUpdate();
  }, [status]);

  //// handle delete function
  async function handleDelete() {
    setEventLoading(true);
    try {
      const response = await axios({
        method: "delete",
        url: URL + "/api/event",
        withCredentials: true,
        data: { eventId: event._id }
      });
      if (response.data.success) {
        setEventData(eventData.filter((e) => e._id !== event._id));
        notify(response.data.message, "success");
      }
      setEventLoading(false);
    } catch (error) {
      setEventLoading(false);

      notify(error.response.data.message, "error");
    }
  }

  async function handleUpdate() {
    const formData = new FormData();
    for (const key in event) {
      if (key == "images") {
        formData.append("images", JSON.stringify(event.images));
      } else if (key == "status") {
        formData.append("status", status);
      } else if (key !== "_id") {
        formData.append(key, event[key]);
      }
    }
    formData.append("eventId", event._id);
    setEventLoading(true);
    try {
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
      }
      setEventLoading(false);
    } catch (error) {
      console.log(error.response);
      setEventLoading(false);
      notify(error.response.data.message, "error");
    }
  }

  return (
    <tr className="relative bg-white border-b  h-48  border-gray-300   ">
      {eventLoading ? (
        <td className=" absolute w-full h-full flex items-center justify-center  z-20 bg-[#0000002b] ">
          <img src={loding} alt="" />
        </td>
      ) : null}
      {/* index no */}
      <th
        scope="row"
        className="py-4 px-2 font-medium text-sm text-center text-gray-900 whitespace-nowrap "
      >
        {i}
      </th>
      {/* index no end */}
      {/* image */}
      <td className="py-4 px-2 text-sm text-center">
        <img className="h-28 w-28" src={eventImage()} alt="" />
      </td>
      {/* image  end*/}
      {/* title */}
      <td className="py-4 px-2 text-sm ">{event.title}</td>
      {/* title end */}
      {/*description  */}
      <td className="py-4 px-2">{event.description}</td>
      {/*description  end */}
      {/* pheone no */}
      <td className="py-4 px-2 text-sm text-center">{event.phone}</td>
      {/* pheone no  end*/}
      {/* like */}
      <td className="py-4 px-2 text-sm text-center ">20</td>
      {/* like  end*/}
      {/* status */}
      <td className="py-4 px-2 text-sm text-center">
        <label className="inline-flex relative items-center  cursor-pointer">
          <input
            ref={checkbox}
            type="checkbox"
            className="sr-only peer"
            disabled={event.userId != userData._id}
            onChange={() => setStatus(!status)}
          />

          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </td>
      {/* status  status end*/}
      {/* actions */}
      <td className="py-4 px-2 text-sm">
        {Object.keys(userData).length > 1 && event.userId === userData._id ? (
          <div className="flex gap-2">
            {/* edit */}
            <div
              className="h-8 w-8  hover:bg-gray-200 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => {
                setToggleAddEvent(true);
                setCurrentEvent(event);
              }}
            >
              <svg
                className="w-6 h-6"
                fill="gray"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                <path
                  fillRule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            {/* edit end */}
            {/* delete  */}
            <div
              className="h-8 w-8  hover:bg-gray-200 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => handleDelete()}
            >
              <svg
                className="w-6 h-6"
                fill="gray"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            {/* delete  end*/}
          </div>
        ) : (
          <div className="h-8 w-8 ml-5  hover:bg-gray-200 rounded-full flex justify-center items-center cursor-pointer">
            <svg
              className="w-6 h-6"
              fill="gray"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        )}
      </td>
      {/* actions  end*/}
    </tr>
  );
}

export default Event;
