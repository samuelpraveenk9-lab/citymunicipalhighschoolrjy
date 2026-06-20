import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="py-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold text-blue-900 mb-4"
        >
          Contact Us
        </motion.h1>

        <p className="text-slate-600 max-w-2xl mx-auto">
          Get in touch with City Municipal Corporation High School.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <FaPhone className="text-4xl text-blue-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p>+91 93979 51399</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <FaEnvelope className="text-4xl text-blue-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p>cmchschool@example.com</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <FaMapMarkerAlt className="text-4xl text-blue-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p>Rajahmundry, Andhra Pradesh</p>
          </div>

        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            Send a Message
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl border"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl border"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-4 rounded-xl border"
            />

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold hover:bg-blue-800"
            >
              Send Message
            </button>

          </form>

        </div>
      </section>

    </div>
  );
}
