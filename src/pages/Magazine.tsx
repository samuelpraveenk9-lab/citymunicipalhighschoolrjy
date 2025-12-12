export default function Magazine() {
  return (
    <div className="p-10 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">
        CMCH Times – Issue 3
      </h1>

      <p className="max-w-xl text-gray-600 mb-8">
        Explore our latest school magazine featuring achievements, events,
        creative work, and inspiring stories from our students.
      </p>

      <a
        href="/CMCH Times - Issue 2.pdf"
        download="CMCH Times - Issue 2.pdf"
        className="bg-blue-700 text-white px-8 py-3 rounded-xl text-lg shadow-md
                   hover:bg-blue-800 transition-all duration-200"
      >
        📘 Download Magazine
      </a>

      <p className="mt-6 text-gray-500 text-sm">
        * If the download doesn’t start, check that the PDF is placed inside the <strong>public</strong> folder.
      </p>
    </div>
  );
}
