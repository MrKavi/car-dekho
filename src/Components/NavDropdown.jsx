import React from "react";
import "./NavDropdown.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const NavDropdown = () => {
  return (
    <div class="menu-bar">
      <ul>
        <li>
          <a href="#">
            NEW CAR <ArrowDropDownIcon />
          </a>

          <div class="dropdown-menu">
            <ul>
              <li>
                <a href="#">Search New Car</a>
              </li>
              <li>
                <a href="#">Popular Brand</a>
              </li>
              <li>
                <a href="#">
                  Latest Car <i class="fas fa-caret-right"></i>
                </a>
              </li>
              <li>
                <a href="#">Popular Car</a>
              </li>
            </ul>
          </div>
        </li>
        {/* 2 */}
        <li>
          <a href="#">
            USED CAR <ArrowDropDownIcon />
          </a>

          <div class="dropdown-menu">
            <ul>
              <li>
                <a href="#">Search New Car</a>
              </li>
              <li>
                <a href="#">Popular Brand</a>
              </li>
              <li>
                <a href="#">
                  Latest Car <i class="fas fa-caret-right"></i>
                </a>
              </li>
              <li>
                <a href="#">Popular Car</a>
              </li>
            </ul>
          </div>
        </li>
        {/* 3 */}
        <li>
          <a href="#">
            SELL CAR <ArrowDropDownIcon />
          </a>

          <div class="dropdown-menu">
            <ul>
              <li>
                <a href="#">Search New Car</a>
              </li>
              <li>
                <a href="#">Popular Brand</a>
              </li>
              <li>
                <a href="#">
                  Latest Car <i class="fas fa-caret-right"></i>
                </a>
              </li>
              <li>
                <a href="#">Popular Car</a>
              </li>
            </ul>
          </div>
        </li>
        {/* 4 */}
        <li>
          <a href="#">COMPARE CAR</a>
        </li>
        {/* 5 */}
        <li>
          <a href="#">
            NEWS & REVIEWS <ArrowDropDownIcon />
          </a>

          <div class="dropdown-menu">
            <ul>
              <li>
                <a href="#">Search New Car</a>
              </li>
              <li>
                <a href="#">Popular Brand</a>
              </li>
              <li>
                <a href="#">
                  Latest Car <i class="fas fa-caret-right"></i>
                </a>
              </li>
              <li>
                <a href="#">Popular Car</a>
              </li>
            </ul>
          </div>
        </li>
        {/* 6 */}
        <li>
          <a href="#">
            CARDEKHO VENTURES
            <ArrowDropDownIcon />
          </a>

          <div class="dropdown-menu">
            <ul>
              <li>
                <a href="#">Search New Car</a>
              </li>
              <li>
                <a href="#">Popular Brand</a>
              </li>
              <li>
                <a href="#">
                  Latest Car <i class="fas fa-caret-right"></i>
                </a>
              </li>
              <li>
                <a href="#">Popular Car</a>
              </li>
            </ul>
          </div>
        </li>
        {/* 7 */}
        <li>
          <a href="#">
            MORE <ArrowDropDownIcon />
          </a>

          <div class="dropdown-menu">
            <ul>
              <li>
                <a href="#">Search New Car</a>
              </li>
              <li>
                <a href="#">Popular Brand</a>
              </li>
              <li>
                <a href="#">
                  Latest Car <i class="fas fa-caret-right"></i>
                </a>
              </li>
              <li>
                <a href="#">Popular Car</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div className="location">
        <LocationOnIcon />
        <span>Select City</span>
      </div>
    </div>
  );
};

export default NavDropdown;
