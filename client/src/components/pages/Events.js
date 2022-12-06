import React from "react";
import EventLists from "../EventLists.js";

// component
import Filter from "../Filter.js";

function Events() {
  return (
    <div className="px-4 pt-20 pb-4  h-full">
      <Filter />
      <EventLists />
    </div>
  );
}

export default Events;
