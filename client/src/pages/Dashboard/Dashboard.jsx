import {
  FaFileAlt,
  FaUpload,
  FaDownload,
  FaBookmark,
  FaChartLine,
  FaSearch,
  FaBell
} from "react-icons/fa";

import "./Dashboard.css";

function Dashboard() {

  return (

    <div className="dashboard">

      {/* Header */}

      <div className="dashboard-header">

        <div>

          <h1>Dashboard</h1>

          <p>Welcome back! Here's what's happening today.</p>

        </div>

        <div className="dashboard-actions">

          <div className="dashboard-search">

            <FaSearch />

            <input
              type="text"
              placeholder="Search..."
            />

          </div>

          <button className="notification-btn">

            <FaBell />

          </button>

        </div>

      </div>

      {/* Statistics */}

      <div className="stats-grid">

        <div className="stat-box">

          <FaFileAlt />

          <div>

            <h2>148</h2>

            <span>My Papers</span>

          </div>

        </div>

        <div className="stat-box">

          <FaUpload />

          <div>

            <h2>24</h2>

            <span>Uploads</span>

          </div>

        </div>

        <div className="stat-box">

          <FaDownload />

          <div>

            <h2>1,254</h2>

            <span>Downloads</span>

          </div>

        </div>

        <div className="stat-box">

          <FaBookmark />

          <div>

            <h2>67</h2>

            <span>Saved</span>

          </div>

        </div>

      </div>
            {/* Main Content */}

      <div className="dashboard-content">

        {/* Recent Papers */}

        <div className="recent-papers">

          <div className="card-header">

            <h2>Recent Papers</h2>

            <button>View All</button>

          </div>

          <table>

            <thead>

              <tr>

                <th>Paper Title</th>

                <th>Category</th>

                <th>Status</th>

                <th>Downloads</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>Deep Learning in Healthcare</td>

                <td>Artificial Intelligence</td>

                <td>
                  <span className="status published">
                    Published
                  </span>
                </td>

                <td>542</td>

              </tr>

              <tr>

                <td>Cloud Computing Security</td>

                <td>Computer Science</td>

                <td>
                  <span className="status review">
                    Under Review
                  </span>
                </td>

                <td>214</td>

              </tr>

              <tr>

                <td>Machine Learning for Agriculture</td>

                <td>Data Science</td>

                <td>
                  <span className="status published">
                    Published
                  </span>
                </td>

                <td>864</td>

              </tr>

              <tr>

                <td>Blockchain in Banking</td>

                <td>FinTech</td>

                <td>
                  <span className="status draft">
                    Draft
                  </span>
                </td>

                <td>—</td>

              </tr>

            </tbody>

          </table>

        </div>

        {/* Right Sidebar */}

        <div className="dashboard-right">

          {/* Activity */}

          <div className="activity-card">

            <div className="card-header">

              <h2>Recent Activity</h2>

            </div>

            <div className="activity-list">

              <div className="activity-item">

                <FaUpload />

                <div>

                  <h4>Paper Uploaded</h4>

                  <p>2 hours ago</p>

                </div>

              </div>

              <div className="activity-item">

                <FaDownload />

                <div>

                  <h4>Paper Downloaded</h4>

                  <p>Today</p>

                </div>

              </div>

              <div className="activity-item">

                <FaBookmark />

                <div>

                  <h4>Paper Saved</h4>

                  <p>Yesterday</p>

                </div>

              </div>

            </div>

          </div>

          {/* Analytics */}

          <div className="analytics-card">

            <div className="card-header">

              <h2>

                <FaChartLine />

                Analytics

              </h2>

            </div>

            <div className="analytics-item">

              <span>Profile Views</span>

              <strong>3,842</strong>

            </div>

            <div className="analytics-item">

              <span>Total Downloads</span>

              <strong>12,416</strong>

            </div>

            <div className="analytics-item">

              <span>Citations</span>

              <strong>284</strong>

            </div>

            <div className="analytics-item">

              <span>Followers</span>

              <strong>1,206</strong>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;