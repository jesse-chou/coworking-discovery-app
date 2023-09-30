import React, { useEffect, useState } from "react";
import Devocion from "../images/Devocion.jpg"

const Location = () => {

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchLocations() {
      try {
        const response = await fetch("/api/locations");          
        if (response.ok) {
          const data = await response.json(); 
          setLocations(data);
        } else {
          console.log(`Failed to fetch locations. Please try again`)
        }
      } catch (err) {
        console.log(`Error: ${err}`)
      }
    }
    
    fetchLocations();
  }, [])



  return (
    <div className="location">
      {locations.map((location) => (
        <div key={location._id} className="eachLocation">
          <p>Name: {location.name}</p>
          <p>Address: {location.address}</p>
          <p>Type: {location.locationType}</p>
          <p>Hours</p>
          <p>Monday: {location.hours.monday}</p>
          <p>Tuesday: {location.hours.tuesday}</p>
          <p>Wednesday: {location.hours.wednesday}</p>
          <p>Thursday: {location.hours.thursday}</p>
          <p>Friday: {location.hours.friday}</p>
          <p>Saturday: {location.hours.saturday}</p>
          <p>Sunday: {location.hours.sunday}</p>
          <p>WifiSpeed</p>
          <p>Down: {location.wifiSpeed.down}</p>
          <p>Up: {location.wifiSpeed.up}</p>
          <p>Restrooms: {location.restrooms ? "✓" : "✗"}</p>
          <p>Outlets: {location.outlets ? "✓" : "✗"}</p>
        </div>
      ))}
    </div>
  );
}

export default Location;