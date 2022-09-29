import React from "react";
import "./CarLocations.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ahmedabad from "../assets/ahmedabad.svg";
import bangalore from "../assets/bangalore.svg";
import chennai from "../assets/chennai.svg";
import delhincr from "../assets/delhincr.svg";
import gurgaon from "../assets/gurgaon.svg";
import hyderabad from "../assets/hyderabad.svg";
import jaipur from "../assets/jaipur.svg";
import kolkata from "../assets/kolkata.svg";
import mumbai from "../assets/mumbai.svg";
import newdelhi from "../assets/newdelhi.svg";
import noida from "../assets/noida.svg";
import pune from "../assets/pune.svg";

const CarLocations = () => {
  return (
    <div className="carlocations">
      <div className="carlocationcontainer">
        <h1>Get trusted used cars nearby</h1>

        <div className="carlocations">
          <div class="container">
            <img className="cardimg" src={ahmedabad} alt="cardimg" />
            <p>Used Car In</p>
            <h4>
              <b>Ahmedabad</b>
            </h4>
          </div>
          <div class="container">
            <img className="cardimg" src={bangalore} alt="cardimg" />
            <p>Used Car In</p>
            <h4>
              <b>Banglore</b>
            </h4>
          </div>
          <div class="container">
            <img className="cardimg" src={chennai} alt="cardimg" />
            <p>Used Car In</p>
            <h4>
              <b>Chennai</b>
            </h4>
          </div>
          <div class="container">
            <img className="cardimg" src={delhincr} alt="cardimg" />
            <p>Used Car In</p>
            <h4>
              <b>Delhi-Ncr</b>
            </h4>
          </div>
          <div class="container">
            <img className="cardimg" src={gurgaon} alt="cardimg" />
            <p>Used Car In</p>
            <h4>
              <b>Gurgaon</b>
            </h4>
          </div>
          <div class="container">
            <img className="cardimg" src={hyderabad} alt="cardimg" />
            <p>Used Car In</p>
            <h4>
              <b>Hyderabad</b>
            </h4>
          </div>
        </div>
        <div className="carlocations">
          <div class="container">
            <img className="cardimg" src={jaipur} alt="cardimg" />
            <p>Used Car In</p>
            <h4>
              <b>Jaipur</b>
            </h4>
          </div>
          <div class="container">
            <img className="cardimg" src={kolkata} alt="cardimg" />
            <p>Used Car In</p>
            <h4>
              <b>Kolkata</b>
            </h4>
          </div>
          <div class="container">
            <img className="cardimg" src={mumbai} alt="cardimg" />
            <p>Used Car In</p>
            <h4>
              <b>Mumbai</b>
            </h4>
          </div>
          <div class="container">
            <img className="cardimg" src={newdelhi} alt="cardimg" />
            <p>Used Car In</p>
            <h4>
              <b>New Delhi</b>
            </h4>
          </div>
          <div class="container">
            <img className="cardimg" src={noida} alt="cardimg" />
            <p>Used Car In</p>
            <h4>
              <b>Noida</b>
            </h4>
          </div>
          <div class="container">
            <img className="cardimg" src={pune} alt="cardimg" />
            <p>Used Car In</p>
            <h4>
              <b>Pune</b>
            </h4>
          </div>
        </div>
      </div>
      <div className="carlocationcontainer2">
        <h3>
          I am looking to buy a second
          <br></br> hand car in
        </h3>
        <form className="locationform">
          <p>
            <LocationOnIcon />
          </p>
          <select className="droplistCarLoc">
            <option className="option">Enter Your City</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Chennai</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default CarLocations;
