function FeaturedPapers() {
  const papers = [
    {
      title: "Artificial Intelligence in Healthcare",
      author: "Dr. John Smith",
      year: "2025",
    },
    {
      title: "Machine Learning for Smart Cities",
      author: "Dr. Sarah Johnson",
      year: "2024",
    },
    {
      title: "Blockchain Security Techniques",
      author: "Dr. David Lee",
      year: "2025",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-16">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
        Featured Research Papers
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {papers.map((paper, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              {paper.title}
            </h3>

            <p className="mt-3 text-gray-600">{paper.author}</p>

            <p className="text-gray-500">
              Published: {paper.year}
            </p>

            <button className="mt-6 bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800">
              View Paper
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedPapers;