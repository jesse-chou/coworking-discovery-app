import React from "react";


const Location = () => {
  return (
    <div className="location">
      <img src="./images/Devocion.jpg" alt="Cofee Shop"/>
      <p>Name: <a href="">Hungry Ghost Coffee</a></p>
      <p>Address: <a href="">1 Brooklyn Way</a></p>
      <p>Hours: 
        <p>Monday: <a href="">9-5pm</a></p>
        <p>Tuesday: <a href="">9-5pm</a></p>
        <p>Wednesday: <a href="">9-5pm</a></p>
        <p>Thursday: <a href="">9-5pm</a></p>
        <p>Friday: <a href="">9-5pm</a></p>
        <p>Saturday: <a href="">9-5pm</a></p>
        <p>Sunday: <a href="">9-5pm</a></p>
      </p>
      <p>
        Wifi Speed:
        <p>Down:  <a href="">100</a> mbps</p>
        <p>Up: <a href="">50</a> mbps</p>
      </p>
      <div>
        <label for="outlet">Outlets: </label>
        <input type="checkbox" id="outlet" name="outlet" />
      </div>
      <div>
        <label for="restroom">Restrooms: </label>
        <input type="checkbox" id="restroom" name="restroom" />
      </div>
    </div>
  )
}

export default Location;