import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./MidNavbar.css";
const MidNavbar = () => {
  return (
    <div className="midNavbar">
      <select className="droplist">
        <option>NEW CAR</option>
        <option>Search New Car</option>
        <option>Popular Brand</option>
      </select>
      <select className="droplist">
        <option>USED CAR</option>
        <option>Search New Car</option>
        <option>Popular Brand</option>
      </select>
      <select className="droplist">
        <option>SELL CAR</option>
        <option>Search New Car</option>
        <option>Popular Brand</option>
      </select>
      <select className="droplist">
        <option>COMPARE CARS</option>
      </select>
      <select className="droplist">
        <option>NEWS & REVIEWS</option>
        <option>Search New Car</option>
        <option>Popular Brand</option>
      </select>
      <select className="droplist">
        <option>CARDEKHO VENTURES</option>
        <option>Search New Car</option>
        <option>Popular Brand</option>
      </select>
      <select className="droplist">
        <option>MORE</option>
        <option>Search New Car</option>
        <option>Popular Brand</option>
      </select>

      <div className="location">
        <LocationOnIcon />
        <span>Select City</span>
      </div>
    </div>
  );
};

export default MidNavbar;
