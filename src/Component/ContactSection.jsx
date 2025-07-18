"use client";

import React from 'react'
import { FaClock, FaEnvelope, FaFacebookF, FaGraduationCap, FaInstagram, FaMapMarkerAlt, FaTiktok } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-wrapper">
          {/* Contact Info */}
          <div className="contact-info">
            <h2 className="contact-title">Find Us</h2>
            <div className="underline"></div>

            <div className="info-list">
              {/* Salon Location */}
              <div className="info-item">
                <div className="icon pink">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="info-heading">Salon Location</h4>
                  <p className="info-text">
                    123 Beauty Avenue<br />
                    Beverly Hills, CA 90210
                  </p>
                </div>
              </div>

              {/* Academy Location */}
              <div className="info-item">
                <div className="icon purple">
                  <FaGraduationCap />
                </div>
                <div>
                  <h4 className="info-heading">Academy Location</h4>
                  <p className="info-text">
                    456 Education Boulevard<br />
                    Beverly Hills, CA 90210
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="info-item">
                <div className="icon yellow">
                  <FaClock />
                </div>
                <div>
                  <h4 className="info-heading">Hours</h4>
                  <p className="info-text">
                    <span className="highlight">Salon:</span> Mon-Fri 9am-8pm, Sat-Sun 10am-6pm<br />
                    <span className="highlight">Academy:</span> Mon-Fri 9am-5pm
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <h3 className="social-title">Get In Touch</h3>
            <div className="social-icons">
              <a href="#" className="social-button"><FaInstagram /></a>
              <a href="#" className="social-button"><FaFacebookF /></a>
              <a href="#" className="social-button"><FaTiktok /></a>
              <a href="#" className="social-button"><FaEnvelope /></a>
            </div>
          </div>

          {/* Map */}
          <div className="map-container">
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.5886906594743!2d-118.39786578435008!3d34.06785972324722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bbf5a8b0f7f5%3A0x6f6b8b8b8b8b8b8b!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Salon Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

