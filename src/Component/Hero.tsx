"use client";

import { useEffect, useState } from "react";
import {Logo, Salogo} from "../app/assets.js"

const Hero = () => {
  const images = [
    Logo,
    Salogo,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span>Nail Art</span>
            <span className="gradient-text">Perfected</span>
          </h1>
          <p className="hero-description">
            Discover the ultimate nail experience at TrendyNailz - where luxury meets creativity.
            Our master technicians and educators redefine nail artistry for both clients and professionals.
          </p>
          <div className="hero-buttons">
            <a href="#book" className="btn-primary">Book Appointment</a>
            <a href="#academy" className="btn-secondary">Learn Nail Art</a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={`Slideshow ${index + 1}`}
              className={`hero-image ${index === currentImage ? 'active' : ''}`}
            />
          ))}
          <div className="circle pink-circle"></div>
          <div className="circle purple-circle"></div>
        </div>
      </div>

      <div className="background-circle yellow-circle"></div>

    </section>
  );
};

export default Hero;
