import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import WeatherCard from './components/WeatherCard'
import { useEffect } from 'react'
import { useForecastContext } from './context/ForecastContext'
import { useLoadingContext } from './context/LoadingContext'
import LoadingPage from './pages/LoadingPage'

function App() {
  const {setForecast} = useForecastContext();
  const {Loading} = useLoadingContext();
  console.log("Loading", Loading);

  useEffect(()=>{
    setForecast(null);
  }, []);

  return (
    <>
      <Navbar/>
      {Loading ? <LoadingPage /> : <Home />}
    </>
  )
}

export default App
