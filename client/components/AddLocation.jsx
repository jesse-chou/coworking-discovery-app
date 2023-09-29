import React from "react";

const AddLocation = () => {

  return (
    <div className="addLocation">
      <form action="POST">
        <label htmlFor="name">
          Name:
          <input type="text" name="name" required/>
        </label>

        <label htmlFor="">
          Address: 
          <input type="text" required />
        
        </label>

        <label htmlFor="">
          Type:
          <select name="locationType" id="locationType" required>
            <option value="Coffee Shop">Coffee Shop</option>
            <option value="Coworking Location">Coworking Location</option>
            <option value="Public Place">Public Place</option>
            <option value="Library">Library</option>
            <option value="Other">Other</option>
          </select>
        </label>
        
        <div className="hours">
          <p>Hours</p>
          <label htmlFor="">
            Monday:
            <input type="text" required/>
            Tuesday:
            <input type="text" required/>
            Wednesday:
            <input type="text" required/>
            Thursday:
            <input type="text" required/>
            Friday:
            <input type="text" required/>
            Saturday:
            <input type="text" required/>
            Sunday:
            <input type="text" required/>
          </label>
        </div>

        <div className="wifiSpeed">
          <p>Wifi Speed</p>
            <label htmlFor="">
              Down:
              <input type="text" required/>
            </label>
            
            <label htmlFor="">
              Up:
              <input type="text" required/>
            </label>
        </div>


        <label htmlFor="restrooms">
          Restrooms:
          <input type="checkbox" id="restrooms" name="restrooms" required/>
        
        </label>
        
        
        <label htmlFor="outlets">
          Outlets:
          <input type="checkbox" id="outlets" name="outlets" required/>
        
        </label>
        
        <input type="submit" value="ADD LOCATION" className="addLocationSubmitButton"/>

      </form>
    </div>
  )
}

export default AddLocation;