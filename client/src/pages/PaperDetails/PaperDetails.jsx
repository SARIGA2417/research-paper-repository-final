import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";

import {
  FaArrowLeft,
  FaDownload,
  FaBookmark,
  FaShareAlt,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaFilePdf,
} from "react-icons/fa";

import "./PaperDetails.css";

function PaperDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [paper, setPaper] = useState(null);

  const [activeTab, setActiveTab] = useState("abstract");

  useEffect(() => {
    const fetchPaper = async () => {
      try {
        const res = await api.get(`/papers/${id}`);
        setPaper(res.data);
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
            "Failed to load paper"
        );
      }
    };

    fetchPaper();
  }, [id]);

 const handleDownload = async () => {
  try {
    const token = localStorage.getItem("token");

    await api.post(
      `/papers/download/save/${paper._id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    window.open(
      `http://localhost:5000/api/papers/download/${paper._id}`,
      "_blank"
    );

  } catch (error) {
    toast.error(
      error.response?.data?.message ||
      "Download Failed"
    );
  }
};

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.post(
        `/papers/save/${paper._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(res.data.message);

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Save Failed"
      );
    }
  };

  if (!paper) {
    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        Loading Paper...
      </h2>
    );
  }

  return (
    <div className="paper-details">

      <button
        className="back-btn"
        onClick={() => navigate("/browse")}
      >
        <FaArrowLeft />
        Back to Results
      </button>

      <div className="paper-layout">

        <div className="paper-content">

          <h1>{paper.title}</h1>

          <div className="author">
            {paper.authors}
          </div>

          <div className="paper-meta">
            {paper.category}
          </div>

          <div className="button-row">

            <button
              className="download"
              onClick={handleDownload}
            >
              <FaDownload />
              Download PDF
            </button>

            <button
              className="save"
              onClick={handleSave}
            >
              <FaBookmark />
              Save
            </button>

            <button className="share">
              <FaShareAlt />
              Share
            </button>

          </div>

          <div className="tabs">

            <button
              className={
                activeTab === "abstract"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("abstract")
              }
            >
              Abstract
            </button>

            <button
              className={
                activeTab === "references"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("references")
              }
            >
              References
            </button>

            <button
              className={
                activeTab === "related"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("related")
              }
            >
              Related
            </button>

          </div>
                    {activeTab === "abstract" && (
            <div className="tab-card">

              <h2>Abstract</h2>

              <p>{paper.abstract}</p>

              <h3>Keywords</h3>

              <div className="keyword-list">
                {paper.keywords ? (
                  paper.keywords.split(",").map((keyword, index) => (
                    <span key={index}>
                      {keyword.trim()}
                    </span>
                  ))
                ) : (
                  <span>No Keywords</span>
                )}
              </div>

            </div>
          )}

          {activeTab === "references" && (
            <div className="tab-card">

              <h2>References</h2>

              <p>
                References are not available for this paper.
              </p>

            </div>
          )}

          {activeTab === "related" && (
            <div className="tab-card">

              <h2>Related Papers</h2>

              <p>
                Related papers feature coming soon.
              </p>

            </div>
          )}

        </div>

        <div className="sidebar">

          <div className="pdf-card">

            <FaFilePdf className="pdf-icon" />

            <h3>Research Paper</h3>

            <p>PDF Available</p>

            <button
              className="preview-btn"
              onClick={handleDownload}
            >
              Open PDF
            </button>

          </div>

          <div className="statistics-card">

            <h3>Paper Information</h3>

            <div className="stat-row">
              <span>Author</span>
              <strong>{paper.authors}</strong>
            </div>

            <div className="stat-row">
              <span>Category</span>
              <strong>{paper.category}</strong>
            </div>

            <div className="stat-row">
              <span>Status</span>
              <strong>{paper.status}</strong>
            </div>

            <div className="stat-row">
              <span>Uploaded</span>
              <strong>
                {new Date(
                  paper.createdAt
                ).toLocaleDateString()}
              </strong>
            </div>

          </div>

          <div className="share-card">

            <h3>Share</h3>

            <div className="share-icons">

              <button>
                <FaTwitter />
              </button>

              <button>
                <FaFacebookF />
              </button>

              <button>
                <FaLinkedinIn />
              </button>

              <button>
                <FaShareAlt />
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default PaperDetails;