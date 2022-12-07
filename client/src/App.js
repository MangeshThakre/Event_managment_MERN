import "./App.css";

// components
import Navbar from "./components/Navbar.js";
import FogetPassword from "./components/Auth/FogetPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import OtpVerification from "./components/Auth/OtpVerification";
import SingInSignUp from "./components/Auth/SignIn_SignUp/Index.js";
import Events from "./components/pages/Events.js";
import AddEvent from "./components/AddEvent";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App  h-[100vh] bg-[#f6f6f8]">
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SingInSignUp page={"SIGNUP"} />} />
        <Route path="/signin" element={<SingInSignUp page={"SIGNIN"} />} />
        <Route path="/forgot_password" element={<FogetPassword />} />
        <Route path="/reset_password" element={<ResetPassword />} />
        <Route path="/otp_verification" element={<OtpVerification />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </div>
  );
}

export default App;
