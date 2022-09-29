import React from "react";
import "./CarInfo.css";
import car1 from "../assets/Carinfo/car1.webp";
import car2 from "../assets/Carinfo/car2.webp";
import car3 from "../assets/Carinfo/car3.jpg";
import car4 from "../assets/Carinfo/car4.png";

const CarInfo = () => {
  return (
    <div className="carinfo">
      <div className="carinfocontainer">
        <h2>Know more to choose better</h2>
        <ul className="carinfotab">
          <li>
            <a href="Hatchback" className="carinfolist">
              Expert Reviews
            </a>
          </li>
          <li>
            <a href="Sedan" className="carinfolist">
              Featured Stories
            </a>
          </li>
          <li>
            <a href="SUV" className="carinfolist">
              Videos
            </a>
          </li>
        </ul>
        <div className="carinfosection">
          <div className="imagesection">
            <img className="Carinfoimg" src={car1} alt="logo" />
            <div className="carinfotext">
              <h5>Jeep Compass 3000km Long Term Review</h5>
              <p>
                The Compass continues to impress, but it has its share of minor
                annoyances
              </p>
              <div className="commentdetail">
                <h4>A</h4>

                <div className="commentdate">
                  <h4>Arun</h4>
                  <span>Sep 28, 2022</span>
                </div>
              </div>
            </div>
          </div>
          {/* ............... */}
          <div className="imagesection">
            <img className="Carinfoimg" src={car2} alt="logo" />
            <div className="carinfotext">
              <h5>Hyundai Venue N Line First Drive Review - ‘N’yth...</h5>
              <p>
                Does the addition of the ‘N’ badge make the Hyundai Venue a
                better driver’s car? Let’s find out{" "}
              </p>
              <div className="commentdetail">
                <h4>T</h4>

                <div className="commentdate">
                  <h4>Tarun</h4>
                  <span>Sep 27, 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  ........................ */}
        <div className="carinfosection">
          <div className="imagesection">
            <img className="Carinfoimg" src={car3} alt="logo" />
            <div className="carinfotext">
              <h5>
                Volkswagen Taigun 1.0 TSI AT Topline: Long Term Introduction
              </h5>
              <p>
                My first long-termer in over six years and it’s another
                Volkswagen! I’m keeping these keys to myself{" "}
              </p>
              <div className="commentdetail">
                <h4>M</h4>

                <div className="commentdate">
                  <h4>Manoj</h4>
                  <span>Sep 24, 2022</span>
                </div>
              </div>
            </div>
          </div>
          {/* ............... */}
          <div className="imagesection">
            <img className="Carinfoimg" src={car4} alt="logo" />
            <div className="carinfotext">
              <h5>Maruti Celerio 3500km Long Term Review: Purpose Focused</h5>
              <p>
                We put the Celerio through our rigorous performance and
                efficiency test cycle to know it better.
              </p>
              <div className="commentdetail">
                <h4>N</h4>

                <div className="commentdate">
                  <h4>Nabeel</h4>
                  <span>Sep 20, 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarInfo;
