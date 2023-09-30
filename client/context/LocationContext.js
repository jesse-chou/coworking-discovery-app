import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  locations: []
};

const LocationContext = createContext();

const locationReducer = (state, action) => {
  switch (action.type) {
    case "ADD_LOCATION":
      return {
        ...state,
        locations: [...state.locations, action.payload],
      };
    case "DELETE_LOCATION":
      return {
        ...state,
        locations: state.locations.filter(
          (location) => location.name !== action.payload
        ),
      };
    case "SET_LOCATIONS":
      return {
        ...state,
        locations: action.payload,
      };
    default: 
      return state;
  } 
}

export const LocationProvider = ({ children }) => { 
  const [state, dispatch] = useReducer(locationReducer, initialState);

  return (
    <LocationContext.Provider value={{ state, dispatch }}>
      {children}
    </LocationContext.Provider>
  )
}

export const useLocationContext = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useLocationContext must be used within a LocationProvider"); 
  }
  return context;
}
