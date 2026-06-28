function BrowsePapers() {
  const papers = [
    {
      title: "Artificial Intelligence in Healthcare",
      author: "Dr. John Smith",
      year: "2025",
    },
    {
      title: "Machine Learning for Agriculture",
      author: "Dr. Sarah Lee",
      year: "2024",
    },
    {
      title: "Cloud Computing Security",
      author: "Dr. David Kumar",
      year: "2023",
    },
    {
      title: "Blockchain in Education",
      author: "Dr. Priya Nair",
      year: "2024",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">
        Browse Research Papers
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {papers.map((paper, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold text-gray-800">
              {paper.title}
            </h2>

            <p className="mt-3 text-gray-600">
              <strong>Author:</strong> {paper.author}
            </p>

            <p className="text-gray-600">
              <strong>Year:</strong> {paper.year}
            </p>

            <button className="mt-6 bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BrowsePapers;