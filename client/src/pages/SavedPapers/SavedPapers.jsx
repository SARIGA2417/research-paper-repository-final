import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaBookmark,
  FaDownload,
  FaTrash,
  FaEye,
} from "react-icons/fa";

import { toast } from "react-toastify";
import api from "../../services/api";

import "./SavedPapers.css";

function SavedPapers() {
  const navigate = useNavigate();

  const [papers, setPapers] = useState([]);
  const [search, setSearch] = useState("");

  const fetchSavedPapers = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await api.get("/papers/saved", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setPapers(res.data);

  } catch (error) {
    toast.error(
      error.response?.data?.message ||
      "Failed to load saved papers"
    );
  }
};

  useEffect(() => {
  fetchSavedPapers();
}, []);

  const handleRemove = async (id) => {
    const confirmRemove = window.confirm(
      "Remove this paper from Saved Papers?"
    );

    if (!confirmRemove) return;

    try {
      const token = localStorage.getItem("token");

      const res = await api.delete(`/papers/save/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(res.data.message);

      fetchSavedPapers();

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Failed to remove paper"
      );
    }
  };

  const filteredPapers = papers.filter((paper) =>
    paper.title.toLowerCase().includes(search.toLowerCase()) ||
    paper.authors.toLowerCase().includes(search.toLowerCase()) ||
    paper.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
        <div className="saved-page">

      <div className="saved-header">

        <h1>Saved Papers</h1>

        <p>
          Access your bookmarked research papers anytime.
        </p>

      </div>

      <div className="saved-search">

        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            placeholder="Search saved papers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </div>

      <div className="saved-list">

        {filteredPapers.length === 0 ? (

          <h2>No Saved Papers Found</h2>

        ) : (

          filteredPapers.map((paper) => (

            <div
              className="saved-card"
              key={paper._id}
            >

              <div className="paper-icon">

                <FaBookmark />

              </div>

              <div className="paper-info">

                <h2>{paper.title}</h2>

                <p>

                  <strong>Author:</strong> {paper.authors}

                </p>

                <p>

                  <strong>Category:</strong> {paper.category}

                </p>

                <p>

                  <strong>Saved:</strong>{" "}
                  {new Date(
                    paper.updatedAt
                  ).toLocaleDateString()}

                </p>

              </div>

            <div className="saved-buttons">

  <button
    className="view-btn"
    onClick={() =>
      navigate(`/paper/${paper._id}`)
    }
  >
    <FaEye />
    View
  </button>

  <button
    className="download-btn"
    onClick={() =>
      window.open(
        `http://localhost:5000/api/papers/download/${paper._id}`,
        "_blank"
      )
    }
  >
    <FaDownload />
    Download
  </button>

  <button
    className="remove-btn"
    onClick={() =>
      handleRemove(paper._id)
    }
  >
    <FaTrash />
    Remove
  </button>

</div> 

      </div>

          ))

        )}

      </div>

    </div>
  );
}

export default SavedPapers;