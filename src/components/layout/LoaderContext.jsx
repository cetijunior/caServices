import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 1800); // Adjusted for smoother transition
        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoaderContext.Provider>
    );
};

// Separate Export for useLoader Hook
export const useLoader = () => useContext(LoaderContext);
