import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaBook, FaFlask } from "react-icons/fa";
import "./App.css";

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
        <h1 className="font-bold text-xl text-blue-900">CMCH School</h1>
        <ul>
          {["Home", "About", "Features", "Events", "Contact"].map((item) => (
            <li key={item} className="inline-block ml-6">{item}</li>
          ))}
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero">
        <img
          src="https://images.unsplash.com/photo-1596495577886-d920f1d0d09d?auto=format&fit=crop&w=1350&q=80"
          alt="School"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.3,
            top: 0,
            left: 0
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-content"
          style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}
        >
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Welcome to CMCH School</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
            Excellence in Education, Innovation, and Growth
          </p>
          <button style={{
            backgroundColor: '#fbbf24',
            color: '#1e40af',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '9999px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Explore More
          </button>
        </motion.div>
      </section>

      {/* About */}
      <section id="about">
        <h3>About CMCH School</h3>
        <p>
          CMCH School is dedicated to nurturing young minds with modern education, innovative teaching methods, and holistic development.
        </p>
      </section>

      {/* Features */}
      <section id="features">
        <h3>Our Highlights</h3>
        <div className="cards">
          {features.map((f, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }} className="card">
              <div className="card-icon">{f.icon}</div>
              <h4 className="font-bold text-xl mb-2">{f.title}</h4>
              <p>{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Events */}
      <section id="events">
        <h3>Upcoming Events</h3>
        <div className="cards">
          {[1, 2, 3].map((e) => (
            <motion.div key={e} whileHover={{ scale: 1.05 }} className="card">
              <h4 className="font-bold text-xl mb-2">Event {e}</h4>
              <p>Details about event {e}...</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <h3>Contact Us</h3>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" rows={4}></textarea>
          <button>Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer>© {new Date().getFullYear()} CMCH School. All rights reserved.</footer>
    </div>
  );
}

export default App;
