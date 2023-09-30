import React, { useState } from "react";
import { useLocationContext } from "../context/LocationContext";

const AddLocation = () => {

  const { dispatch } = useLocationContext();

  // Setting Initial State
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    locationType: "",
    hours: {
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
      sunday: "",
    },
    wifiSpeed: {
      down: Number,
      up: Number
    },
    restrooms: Boolean,
    outlets: Boolean
  })

  // Function to handle user's input change
  const handleInputChange = (e, parent) => {
    const { name, value } = e.target;
    // if parent is passed through
    if (parent) {
      console.log(parent)
      return setFormData((prev) => ({ 
        ...prev, 
        [parent]: {...formData[parent],[name]:value}}
      ))  
    }
    setFormData((prev) => ({ ...prev, [name]: value}))
  }

  // Function to send data to server.js
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    try {
      const response = await fetch("/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {

        dispatch({type: "ADD_LOCATION", payload: formData})

        setFormData({
          name: "",
          address: "",
          locationType: "",
          hours: {
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: "",
            saturday: "",
            sunday: "",
          },
          wifiSpeed: {
            down: "",
            up: ""
          },
          restrooms: false,
          outlets: false
        });
      } else {
        alert("Failed to add location")
      }
    }

    catch (err) {
      console.log(`Error: ${err}`)
    }
  }

  return (
    <div className="addLocation">
      <form onSubmit={handleSubmit}>

        {/* Name Input */}
        <label htmlFor="name">
          <b>Name: </b>
          <input
            type="text"
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter the name"
            required
          />
        </label>

        {/* Address Input */}
        <label htmlFor="address">
          <b>Address: </b>
          <input 
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter the address"  
            required 
          />
        </label>

        {/* Location Type Input */}
        <label htmlFor="locationType">
          <b>Type: </b>
          <select 
          type="text"
          id="locationType" 
          name="locationType"
          onChange={handleInputChange}
          required
          >
            <option value="Coffee Shop">Coffee Shop</option>
            <option value="Coworking Location">Coworking Location</option>
            <option value="Public Place">Public Place</option>
            <option value="Library">Library</option>
            <option value="Other">Other</option>
          </select>
        </label>
        
        {/* Hours Input */}        
        <div className="hours">
          <p><b>Hours</b></p>
          <label htmlFor="hours">
            <b>Monday:</b>
            <input 
            type="text"
            id="hoursMonday"
            name="monday"
            onChange={(e) => {
              handleInputChange(e, "hours")
            }}
            placeholder="Enter the hours"  
            required
            />
            <b>Tuesday:</b>
            <input 
            type="text"
            id="hoursTuesday"
            name="tuesday"
            onChange={(e) => {
              handleInputChange(e, "hours")
            }}
            placeholder="Enter the hours"
            required
            />
            <b>Wednesday</b>
            <input 
            type="text"
            id="hoursWednesday"
            name="wednesday"
            onChange={(e) => {
              handleInputChange(e, "hours")
            }}
            placeholder="Enter the hours" 
            required
            />
            <b>Thursday</b>
            <input 
            type="text"
            id="hoursThursday"
            name="thursday"
            onChange={(e) => {
              handleInputChange(e, "hours")
            }}
            placeholder="Enter the hours"
            required
            />            
            <b>Friday</b>
            <input 
            type="text"
            id="hoursFriday"
            name="friday"
            onChange={(e) => {
              handleInputChange(e, "hours")
            }}
            placeholder="Enter the hours"
            required
            />               
            <b>Saturday</b>
            <input 
            type="text"
            id="hoursSaturday"
            name="saturday"
            onChange={(e) => {
              handleInputChange(e, "hours")
            }}
            placeholder="Enter the hours"
            required
            />               
            <b>Sunday:</b>
            <input 
            type="text"
            id="hoursSunday"
            name="sunday"
            onChange={(e) => {
              handleInputChange(e, "hours")
            }}
            placeholder="Enter the hours" 
            required
            />   
          </label>
        </div>

        {/* WifiSpeed Input */}
        <div className="wifiSpeed">
          <p><b>Wifi Speed</b></p>
            <label htmlFor="wifiSpeed">
            <b>Down:</b>
              <input 
              type="number"
              id="wifiDown"
              name="down"
              onChange={(e) => {
                handleInputChange(e, "wifiSpeed")
              }}
              placeholder="Wifi Down in Mbps" 
              required
              />
            </label>
            
            <label htmlFor="">
              <b>Up:</b>
              <input 
              type="number"
              id="wifiUp"
              name="up"
              onChange={(e) => {
                handleInputChange(e, "wifiSpeed")
              }}
              placeholder="Wifi Up in Mbps" 
              required
              />
            </label>
        </div>

        {/* Restrooms Input */}
        <label htmlFor="restrooms">
          <b>Restrooms:</b>
          <input 
            type="checkbox" 
            id="restrooms" 
            name="restrooms"
            value={formData.restrooms}
            onChange={(e) => {
              const { name, checked } = e.target;
              setFormData({ ...formData, [name]: checked });
            }}
          />
        </label>
        
        {/* Outlets Input */}        
        <label htmlFor="outlets">
          <b>Outlets:</b>
          <input 
            type="checkbox" 
            id="outlets" 
            name="outlets" 
            value={formData.outlets}
            onChange={(e) => {
              const { name, checked } = e.target;
              setFormData({ ...formData, [name]: checked });
            }}
          />
        </label>
        
        {/* Submit Button */}
        <input type="submit" value="ADD LOCATION" className="addLocationSubmitButton"/>

      </form>
    </div>
  )
}

export default AddLocation;