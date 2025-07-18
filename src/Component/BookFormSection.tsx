"use client";

import React from "react";


const BookFormSection = () => {
  return (
    <section id="book" className="book-section">
      <div className="book-container">
        <div className="book-flex">
          {/* Left Column */}
          <div className="book-left">
            <h2 className="book-heading">Book Your Experience</h2>
            <div className="book-divider"></div>
            <p className="book-description">
              Reserve your appointment for an unforgettable nail experience or inquire about our academy programs.
            </p>

            <div className="book-offer">
              <h4 className="offer-title">Special Offer</h4>
              <p className="offer-note">First-time clients receive 20% off any service!</p>
              <div className="custom-small-text">
                *Valid for first visit only. Cannot be combined with other offers.
              </div>
            </div>

            <div className="contact-box">
              <div className="phone-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <div className="phone-subtitle">Call us directly</div>
                <div className="phone-number">+1 234 567 8900</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="book-right">
            <form className="book-form">
              <h3 className="form-heading">Book Now</h3>

              <div className="form-grid">
                <div>
                  <label className='custom-label'>First Name</label>
                  <input className='custom-input' type="text" />
                </div>
                <div>
                  <label className='custom-label'>Last Name</label>
                  <input className='custom-input' type="text" />
                </div>
              </div>

              <div className='custom-mb'>
                <label className='custom-label'>Email</label>
                <input className='custom-inputs' type="email" />
              </div>

              <div className='custom-mb'>
                <label className='custom-label'>Phone</label>
                <input className='custom-inputs' type="tel" />
              </div>

              <div className='custom-mb'>
                <label className='custom-label'>Service</label>
                <select className='custom-inputs' >
                  <option>Select a service</option>
                  <option>Luxe Manicure</option>
                  <option>Gel Extravaganza</option>
                  <option>Royal Pedicure</option>
                  <option>Custom Nail Art</option>
                  <option>Academy Inquiry</option>
                </select>
              </div>

              <div className='custom-mb'>
                <label className='custom-label'>Date</label>
                <input className='custom-inputs' type="date" />
              </div>

              <button type="submit" className="custom-button">
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookFormSection;
