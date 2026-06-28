import { FaSearch } from "react-icons/fa";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24 text-center">

      <h1 className="text-6xl font-extrabold text-[#1e3a8a] leading-tight">
        Research Paper Repository
      </h1>

      <p className="mt-6 text-xl text-gray-600">
        Discover • Upload • Share Academic Research Papers
      </p>

      <div className="mt-10 flex justify-center">

  <div className="flex w-full md:w-[600px] overflow-hidden rounded-xl shadow-lg">

    <input
      type="text"
      placeholder="Search research papers..."
      className="flex-1 h-14 px-5 outline-none border border-gray-300"
    />

    <button
      className="bg-[#1e3a8a] text-white px-8 flex items-center gap-2 hover:bg-[#1e40af] transition"
    >
      <FaSearch />
      Search
    </button>

  </div>

</div>
    </section>
  );
}

export default Hero;