import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <section className="gallery-section">
      <h1>📸 CMCH School Gallery</h1>
      <div className="gallery-grid">
        {[
          { src: "https://source.unsplash.com/400x300/?school,students", caption: "Morning Assembly" },
          { src: "https://source.unsplash.com/400x300/?school,classroom", caption: "Smart Classroom" },
          { src: "https://source.unsplash.com/400x300/?school,sports", caption: "Sports Meet" },
        ].map((photo, index) => (
          <div key={index} className="photo-card">
            <img src={photo.src} alt={photo.caption} className="photo-img" />
            <p>{photo.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
