import React, { useState } from "react";

const AddLocation = () => {

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
          restrooms: "",
          outlets: ""
        });
        alert("Location added successfully");
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
          Name:
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
          Address: 
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
          Type:
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
          <p>Hours</p>
          <label htmlFor="hours">
            Monday:
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
            Tuesday:
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
            Wednesday:
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
            Thursday:
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
            Friday:
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
            Saturday:
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
            Sunday:
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
          <p>Wifi Speed</p>
            <label htmlFor="wifiSpeed">
              Down:
              <input 
              type="number"
              id="wifiDown"
              name="down"
              onChange={(e) => {
                handleInputChange(e, "wifiSpeed")
              }}
              placeholder="Enter the wifi download speed" 
              required
              />
            </label>
            
            <label htmlFor="">
              Up:
              <input 
              type="number"
              id="wifiUp"
              name="up"
              onChange={(e) => {
                handleInputChange(e, "wifiSpeed")
              }}
              placeholder="Enter the wifi upload speed" 
              required
              />
            </label>
        </div>

        {/* Restrooms Input */}
        <label htmlFor="restrooms">
          Restrooms:
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
          Outlets:
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