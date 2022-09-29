import React from "react";
import "./CarBudget.css";
import car1 from "../assets/Carinfo/car1.webp";
import car2 from "../assets/Carinfo/car2.webp";
import car3 from "../assets/Carinfo/car3.jpg";
import car4 from "../assets/Carinfo/car4.png";
const CarBudget = () => {
  return (
    <div className="carbudget">
      <div className="carbudgetcontainer">
        <h2>Trusted used cars by budget</h2>
        <ul className="carbudgettab">
          <li>
            <a href="Hatchback" className="carbudgetlist">
              CarDekho Used Cars{" "}
            </a>
          </li>
          <li>
            <a href="Sedan" className="carbudgetlist">
              1-5 LAKH
            </a>
          </li>
          <li>
            <a href="SUV" className="carbudgetlist">
              5-10 LAKH
            </a>
          </li>
          <li>
            <a href="SUV" className="carbudgetlist">
              10-15 LAKH
            </a>
          </li>
        </ul>
        <div className="carBudgetsection">
          <div className="budgetimagesection">
            <img className="Carinfoimg" src={car1} alt="logo" />
            <div className="carinfotext">
              <h5>2014 Maruti Ciaz 2014-2017</h5>
              <p>Rs4.66 Lakh</p>
              <div className="distancedetail">
                <span>66,204 . KmsDieselNew . Delhi</span>
              </div>
            </div>
          </div>
          <div className="budgetimagesection">
            <img className="Carinfoimg" src={car2} alt="logo" />
            <div className="carinfotext">
              <h5>2018 Hyundai Creta 2015-2020 </h5>
              <p>Rs8.6 Lakh</p>
              <div className="distancedetail">
                <span>50,124 . KmsDiesel . Noida</span>
              </div>
            </div>
          </div>
          <div className="budgetimagesection">
            <img className="Carinfoimg" src={car3} alt="logo" />
            <div className="carinfotext">
              <h5>2017 Honda WRV 2017-2020 </h5>
              <p>Rs6.74 Lakh</p>
              <div className="distancedetail">
                <span>59,488 . KmsPetrol . New Delhi</span>
              </div>
            </div>
          </div>
          <div className="budgetimagesection">
            <img className="Carinfoimg" src={car4} alt="logo" />
            <div className="carinfotext">
              <h5>2016 Hyundai Elite i20 2014-2017</h5>
              <p>Rs5.02 Lakh</p>
              <div className="distancedetail">
                <span>68,829 . KmsPetrolNew . Delhi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarBudget;
