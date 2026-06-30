import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaDownload,
  FaEye,
} from "react-icons/fa";

import { toast } from "react-toastify";
import api from "../../services/api";

import "./DownloadedPapers.css";

function DownloadedPapers() {
  const navigate = useNavigate();

  const [papers, setPapers] = useState([]);
  const [search, setSearch] = useState("");

  const fetchDownloadedPapers = async () => {
    try {

      const token = localStorage.getItem("token");

      const res = await api.get("/papers/downloads", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPapers(res.data);

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Failed to load downloaded papers"
      );

    }
  };

  useEffect(() => {
    fetchDownloadedPapers();
  }, []);

  const filteredPapers = papers.filter((paper) =>
    paper.title.toLowerCase().includes(search.toLowerCase()) ||
    paper.authors.toLowerCase().includes(search.toLowerCase()) ||
    paper.category.toLowerCase().includes(search.toLowerCase())
  );
  return (
  <div className="saved-page">

    <div className="saved-header">

      <h1>Downloaded Papers</h1>

      <p>
        View all research papers you've downloaded.
      </p>

    </div>

    <div className="saved-search">

      <div className="search-box">

        <FaSearch />

        <input
          type="text"
          placeholder="Search downloaded papers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

    </div>

    <div className="saved-list">

      {filteredPapers.length === 0 ? (

        <h2>No Downloaded Papers Found</h2>

      ) : (

        filteredPapers.map((paper) => (

          <div
            className="saved-card"
            key={paper._id}
          >

            <div className="paper-icon">

              <FaDownload />

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

                <strong>Downloaded:</strong>{" "}
                {new Date(
                  paper.updatedAt
                ).toLocaleDateString()}

              </p>

            </div>

            <div className="saved-buttons"><button
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
  Download Again
</button>

</div>

</div>

))

)}

</div>

</div>
);
}

export default DownloadedPapers;