import { useState } from "react";
import { MainContext } from "./MainContext";

export const MainProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);
  return (
    <MainContext.Provider
      value={{
        data,
        setData,
        loaded, 
        setLoaded
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
