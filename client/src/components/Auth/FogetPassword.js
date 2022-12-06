import React from "react";

import { Link } from "react-router-dom";

function FogetPassword() {
  function handleFotgotSubmit() {}

  return (
    <div className="h-[100vh] pt-16  flex justify-center">
      {/* <!-- Modal content --> */}
      <div className=" bg-white rounded-lg shadow  mt-24 h-fit">
        <div className="px-6 py-6 lg:px-8">
          <div className="mx-4 mb-6">
            <h2 className="mb-2 text-[#283895] text-lg  font-semibold">
              Forgot Password ?
            </h2>
            <p className="text-gray-500">
              No worries, we'll send you reset instrunctions.
            </p>
          </div>

          <form className="space-y-4" onSubmit={() => handleFotgotSubmit()}>
            <div>
              <label
                htmlFor="email"
                className="block text-start mb-1 text-xs font-medium text-gray-800"
              >
                Email
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
                htmlFor="password"
                className="block text-start mb-1 text-xs font-medium text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
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

export default FogetPassword;
