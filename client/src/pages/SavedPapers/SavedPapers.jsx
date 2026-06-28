import {
  FaSearch,
  FaBookmark,
  FaDownload,
  FaTrash,
  FaEye
} from "react-icons/fa";

import "./SavedPapers.css";

function SavedPapers() {

  const papers = [
    {
      id: 1,
      title: "Deep Learning Approaches for Medical Image Analysis",
      author: "John Smith",
      department: "Computer Science",
      saved: "12 Jun 2026"
    },
    {
      id: 2,
      title: "Artificial Intelligence in Healthcare",
      author: "Emily Johnson",
      department: "Artificial Intelligence",
      saved: "08 Jun 2026"
    },
    {
      id: 3,
      title: "Cloud Computing for Big Data",
      author: "Michael Brown",
      department: "Information Technology",
      saved: "02 Jun 2026"
    }
  ];

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
          />

        </div>

        <select>

          <option>All Departments</option>

          <option>Computer Science</option>

          <option>Artificial Intelligence</option>

          <option>Information Technology</option>

        </select>

      </div>

      <div className="saved-list">

        {papers.map((paper) => (

          <div
            className="saved-card"
            key={paper.id}
          >

            <div className="paper-icon">

              <FaBookmark />

            </div>

            <div className="paper-info">

              <h2>{paper.title}</h2>

              <p>

                <strong>Author:</strong> {paper.author}

              </p>

              <p>

                <strong>Department:</strong> {paper.department}

              </p>

              <p>

                <strong>Saved:</strong> {paper.saved}

              </p>

            </div>

            <div className="saved-buttons">

              <button className="view-btn">

                <FaEye />

                View

              </button>

              <button className="download-btn">

                <FaDownload />

                Download

              </button>

              <button className="remove-btn">

                <FaTrash />

                Remove

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default SavedPapers;