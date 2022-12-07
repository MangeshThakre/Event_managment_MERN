import React from "react";
import EventLists from "./EventLists.js";

// component
import Filter from "./Filter.js";
import SideBar from "../../SideBar.js";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { GlobalContex } from "../../../context/Context.js";
function Events() {
  const URL = process.env.REACT_APP_URL;
  const { notify, userData, eventData, setEventData, cities, setCities } =
    useContext(GlobalContex);
  const [eventLoading, setEventLoading] = useState(false);
  const [filter, setFilter] = useState({
    search: "",
    city: "",
    from: "",
    to: "",
    page: 1,
    limit: 10
  });
  useEffect(() => {
    getEvents();
  }, [userData, filter]);

  async function getEvents() {
    setEventLoading(true);
    try {
      const response = await axios({
        method: "get",
        url: `${URL}/api/events?search=${filter.search}&city=${filter.city}&from=${filter.form}&to=${filter.to}&page=${filter.page}&limit=${filter.limit}`,
        withCredentials: "true"
      });
      if (response.data.success) {
        setEventData(response.data.data);
        setCities(response.data.cityArr);
      }

      setEventLoading(false);
    } catch (error) {
      setEventLoading(false);
      notify(error.response.data.message, "error");
    }
  }

  return (
    <div className="pr-4 pt-16 pb-4  h-full flex gap-8  ">
      <SideBar />
      <div className=" h-full pt-4 flex flex-col w-full">
        <Filter filter={filter} setFilter={setFilter} cities={cities} />
        <EventLists
          eventLoading={eventLoading}
          eventData={eventData}
          filter={filter}
          setFilter={setFilter}
        />
      </div>
    </div>
  );
}

export default Events;
