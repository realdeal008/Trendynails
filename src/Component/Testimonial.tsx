"use client";

import React from "react";

const testimonials = [
  {
    name: 'Sarah J.',
    image:
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7988a3ab-8d15-4aa5-8613-c268835971b4.png',
    text: 'The Luxe Manicure exceeded all my expectations! The attention to detail and comfort level was unparalleled. My nails looked gorgeous for weeks!',
  },
  {
    name: 'Michelle R.',
    image:
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9a7d998b-d21e-4467-b734-55f7e8886047.png',
    text: 'As a bride, I wanted perfect nails for my wedding day. The team created the most beautiful bridal set I could imagine! Absolute perfection.',
  },
  {
    name: 'Alicia T.',
    image:
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/45ec0309-5377-4a09-9b04-c5083d40d253.png',
    text: 'The Academy transformed my career. The instructors’ expertise and the hands-on training prepared me thoroughly. I now have my own successful nail business!',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Client Love</h2>
          <div className="divider" />
        </div>

        <div className="testimonial-grid">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-header">
                <img src={t.image} alt={`Portrait of ${t.name}`} className="avatar" />
                <div>
                  <h4 className="client-name">{t.name}</h4>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star star-icon"></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="testimonial-text">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;