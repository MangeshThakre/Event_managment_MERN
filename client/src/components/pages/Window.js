import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import lodingSvg from "../../asset/loading.svg";
import moment from "moment";
function Window() {
  const URL = process.env.REACT_APP_URL;
  const { eventId } = useParams();
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ err: false, message: "" });
  useEffect(() => {
    getEvent();
  }, []);

  async function getEvent() {
    setLoading(true);
    try {
      const response = await axios({
        method: "get",
        url: `${URL}/api/event?eventId=${eventId}`
      });
      const data = response.data;
      if (data.success) {
        setEvent(data.data);
      }
      setLoading(false);
    } catch (error) {
      if (error.response.data.message === "Invalid Id") {
        setError({ err: true, message: error.response.data.message });
      }
      setLoading(false);
    }
  }

  return (
    <div className="h-[100vh] w-full   flex  items-center justify-center">
      {loading ? (
        <img src={lodingSvg} alt="img" />
      ) : error.err ? (
        <h1 className=" text-[#283895] font-bold text-5xl">
          Invalid Request 404{" "}
          <span className="text-base font-semibold text-[#304be6]">
            {error.message}
          </span>
        </h1>
      ) : (
        <div className="md:flex gap-12">
          {/* img */}
          <div className="flex items-center justify-center gap-8 flex-wrap  md:max-w-xl">
            {event.images?.imageOne.url ? (
              <img
                className="w-48  rounded-md shadow-lg"
                src={event.images.imageOne.url}
                alt="imgOne"
              />
            ) : null}
            {event.images?.imageTwo.url ? (
              <img
                className="w-48  rounded-md shadow-lg"
                src={event.images.imageTwo.url}
                alt="imgTwo"
              />
            ) : null}
            {event?.images?.imageThree.url ? (
              <img
                className="w-48  rounded-md shadow-lg"
                src={event.images.imageThree.url}
                alt="imgThree"
              />
            ) : null}
            {event.images?.imageFour.url ? (
              <img
                className="w-48  rounded-md shadow-lg"
                src={event.images.imageFour.url}
                alt="imgFour"
              />
            ) : null}
          </div>
          {/* img end */}
          <div className="flex flex-col gap-4 mt-6">
            <div className="flex max-w-lg text-left">
              <p className=" font-semibold text-black   text-start  w-32  mr-5">
                Event Title :
              </p>
              <p>{event.title}</p>
            </div>
            <div className="flex max-w-lg text-left">
              <p className=" font-semibold text-black   text-start   w-36  mr-5">
                Description :
              </p>
              <p>{event.description}</p>
            </div>{" "}
            <div className="flex">
              <p className=" font-semibold text-black   text-start  w-32  mr-5">
                E Mail:
              </p>
              <p>{event.email}</p>
            </div>{" "}
            <div className="flex">
              <p className=" font-semibold text-black   text-start  w-32  mr-5">
                Phone :
              </p>
              <p>{event.phone}</p>
            </div>{" "}
            <div className="flex">
              <p className=" font-semibold text-black   text-start  w-32 mr-5">
                Address :
              </p>
              <p>{event.address}</p>
            </div>{" "}
            <div className="flex">
              <p className=" font-semibold text-black   text-start  w-32 mr-5">
                City :
              </p>
              <p>{event.city}</p>
            </div>{" "}
            <div className="flex">
              <p className=" font-semibold text-black   text-start  w-32  mr-5">
                Organizer Name :
              </p>
              <p>{event.organizerName}</p>
            </div>
            <div className="flex">
              <p className=" font-semibold text-black   text-start  w-32  mr-5">
                Publist date and Time :
              </p>
              <p>
                {
                  moment(event.publishDate).format("MMMM Do YYYY, h:mm:ss a") // December 10th 2022, 7:32:06 pm
                }
              </p>
            </div>
            <div className="flex">
              <p className=" font-semibold text-black   text-start  w-32  mr-5">
                Total likes :
              </p>
              <p>{event.likes?.length}</p>
            </div>
            <div className="flex">
              <p className=" font-semibold text-black   text-start  w-32    mr-5 ">
                Status :
              </p>
              <label className="inline-flex relative items-center  cursor-pointer">
                <input
                  id="status"
                  type="checkbox"
                  defaultChecked={event.status}
                  className="sr-only peer"
                  disabled
                />
                <div className="w-11 h-6 bg-gray-500 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Window;
