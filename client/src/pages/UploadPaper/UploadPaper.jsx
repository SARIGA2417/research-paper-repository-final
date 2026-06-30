import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";

function UploadPaper() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    authors: "",
    category: "",
    keywords: "",
    abstract: "",
  });

  const [pdfFile, setPdfFile] = useState(null);
  useEffect(() => {
  if (!id) return;

  const fetchPaper = async () => {
    try {
      const res = await api.get(`/papers/${id}`);

      setFormData({
        title: res.data.title,
        authors: res.data.authors,
        category: res.data.category,
        keywords: res.data.keywords,
        abstract: res.data.abstract,
      });

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Failed to load paper"
      );
    }
  };

  fetchPaper();
}, [id]);

 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !formData.title.trim() ||
    !formData.authors.trim() ||
    !formData.category.trim() ||
    !formData.abstract.trim()
  ) {
    toast.error("Please fill all required fields");
    return;
  }

  if (!id && !pdfFile) {
    toast.error("Please select a PDF file");
    return;
  }

  if (
    !id &&
    pdfFile &&
    pdfFile.type !== "application/pdf"
  ) {
    toast.error("Only PDF files are allowed");
    return;
  }

  const token = localStorage.getItem("token");

  try {

    if (id) {

      const res = await api.put(
        `/papers/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(
        res.data.message || "Paper updated successfully"
      );

      navigate("/mypapers");

      return;

    }

    const data = new FormData();

    data.append("title", formData.title);
    data.append("authors", formData.authors);
    data.append("category", formData.category);
    data.append("keywords", formData.keywords);
    data.append("abstract", formData.abstract);
    data.append("pdfFile", pdfFile);

    const res = await api.post(
      "/papers/upload",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    toast.success(
      res.data.message || "Paper uploaded successfully"
    );

    navigate("/mypapers");

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Operation failed"
    );

  }
};
    return (
    <section className="max-w-4xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">
        {id ? "Edit Research Paper" : "Upload Research Paper"}
      </h1>

      <form
        className="bg-white shadow-lg rounded-xl p-8 space-y-6"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block mb-2 font-semibold">
            Paper Title
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter paper title"
            className="w-full border p-3 rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Author Name
          </label>

          <input
            type="text"
            name="authors"
            value={formData.authors}
            onChange={handleChange}
            placeholder="Enter author name"
            className="w-full border p-3 rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Category
          </label>

          <div className="form-group">


  <input
    type="text"
    name="category"
    value={formData.category}
    onChange={handleChange}
    placeholder="Enter category (e.g. Mechanical Engineering)"
    required
  />

</div>
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Keywords
          </label>

          <input
            type="text"
            name="keywords"
            value={formData.keywords}
            onChange={handleChange}
            placeholder="AI, Machine Learning..."
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Abstract
          </label>

          <textarea
            rows="5"
            name="abstract"
            value={formData.abstract}
            onChange={handleChange}
            placeholder="Enter abstract..."
            className="w-full border p-3 rounded-lg"
            required
          />
        </div>

        {!id && (
          <div>
            <label className="block mb-2 font-semibold">
              Upload PDF
            </label>

            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="w-full border p-3 rounded-lg"
              required
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800"
        >
          {id ? "Update Paper" : "Upload Paper"}
        </button>
      </form>
    </section>
  );
}

export default UploadPaper;