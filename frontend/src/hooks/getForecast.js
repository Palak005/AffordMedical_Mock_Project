import { useState } from "react";
import axios from "axios";
import { useForecastContext } from "../context/ForecastContext";
import toast from "react-hot-toast";
import { useLoadingContext } from "../context/LoadingContext";

const getForecast = (city)=>{
    let {setForecast} = useForecastContext();
    let {setLoading} = useLoadingContext();

    const cityForecast = async(city)=>{
        try{
            console.log(city);
            setLoading(true);
            const response = await axios.get(`/api/weather/${city}`);
            const data = response.data.forecast;

            setForecast(data);
            localStorage.setItem("forecast", JSON.stringify(data));

        }catch(error){
            toast.error(error.message);
        }finally{
            setLoading(false);
        };
    }

    return {cityForecast};
}

export default getForecast;