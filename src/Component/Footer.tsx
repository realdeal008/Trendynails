"use client";
import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <h3 className="brand-title">
              <span className="brand-gradient">TrendyNailz</span>
            </h3>
            <p className="brand-description">
              Elevating nail artistry through exceptional service and education since 2015.
            </p>
            <div className="social-icons">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTiktok /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              <li><a href="#">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#salon">Our Salon</a></li>
              <li><a href="#academy">Academy</a></li>
              <li><a href="#events">Events</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt />
                <span>123 Beauty Ave, Beverly Hills, CA 90210</span>
              </li>
              <li>
                <FaPhoneAlt />
                <span>+1 234 567 8900</span>
              </li>
              <li>
                <FaEnvelope />
                <span>info@trendynailz.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="footer-heading">Hours</h4>
            <ul className="footer-hours">
              <li><span>Monday - Friday</span><span>9am - 8pm</span></li>
              <li><span>Saturday</span><span>10am - 6pm</span></li>
              <li><span>Sunday</span><span>10am - 6pm</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2025 TrendyNailz. All rights reserved. |{' '}
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
