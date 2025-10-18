import hmPhoto from "../assets/hm-photo.jpg";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          position: "relative",
          textAlign: "center",
          padding: "100px 20px 50px",
          backgroundColor: "#e0f2fe",
        }}
      >
        <h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ fontSize: "3rem", fontWeight: "bold", color: "#1e3a8a", marginBottom: "20px" }}
        >
          Welcome to CMCH School
        </h1>
        <p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ fontSize: "1.25rem", maxWidth: "700px", margin: "0 auto", marginBottom: "30px" }}
        >
          Excellence in Education, Innovation, and Holistic Development.
        </p>
        <button
          whileHover={{ scale: 1.05 }}
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
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>About CMCH School</h2>
        <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem", lineHeight: "1.6" }}>
          City Municipal High School (CMCH) is dedicated to nurturing young minds with modern
          education, innovative teaching methods, and holistic development. We focus on academic
          excellence, cultural values, and co-curricular activities to prepare students for a
          bright future.
        </p>
      </section>

      {/* HM Section */}
      <section id="hm" style={{ padding: "50px 20px", textAlign: "center" }}>
        <img
          src={hmPhoto}
          alt="HM Sir"
          style={{
            width: "200px",
            height: "250px",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        />
        <h3 style={{ color: "#1e3a8a", fontSize: "1.5rem", fontWeight: "bold" }}>
          P. Durga Prasad Garu – M.Sc, M.Phil, B.Ed
        </h3>
      </section>

      {/* Features Section */}
      <section id="features" style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "30px" }}>Our Highlights</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "25px",
          }}
        >
          {[
            { title: "Smart Classrooms", desc: "Equipped with modern teaching technology." },
            { title: "Library", desc: "Extensive collection of books for all grades." },
            { title: "Science Labs", desc: "Well-equipped labs for practical experiments." },
          ].map((f, idx) => (
            <div
              key={idx}
              whileHover={{ scale: 1.05 }}
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "20px",
                width: "250px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <h4 style={{ fontWeight: "bold", fontSize: "1.2rem", marginBottom: "10px" }}>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section id="events" style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "30px" }}>Upcoming Events</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "25px",
          }}
        >
          {[1, 2, 3].map((e) => (
            <motion.div
              key={e}
              whileHover={{ scale: 1.05 }}
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "20px",
                width: "250px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <h4 style={{ fontWeight: "bold", fontSize: "1.2rem", marginBottom: "10px" }}>Event {e}</h4>
              <p>Details about event {e}...</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "30px" }}>Contact Us</h2>
        <form style={{ maxWidth: "500px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "15px" }}>
          <input type="text" placeholder="Name" style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} />
          <input type="email" placeholder="Email" style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} />
          <textarea placeholder="Message" rows={4} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}></textarea>
          <button type="submit" style={{ backgroundColor: "#1e40af", color: "#fff", padding: "12px", borderRadius: "9999px", cursor: "pointer" }}>Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "20px", backgroundColor: "#e0f2fe", marginTop: "50px" }}>
        © {new Date().getFullYear()} CMCH School. All rights reserved.
      </footer>
    </div>
  );
}
