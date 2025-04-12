import { useState } from "react";
import getForecast from "../hooks/getForecast";
import toast from "react-hot-toast";

const SearchBar  = ()=>{
    let [city, setCity] = useState("");
    const {cityForecast} = getForecast();

    const handleClick = async()=>{
        if(!city){
            toast.error("Enter City Name");
            return;
        }

        await cityForecast(city);
    }
    

    return (
        <>
            <input
                type="text"
                placeholder="Search for city..."
                value={city}
                className="flex-1 px-4 py-2 rounded-lg border-2 border-white bg-[#333] text-white text-sm placeholder-gray-400 focus:outline-none"
                onChange={(e)=>{setCity(e.target.value)}}
            />
            <button 
                className="bg-[#dae2e8] text-black px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-[#bababa] transition-all"
                onClick={()=>{handleClick()}}
            >
            Search
            </button>
        </>
    )
};

export default SearchBar;