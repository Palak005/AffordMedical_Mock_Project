import { createContext, useContext, useEffect, useState } from "react";

const ForecastContext = createContext();

export const useForecastContext = ()=>{
    return useContext(ForecastContext);
};

const ForecastContextProvider = ({children})=>{
    let [forecast, setForecast] = useState("");

    useEffect(() => {
      const savedForecast = localStorage.getItem("forecast");
      if (savedForecast) {
        setForecast(JSON.parse(savedForecast));
      }
    }, []);

    return <ForecastContext.Provider value={{forecast, setForecast}}>
        {children}
    </ForecastContext.Provider>
}

export default ForecastContextProvider;