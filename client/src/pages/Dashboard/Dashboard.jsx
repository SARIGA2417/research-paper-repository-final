import { useEffect, useState } from "react";
import {
  FaFileAlt,
  FaBookmark,
  FaDownload,
  FaClock,
  FaSearch,
  FaBell,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import api from "../../services/api";

import "./Dashboard.css";

function Dashboard() {
  const [stats, setStats] = useState({
    myPapers: 0,
    pendingPapers: 0,
    savedPapers: 0,
    downloadedPapers: 0,
  });

  const [recentPapers, setRecentPapers] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem("token");

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const [
        myPapersRes,
        savedRes,
        downloadedRes,
      ] = await Promise.all([
        api.get("/papers/mypapers", { headers }),
        api.get("/papers/saved", { headers }),
        api.get("/papers/downloads", { headers }),
      ]);

      const myPapers = myPapersRes.data;

      setRecentPapers(myPapers);

      setStats({
        myPapers: myPapers.length,

        pendingPapers: myPapers.filter(
          (paper) => paper.status === "Pending"
        ).length,

        savedPapers: savedRes.data.length,

        downloadedPapers: downloadedRes.data.length,
      });

    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
        "Failed to load dashboard"
      );
    }
  };

  fetchDashboard();

}, []);

  const filteredPapers = recentPapers.filter(
    (paper) =>
      paper.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      paper.category
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      paper.authors
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">

      <div className="dashboard-header">

        <div>

          <h1>User Dashboard</h1>

          <p>
            Welcome back! Here's a summary of your
            research activity.
          </p>

        </div>

        <div className="dashboard-actions">

          <div className="dashboard-search">

            <FaSearch />

            <input
              type="text"
              placeholder="Search my papers..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

          <button className="notification-btn">

            <FaBell />

          </button>

        </div>

      </div>

      <div className="stats-grid">

        <div className="stat-box">

          <FaFileAlt />

          <div>

            <h2>{stats.myPapers}</h2>

            <span>My Papers</span>

          </div>

        </div>

        <div className="stat-box">

          <FaClock />

          <div>

            <h2>{stats.pendingPapers}</h2>

            <span>Pending Papers</span>

          </div>

        </div>

        <div className="stat-box">

          <FaBookmark />

          <div>

            <h2>{stats.savedPapers}</h2>

            <span>Saved Papers</span>

          </div>

        </div>

        <div className="stat-box">

          <FaDownload />

          <div>

            <h2>{stats.downloadedPapers}</h2>

            <span>Downloaded Papers</span>

          </div>

        </div>

      </div>

      <div className="dashboard-content">

        <div className="recent-papers">

          <div className="card-header">

            <h2>My Recent Papers</h2>

            <Link to="/mypapers">

              <button>View All</button>

            </Link>

          </div>

          <table>

            <thead>

              <tr>

                <th>Title</th>

                <th>Category</th>

                <th>Status</th>

                <th>Date</th>

              </tr>

            </thead>

            <tbody>

              {filteredPapers.length === 0 ? (
                <tr>

                  <td
                    colSpan="4"
                    style={{
                      textAlign: "center",
                    }}
                  >
                    No papers found.
                  </td>

                </tr>
              ) : (
                filteredPapers
                  .slice(0, 5)
                  .map((paper) => (
                                        <tr key={paper._id}>

                      <td>{paper.title}</td>

                      <td>{paper.category}</td>

                      <td>

                        <span
                          className={`status ${paper.status.toLowerCase()}`}
                        >
                          {paper.status}
                        </span>

                      </td>

                      <td>
                        {new Date(
                          paper.createdAt
                        ).toLocaleDateString()}
                      </td>

                    </tr>
                  ))
              )}

            </tbody>

          </table>

        </div>

        <div className="dashboard-right">

          <div className="activity-card">

            <div className="card-header">

              <h2>Quick Access</h2>

            </div>

            <div className="activity-list">

              <Link
                to="/upload"
                className="activity-item"
              >

                <FaFileAlt />

                <div>

                  <h4>Upload Paper</h4>

                  <p>Add a new research paper</p>

                </div>

              </Link>

              <Link
                to="/saved"
                className="activity-item"
              >

                <FaBookmark />

                <div>

                  <h4>Saved Papers</h4>

                  <p>
                    {stats.savedPapers} saved papers
                  </p>

                </div>

              </Link>

              <Link
                to="/downloads"
                className="activity-item"
              >

                <FaDownload />

                <div>

                  <h4>Downloads</h4>

                  <p>
                    {stats.downloadedPapers} downloaded
                  </p>

                </div>

              </Link>

            </div>

          </div>

          <div className="analytics-card">

            <div className="card-header">

              <h2>Statistics</h2>

            </div>

            <div className="analytics-item">

              <span>My Papers</span>

              <strong>{stats.myPapers}</strong>

            </div>

            <div className="analytics-item">

              <span>Pending Review</span>

              <strong>{stats.pendingPapers}</strong>

            </div>

            <div className="analytics-item">

              <span>Saved Papers</span>

              <strong>{stats.savedPapers}</strong>

            </div>

            <div className="analytics-item">

              <span>Downloads</span>

              <strong>{stats.downloadedPapers}</strong>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;