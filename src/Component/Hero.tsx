"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {Logo, Steven, } from "../app/assets.js"

const Hero = () => {
  const images = [
    Logo,
    Steven,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]); // Add images.length to dependencies

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="art">Nail Art</span>
            <span className="gradients-text">Perfected</span>
          </h1>
          <p className="hero-description">
            Discover the ultimate nail experience at TrendyNails - where luxury meets creativity.
            Our master technicians and educators redefine nail artistry for both clients and professionals.
          </p>
          <div className="hero-buttons">
            <a href="#book" className="btn-primary">Book Appointment</a>
            <a href="#academy" className="btn-secondary">Learn Nail Art</a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <Image
            src={images[currentImage]}
            alt={`Hero image ${currentImage + 1}`}
            width={1200} // Set appropriate width
            height={600} // Set appropriate height
            className="hero-img"
          />
          <div className="circle pink-circle"></div>
          <div className="circle purple-circle"></div>
        </div>
      </div>

      <div className="background-circle yellow-circle"></div>

    </section>
  );
};

export default Hero;
