import React, { useEffect } from "react";
import { useLocationContext } from "../context/LocationContext.js";
import AddLocation from "./AddLocation.jsx";
import AddLocationButton from "./AddLocationButton.jsx"

const Location = () => {

  const { state, dispatch } = useLocationContext();
  const { locations } = state;

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

          <p><b>Name:</b> {location.name}</p>
          <p><b>Address:</b> {location.address}</p>
          <p><b>Type:</b> {location.locationType}</p>

          <div className="getHours">
            <h3><u>Hours</u></h3>
            <p><b>Monday:</b> {location.hours.monday}</p>
            <p><b>Tuesday:</b> {location.hours.tuesday}</p>
            <p><b>Wednesday:</b> {location.hours.wednesday}</p>
            <p><b>Thursday:</b> {location.hours.thursday}</p>
            <p><b>Friday:</b> {location.hours.friday}</p>
            <p><b>Saturday:</b> {location.hours.saturday}</p>
            <p><b>Sunday:</b> {location.hours.sunday}</p>
          </div>

          <div className="getWifiSpeed">
            <h3><u>Wifi Speed</u></h3>
            <p><b>Down:</b> {location.wifiSpeed.down} mbps</p>
            <p><b>Up:</b> {location.wifiSpeed.up} mbps</p>
          </div>
          <br />
          <p><b>Restrooms</b> {location.restrooms ? "✓" : "✗"}</p>
          <p><b>Outlets:</b> {location.outlets ? "✓" : "✗"}</p>
          <br />
          <div className="locationEditButtons">
            <button>EDIT</button>
            <button onClick={() => handleDeleteLocation(location.name)}>DELETE</button>
          </div>
        </div>
      ))}
      {/* <div>
        <AddLocationButton/>
      </div> */}
        
    </div>

  );
}

export default Location;