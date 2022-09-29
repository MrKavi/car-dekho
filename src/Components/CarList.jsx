import React from "react";
import RenaultKWID from "../assets/RenaultKWID.jpg";
import luxu from "../assets/luxu.jpg";
import Hatchback from "../assets/Hatchback.jpg";
import muvcar from "../assets/muvcar.jpg";
import "./CarList.css";
const CarList = () => {
  return (
    <div className="carlist">
      <h2>The most searched cars</h2>
      <ul className="cartabs">
        <li>
          <a href="Hatchback" className="cartypes">
            Hatchback
          </a>
        </li>
        <li>
          <a href="Sedan" className="cartypes">
            Sedan
          </a>
        </li>
        <li>
          <a href="SUV" className="cartypes">
            SUV
          </a>
        </li>
        <li>
          <a href="SUV" className="cartypes">
            MUV
          </a>
        </li>
        <li>
          <a href="SUV" className="cartypes">
            Luxury
          </a>
        </li>
      </ul>
      <div className="carlists">
        <div class="card">
          <img className="imgages" src={RenaultKWID} alt="logo" />
          <div class="container">
            <h4>
              <b>Renault KIW</b>
            </h4>
            <p>Rs4.64 - 5.99 Lakh*</p>
            <button className="CheckMoreBtn">Check More Offers</button>
          </div>
        </div>
        <div class="card">
          <img className="imgages" src={Hatchback} alt="logo" />
          <div class="container">
            <h4>
              <b>Renault KIW</b>
            </h4>
            <p>Rs4.64 - 5.99 Lakh*</p>
            <button className="CheckMoreBtn">Check More Offers</button>
          </div>
        </div>
        <div class="card">
          <img className="imgages" src={luxu} alt="logo" />
          <div class="container">
            <h4>
              <b>Renault KIW</b>
            </h4>
            <p>Rs4.64 - 5.99 Lakh*</p>
            <button className="CheckMoreBtn">Check More Offers</button>
          </div>
        </div>
        <div class="card">
          <img className="imgages" src={muvcar} alt="logo" />
          <div class="container">
            <h4>
              <b>Renault KIW</b>
            </h4>
            <p>Rs4.64 - 5.99 Lakh*</p>
            <button className="CheckMoreBtn">Check More Offers</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarList;
