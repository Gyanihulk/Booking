import { createContext, useEffect, useState } from "react";
import { getHotels } from "../lib/sanity";
export const HotelContext = createContext({});
export const HotelProvider = ({ children }) => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Fetch hotels when the component is mounted
      const fetchHotels = async () => {
        setLoading(true);
        try {
          // Replace this with your actual fetch call
          const response = await getHotels();
          setHotels(response.slice(0,7));
        } catch (error) {
          console.error('Failed to fetch hotels:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchHotels();
    }, []);
  

    // The value provided to the context consumers
    const contextValue = {
      hotels,
      loading,
    };
  
    return (
      <HotelContext.Provider value={contextValue}>
        {children}
      </HotelContext.Provider>
    );
  };
  
