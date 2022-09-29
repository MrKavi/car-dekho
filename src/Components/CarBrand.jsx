import React from "react";
import "./CarBrand.css";
import maruti from "../assets/Brands/maruti.jpg";
import renault from "../assets/Brands/renault.webp";
import tata from "../assets/Brands/tata.jpg";
import mercedesbenz from "../assets/Brands/mercedesbenz.jpg";
import honda from "../assets/Brands/honda.webp";
import hyundai from "../assets/Brands/hyundai.jpg";
import kia from "../assets/Brands/kia.jpg";
import mahindra from "../assets/Brands/mahindra.jpg";
const CarBrand = () => {
  return (
    <div className="carbrand">
      <div className="carcontainer">
        <h2>Popular Brand</h2>
      </div>
      <div className="allbrands">
        <div className="brandimg">
          <img className="cardimg" src={maruti} alt="cardimg" />
          <p>Maruti</p>
        </div>
        <div className="brandimg">
          <img className="cardimg" src={renault} alt="cardimg" />
          <p>Renault</p>
        </div>
        <div className="brandimg">
          <img className="cardimg" src={tata} alt="cardimg" />
          <p>Tata</p>
        </div>
        <div className="brandimg">
          <img className="cardimg" src={mercedesbenz} alt="cardimg" />
          <p>Mercedesbenz</p>
        </div>
        <div className="brandimg">
          <img className="cardimg" src={honda} alt="cardimg" />
          <p>Honda</p>
        </div>
        <div className="brandimg">
          <img className="cardimg" src={hyundai} alt="cardimg" />
          <p>Hyundai</p>
        </div>
        <div className="brandimg">
          <img className="cardimg" src={kia} alt="cardimg" />
          <p>Kia</p>
        </div>
        <div className="brandimg">
          <img className="cardimg" src={mahindra} alt="cardimg" />
          <p>Mahindra</p>
        </div>
      </div>
    </div>
  );
};

export default CarBrand;
