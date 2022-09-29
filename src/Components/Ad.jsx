import React from "react";
import "./Ad.css";
import carAd from "../assets/carAd.jpg";
const Ad = () => {
  return (
    <div className="ad_section">
      <img className="CarAd" src={carAd} alt="ad" />
      <button className="adbtn">Show Me Best Car</button>
    </div>
  );
};

export default Ad;
