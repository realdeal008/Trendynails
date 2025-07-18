"use client";

import React, { useState, useEffect } from 'react';
import {
  FaCheck,
  FaChalkboardTeacher,
  FaAward,
  FaBriefcase,
  FaTools,
} from 'react-icons/fa';                       
import { grad, price, school } from '@/app/assets';
import Image from 'next/image';

const Academy = () => {
  const slideshowImages = [
    price, grad, school,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slideshowImages.length]);

  return (
    <section id="academy" className="academy-section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="title">TrendyNailz Academy</h2>
          <div className="divider"></div>
          <p className="subtitle">
            Elevate your skills at our prestigious nail academy, where we cultivate the next generation of nail artists.
          </p>
        </div>

        <div className="academy-content">
          {/* Left Column with Slideshow */}
          <div className="left">
            <div className="card">
              <h3 className="card-title">Professional Courses</h3>
              <p className="card-text">
                Our comprehensive programs combine theory and hands-on training to prepare students for successful careers in the nail industry.
              </p>

              <ul className="course-list">
                <li><FaCheck className="icon" /> Certified Nail Technician Program (600 hours)</li>
                <li><FaCheck className="icon" /> Advanced Nail Art Masterclass</li>
                <li><FaCheck className="icon" /> Gel & Acrylic Extension Specialist</li>
              </ul>
            </div>

            {/* Slideshow */}
            <div className="slideshow-container">
              <Image
                src={slideshowImages[currentSlide]}
                alt="Academy classroom"
                className="academy-image fade-in"
                width={600}
                height={400}
                priority={true}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="right">
            <div className="card">
              <h3 className="card-title">Why Choose Our Academy?</h3>
              <p className="card-text">
                TrendyNailz Academy sets the standard for excellence in nail education with our unique advantages:
              </p>

              <div className="grid-2col">
                <div className="feature">
                  <div className="icon-box pink"><FaChalkboardTeacher /></div>
                  <h4 className="feature-title">Expert Instructors</h4>
                  <p>Learn from industry-leading professionals with years of experience.</p>
                </div>

                <div className="feature">
                  <div className="icon-box purple"><FaAward /></div>
                  <h4 className="feature-title">Certification</h4>
                  <p>Earn recognized credentials to jumpstart your career.</p>
                </div>

                <div className="feature">
                  <div className="icon-box yellow"><FaBriefcase /></div>
                  <h4 className="feature-title">Career Support</h4>
                  <p>Access to our job placement network after graduation.</p>
                </div>

                <div className="feature">
                  <div className="icon-box pink"><FaTools /></div>
                  <h4 className="feature-title">Premium Tools</h4>
                  <p>Train with professional-grade products and equipment.</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn-pink">Request Prospectus</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academy;
