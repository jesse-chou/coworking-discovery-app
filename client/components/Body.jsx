import React, { useState } from "react";
import Location from "./Location.jsx";
import AddLocationButton from "./AddLocationButton.jsx";
import AddLocation from "./AddLocation.jsx";

const Body = () => {
  return (
    <>
      <Location/>
      <AddLocation/>
      {/* <AddLocationButton/> */}
    </>
  )
}

export default Body;