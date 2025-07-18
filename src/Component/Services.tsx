"use client";

import React from 'react';
import { FaSpa, FaGem, FaCrown, FaMagic, FaArrowRight } from 'react-icons/fa';

const services = [
  {
    title: 'Luxe Manicure',
    description: 'Our signature treatment featuring premium products, extended massage, and bespoke nail art.',
    price: 'From $65',
    icon: <FaSpa />,
    bgColor: 'bg-pink-100',
    iconColor: 'text-pink-600',
  },
  {
    title: 'Gel Extravaganza',
    description: 'Long-lasting gel polish application with custom design options for a flawless finish.',
    price: 'From $85',
    icon: <FaGem />,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    title: 'Royal Pedicure',
    description: 'Indulgent foot treatment with exfoliation, massage, and premium polish for silky smooth feet.',
    price: 'From $75',
    icon: <FaCrown />,
    bgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
  },
  {
    title: 'Custom Nail Art',
    description: 'Bespoke nail designs crafted by our master artists to match your unique style and personality.',
    price: 'Price on request',
    icon: <FaMagic />,
    bgColor: 'bg-pink-100',
    iconColor: 'text-pink-600',
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Our Signature Services</h2>
          <div className="services-divider"></div>
          <p className="services-description">
            Experience the pinnacle of nail care with our exclusive treatments designed for beauty and longevity.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className={`icon-wrapper ${service.bgColor}`}>
                <div className={`service-icon ${service.iconColor}`}>{service.icon}</div>
              </div>
              <h3 className="service-name">{service.title}</h3>
              <p className="service-text">{service.description}</p>
              <div className="service-price">
                <span>{service.price}</span>
                <FaArrowRight className="ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;