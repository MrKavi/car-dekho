import React from "react";
import num from "../assets/num.png";
import carsold from "../assets/carsold.png";
import offer from "../assets/offer.jpg";
import compare from "../assets/compare.png";
import "./SubFooter.css";
const SubFooter = () => {
  return (
    <div className="subcontainer">
      <div className="subcard">
        <img className="logo" src={num} alt="logo" />
        <div className="subfooter">
          <h3>India’s #1</h3>

          <span>Largest Auto portal</span>
        </div>
      </div>
      <div className="subcard">
        <img className="logo" src={carsold} alt="logo" />
        <div className="subfooter">
          <h3>Car Sold</h3>

          <span>Every 4 minute</span>
        </div>
      </div>
      <div className="subcard">
        <img className="logo" src={offer} alt="logo" />
        <div className="subfooter">
          <h3>Offers</h3>

          <span>Stay updated pay less</span>
        </div>
      </div>
      <div className="subcard">
        <img className="logo" src={compare} alt="logo" />
        <div className="subfooter">
          <h3>Compare</h3>

          <span>Decode the right car</span>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
