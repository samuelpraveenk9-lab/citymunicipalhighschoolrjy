import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import hmPhoto from "../assets/hm-photo.jpg";
import issue4cover from "../assets/issue-4-cover.png";
import SaraswathiPuja from "../assets/Saraswathi-Puja.jpg";
import GandhijiJayanti from "../assets/Gandhiji-Jayanthi.jpg";
import TeluguDay from "../assets/Telugu-DAY1.jpg";
import SSRallyLandscape from "../assets/SS-Rally-Landscape.jpg";
import Footer from "../components/Footer";

export default function Home() {
const stats = [
{ number: "1000+", label: "Students" },
{ number: "40+", label: "Teachers" },
{ number: "95%", label: "Pass Rate" },
{ number: "25+", label: "Years of Excellence" },
];

return ( <div className="bg-slate-50">

  {/* HERO SECTION */}
  <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 text-white">

    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-300 blur-3xl"></div>
    </div>

    <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold mb-6"
      >
        Welcome to
        <span className="block text-yellow-300">
          CMCH School
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto text-lg md:text-xl text-blue-100 mb-10 leading-relaxed"
      >
        City Municipal Corporation High School is committed to
        academic excellence, innovation, character development,
        and preparing students for a successful future.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <Link
          to="/gallery"
          className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-8 py-4 rounded-full font-bold shadow-lg transition"
        >
          View Gallery
        </Link>

        <Link
          to="/magazine"
          className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 px-8 py-4 rounded-full font-bold transition"
        >
          School Magazine
        </Link>
      </motion.div>
    </div>
  </section>

  {/* STATISTICS */}
  <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      {stats.map((stat, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -8 }}
          className="bg-white rounded-3xl shadow-xl p-8 text-center"
        >
          <h3 className="text-4xl font-extrabold text-blue-800">
            {stat.number}
          </h3>

          <p className="text-slate-600 mt-2">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  </section>

  {/* ABOUT SECTION */}
  <section className="max-w-7xl mx-auto px-6 py-24">

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl shadow-xl p-10 md:p-16"
    >
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
        About CMCH School
      </h2>

      <p className="max-w-4xl mx-auto text-center text-slate-700 leading-8 text-lg">
        City Municipal Corporation High School is dedicated to
        nurturing young minds through quality education,
        innovative teaching methods, strong values, and
        holistic development. Our mission is to empower every
        student with knowledge, creativity, leadership skills,
        and confidence to thrive in the modern world.
      </p>
    </motion.div>
  </section>

  {/* HEADMASTER SECTION */}
  <section className="max-w-7xl mx-auto px-6 pb-24">

    <div className="grid md:grid-cols-2 gap-12 items-center">

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="flex justify-center"
      >
        <img
          src={hmPhoto}
          alt="Headmaster"
          className="w-80 rounded-3xl shadow-2xl"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-blue-700 font-semibold">
          HEADMASTER
        </span>

        <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">
          P. Durga Prasad Garu
        </h2>

        <p className="text-slate-600 mb-6">
          M.Sc, M.Phil, B.Ed
        </p>

        <p className="text-slate-700 leading-8">
          Under his leadership, CMCH School continues to
          promote academic excellence, discipline, innovation,
          and student-centered learning. His dedication to
          education has inspired countless students to pursue
          their dreams and contribute positively to society.
        </p>
      </motion.div>

    </div>
  </section>
  
  {/* HIGHLIGHTS */}
  <section className="bg-slate-100 py-24">
    <div className="max-w-7xl mx-auto px-6">

      <h2 className="text-4xl font-bold text-center text-blue-900 mb-14">
        Our Highlights
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {[
          {
            icon: "💻",
            title: "Smart Classrooms",
            desc: "Technology-enabled learning for modern education."
          },
          {
            icon: "📚",
            title: "Library",
            desc: "Extensive collection of academic and reference books."
          },
          {
            icon: "🔬",
            title: "Science Labs",
            desc: "Hands-on experiments and practical learning."
          },
          {
            icon: "🏆",
            title: "Sports & Activities",
            desc: "Encouraging excellence beyond academics."
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl p-8 shadow-xl text-center"
          >
            <div className="text-5xl mb-5">
              {item.icon}
            </div>

            <h3 className="text-xl font-bold text-blue-800 mb-3">
              {item.title}
            </h3>

            <p className="text-slate-600">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  {/* EVENTS PREVIEW */}
  <section className="max-w-7xl mx-auto px-6 py-24">

    <div className="flex justify-between items-center mb-12">
      <h2 className="text-4xl font-bold text-blue-900">
        Past Events
      </h2>

      <Link
        to="/events"
        className="text-blue-700 font-semibold hover:underline"
      >
        View All →
      </Link>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          title: "Medical Camp",
          date: "October 2025"
        },
        {
          title: "Children's Day",
          date: "November 2025"
        },
        {
          title: "Science Fair",
          date: "December 2025"
        }
      ].map((event, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -8 }}
          className="bg-white rounded-3xl shadow-xl p-8"
        >
          <span className="text-blue-700 font-semibold">
            {event.date}
          </span>

          <h3 className="text-2xl font-bold mt-3">
            {event.title}
          </h3>
        </motion.div>
      ))}
    </div>
  </section>

  {/* GALLERY PREVIEW */}
  <section className="bg-slate-100 py-24">

    <div className="max-w-7xl mx-auto px-6">

      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl font-bold text-blue-900">
          School Gallery
        </h2>

        <Link
          to="/gallery"
          className="text-blue-700 font-semibold hover:underline"
        >
          View Gallery →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

  {[
    {
      image: SaraswathiPuja,
      title: "Saraswathi Puja",
    },
    {
      image: GandhijiJayanti,
      title: "Gandhiji Jayanthi",
    },
    {
      image: TeluguDay,
      title: "Telugu Day",
    },
    {
      image: SSRallyLandscape,
      title: "Swachh Survekshan Rally",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
    >
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-center text-slate-700">
          {item.title}
        </h3>
      </div>
    </div>
  ))}

</div>
    </div>
  </section>

  {/* MAGAZINE PREVIEW */}
  <section className="max-w-7xl mx-auto px-6 py-24">

    <h2 className="text-4xl font-bold text-center text-blue-900 mb-14">
      Latest Magazine
    </h2>

    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

      <div className="grid md:grid-cols-2">

        <img 
          src={issue4cover}
          alt="CMH Times Issue 4"
          className="w-full h-full object-cover"
        />
          
        <div className="p-10">

          <span className="text-blue-700 font-semibold">
            Latest Issue
          </span>

          <h3 className="text-4xl font-bold mt-3 mb-5">
            Issue 4
          </h3>

          <p className="text-slate-600 mb-8">
            Explore achievements, events, student creativity,
            school activities, and inspiring stories from
            CMCH School.
          </p>

          <Link
            to="/magazine"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold transition"
          >
            View Magazine
          </Link>

        </div>
      </div>
    </div>
  </section>

  {/* CONTACT CTA */}
  <section className="bg-gradient-to-r from-blue-900 to-cyan-600 text-white py-24">

    <div className="max-w-4xl mx-auto text-center px-6">

      <h2 className="text-4xl font-bold mb-6">
        Get In Touch
      </h2>

      <p className="text-blue-100 mb-8">
        Have questions about admissions, events, or school activities?
        Contact us today.
      </p>

      <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-8 py-4 rounded-full font-bold transition">
        Contact School
      </button>

    </div>
  </section>

  {/* FOOTER */}
  <Footer />

</div>

);
}
