import React from "react";

// Component
import SignIn from "./SignIn";
import SignUp from "./SignUp";

import { Link } from "react-router-dom";
function SingInSignUp({ page }) {
  return (
    <div className="h-[100vh] pt-16 flex  justify-center">
      {/* <!-- Modal content --> */}
      <div className=" bg-white rounded-lg shadow  mt-24 h-fit">
        <div className="px-6 py-6 lg:px-8">
          <div className="flex mx-4 mb-6 rounded-md bg-[#f0f5ff]">
            <Link
              to="/signin"
              className=" flex items-center justify-center w-32 rounded-md  h-8  font-semibold  text-gray-500"
              style={
                page === "SIGNIN"
                  ? { background: "#283895", color: "white" }
                  : { background: "transparent" }
              }
            >
              SignIn
            </Link>
            <Link
              to="/signup"
              className=" flex items-center justify-center w-32 rounded-md  h-8  font-semibold  text-gray-500"
              style={
                page === "SIGNUP"
                  ? { background: "#283895", color: "white" }
                  : { background: "transparent" }
              }
            >
              SignUp
            </Link>
          </div>
          {page === "SIGNIN" ? <SignIn /> : null}
          {page === "SIGNUP" ? <SignUp /> : null}
        </div>
      </div>
    </div>
  );
}

export default SingInSignUp;
