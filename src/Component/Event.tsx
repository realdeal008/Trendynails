"use client";

import React from "react";
import Image from "next/image"; // Add this at the top

const eventsData = [
	{
		title: "Summer Nail Art Workshop",
		description:
			"Learn fresh, vibrant designs perfect for the season from our lead artist.",
		date: "July 15",
		price: "$95 per person",
		image:
			"https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6d164b86-29f4-4572-88ec-5cc6459f040f.png",
		tagColor: "pink",
	},
	{
		title: "Luxe Polish Collection Launch",
		description:
			"Be the first to experience our new premium gel polish line with exclusive discounts.",
		date: "August 2",
		price: "Free Event",
		image:
			"https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5bccd2b2-d719-4ff1-8bd6-0937a3eb7a3d.png",
		tagColor: "purple",
	},
	{
		title: "3D Nail Art Masterclass",
		description:
			"Advanced techniques for creating stunning dimensional nail art designs.",
		date: "August 20",
		price: "$150 per person",
		image:
			"https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/31a5ef65-6ee2-460f-9e3b-657f16a21bb5.png",
		tagColor: "yellow",
	},
];

const Events = () => {
	return (
		<section id="events" className="events-section">
			<div className="container">
				<div className="header">
					<h2 className="title">Upcoming Events</h2>
					<div className="divider"></div>
					<p className="subtitle">
						Join us for exclusive workshops, product launches, and community
						events.
					</p>
				</div>

				<div className="events-grid">
					{eventsData.map((event, index) => (
						<div key={index} className="event-card">
							<div className="image-container">
								<Image
									src={event.image}
									alt={event.title}
									width={400} // Set an appropriate width
									height={300} // Set an appropriate height
									className="your-img-class"
								/>
								<div className={`event-tag ${event.tagColor}`}>
									{event.date}
								</div>
							</div>
							<div className="event-content">
								<h3 className="event-title">{event.title}</h3>
								<p className="event-description">{event.description}</p>
								<div className="event-footer">
									<span className="event-price">{event.price}</span>
									<a href="#" className="event-link">
										Learn More →
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Events;