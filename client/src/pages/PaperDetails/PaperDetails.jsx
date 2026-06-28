import { useState } from "react";
import {
  FaArrowLeft,
  FaDownload,
  FaBookmark,
  FaShareAlt,
  FaEye,
  FaFileDownload,
  FaQuoteRight,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaFilePdf,
} from "react-icons/fa";

import "./PaperDetails.css";

function PaperDetails() {
  const [activeTab, setActiveTab] = useState("abstract");

  return (
    <div className="paper-details">

      <button className="back-btn">
        <FaArrowLeft />
        Back to Results
      </button>

      <div className="paper-layout">

        {/* LEFT */}

        <div className="paper-content">

          <h1>
            Deep Learning Approaches for Medical Image Analysis
          </h1>

          <div className="author">
            John Smith, Emily Johnson
          </div>

          <div className="paper-meta">
            Computer Science • Published March 15, 2024 •
            DOI:10.1234/rpr.2024.001
          </div>

          <div className="paper-stats">

            <div>
              <FaEye />
              <span>1.2K Views</span>
            </div>

            <div>
              <FaFileDownload />
              <span>320 Downloads</span>
            </div>

            <div>
              <FaQuoteRight />
              <span>45 Citations</span>
            </div>

          </div>

          <div className="button-row">

            <button className="download">
              <FaDownload />
              Download PDF
            </button>

            <button className="save">
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
              className={activeTab === "abstract" ? "active" : ""}
              onClick={() => setActiveTab("abstract")}
            >
              Abstract
            </button>

            <button
              className={activeTab === "references" ? "active" : ""}
              onClick={() => setActiveTab("references")}
            >
              References
            </button>

            <button
              className={activeTab === "related" ? "active" : ""}
              onClick={() => setActiveTab("related")}
            >
              Related
            </button>

          </div>

          {activeTab === "abstract" && (

            <div className="tab-card">

              <h2>Abstract</h2>

              <p>
                This paper presents a comprehensive review of deep learning
                methods used in medical image analysis. Recent advances in
                convolutional neural networks and transformer-based models
                have significantly improved disease detection, image
                segmentation and diagnostic accuracy in healthcare.
              </p>

              <h3>Keywords</h3>

              <div className="keyword-list">

                <span>Deep Learning</span>

                <span>Medical Imaging</span>

                <span>Healthcare</span>

                <span>Computer Vision</span>

                <span>Neural Networks</span>

              </div>

            </div>

          )}

          {activeTab === "references" && (

            <div className="tab-card">

              <h2>References</h2>

              <ul className="paper-list">

                <li>
                  Smith J. Artificial Intelligence in Healthcare. 2023.
                </li>

                <li>
                  Johnson E. Deep Learning for Medical Imaging. 2022.
                </li>

                <li>
                  Brown T. Computer Vision Applications. 2024.
                </li>

                <li>
                  IEEE Transactions on Medical Imaging.
                </li>

              </ul>

            </div>

          )}
                    {activeTab === "related" && (

            <div className="tab-card">

              <h2>Related Papers</h2>

              <div className="related-paper">

                <h4>Deep Learning for Disease Detection</h4>

                <p>
                  Computer Science • 2023
                </p>

              </div>

              <div className="related-paper">

                <h4>Medical Image Segmentation using CNN</h4>

                <p>
                  Artificial Intelligence • 2024
                </p>

              </div>

              <div className="related-paper">

                <h4>Computer Vision in Healthcare</h4>

                <p>
                  Medical Imaging • 2022
                </p>

              </div>

              <div className="related-paper">

                <h4>Neural Networks for MRI Analysis</h4>

                <p>
                  Healthcare Technology • 2024
                </p>

              </div>

            </div>

          )}

        </div>

        {/* RIGHT SIDE */}

        <div className="sidebar">

          <div className="pdf-card">

            <FaFilePdf className="pdf-icon" />

            <h3>Research Paper</h3>

            <p>Preview Available</p>

            <button className="preview-btn">
              Open Preview
            </button>

          </div>

          <div className="statistics-card">

            <h3>Paper Statistics</h3>

            <div className="stat-row">
              <span>Views</span>
              <strong>1,245</strong>
            </div>

            <div className="stat-row">
              <span>Downloads</span>
              <strong>320</strong>
            </div>

            <div className="stat-row">
              <span>Citations</span>
              <strong>45</strong>
            </div>

            <div className="stat-row">
              <span>Bookmarks</span>
              <strong>184</strong>
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