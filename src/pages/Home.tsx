import { motion } from "framer-motion";
import hmPhoto from "../assets/hm-photo.jpg";

export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #dbeafe, #bfdbfe)",
          padding: "120px 20px",
          textAlign: "center",
          borderBottom: "1px solid #cbd5e1",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "3.2rem",
            fontWeight: 800,
            color: "#1e3a8a",
            marginBottom: "20px",
          }}
        >
          Welcome to CMCH School
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: "1.25rem",
            maxWidth: "750px",
            margin: "0 auto",
            color: "#1e293b",
            marginBottom: "30px",
            lineHeight: "1.7",
          }}
        >
          City Municipal Corporation High School is committed to excellence in education,
          innovation, and holistic development.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          style={{
            backgroundColor: "#fbbf24",
            color: "#1e40af",
            border: "none",
            padding: "14px 28px",
            borderRadius: "9999px",
            fontWeight: 700,
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Explore More
        </motion.button>
      </section>

      {/* About Section */}
      <section style={{ padding: "70px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "20px", color: "#1e3a8a" }}>
          About CMCH School
        </h2>

        <p
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            fontSize: "1.15rem",
            color: "#334155",
            lineHeight: "1.8",
          }}
        >
          City Municipal Corporation High School (CMCH) is dedicated to nurturing young minds
          with world-class education, modern learning tools, and strong cultural values. Our goal
          is to empower students with knowledge, creativity, discipline, and holistic growth.
        </p>
      </section>

      {/* HM Section */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <img
          src={hmPhoto}
          alt="HM Sir"
          style={{
            width: "220px",
            height: "260px",
            borderRadius: "12px",
            objectFit: "cover",
            marginBottom: "15px",
            boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
          }}
        />
        <h3 style={{ color: "#1e3a8a", fontSize: "1.5rem", fontWeight: 700 }}>
          P. Durga Prasad Garu – M.Sc, M.Phil, B.Ed
        </h3>
        <p style={{ maxWidth: "600px", margin: "15px auto", lineHeight: "1.6", color: "#475569" }}>
          Our esteemed Head Master, known for his dedication, leadership, and passion for
          transforming students’ lives.
        </p>
      </section>

      {/* Features Section */}
      <section style={{ padding: "70px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "40px", color: "#1e3a8a" }}>
          Our Highlights
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          {[
            { title: "Smart Classrooms", desc: "Interactive technology-powered learning." },
            { title: "Library", desc: "A vast collection of books and digital resources." },
            { title: "Science Labs", desc: "Fully equipped labs for hands-on learning." },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              style={{
                background: "#ffffff",
                width: "260px",
                padding: "25px",
                borderRadius: "14px",
                textAlign: "center",
                boxShadow: "0 6px 14px rgba(0,0,0,0.12)",
              }}
            >
              <h4 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1e40af", marginBottom: "10px" }}>
                {item.title}
              </h4>
              <p style={{ color: "#475569", fontSize: "1rem" }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section style={{ padding: "70px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "40px", color: "#1e3a8a" }}>
          Upcoming Events
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          {[1, 2, 3].map((e) => (
            <motion.div
              key={e}
              whileHover={{ scale: 1.05 }}
              style={{
                background: "#ffffff",
                width: "260px",
                padding: "25px",
                borderRadius: "14px",
                boxShadow: "0 6px 14px rgba(0,0,0,0.12)",
              }}
            >
              <h4 style={{ fontWeight: 700, color: "#1e40af", fontSize: "1.2rem", marginBottom: "10px" }}>
                Event {e}
              </h4>
              <p style={{ color: "#475569" }}>Details about event {e}...</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: "70px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "40px", color: "#1e3a8a" }}>
          Contact Us
        </h2>

        <form
          style={{
            maxWidth: "500px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #cbd5e1",
            }}
          />
          <input
            type="email"
            placeholder="Email"
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #cbd5e1",
            }}
          />
          <textarea
            placeholder="Message"
            rows={4}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #cbd5e1",
            }}
          ></textarea>

          <button
            type="submit"
            style={{
              backgroundColor: "#1e40af",
              color: "#ffffff",
              padding: "14px",
              borderRadius: "9999px",
              border: "none",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#e0f2fe",
          marginTop: "50px",
          fontWeight: 600,
          color: "#1e40af",
        }}
      >
        © {new Date().getFullYear()} CMCH School. All rights reserved.
      </footer>
    </div>
  );
}
