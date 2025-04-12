import axios from "axios";

const weatherForecast = async(req, res)=>{
    try{
       const {city} = req.params; 

       if(!city){
        return res.status(400).json({message : "City name required"});
       }

       const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.MAP_API_KEY}`;
       
       const response = await axios.get(API);

       if(!response){
            return res.status(400).json({message : "Error while Fetching Data"});
       }
       
       const data = response.data;
    
       return res.status(200).json({message : "Data fetched successfully", forecast : data});

    }catch(error){
        return res.status(400).json({message : error.message});
    }
    
}

export default {weatherForecast};