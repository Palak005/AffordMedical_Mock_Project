import React, { useState } from 'react';
import { useForecastContext } from '../context/ForecastContext';
import WeatherCard from '../components/WeatherCard';

const Home = ()=>{
  const {forecast} = useForecastContext();

  return (
    forecast? (
      <div className="bg-[#1e293beb] h-screen w-screen flex items-center justify-center">
        <WeatherCard/>
      </div>) : (
    <div className="bg-[#1a1a1af4] h-screen text-white flex flex-col items-center justify-center font-[Arial, sans-serif]">

      <div className="flex flex-col items-center justify-center mt-20 text-center px-4 max-w-2xl">
        <h1 className="text-4xl font-semibold mb-6">Welcome to ForeCastify</h1>
        <p className="text-lg mb-8">Start by searching for the weather in your city. Get real-time forecasts!</p>

        <div className="bg-[#333] p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">How to Use:</h2>
          <p className="text-lg">Simply type the name of any city in the search bar above and hit "Search" to get the latest weather updates.</p>
        </div>
      </div>

      <footer className="text-center mt-12">
        <p className="text-sm">© 2025 ForeCastify. All rights reserved.</p>
      </footer>
    </div>
    )
  );
};

export default Home;
