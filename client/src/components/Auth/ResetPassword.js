import React from "react";

import { Link } from "react-router-dom";

function ResetPassword() {
  function handleResetSubmit() {}

  return (
    <div className="h-[100vh] pt-16  flex justify-center">
      {/* <!-- Modal content --> */}
      <div className=" bg-white rounded-lg shadow  mt-24 h-fit">
        <div className="px-6 py-6 lg:px-8">
          <div className="flex justify-center items-center my-3">
            <div className=" h-9 w-9 flex items-center justify-center  bg-[#e8e9f2] rounded-full">
              <div className="  h-7 w-7 flex items-center justify-center  bg-[#d6d9eb] rounded-full">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="#283895"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="mx-4 mb-6">
            <h2 className="mb-2 text-[#283895] text-lg  font-semibold">
              Set New Password
            </h2>
            <p className="text-gray-500">
              Your New Password must Be different to <br /> previously used
              passwords.
            </p>
          </div>

          <form className="space-y-4" onSubmit={() => handleResetSubmit()}>
            <div>
              <label
                htmlFor="password"
                className="block text-start mb-1 text-xs font-medium text-gray-800"
              >
                New Password
              </label>
              <input
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 "
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="conpassword"
                className="block text-start mb-1 text-xs font-medium text-gray-800"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="conpassword"
                className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 "
                placeholder="Enter Password"
                required
                maxLength="8"
                minLength="8"
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-[#283895] font-semibold hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Reset Password
            </button>
            <div className="">
              <Link to="/signin" className="text-[#283895]">
                ← Back to Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
