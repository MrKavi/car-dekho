import React from "react";
import MidNavbar from "../Components/MidNavbar";

import "./Homepage.css";
import Navbar from "../Components/Navbar";
import CarForm from "../Components/CarForm";
import Footer from "./Footer";
import Carfeatures from "../Components/Carfeatures";
import CarList from "../Components/CarList";

import NavDropdown from "../Components/NavDropdown";
import CarSlider from "../Components/CarSlider";
import SubFooter from "../Components/SubFooter";
import CarLocations from "../Components/CarLocations";
import CarBrand from "../Components/CarBrand";
import CarInfo from "../Components/CarInfo";
import CarBudget from "../Components/CarBudget";
import Ad from "../Components/Ad";

const Homepage = () => {
  return (
    <>
      <Navbar />
      {/* <MidNavbar /> */}
      <NavDropdown />
      <CarForm />
      <Carfeatures />
      <CarList />
      {/* <CarSlider /> */}
      <CarBudget />
      <CarBrand />
      <Ad />
      <CarLocations />
      <CarInfo />
      <SubFooter />
      <Footer />
    </>
  );
};

export default Homepage;
