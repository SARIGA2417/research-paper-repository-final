import { useEffect, useState } from "react";
import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";

function BrowsePapers() {

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const search =
    searchParams.get("search") || "";

  const [papers, setPapers] = useState([]);

  useEffect(() => {

    const fetchPapers = async () => {

      try {

        const res = await api.get("/papers");

        setPapers(res.data);

      } catch (error) {

        toast.error(

          error.response?.data?.message ||

          "Failed to load papers"

        );

      }

    };

    fetchPapers();

  }, []);

  const filteredPapers = papers.filter((paper) => {

    const query = search.toLowerCase();

    return (

      paper.title.toLowerCase().includes(query) ||

      paper.authors.toLowerCase().includes(query) ||

      paper.category.toLowerCase().includes(query) ||

      (paper.keywords || "").toLowerCase().includes(query)

    );

  });

  return (

    <section className="max-w-7xl mx-auto px-8 py-16">

      <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">

        Browse Research Papers

      </h1>

      {filteredPapers.length === 0 ? (

        <h2 className="text-center text-gray-500">

          No Papers Found

        </h2>

      ) : (

        <div className="grid md:grid-cols-2 gap-8">

          {filteredPapers.map((paper) => (

            <div
              key={paper._id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >

              <h2 className="text-2xl font-semibold text-gray-800">

                {paper.title}

              </h2>

              <p className="mt-3 text-gray-600">

                <strong>Author:</strong> {paper.authors}

              </p>

              <p className="text-gray-600">

                <strong>Category:</strong> {paper.category}

              </p>

              <p className="text-gray-600">

                <strong>Status:</strong> {paper.status}

              </p>

              <button
                onClick={() =>
                  navigate(`/paper/${paper._id}`)
                }
                className="mt-6 bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800"
              >

                View Details

              </button>

            </div>

          ))}

        </div>

      )}

    </section>

  );

}

export default BrowsePapers;