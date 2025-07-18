"use client";

import React from "react";
import { FaEnvelope, FaFacebookF, FaInstagram, FaPhoneAlt, FaTiktok } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="custom-top-bar">
      <div className="custom-container custom-top-bar-inner">
        <div className="custom-contact">
          <span className="custom-contact-icon">
           <FaPhoneAlt className="icon-spacing"/> +1234567890
          </span>
          <span className="custom-contact-icon">
           <FaEnvelope className="icon-spacing" /> info@trendynailz.com
          </span>
        </div>
        <div className="custom-socials">

          <a href="#">   <i><FaInstagram /> </i>   </a>
          <a href="#"><i><FaFacebookF className="icon-spacing"
                           /></i></a>
          <a href="#"><FaTiktok className="icon-spacing"
                       />
                      </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
