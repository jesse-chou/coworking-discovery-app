import React, { useEffect, useState } from "react";
import { useLocationContext } from "../context/LocationContext.js";

const Location = () => {

  const { state, dispatch } = useLocationContext();
  const { locations } = state;
  // const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchLocations() {
      try {
        const response = await fetch("/api/locations");          
        if (response.ok) {
          const data = await response.json(); 
          dispatch({ type: "SET_LOCATIONS", payload: data})
        } else {
          console.log(`Failed to fetch locations. Please try again`)
        }
      } catch (err) {
        console.log(`Error: ${err}`)
      }
    }
    fetchLocations();
  }, [dispatch])

  const handleDeleteLocation = async (name) => {
    try {
      const response = await fetch(`/api/${name}`, {
        method: "DELETE"
      });

      if (response.ok) {
        dispatch({type: "DELETE_LOCATION", payload: name})
        console.log(`Deleted location: ${name}`)
      } else {
        console.log(`Filaed to delete location. Please try again`)
      }
    } catch (err) {
      console.log(`Error: ${err}`)
    }
  }


  return (
    <div className="location">
      {locations.map((location) => (
        <div key={location._id} className="eachLocation">
          
          {/* <img src={location.image} /> */}

          <p>Name: {location.name}</p>
          <p>Address: {location.address}</p>
          <p>Type: {location.locationType}</p>

          <div className="getHours">
            <p>Hours</p>
            <p>Monday: {location.hours.monday}</p>
            <p>Tuesday: {location.hours.tuesday}</p>
            <p>Wednesday: {location.hours.wednesday}</p>
            <p>Thursday: {location.hours.thursday}</p>
            <p>Friday: {location.hours.friday}</p>
            <p>Saturday: {location.hours.saturday}</p>
            <p>Sunday: {location.hours.sunday}</p>
          </div>

          <div className="getWifiSpeed">
            <p>WifiSpeed</p>
            <p>Down: {location.wifiSpeed.down}</p>
            <p>Up: {location.wifiSpeed.up}</p>
          </div>

          <p>Restrooms: {location.restrooms ? "✓" : "✗"}</p>
          <p>Outlets: {location.outlets ? "✓" : "✗"}</p>

          <div className="locationEditButtons">
            <button>EDIT</button>
            <button onClick={() => handleDeleteLocation(location.name)}>DELETE</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Location;