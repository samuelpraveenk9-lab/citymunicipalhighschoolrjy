import { motion } from "framer-motion";

const events = [
  { title: "Independence Day Celebration", description: "Flag hoisting & cultural programs" },
  { title: "Science Exhibition", description: "Innovative student projects on display" },
  { title: "Annual Sports Meet", description: "Track events & team games" },
];

function Events() {
  return (
    <section className="section">
      <h3>Upcoming Events</h3>
      <div className="cards">
        {events.map((e, idx) => (
          <motion.div key={idx} whileHover={{ scale: 1.05 }} className="card">
            <h4 className="font-bold text-xl mb-2">{e.title}</h4>
            <p>{e.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Events;
