import React from "react";
import Devocion from "../images/Devocion.jpg"

const Location = () => {
  return (
    <div className="location">
      <img src={Devocion} alt="Coffee Shop"/>
      <p>Name: <a href="">Hungry Ghost Coffee</a></p>
      <p>Address: <a href="">1 Brooklyn Way</a></p>
      <p>Type: <a href="">Coffee Shop</a></p>
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
        Restrooms: ✓
      </div>
      <div>
        Outlets: ✓
      </div>
      <div className="locationEditButtons">
        <button>EDIT</button>
        <button>DELETE</button>
      </div>
    </div>
  )
}

export default Location;