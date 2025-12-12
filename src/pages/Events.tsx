import { motion } from "framer-motion";

export default function Events() {
  const events = [
    {
      date: "Oct 15, 2025",
      title: "Medical Camp",
      desc: "A successful health camp organized by CMCH students.",
    },
    {
      date: "Nov 14, 2025",
      title: "Children’s Day Celebration",
      desc: "Cultural events, exhibitions, and fun games.",
    },
    {
      date: "Dec 5, 2025",
      title: "Annual Science Fair",
      desc: "Students showcase innovative science models and projects.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Page Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-blue-900 mb-8 text-center"
      >
        Upcoming Events
      </motion.h2>

      {/* Timeline List */}
      <div className="relative border-l-4 border-blue-700 pl-6 space-y-10">
        {events.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            className="bg-white p-5 shadow-md rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
          >
            {/* Event Dot */}
            <div className="absolute -left-[10px] mt-2 h-5 w-5 bg-blue-700 rounded-full border-4 border-white shadow-md"></div>

            <p className="text-sm text-gray-500 font-medium">{event.date}</p>
            <h3 className="text-xl font-semibold text-blue-800 mt-1">
              {event.title}
            </h3>
            <p className="text-gray-700 mt-2">{event.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
