import "./App.css";
// components
import Navbar from "./components/Navbar.js";
import FogetPassword from "./components/Auth/FogetPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import OtpVerification from "./components/Auth/OtpVerification";
import SingInSignUp from "./components/Auth/SignIn_SignUp/Index.js";
import Events from "./components/pages/Events/index.js";
import Dashbord from "./components/pages/Dashbord";
import LogoutDeletePopUp from "./components/popup/LogoutDelete.js";
import DisplayEvent from "./components/DisplayEvent.js";
import AddEvent from "./components/AddEvent.js";
import Window from "./components/pages/Window.js";
//

import loadingSvg from "./asset/loading.svg";
import { GlobalContex } from "./context/Context";
import { ToastContainer } from "react-toastify";

import { useEffect, useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation
} from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import PageNotFound from "./components/pages/PageNotFound";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_URL;
  const [dataLoading, setDataLoading] = useState(false);
  const { setUserData, notify, popup, toggleAddEvent, toggleDisplayEvent } =
    useContext(GlobalContex);

  useEffect(() => {
    if (!location.pathname.split("/").includes("window")) getUser();
  }, []);

  async function getUser() {
    setDataLoading(true);

    try {
      const response = await axios({
        method: "get",
        url: URL + "/api/auth/user",
        withCredentials: true
      });
      if (response.data.success) {
        setUserData(response.data.data);
        navigate("/events");
      }
      setDataLoading(false);
    } catch (error) {
      setDataLoading(false);
      navigate("/signin");
      notify(error.response.data.message, "error");
    }
  }

  return (
    <div className="App  h-[100vh] bg-[#f6f6f8]">
      <Navbar />
      <ToastContainer />
      {dataLoading ? (
        <div className="h-[100vh] pt-16 flex justify-center items-center w-full">
          <img src={loadingSvg} alt="loading" />
        </div>
      ) : (
        <Routes>
          <Route path="/signup" element={<SingInSignUp page={"SIGNUP"} />} />
          <Route path="/signin" element={<SingInSignUp page={"SIGNIN"} />} />
          <Route path="/forgot_password" element={<FogetPassword />} />
          <Route
            path="/reset_password/:fotgotPasswordToken"
            element={<ResetPassword />}
          />
          <Route
            path="/otp_verification/:email"
            element={<OtpVerification />}
          />
          <Route path="/events" element={<Events />} />
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/window/:eventId" element={<Window />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      )}

      {popup.show ? <LogoutDeletePopUp /> : null}
      {toggleAddEvent ? <AddEvent /> : null}
      {toggleDisplayEvent ? <DisplayEvent /> : null}
    </div>
  );
}

export default App;
