import React from "react";
import { useForecastContext } from "../context/ForecastContext";

const WeatherCard = () => {
  let {forecast} = useForecastContext();

  const weather = forecast.weather[0];
  const iconUrl = `https://openweathermap.org/img/wn/${weather.icon}@4x.png`;
  const temperature = (forecast.main.temp - 273.15).toFixed(1); 
  return (
    <div className="bg-[#1e293b] text-white rounded-2xl p-6 h-[300px] w-[400px] shadow-2xl mt-10 border border-white">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">{forecast.name}, {forecast.sys.country}</h2>
          <p className="text-sm text-gray-300 capitalize">{weather.description}</p>
        </div>
        <img
          src={iconUrl}
          alt={weather.description}
          className="w-20 h-20"
        />
      </div>

      <hr className="my-4 border-white" />

      <div className="grid grid-cols-2 gap-4 text-center">
        <div>
          <p className="text-3xl font-bold">{temperature}°C</p>
          <p className="text-xs text-gray-400">Temperature</p>
        </div>
        <div>
          <p className="text-3xl font-bold">{forecast.main.humidity}%</p>
          <p className="text-xs text-gray-400">Humidity</p>
        </div>
        <div>
          <p className="text-3xl font-bold">{forecast.wind.speed} m/s</p>
          <p className="text-xs text-gray-400">Wind Speed</p>
        </div>
        <div>
          <p className="text-3xl font-bold">{weather.main}</p>
          <p className="text-xs text-gray-400">Condition</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
