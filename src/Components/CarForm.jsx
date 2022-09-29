import React from "react";
import "./CarForm.css";
import carbanner from "../assets/carbanner.jpg";
const CarForm = () => {
  return (
    <div className="CarForm">
      <img className="carbanner" src={carbanner} alt="logo" />

      <div className="carform">
        <div className="form">
          <div className="uperForm">
            <h1 className="h1">Find your right car</h1>
            <button className="button">New Cars</button>
            <button className="button">Used Car</button>
          </div>

          <form action="">
            <label className="radiobtn">
                <input type="radio" name="fav_language" value="HTML" />
              By Budget
            </label>
            <label className="radiobtn">
                <input type="radio" name="fav_language" value="CSS" />
              By Brand
            </label>
          </form>
          <div className="CarSelectType">
            <select className="droplistcarform">
              <option className="option">Select By Budget</option>
              <option>1-5 lakh</option>
              <option>5-10lakh</option>
            </select>
            <select className="droplistcarform">
              <option className="option">Select By Brand</option>
              <option>SUV</option>
              <option>MUV</option>
              <option>Luxury</option>
            </select>
          </div>
          <button className="searchcarform">Search</button>
          <button className="advancesearch">Advance Search..</button>
        </div>
      </div>
    </div>
  );
};

export default CarForm;
