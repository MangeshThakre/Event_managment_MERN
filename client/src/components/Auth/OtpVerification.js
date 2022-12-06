import React from "react";
import { Link } from "react-router-dom";

function OtpVerification() {
  function handleOtpSubmit() {}

  return (
    <div className="h-[100vh] pt-16  flex justify-center">
      {/* <!-- Modal content --> */}
      <div className=" bg-white rounded-lg shadow  mt-24 h-fit">
        <div className="px-6 py-6 lg:px-8">
          <div className="flex justify-center items-center my-3"></div>
          <div className="mx-4 mb-6">
            <h2 className="mb-2 text-[#283895] text-lg  font-semibold">
              Enter OTP
            </h2>
            <p className="text-gray-500">Enter The OTP</p>
          </div>

          <form className="space-y-4" onSubmit={() => handleOtpSubmit()}>
            <div>
              <label
                htmlFor="otp"
                className="block text-start mb-1 text-xs font-medium text-gray-800"
              >
                OTP
              </label>
              <input
                type="text"
                id="otp"
                className="bg-gray-50 border   w-80 border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  placeholder-gray-400 "
                placeholder="Enter OTP"
                required
                maxLength="4"
                minLength="4"
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-[#283895] font-semibold hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Submit Now
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

export default OtpVerification;
