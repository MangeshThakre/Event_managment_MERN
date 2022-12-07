import React from "react";
import EventLists from "../EventLists.js";

// component
import Filter from "../Filter.js";
import SideBar from "../SideBar.js";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { GlobalContex } from "../../context/Context.js";
function Events() {
  const { notify } = useContext(GlobalContex);
  const [eventLoading, setEventLoading] = useState(false);
  useEffect(() => {}, []);

  function getEvents() {}

  return (
    <div className="pr-4 pt-16 pb-4  h-full flex gap-8 ">
      <SideBar />
      <div className=" h-full pt-4 flex flex-col">
        <Filter />
        <EventLists />
      </div>
    </div>
  );
}

export default Events;
