import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import ForecastContextProvider from './context/ForecastContext.jsx'
import LoadingContextProvider from './context/LoadingContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ForecastContextProvider>
      <LoadingContextProvider>
    <Toaster/>
    <App />
    </LoadingContextProvider>
    </ForecastContextProvider>
  </StrictMode>,
)
