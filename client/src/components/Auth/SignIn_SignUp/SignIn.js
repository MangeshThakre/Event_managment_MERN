import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
  function handleSignSubmit() {}

  return (
    <form className="space-y-4" onSubmit={() => handleSignSubmit()}>
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

      <div className="flex justify-end">
        <Link to="/forgot_password" className="text-blue-800">
          Forgot Password?
        </Link>
      </div>

      <button
        type="submit"
        className="w-full text-white bg-[#283895] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Sign In
      </button>
    </form>
  );
}

export default SignIn;
