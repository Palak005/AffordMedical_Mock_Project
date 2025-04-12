import { createContext, useContext, useEffect, useState } from "react";

const LoadingContext = createContext();

export const useLoadingContext = ()=>{
    return useContext(LoadingContext);
};

const LoadingContextProvider = ({children})=>{
    let [Loading, setLoading] = useState(false);

    return <LoadingContext.Provider value={{Loading, setLoading}}>
        {children}
    </LoadingContext.Provider>
}

export default LoadingContextProvider;