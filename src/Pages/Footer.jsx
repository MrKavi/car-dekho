import React from "react";
import "./Footer.css";
import apple from "../assets/apple.jpg";
import bikedekho from "../assets/footer/bikedekho.png";
import idmainlogo from "../assets/footer/idmainlogo.svg";
import rupyylogoMobile from "../assets/footer/rupyylogoMobile.svg";
import zigwheels from "../assets/footer/zigwheels.png";

import google from "../assets/google.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const Footer = () => {
  return (
    <>
      <div className="fcontainer">
        <div>
          <h3>OVERVIEW</h3>

          <ul className="UL">
            <li>About us</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Corporate Policies</li>
            <li>Investors</li>
          </ul>
        </div>
        <div>
          <h3>OTHERS</h3>
          <ul className="UL">
            <li>Advertise with Us</li>
            <li>Careers</li>
            <li>Customer Care</li>
          </ul>{" "}
        </div>
        <div>
          <h3>CONNECT WITH US</h3>

          <ul className="UL">
            <li>1800 200 3000 (Toll-Free)</li>
            <li>support@cardekho.com</li>
            <li>Dealer solutions</li>
            <li>Terms & Conditions</li>
            <li>Used Cars Business</li>
            <li>Contact Us</li>
            <li>Feedback</li>
          </ul>
        </div>
        <div>
          <h3 className="h3">EXPERIENCE CARDEKHO APP</h3>
          <img className="apple" src={apple} alt="logo" />
          <img className="google" src={google} alt="logo" />
          <h4>Follow Us </h4>
          <ul className="followusUL">
            <li>
              <FacebookIcon />
            </li>
            <li>
              <TwitterIcon />
            </li>
            <li>
              <YouTubeIcon />
            </li>
            <li>
              <InstagramIcon />
            </li>
          </ul>
        </div>
      </div>
      <div className="copyrightcontainer">
        <div className="copyright">copyright@bytecode.agency 2022</div>{" "}
        <div className="footerimages">
          <img className="footerlogo" src={bikedekho} alt="logo" />

          <img className="footerlogo" src={idmainlogo} alt="logo" />

          <img className="footerlogo" src={zigwheels} alt="logo" />

          <img className="footerlogo" src={rupyylogoMobile} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Footer;

//
