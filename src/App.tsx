import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaBook, FaFlask } from "react-icons/fa";
import "./App.css";

// Features
const features = [
  {
    icon: <FaChalkboardTeacher size={40} />,
    title: "Smart Classrooms",
    description: "Equipped with modern teaching technology.",
  },
  {
    icon: <FaBook size={40} />,
    title: "Library",
    description: "Extensive collection of books for all grades.",
  },
  {
    icon: <FaFlask size={40} />,
    title: "Science Labs",
    description: "Well-equipped labs for practical experiments.",
  },
];

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="p-4 flex justify-between max-w-7xl mx-auto">
        <h1 className="font-bold text-xl text-blue-900">
          City Municipal Corporation High School
        </h1>
        <ul>
          {["Home", "About", "Features", "Gallery", "Events", "Contact"].map(
            (item) => (
              <li key={item} className="inline-block ml-6 cursor-pointer">
                {item}
              </li>
            )
          )}
        </ul>
      </nav>

      {/* Hero Section with HM Photo + Education */}
      <section className="hero">
        <img
          src="/assets/hm-photo.jpg"
          alt="Headmaster"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.3,
            top: 0,
            left: 0,
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-content"
          style={{ position: "relative", zIndex: 1, textAlign: "center" }}
        >
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Welcome to CMCH School
          </h2>
          <p style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
            Excellence in Education, Innovation, and Growth
          </p>

          {/* HM Education */}
          <div
            style={{
              marginBottom: "1.5rem",
              fontSize: "1rem",
              color: "#1e40af",
            }}
          >
            <strong>Headmaster:</strong> Dr. John Doe <br />
            <strong>Education:</strong> M.Sc, M.Phil, B.Ed
          </div>

          <button
            style={{
              backgroundColor: "#fbbf24",
              color: "#1e40af",
              border: "none",
              padding: "12px 24px",
              borderRadius: "9999px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Explore More
          </button>
        </motion.div>
      </section>

      {/* About HM Card */}
      <section
        className="hm-about-card"
        style={{ textAlign: "center", padding: "2rem 1rem" }}
      >
        <img
          src="/assets/hm-photo.jpg"
          alt="Headmaster"
          style={{
            width: "200px",
            borderRadius: "50%",
            marginBottom: "1rem",
          }}
        />
        <h3>Dr. John Doe</h3>
        <p>M.Sc, M.Phil, B.Ed</p>
        <p>
          Our esteemed Headmaster guiding students with excellence and
          integrity.
        </p>
      </section>

      {/* About School */}
      <section id="about" className="section">
        <h3>About CMCH School</h3>
        <p>
          CMCH School is dedicated to nurturing young minds with modern
          education, innovative teaching methods, and holistic development.
        </p>
      </section>

      {/* Features */}
      <section id="features" className="section">
        <h3>Our Highlights</h3>
        <div className="cards">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="card"
            >
              <div className="card-icon">{f.icon}</div>
              <h4 className="font-bold text-xl mb-2">{f.title}</h4>
              <p>{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section">
        <h3>Gallery</h3>
        <div className="cards">
          {[
            {
              src: "https://source.unsplash.com/400x300/?school,students",
              caption: "Morning Assembly",
            },
            {
              src: "https://source.unsplash.com/400x300/?school,classroom",
              caption: "Smart Classroom",
            },
            {
              src: "https://source.unsplash.com/400x300/?school,sports",
              caption: "Sports Meet",
            },
            {
              src: "https://source.unsplash.com/400x300/?school,science",
              caption: "Science Fair",
            },
            {
              src: "https://source.unsplash.com/400x300/?school,celebration",
              caption: "Cultural Day",
            },
            {
              src: "https://source.unsplash.com/400x300/?school,library",
              caption: "Library Learning",
            },
          ].map((photo, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="card"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <p style={{ marginTop: "0.5rem", fontWeight: "500" }}>
                {photo.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Events */}
      <section id="events" className="section">
        <h3>Upcoming Events</h3>
        <div className="cards">
          {[
            {
              title: "Independence Day Celebration",
              description: "Flag hoisting & cultural programs",
            },
            {
              title: "Science Exhibition",
              description: "Innovative student projects on display",
            },
            {
              title: "Annual Sports Meet",
              description: "Track events & team games",
            },
          ].map((e, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }} className="card">
              <h4 className="font-bold text-xl mb-2">{e.title}</h4>
              <p>{e.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h3>Contact Us</h3>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" rows={4}></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} CMCH School. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
