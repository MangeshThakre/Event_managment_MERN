import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { GlobalContex } from "../../../context/Context";
// components

function Filter({ filter, setFilter }) {
  const { setToggleAddEvent, eventData, cities, setCities, notify } =
    useContext(GlobalContex);
  const URL = process.env.REACT_APP_URL;
  const [showCityDropDown, setShowCityDropDown] = useState(false);
  const [showDateDropDown, setShowDateDropDown] = useState(false);
  const [filterDate, setFilterDate] = useState("Last day");
  const [filterData, setFilterData] = useState({ search: "", city: "" });
  const [getCitiesLoading, setGetCitiesLoading] = useState(false);

  function handleFilter(e) {
    e.preventDefault(e);
    let from = new Date(Date.now() - 24 * 60 * 60 * 1000);
    if (filterDate === "Last day") {
      from = new Date(Date.now() - 24 * 60 * 60 * 1000);
    } else if (filterDate === "Last 7 day") {
      from = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    } else if (filterDate === "Last 30 days") {
      from = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    } else if (filterDate === "Last month") {
      from = new Date(Date.now() - 60 * 24 * 60 * 60 * 1000);
    } else if (filterDate === "Last year") {
      from = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000);
    }

    setFilter({
      ...filter,
      search: filterData.search,
      city: filterData.city === "--" ? "" : filterData.city,
      from: from,
      to: new Date(Date.now())
    });
  }

  // invoke getDistinctCities() event time when eventData changes
  useEffect(() => {
    getAllcities();
  }, [eventData]);

  // getDistinctCities()
  async function getAllcities() {
    setGetCitiesLoading(true);
    try {
      const response = await axios({
        method: "get",
        url: URL + "/api/distinctCities",
        withCredentials: true
      });
      if (response.data.success) {
        setCities(response.data.data);
      }
      setGetCitiesLoading(true);
    } catch (error) {
      notify(error.response.data.messaage, "error");

      setGetCitiesLoading(false);
    }
  }

  return (
    <div className=" bg-white rounded-lg shadow   h-fit">
      <form
        className="px-2 py-2 lg:px-6 lg:py:6 flex gap-7"
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

        {/* filter date */}
        <div className="relative">
          <button
            className="  text-gray-900 flex justify-evenly     w-40   bg-gray-50 border-2 border-gray-300  hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center  items-center "
            type="button"
            onClick={() => setShowDateDropDown((preVal) => !preVal)}
          >
            <svg
              className="mr-2 w-4 h-4 text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              ></path>
            </svg>
            {filterDate}
            <svg
              className="ml-2 w-3 h-3"
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
          <div
            className={
              showDateDropDown
                ? " absolute shadow-lg  left-0 z-20 mt-1 w-48 bg-white rounded divide-y divide-gray-100  "
                : " hidden shadow-lg  left-0 z-20 mt-1 w-48 bg-white rounded divide-y divide-gray-100  "
            }
          >
            <ul
              className="p-3 space-y-1 text-sm text-gray-700 "
              aria-labelledby="dropdownRadioButton"
            >
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 ">
                  <input
                    id="filter-radio-example-1"
                    type="radio"
                    name="filter-radio"
                    defaultChecked
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  ring-offset-gray-800 focus:ring-2 "
                    onChange={() => {
                      setShowDateDropDown(false);
                      setFilterDate("Last day");
                    }}
                  />
                  <label
                    htmlFor="filter-radio-example-1"
                    className="ml-2 w-full text-sm font-medium text-gray-900 rounded "
                  >
                    Last day
                  </label>
                </div>
              </li>{" "}
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100  ">
                  <input
                    id="filter-radio-example-2"
                    type="radio"
                    value=""
                    name="filter-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  ring-offset-gray-800 focus:ring-2 "
                    onChange={() => {
                      setShowDateDropDown(false);
                      setFilterDate("Last 7 day");
                    }}
                  />
                  <label
                    htmlFor="filter-radio-example-2"
                    className="ml-2 w-full text-sm font-medium text-gray-900 rounded "
                  >
                    Last 7 day
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 ">
                  <input
                    id="filter-radio-example-3"
                    type="radio"
                    value=""
                    name="filter-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  ring-offset-gray-800 focus:ring-2 "
                    onChange={() => {
                      setFilterDate("Last 30 days");
                      setShowDateDropDown(false);
                    }}
                  />
                  <label
                    htmlFor="filter-radio-example-3"
                    className="ml-2 w-full text-sm font-medium text-gray-900 rounded "
                  >
                    Last 30 days
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 ">
                  <input
                    id="filter-radio-example-4"
                    type="radio"
                    value=""
                    name="filter-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  ring-offset-gray-800 focus:ring-2 "
                    onChange={() => {
                      setShowDateDropDown(false);
                      setFilterDate("Last month");
                    }}
                  />
                  <label
                    htmlFor="filter-radio-example-4"
                    className="ml-2 w-full text-sm font-medium text-gray-900 rounded "
                  >
                    Last month
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 ">
                  <input
                    id="filter-radio-example-5"
                    type="radio"
                    value=""
                    name="filter-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  ring-offset-gray-800 focus:ring-2"
                    onChange={() => {
                      setShowDateDropDown(false);
                      setFilterDate("Last year");
                    }}
                  />
                  <label
                    htmlFor="filter-radio-example-5"
                    className="ml-2 w-full text-sm font-medium text-gray-900 rounded "
                  >
                    Last year
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* dilter date */}

        <button
          type="submit"
          className="py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          Search
        </button>

        {/* create */}
        <div className=" flex-1 justify-end flex ">
          <button
            onClick={() => setToggleAddEvent(true)}
            type="button"
            className="py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  flex "
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
    </div>
  );
}

export default Filter;
