import React from "react";

function EventLists() {
  return (
    <div className="overflow-x-auto relative mt-4  shadow-md flex-1">
      <table className="w-full text-sm text-left ">
        <thead className="text-xs text-gray-700   shadow-sm sticky  top-0 z-10 uppercase bg-[#eff1fb]   h-20">
          <tr>
            <th scope="col" className="py-3 px-6">
              No
            </th>
            <th scope="col" className="py-3 px-6">
              Image
            </th>
            <th scope="col" className="py-3 px-6">
              Title
            </th>
            <th scope="col" className="py-3 px-6">
              Description
            </th>{" "}
            <th scope="col" className="py-3 px-6">
              Phone
            </th>{" "}
            <th scope="col" className="py-3 px-6">
              Total Likes
            </th>{" "}
            <th scope="col" className="py-3 px-6">
              Status
            </th>{" "}
            <th scope="col" className="py-3 px-6">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b  h-48  border-gray-300   ">
            <th
              scope="row"
              className="py-4 px-2 font-medium text-sm text-center text-gray-900 whitespace-nowrap "
            >
              1
            </th>
            <td className="py-4 px-2 text-sm text-center">Sliver</td>
            <td className="py-4 px-2 text-sm ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. animi?
            </td>
            <td className="py-4 px-2">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam in quas minima minus cupiditate earum ipsam repellendus
              deleniti, cum voluptatibus neque! Eaque nam obcaecati, aliquam ad
              rem molestias recusandae quae.
            </td>
            <td className="py-4 px-2 text-sm text-center">+9999999999</td>
            <td className="py-4 px-2 text-sm text-center ">20</td>

            <td className="py-4 px-2 text-sm text-center">
              <label class="inline-flex relative items-center  cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />

                <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </td>
            <td className="py-4 px-2 text-sm">
              <div className="flex gap-2">
                <div className="h-6 w-6  hover:bg-gray-200 rounded-full flex justify-center items-center cursor-pointer">
                  <svg
                    className="w-4 h-4"
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
                <div className="h-6 w-6  hover:bg-gray-200 rounded-full flex justify-center items-center cursor-pointer">
                  <svg
                    class="w-4 h-4"
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
              </div>
            </td>
          </tr>{" "}
          <tr className="bg-white border-b  h-48  border-gray-300   ">
            <th
              scope="row"
              className="py-4 px-2 font-medium text-sm text-center text-gray-900 whitespace-nowrap "
            >
              1
            </th>
            <td className="py-4 px-2 text-sm text-center">Sliver</td>
            <td className="py-4 px-2 text-sm ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. animi?
            </td>
            <td className="py-4 px-2">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam in quas minima minus cupiditate earum ipsam repellendus
              deleniti, cum voluptatibus neque! Eaque nam obcaecati, aliquam ad
              rem molestias recusandae quae.
            </td>
            <td className="py-4 px-2 text-sm text-center">+9999999999</td>
            <td className="py-4 px-2 text-sm text-center ">20</td>

            <td className="py-4 px-2 text-sm text-center">
              <label class="inline-flex relative items-center  cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />

                <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </td>
            <td className="py-4 px-2 text-sm">
              <div className="flex gap-2">
                <div className="h-6 w-6  hover:bg-gray-200 rounded-full flex justify-center items-center cursor-pointer">
                  <svg
                    className="w-4 h-4"
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
                <div className="h-6 w-6  hover:bg-gray-200 rounded-full flex justify-center items-center cursor-pointer">
                  <svg
                    class="w-4 h-4"
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
              </div>
            </td>
          </tr>{" "}
          <tr className="bg-white border-b  h-48  border-gray-300   ">
            <th
              scope="row"
              className="py-4 px-2 font-medium text-sm text-center text-gray-900 whitespace-nowrap "
            >
              1
            </th>
            <td className="py-4 px-2 text-sm text-center">Sliver</td>
            <td className="py-4 px-2 text-sm ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. animi?
            </td>
            <td className="py-4 px-2">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam in quas minima minus cupiditate earum ipsam repellendus
              deleniti, cum voluptatibus neque! Eaque nam obcaecati, aliquam ad
              rem molestias recusandae quae.
            </td>
            <td className="py-4 px-2 text-sm text-center">+9999999999</td>
            <td className="py-4 px-2 text-sm text-center ">20</td>

            <td className="py-4 px-2 text-sm text-center">
              <label class="inline-flex relative items-center  cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />

                <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </td>
            <td className="py-4 px-2 text-sm">
              <div className="flex gap-2">
                <div className="h-6 w-6  hover:bg-gray-200 rounded-full flex justify-center items-center cursor-pointer">
                  <svg
                    className="w-4 h-4"
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
                <div className="h-6 w-6  hover:bg-gray-200 rounded-full flex justify-center items-center cursor-pointer">
                  <svg
                    class="w-4 h-4"
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
              </div>
            </td>
          </tr>{" "}
          <tr className="bg-white border-b  h-48  border-gray-300   ">
            <th
              scope="row"
              className="py-4 px-2 font-medium text-sm text-center text-gray-900 whitespace-nowrap "
            >
              1
            </th>
            <td className="py-4 px-2 text-sm text-center">Sliver</td>
            <td className="py-4 px-2 text-sm ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. animi?
            </td>
            <td className="py-4 px-2">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam in quas minima minus cupiditate earum ipsam repellendus
              deleniti, cum voluptatibus neque! Eaque nam obcaecati, aliquam ad
              rem molestias recusandae quae.
            </td>
            <td className="py-4 px-2 text-sm text-center">+9999999999</td>
            <td className="py-4 px-2 text-sm text-center ">20</td>

            <td className="py-4 px-2 text-sm text-center">
              <label class="inline-flex relative items-center  cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />

                <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </td>
            <td className="py-4 px-2 text-sm">
              <div className="flex gap-2">
                <div className="h-6 w-6  hover:bg-gray-200 rounded-full flex justify-center items-center cursor-pointer">
                  <svg
                    className="w-4 h-4"
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
                <div className="h-6 w-6  hover:bg-gray-200 rounded-full flex justify-center items-center cursor-pointer">
                  <svg
                    class="w-4 h-4"
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
              </div>
            </td>
          </tr>{" "}
          <tr className="bg-white border-b  h-48  border-gray-300   ">
            <th
              scope="row"
              className="py-4 px-2 font-medium text-sm text-center text-gray-900 whitespace-nowrap "
            >
              1
            </th>
            <td className="py-4 px-2 text-sm text-center">Sliver</td>
            <td className="py-4 px-2 text-sm ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. animi?
            </td>
            <td className="py-4 px-2">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam in quas minima minus cupiditate earum ipsam repellendus
              deleniti, cum voluptatibus neque! Eaque nam obcaecati, aliquam ad
              rem molestias recusandae quae.
            </td>
            <td className="py-4 px-2 text-sm text-center">+9999999999</td>
            <td className="py-4 px-2 text-sm text-center ">20</td>

            <td className="py-4 px-2 text-sm text-center">
              <label class="inline-flex relative items-center  cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />

                <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </td>
            <td className="py-4 px-2 text-sm">
              <div className="flex gap-2">
                <div className="h-6 w-6  hover:bg-gray-200 rounded-full flex justify-center items-center cursor-pointer">
                  <svg
                    className="w-4 h-4"
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
                <div className="h-6 w-6  hover:bg-gray-200 rounded-full flex justify-center items-center cursor-pointer">
                  <svg
                    class="w-4 h-4"
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
              </div>
            </td>
          </tr>{" "}
          <tr className="bg-white border-b  h-48  border-gray-300   ">
            <th
              scope="row"
              className="py-4 px-2 font-medium text-sm text-center text-gray-900 whitespace-nowrap "
            >
              1
            </th>
            <td className="py-4 px-2 text-sm text-center">Sliver</td>
            <td className="py-4 px-2 text-sm ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. animi?
            </td>
            <td className="py-4 px-2">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam in quas minima minus cupiditate earum ipsam repellendus
              deleniti, cum voluptatibus neque! Eaque nam obcaecati, aliquam ad
              rem molestias recusandae quae.
            </td>
            <td className="py-4 px-2 text-sm text-center">+9999999999</td>
            <td className="py-4 px-2 text-sm text-center ">20</td>

            <td className="py-4 px-2 text-sm text-center">
              <label class="inline-flex relative items-center  cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />

                <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </td>
            <td className="py-4 px-2 text-sm">
              <div className="flex gap-2">
                <div className="h-6 w-6  hover:bg-gray-200 rounded-full flex justify-center items-center cursor-pointer">
                  <svg
                    className="w-4 h-4"
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
                <div className="h-6 w-6  hover:bg-gray-200 rounded-full flex justify-center items-center cursor-pointer">
                  <svg
                    class="w-4 h-4"
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
              </div>
            </td>
          </tr>{" "}
          <tr className="bg-white border-b  h-48  border-gray-300   ">
            <th
              scope="row"
              className="py-4 px-2 font-medium text-sm text-center text-gray-900 whitespace-nowrap "
            >
              1
            </th>
            <td className="py-4 px-2 text-sm text-center">Sliver</td>
            <td className="py-4 px-2 text-sm ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. animi?
            </td>
            <td className="py-4 px-2">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam in quas minima minus cupiditate earum ipsam repellendus
              deleniti, cum voluptatibus neque! Eaque nam obcaecati, aliquam ad
              rem molestias recusandae quae.
            </td>
            <td className="py-4 px-2 text-sm text-center">+9999999999</td>
            <td className="py-4 px-2 text-sm text-center ">20</td>

            <td className="py-4 px-2 text-sm text-center">
              <label class="inline-flex relative items-center  cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />

                <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </td>
            <td className="py-4 px-2 text-sm">
              <div className="flex gap-2">
                <div className="h-6 w-6  hover:bg-gray-200 rounded-full flex justify-center items-center cursor-pointer">
                  <svg
                    className="w-4 h-4"
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
                <div className="h-6 w-6  hover:bg-gray-200 rounded-full flex justify-center items-center cursor-pointer">
                  <svg
                    class="w-4 h-4"
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
              </div>
            </td>
          </tr>{" "}
          <tr className="bg-white border-b  h-48  border-gray-300   ">
            <th
              scope="row"
              className="py-4 px-2 font-medium text-sm text-center text-gray-900 whitespace-nowrap "
            >
              1
            </th>
            <td className="py-4 px-2 text-sm text-center">Sliver</td>
            <td className="py-4 px-2 text-sm ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. animi?
            </td>
            <td className="py-4 px-2">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam in quas minima minus cupiditate earum ipsam repellendus
              deleniti, cum voluptatibus neque! Eaque nam obcaecati, aliquam ad
              rem molestias recusandae quae.
            </td>
            <td className="py-4 px-2 text-sm text-center">+9999999999</td>
            <td className="py-4 px-2 text-sm text-center ">20</td>

            <td className="py-4 px-2 text-sm text-center">
              <label class="inline-flex relative items-center  cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />

                <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </td>
            <td className="py-4 px-2 text-sm">
              <div className="flex gap-2">
                <div className="h-6 w-6  hover:bg-gray-200 rounded-full flex justify-center items-center cursor-pointer">
                  <svg
                    className="w-4 h-4"
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
                <div className="h-6 w-6  hover:bg-gray-200 rounded-full flex justify-center items-center cursor-pointer">
                  <svg
                    class="w-4 h-4"
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
              </div>
            </td>
          </tr>{" "}
        </tbody>
      </table>
      <div className="   border-t-2 border-gray-100 bg-white border-b py-4 px-6  sticky bottom-0   flex  justify-between items-center w-full">
        <th
          scope="row"
          className="py-4 px-2 font-semibold text-sm text-gray-700  whitespace-nowrap "
        >
          Results
        </th>
        <td className="flex  items-center gap-9 ">
          <div className="h-9 w-9 rounded-full  flex items-center justify-center hover:bg-gray-100 cursor-pointer">
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="h-8 w-8 rounded-md  text-white fron-bold    bg-[#283895] flex  items-center justify-center">
            1
          </div>
          <div className="h-9 w-9 rounded-full  flex items-center justify-center hover:bg-gray-100 cursor-pointer">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </td>
      </div>
    </div>
  );
}

export default EventLists;
