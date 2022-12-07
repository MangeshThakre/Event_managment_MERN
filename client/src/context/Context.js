import { createContext, useState } from "react";
import { toast } from "react-toastify";
export const GlobalContex = createContext();

const Contex = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [eventData, setEventData] = useState([]);
  const [cities, setCities] = useState([]);
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
        cities,
        setCities,
        notify,
        userData,
        setUserData,
        eventData,
        setEventData
      }}
    >
      {children}
    </GlobalContex.Provider>
  );
};

export default Contex;
