function Categories() {
  const categories = [
    "Artificial Intelligence",
    "Machine Learning",
    "Cyber Security",
    "Cloud Computing",
    "Data Science",
    "Blockchain",
  ];

  return (
    <section className="max-w-6xl mx-auto py-16">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
        Research Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition duration-300 cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-gray-700">
              {category}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;