"use client";

import React from 'react'

const Navbar = () => {
  return (
         <div className="navbar">
         <div className="navbar-container">
        <div className="brand-logo">
          <span className="gradient-text">TrendyNailz</span>
        </div>

        <div className="nav-links">
          <a href="#" className="nav-link">Home</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#salon" className="nav-link">Salon</a>
          <a href="#academy" className="nav-link">Academy</a>
          <a href="#events" className="nav-link">Events</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#book" className="book-button">Book Now</a>
        </div>

        <button className="menu-button">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </div>
  )
}

export default Navbar
