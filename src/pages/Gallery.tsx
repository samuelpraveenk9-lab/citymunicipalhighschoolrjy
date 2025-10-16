import { motion } from "framer-motion";

const photos = [
  { src: "/assets/Gandhiji-Jayanthi.jpg", caption: "Gandhiji Jayanthi" },
  { src: "/assets/NMMS-Class.jpg", caption: "NMMS Class" },
  { src: "/assets/Remembring-Gandhiji.jpg", caption: "Remembering Gandhiji" },
  { src: "/assets/SS--Rally-Portrait.jpg", caption: "SS Rally (Portrait)" },
  { src: "/assets/SS-Rally-Landscape.jpg", caption: "SS Rally (Landscape)" },
  { src: "/assets/Saraswathi-Puja.jpg", caption: "Saraswathi Puja" },
  { src: "/assets/School-photo.jpg", caption: "School Photo" },
  { src: "/assets/Telugu-DAY1.jpg", caption: "Telugu Day 1" },
  { src: "/assets/selected-for-karate1.jpg", caption: "Karate Achievement" },
  { src: "/assets/hm-photo.jpg", caption: "Headmaster" },
];

function Gallery() {
  return (
    <section className="section">
      <h3>Gallery</h3>
      <div className="cards">
        {photos.map((photo, idx) => (
          <motion.div key={idx} whileHover={{ scale: 1.05 }} className="card">
            <img
              src={photo.src}
              alt={photo.caption}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <p style={{ marginTop: "0.5rem", fontWeight: "500" }}>{photo.caption}</p>
          </motion.div>
        ))}

        <motion.div whileHover={{ scale: 1.05 }} className="card">
          <video
            src="/assets/NMMS-Class-video.mp4"
            controls
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <p style={{ marginTop: "0.5rem", fontWeight: "500" }}>NMMS Class Video</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Gallery;
