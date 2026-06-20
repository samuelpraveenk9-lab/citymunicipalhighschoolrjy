import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* School Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              CMCH School
            </h3>

            <p className="text-blue-100 leading-relaxed">
              City Municipal Corporation High School
              <br />
              Rajahmundry, Andhra Pradesh
            </p>

            <p className="text-blue-200 mt-4 text-sm">
              Excellence in Education, Innovation and Holistic Development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-blue-100">
              <Link to="/" className="hover:text-yellow-300">
                Home
              </Link>

              <Link to="/gallery" className="hover:text-yellow-300">
                Gallery
              </Link>

              <Link to="/events" className="hover:text-yellow-300">
                Events
              </Link>

              <Link to="/magazine" className="hover:text-yellow-300">
                Magazine
              </Link>

              <Link to="/contact" className="hover:text-yellow-300">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Contact Us
            </h3>

            <div className="space-y-2 text-blue-100">

              <p>
                📍 Rajahmundry, Andhra Pradesh
              </p>

              <a
                href="tel:+919397951399"
                className="block hover:text-yellow-300"
              >
                📞 School Phone
              </a>

              <a
                href="mailto:durgaprasad1729@gmail.com"
                className="block hover:text-yellow-300"
              >
                ✉️ School Email
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-10 pt-6 text-center text-blue-200 text-sm">
          © {new Date().getFullYear()} City Municipal Corporation High School, Rajahmundry
          <br />
          The Voice of City Municipal Corporation High School
        </div>

      </div>
    </footer>
  );
}
