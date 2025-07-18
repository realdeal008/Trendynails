"use client";

import { asalon, saloon, saloosn , saalon} from '@/app/assets';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Salon = () => {
  const images = [
      asalon,saloon,saloosn,saalon,
];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="salon" className="salon-section">
      <div className="container">
        <div className="salon-content">
          {/* Slideshow Image */}
          <div className="salon-image">
            <Image
              src={images[currentIndex]}
              alt="TrendyNailz salon interior"
              className="rounded shadow fade-in"
              priority={true}
            />
          </div>

          {/* Text Content */}
          <div className="salon-text">
            <h2 className="salon-title">Our Luxurious Salon</h2>
            <div className="salon-divider"></div>
            <p className="salon-description">
              Step into our elegant sanctuary where exquisite nail care meets unparalleled comfort.
              Our Beverly Hills location offers a refined atmosphere with the highest standards of hygiene and luxury.
            </p>

            <div className="info-grid">
              <div>
                <h4 className="info-heading">
                  <i className="fas fa-map-marker-alt icon pink"></i>
                  Location
                </h4>
                <p className="info-text">123 Beauty Ave, Beverly Hills, CA 90210</p>
              </div>
              <div>
                <h4 className="info-heading">Hours</h4>
                <p className="info-text">
                  Mon-Fri: 9am - 8pm
                  <br />
                  Sat-Sun: 10am - 6pm
                </p>
              </div>
            </div>

            <a href="#contact" className="salon-button">
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Salon;
