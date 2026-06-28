import {
  FaDownload,
  FaEye,
  FaFilePdf,
  FaCalendarAlt
} from "react-icons/fa";

import "./DownloadedPapers.css";

function DownloadedPapers() {

  const papers = [
    {
      id: 1,
      title: "Deep Learning Approaches for Medical Image Analysis",
      author: "John Smith",
      downloaded: "15 Jun 2026",
      size: "2.4 MB"
    },
    {
      id: 2,
      title: "Artificial Intelligence in Healthcare",
      author: "Emily Johnson",
      downloaded: "11 Jun 2026",
      size: "3.1 MB"
    },
    {
      id: 3,
      title: "Cloud Computing for Big Data",
      author: "Michael Brown",
      downloaded: "05 Jun 2026",
      size: "4.0 MB"
    }
  ];

  return (

    <div className="downloads-page">

      <div className="downloads-header">

        <h1>Downloaded Papers</h1>

        <p>
          Access papers you've downloaded for offline reading.
        </p>

      </div>

      <div className="downloads-list">

        {papers.map((paper) => (

          <div
            className="download-card"
            key={paper.id}
          >

            <div className="pdf-icon">
              <FaFilePdf />
            </div>

            <div className="download-info">

              <h2>{paper.title}</h2>

              <p>
                <strong>Author:</strong> {paper.author}
              </p>

              <p>
                <FaCalendarAlt />
                Downloaded: {paper.downloaded}
              </p>

              <p>
                <strong>File Size:</strong> {paper.size}
              </p>

            </div>

            <div className="download-actions">

              <button className="view-btn">
                <FaEye />
                View
              </button>

              <button className="download-btn">
                <FaDownload />
                Download Again
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default DownloadedPapers;