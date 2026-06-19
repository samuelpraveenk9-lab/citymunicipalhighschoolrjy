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
    { src: SchoolPhoto, caption: "City Municipal High School – Main Building" },
    { src: GandhijiJayanti, caption: "Gandhiji Jayanthi Celebration" },
    { src: RememberingGandhiji, caption: "Students Paying Tribute to Gandhiji" },
    { src: SaraswathiPuja, caption: "Saraswathi Puja 2025" },
    { src: SSRallyLandscape, caption: "Swachh Survekshan Rally – Landscape View" },
    { src: SSRallyPortrait, caption: "Swachh Survekshan Rally – Portrait" },
    { src: Karate, caption: "Student Selected for Karate Championship" },
    { src: TeluguDay, caption: "Telugu Day Celebrations" },
  ];

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-4 text-blue-800"
      >
        School Gallery
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-700 text-center mb-10 max-w-2xl mx-auto"
      >
        Explore memorable events, celebrations, achievements, and proud moments
        from City Municipal High School.
      </motion.p>

      {/* Photo Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <p className="text-center text-sm font-medium text-gray-700 px-4 py-4 bg-white">
              {photo.caption}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
