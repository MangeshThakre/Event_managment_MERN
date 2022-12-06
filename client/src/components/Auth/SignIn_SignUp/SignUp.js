import { useState } from "react";

function SignUp() {
  const [fromDate, setFromData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPass: ""
  });
  function handleSubmit() {}

  return (
    <form className="space-y-4" onSubmit={() => handleSubmit()}>
      <div>
        <label
          htmlFor="firstName"
          className="block text-start mb-1 text-xs font-medium text-gray-800"
        >
          Your First Name
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 "
          placeholder="Enter Your First Name"
          required
        />
      </div>
      <div>
        <label
          htmlFor="lastName"
          className="block text-start mb-1 text-xs font-medium text-gray-800"
        >
          Your Last Name
        </label>
        <input
          type="text"
          id="lastName"
          className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 "
          placeholder="Enter Your Last Name"
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-start mb-1 text-xs font-medium text-gray-800"
        >
          Your Email Id
        </label>
        <input
          type="text"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 "
          placeholder="Enter Your Email Id"
          required
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-start mb-1 text-xs font-medium text-gray-800"
        >
          Enter Password
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

      <div>
        <label
          htmlFor="confirmPass"
          className="block text-start mb-1 text-xs font-medium text-gray-800"
        >
          Enter Confirm Password
        </label>
        <input
          type="password"
          id="confirmPass"
          className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 "
          placeholder="Enter confirm Password"
          required
          maxLength="8"
          minLength="8"
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        className="w-full text-white bg-[#283895] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignUp;
