import {
  FaSearch,
  FaBookOpen,
  FaUsers,
  FaFolderOpen,
  FaDownload
} from "react-icons/fa";

import heroImage from "../../assets/images/Landing.jpeg";
import "./Home.css";

function Home() {

  return (

    <div className="home">

      {/* ---------------- HERO ---------------- */}

      <section className="hero">

        <div className="hero-left">

          <h1>

            Explore, Discover & Share

            <span> Research Papers</span>

          </h1>

          <p>

            A comprehensive repository of academic research papers
            across various domains of study.

          </p>

          {/* Search */}

          <div className="hero-search">

            <div className="search-input">

              <FaSearch />

              <input
                type="text"
                placeholder="Search papers by title, author, keywords..."
              />

            </div>

            <select>

              <option>All Categories</option>

              <option>Computer Science</option>

              <option>Engineering</option>

              <option>Medicine</option>

              <option>Data Science</option>

            </select>

            <button>

              Search

            </button>

          </div>

          {/* Statistics */}

          <div className="hero-stats">

            <div className="stat-card">

              <FaBookOpen />

              <div>

                <h3>125K+</h3>

                <p>Research Papers</p>

              </div>

            </div>

            <div className="stat-card">

              <FaUsers />

              <div>

                <h3>45K+</h3>

                <p>Researchers</p>

              </div>

            </div>

            <div className="stat-card">

              <FaFolderOpen />

              <div>

                <h3>250+</h3>

                <p>Categories</p>

              </div>

            </div>

            <div className="stat-card">

              <FaDownload />

              <div>

                <h3>10M+</h3>

                <p>Downloads</p>

              </div>

            </div>

          </div>

        </div>

        {/* Right Image */}

        <div className="hero-right">

          <img
            src={heroImage}
            alt="Research"
          />

        </div>

      </section>
            {/* ---------------- Popular Categories ---------------- */}

      <section className="categories-section">

        <div className="section-header">

          <h2>Popular Categories</h2>

          <button>View All Categories</button>

        </div>

        <div className="categories-grid">

          <div className="category-card">
            <div className="category-icon">💻</div>
            <h3>Computer Science</h3>
            <p>12,500 Papers</p>
          </div>

          <div className="category-card">
            <div className="category-icon">⚙️</div>
            <h3>Engineering</h3>
            <p>8,200 Papers</p>
          </div>

          <div className="category-card">
            <div className="category-icon">🩺</div>
            <h3>Medicine</h3>
            <p>22,400 Papers</p>
          </div>

          <div className="category-card">
            <div className="category-icon">📊</div>
            <h3>Data Science</h3>
            <p>15,700 Papers</p>
          </div>

          <div className="category-card">
            <div className="category-icon">🤖</div>
            <h3>Artificial Intelligence</h3>
            <p>11,900 Papers</p>
          </div>

          <div className="category-card">
            <div className="category-icon">🧪</div>
            <h3>Physics</h3>
            <p>9,850 Papers</p>
          </div>

        </div>

      </section>

      {/* ---------------- Recent Papers ---------------- */}

      <section className="recent-section">

        <div className="section-header">

          <h2>Recent Research Papers</h2>

          <button>Browse All</button>

        </div>

        <div className="paper-grid">

          <div className="paper-card">

            <span className="paper-tag">AI</span>

            <h3>
              Deep Learning Approaches for Medical Image Analysis
            </h3>

            <p>
              John Smith • 2025
            </p>

            <div className="paper-footer">

              <span>1.2K Views</span>

              <button>View Paper</button>

            </div>

          </div>

          <div className="paper-card">

            <span className="paper-tag">Data Science</span>

            <h3>
              Machine Learning Techniques for Big Data Analytics
            </h3>

            <p>
              Emily Johnson • 2025
            </p>

            <div className="paper-footer">

              <span>950 Views</span>

              <button>View Paper</button>

            </div>

          </div>

          <div className="paper-card">

            <span className="paper-tag">Computer Vision</span>

            <h3>
              Image Segmentation Using Convolutional Networks
            </h3>

            <p>
              Michael Brown • 2024
            </p>

            <div className="paper-footer">

              <span>2.4K Views</span>

              <button>View Paper</button>

            </div>

          </div>

        </div>

      </section>

    </div>

  );

}

export default Home;