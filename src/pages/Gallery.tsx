import React from "react";

// Import your 10 photos + 1 video
import gandhiji from "../assets/Gandhiji-Jayanthi.jpg";
import nmmsClass from "../assets/NMMS-Class.jpg";
import nmmsVideo from "../assets/NMMS-Class-video.mp4";
import remembringGandhiji from "../assets/Remembring-Gandhiji.jpg";
import ssRallyPortrait from "../assets/SS--Rally-Portrait.jpg";
import ssRallyLandscape from "../assets/SS-Rally-Landscape.jpg";
import saraswathiPuja from "../assets/Saraswathi-Puja.jpg";
import schoolPhoto from "../assets/School-photo.jpg";
import teluguDay1 from "../assets/Telugu-DAY1.jpg";
import karate1 from "../assets/selected-for-karate1.jpg";

const galleryItems = [
  { src: gandhiji, title: "Gandhiji Jayanthi" },
  { src: nmmsClass, title: "NMMS Class" },
  { src: nmmsVideo, title: "NMMS Class Video", isVideo: true },
  { src: remembringGandhiji, title: "Remembering Gandhiji" },
  { src: ssRallyPortrait, title: "SS Rally Portrait" },
  { src: ssRallyLandscape, title: "SS Rally Landscape" },
  { src: saraswathiPuja, title: "Saraswathi Puja" },
  { src: schoolPhoto, title: "School Photo" },
  { src: teluguDay1, title: "Telugu Day 1" },
  { src: karate1, title: "Selected for Karate" },
];

export default function Gallery() {
  return (
    <div style={{ padding: "50px 20px", textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "30px" }}>Gallery</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        {galleryItems.map((item, idx) => (
          <div key={idx} style={{ textAlign: "center" }}>
            {item.isVideo ? (
              <video
                src={item.src}
                controls
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              />
            ) : (
              <img
                src={item.src}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              />
            )}
            <p style={{ marginTop: "10px", fontWeight: "bold" }}>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
>>>>>>> 3e3e914 (Add new project with Home, Gallery, Events, and assets)
