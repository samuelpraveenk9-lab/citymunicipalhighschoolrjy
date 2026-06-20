import { motion } from "framer-motion";

import issue1Cover from "../assets/issue-1-cover.png";
import issue2Cover from "../assets/issue-2-cover.png";
import issue3Cover from "../assets/issue-3-cover.png";
import issue4Cover from "../assets/issue-4-cover.png";

export default function Magazine() {
  const issues = [
    {
      issue: 4,
      cover: issue4Cover,
      pdf: "/CMCH Times - Issue 4.pdf",
      latest: true,
      year: "2026",
    },
    {
      issue: 3,
      cover: issue3Cover,
      pdf: "/CMCH Times - Issue 3.pdf",
      latest: false,
      year: "2025",
    },
    {
      issue: 2,
      cover: issue2Cover,
      pdf: "/CMCH Times - Issue 2.pdf",
      latest: false,
      year: "2025",
    },
    {
      issue: 1,
      cover: issue1Cover,
      pdf: "/CMCH Times - Issue 1.pdf",
      latest: false,
      year: "2025",
    },
  ];

  const latestIssue = issues[0];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6"
        >
          CMCH Times
        </motion.h1>

        <p className="max-w-3xl mx-auto text-lg text-slate-600">
          Explore our school magazines featuring achievements,
          events, student creativity, competitions, and memorable moments.
        </p>
      </section>

      {/* Featured Issue */}
      <section className="max-w-7xl mx-auto px-6 mb-24">

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-white rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid md:grid-cols-2">

            <div className="relative">
              <img
                src={latestIssue.cover}
                alt={`Issue ${latestIssue.issue}`}
                className="w-full h-full object-cover"
              />

              <div className="absolute top-5 left-5">
                <span className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-full font-bold">
                  Latest Issue
                </span>
              </div>
            </div>

            <div className="p-10 flex flex-col justify-center">

              <span className="text-blue-700 font-semibold mb-3">
                CMCH Times Magazine
              </span>

              <h2 className="text-5xl font-extrabold text-blue-900 mb-4">
                Issue {latestIssue.issue}
              </h2>

              <p className="text-slate-600 text-lg mb-8">
                Discover student achievements, school activities,
                cultural celebrations, competitions, educational
                articles, and memorable moments from CMCH School.
              </p>

              <div className="flex flex-wrap gap-4">

                <a
                  href={latestIssue.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition"
                >
                  Read Online
                </a>

                <a
                  href={latestIssue.pdf}
                  download
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-3 rounded-xl font-semibold transition"
                >
                  Download PDF
                </a>

              </div>

            </div>

          </div>
        </motion.div>

      </section>

      {/* Archive */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold text-blue-900 mb-10 text-center">
          Magazine Archive
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {issues.map((issue, index) => (
            <motion.div
              key={issue.issue}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative">

                <img
                  src={issue.cover}
                  alt={`Issue ${issue.issue}`}
                  className="w-full h-80 object-cover"
                />

                {issue.latest && (
                  <span className="absolute top-4 right-4 bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-xs font-bold">
                    Latest
                  </span>
                )}

              </div>

              <div className="p-5">

                <h3 className="text-2xl font-bold text-blue-900 mb-1">
                  Issue {issue.issue}
                </h3>

                <p className="text-slate-500 mb-5">
                  Published {issue.year}
                </p>

                <div className="flex gap-2">

                  <a
                    href={issue.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg font-medium transition"
                  >
                    Read
                  </a>

                  <a
                    href={issue.pdf}
                    download
                    className="flex-1 text-center bg-slate-100 hover:bg-slate-200 text-slate-800 py-2 rounded-lg font-medium transition"
                  >
                    Download
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </section>

    </div>
  );
}
