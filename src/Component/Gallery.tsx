"use client";

import React from "react";
import Image from "next/image";

const galleryImages = [
	{
		src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f326057d-2da7-43ba-88f4-0f59aeac13f0.png",
		alt: "Elegant French manicure with gold foil accents and crystal embellishments",
	},
	{
		src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2aebd90f-2f6e-4d3f-94b8-e4c007d6f352.png",
		alt: "Modern abstract nail art in neon colors with geometric patterns",
	},
	{
		src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/972037d3-5011-44c1-ae3e-e010afcc2c44.png",
		alt: "Bridal nail design with pearlescent white polish and delicate lace patterns",
	},
	{
		src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a190448e-69fd-415e-907b-1fbfca8ec3f9.png",
		alt: "Holiday-themed nails featuring glitter ombre and miniature festive charms",
	},
	{
		src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/35e03f33-7d33-4b90-9f1e-6526a82a57f8.png",
		alt: "Summer beach nails with gradient sunset colors and seashell details",
	},
	{
		src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/91e45ae9-5c1a-4644-b55c-81dcfcb766ac.png",
		alt: "Edgy black and gold marble nails with metal stud decorations",
	},
	{
		src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/11bd3f18-1763-4d01-a0b5-f0d470f53302.png",
		alt: "Romantic floral nail art with hand-painted roses on soft pink base",
	},
	{
		src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8cd487c3-4523-410a-9331-08721835b173.png",
		alt: "Minimalist nude nails with abstract negative space designs in gold",
	},
];

const Gallery = () => {
	return (
		<section className="gallery-section">
			<div className="container">
				<div className="text-center">
					<h2 className="gallery-title">Glimpse of Our Work</h2>
					<div className="gallery-divider"></div>
					<p className="gallery-description">
						Each creation is a masterpiece, tailored to reflect your unique style
						and personality.
					</p>
				</div>

				<div className="gallery-grid">
					{galleryImages.map((img, index) => (
						<div className="gallery-item" key={index}>
							<Image
								src={img.src}
								alt={img.alt}
								width={300}
								height={200}
								className="gallery-img"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Gallery;