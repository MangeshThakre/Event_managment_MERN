import { createContext, useState } from "react";
import { toast } from "react-toastify";
export const GlobalContex = createContext();

const Contex = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [eventData, setEventData] = useState([]);
  const [cities, setCities] = useState([]);
  const [toggleAddEvent, setToggleAddEvent] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({});

  const notify = (message, type) => {
    return toast[type](message, {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });
  };

  return (
    <GlobalContex.Provider
      value={{
        notify,
        cities,
        setCities,
        userData,
        setUserData,
        eventData,
        setEventData,
        currentEvent,
        setCurrentEvent,
        toggleAddEvent,
        setToggleAddEvent
      }}
    >
      {children}
    </GlobalContex.Provider>
  );
};

export default Contex;
