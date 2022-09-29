import React from "react";
import cardekho from "../assets/cardekho.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@material-ui/icons/Search";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <img className="logo" src={cardekho} alt="logo" />

      <form className="searchtab">
        <input placeholder="Search Cars or More Brands Ex- Maruti / Swift.." />
        <button className="searchicon">
          <SearchIcon />
        </button>
      </form>
      <div className="language">
        <select>
          <option value="fruit">English</option>
          <option value="vegetable">Hindi</option>
          <option value="meat">Tamil</option>
        </select>
      </div>
      <button className="hearticon">
        <FavoriteBorderIcon />
      </button>
      <div className="loginarea">
        <span>
          <AccountCircleIcon />
        </span>
        <button className="login">Login / Register </button>
      </div>
    </nav>
  );
};

export default Navbar;
