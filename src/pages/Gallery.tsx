import { motion } from "framer-motion";

import GandhijiJayanti from "../assets/Gandhiji-Jayanthi.jpg";
import SaraswathiPuja from "../assets/Saraswathi-Puja.jpg";
import SchoolPhoto from "../assets/School-photo.jpg";
import Karate from "../assets/selected-for-karate1.jpg";
import SSRallyPortrait from "../assets/SS--Rally-Portrait.jpg";
import SSRallyLandscape from "../assets/SS-Rally-Landscape.jpg";
import TeluguDay from "../assets/Telugu-DAY1.jpg";
import RememberingGandhiji from "../assets/Remembering-Gandhiji.jpg";

export default function Gallery() {
  const photos = [
    {
      src: SchoolPhoto,
      caption: "City Municipal Corporation High School – Main Building",
      category: "Campus",
    },
    {
      src: GandhijiJayanti,
      caption: "Gandhiji Jayanthi Celebration",
      category: "Events",
    },
    {
      src: RememberingGandhiji,
      caption: "Students Paying Tribute to Gandhiji",
      category: "Events",
    },
    {
      src: SaraswathiPuja,
      caption: "Saraswathi Puja 2025",
      category: "Cultural",
    },
    {
      src: SSRallyLandscape,
      caption: "Swachh Survekshan Rally",
      category: "Community",
    },
    {
      src: SSRallyPortrait,
      caption: "Swachh Survekshan Awareness Rally",
      category: "Community",
    },
    {
      src: Karate,
      caption: "Student Selected for Karate Championship",
      category: "Achievement",
    },
    {
      src: TeluguDay,
      caption: "Telugu Day Celebrations",
      category: "Cultural",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* HERO */}
      <section className="relative py-20 px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6"
        >
          School Gallery
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg text-slate-600"
        >
          Explore memorable events, celebrations, achievements,
          cultural programs, and proud moments from CMCH School.
        </motion.p>

      </section>

      {/* FEATURED PHOTO */}
      <section className="max-w-7xl mx-auto px-6 mb-16">

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="relative overflow-hidden rounded-3xl shadow-2xl"
        >
          <img
            src={SchoolPhoto}
            alt="CMCH School"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
            <div className="p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-3">
                City Municipal Corporation High School
              </h2>

              <p className="text-lg text-blue-100">
                A place where learning, creativity, and excellence grow together.
              </p>
            </div>
          </div>
        </motion.div>

      </section>

      {/* MASONRY GALLERY */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6">

          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="break-inside-avoid mb-6 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="overflow-hidden">

                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />

              </div>

              <div className="p-5">

                <span className="inline-block text-xs font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full mb-3">
                  {photo.category}
                </span>

                <p className="text-slate-700 font-medium leading-relaxed">
                  {photo.caption}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

      </section>

    </div>
  );
}
