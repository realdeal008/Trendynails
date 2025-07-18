"use client";
import React from "react";

const NewsletterSection = () => {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-content">
          <h3 className="newsletter-title">Join Our Trendy Community</h3>
          <p className="newsletter-text">
            Subscribe to receive exclusive offers, style inspiration, and event invitations straight to your inbox.
          </p>

          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;