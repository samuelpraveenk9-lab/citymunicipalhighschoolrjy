import { motion } from "framer-motion";

export default function Events() {
  const upcomingEvents = [
    {
      title: "Independence Day Celebration",
      date: "August 15, 2026",
      desc: "Flag hoisting, patriotic songs, cultural performances, speeches, and student activities.",
      status: "Upcoming",
    },
    {
      title: "Children's Day Celebration",
      date: "November 14, 2026",
      desc: "Fun activities, cultural programs, games, and student performances.",
      status: "Upcoming",
    },
    {
      title: "Annual Science Fair",
      date: "December 2026",
      desc: "Students present innovative projects, experiments, and scientific models.",
      status: "Upcoming",
    },
  ];

  const pastEvents = [
    {
      title: "Saraswathi Puja",
      date: "2025",
      desc: "A cultural and spiritual celebration conducted by students and staff.",
    },
    {
      title: "Gandhiji Jayanthi",
      date: "2025",
      desc: "Tributes, speeches, and activities honoring Mahatma Gandhi.",
    },
    {
      title: "Swachh Survekshan Rally",
      date: "2025",
      desc: "Students participated in awareness rallies promoting cleanliness.",
    },
    {
      title: "Karate Achievement",
      date: "2025",
      desc: "Students represented the school in martial arts competitions.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* HERO */}
      <section className="py-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6"
        >
          School Events
        </motion.h1>

        <p className="max-w-3xl mx-auto text-lg text-slate-600">
          Explore upcoming programs, celebrations, competitions,
          and memorable events from CMCH School.
        </p>
      </section>

      {/* FEATURED EVENT */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-orange-500 via-white to-green-500"
        >
          <div className="bg-black/20 p-10 md:p-16">

            <span className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-full font-bold">
              Featured Event
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-6 mb-4">
              🇮🇳 Independence Day 2026
            </h2>

            <p className="text-white text-lg max-w-3xl">
              Join us for the Independence Day celebrations with
              flag hoisting, patriotic performances, cultural events,
              speeches, and student participation.
            </p>

          </div>
        </motion.div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="max-w-7xl mx-auto px-6 mb-24">

        <h2 className="text-4xl font-bold text-blue-900 mb-10">
          Upcoming Events
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {upcomingEvents.map((event, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-lg p-7 hover:shadow-2xl transition-all"
            >
              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {event.status}
              </span>

              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                {event.title}
              </h3>

              <p className="text-blue-700 font-medium mb-4">
                {event.date}
              </p>

              <p className="text-slate-600">
                {event.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* PAST EVENTS */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold text-blue-900 mb-10">
          Past Events
        </h2>

        <div className="space-y-6">

          {pastEvents.map((event, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 5 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.08 }}
              className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-blue-700"
            >
              <h3 className="text-xl font-bold text-blue-900">
                {event.title}
              </h3>

              <p className="text-slate-500 mb-2">
                {event.date}
              </p>

              <p className="text-slate-600">
                {event.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

    </div>
  );
}
