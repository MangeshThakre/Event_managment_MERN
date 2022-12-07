import React, { useState } from "react";

// components
import AddEvent from "../../AddEvent";

function Filter({ filter, setFilter, cities }) {
  const [toggleAddEvent, setToggleAddEvent] = useState(false);
  const [showCityDropDown, setShowCityDropDown] = useState(false);
  const [filterData, setFilterData] = useState({
    search: "",
    to: "",
    from: "",
    city: ""
  });

  function handleFilter(e) {
    e.preventDefault(e);
    setFilter({
      ...filter,
      search: filterData.search,
      city: filterData.city,
      from: filterData.from,
      to: filterData.to
    });
  }

  return (
    <div className=" bg-white rounded-lg shadow   h-fit">
      <form
        className="px-2 py-2 lg:px-6 lg:py:6 flex gap-3"
        onSubmit={(e) => handleFilter(e)}
      >
        {/* search */}
        <div>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only "
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500   placeholder-gray-400  "
              placeholder="Search Title"
              onChange={(e) =>
                setFilterData({ ...filterData, search: e.target.value })
              }
            />
          </div>
        </div>
        {/* search end */}
        {/* filter city */}
        <div className="relative">
          <button
            id="dropdownDefault"
            data-dropdown-toggle="dropdown"
            className="  text-gray-900 flex justify-evenly     w-40   bg-gray-50 border-2 border-gray-300  hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center  items-center "
            type="button"
            onClick={() => setShowCityDropDown((preVal) => !preVal)}
          >
            {filterData.city === "--" || filterData.city === ""
              ? "CITY"
              : filterData.city}
            <svg
              className="ml-2 w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          {showCityDropDown ? (
            <div
              id="dropdown"
              className=" absolute  shadow-lg z-30 w-44  left-0 mt-2 bg-white rounded divide-y divide-gray-100  "
            >
              <ul className="py-1 text-sm text-gray-700 ">
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    setFilterData({ ...filterData, city: "--" });
                    setShowCityDropDown(false);
                  }}
                >
                  <p className="  block py-2 px-4 hover:bg-gray-100 "> -- </p>
                </li>
                {cities.map((city, i) => (
                  <li
                    key={i}
                    className="cursor-pointer"
                    onClick={() => {
                      setFilterData({ ...filterData, city: city });
                      setShowCityDropDown(false);
                    }}
                  >
                    <p className="  block py-2 px-4 hover:bg-gray-100 ">
                      {city}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
        {/* filter city */}

        <button
          type="submit"
          className="py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>

        {/* create */}
        <div className=" flex-1 justify-end flex ">
          <button
            onClick={() => setToggleAddEvent(true)}
            type="button"
            className="py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex "
          >
            <svg
              className="w-6 h-6 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            Create
          </button>
        </div>
        {/* create  end*/}
      </form>
      {toggleAddEvent ? (
        <AddEvent setToggleAddEvent={setToggleAddEvent} />
      ) : null}
    </div>
  );
}

export default Filter;
