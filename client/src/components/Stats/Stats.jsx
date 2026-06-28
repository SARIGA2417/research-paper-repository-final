function Stats() {
  const stats = [
    { number: "1500+", title: "Research Papers" },
    { number: "500+", title: "Researchers" },
    { number: "50+", title: "Universities" },
    { number: "10K+", title: "Downloads" },
  ];

  return (
    <section className="max-w-6xl mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <h2 className="text-4xl font-bold text-blue-900">
              {item.number}
            </h2>

            <p className="mt-3 text-gray-600 text-lg">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;