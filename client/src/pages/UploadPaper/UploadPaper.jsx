import { toast } from "react-toastify";  

function UploadPaper() {

    const handleUpload = (e) => {
  e.preventDefault();

  toast.error("Please fill all required fields!");
};

  return (
    <section className="max-w-4xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">
        Upload Research Paper
      </h1>

    <form
  className="bg-white shadow-lg rounded-xl p-8 space-y-6"
  onSubmit={handleUpload}
>
        <div>
          <label className="block mb-2 font-semibold">
            Paper Title
          </label>

          <input
            type="text"
            placeholder="Enter paper title"
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Author Name
          </label>

          <input
            type="text"
            placeholder="Enter author name"
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Department
          </label>

          <select className="w-full border p-3 rounded-lg">
            <option>Computer Science</option>
            <option>Mechanical</option>
            <option>Civil</option>
            <option>Electrical</option>
            <option>Electronics</option>
            <option>AI & Data Science</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Publication Year
          </label>

          <input
            type="number"
            placeholder="2025"
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Abstract
          </label>

          <textarea
            rows="5"
            placeholder="Enter abstract..."
            className="w-full border p-3 rounded-lg"
          ></textarea>
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Upload PDF
          </label>

          <input
            type="file"
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <button
          className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800"
        >
          Upload Paper
        </button>

      </form>
    </section>
  );
}

export default UploadPaper;