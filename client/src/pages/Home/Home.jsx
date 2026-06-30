import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaBookOpen,
  FaUsers,
  FaFolderOpen,
  FaDownload,
} from "react-icons/fa";

import api from "../../services/api";

import heroImage from "../../assets/images/Landing.jpeg";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  const [homeData, setHomeData] = useState({
    totalPapers: 0,
    totalResearchers: 0,
    recentPapers: [],
    categories: [],
  });

  useEffect(() => {

    const fetchHomeData = async () => {

      try {

        const res = await api.get("/papers/home/data");

        setHomeData(res.data);
        setLoading(false);

      } catch (error) {

  console.log(error);

  setLoading(false);

}

    };

    fetchHomeData();

  }, []);

  if (loading) {

  return (

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        fontSize: "24px",
        fontWeight: "bold",
        color: "#2563eb",
      }}
    >

      Loading...

    </div>

  );

} 
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

          <div className="hero-search">

            <div className="search-input">

              <FaSearch />

              <input
                type="text"
                placeholder="Search papers..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

            </div>

            <button
  onClick={() =>
    navigate(
      `/browse?search=${encodeURIComponent(search)}`
    )
  }
>

  Search

</button>

          </div>

          <div className="hero-stats">

            <div className="stat-card">

              <FaBookOpen />

              <div>

                <h3>{homeData.totalPapers}</h3>

                <p>Research Papers</p>

              </div>

            </div>

            <div className="stat-card">

              <FaUsers />

              <div>

                <h3>{homeData.totalResearchers}</h3>

                <p>Researchers</p>

              </div>

            </div>

            <div className="stat-card">

              <FaFolderOpen />

              <div>

                <h3>{homeData.categories.length}</h3>

                <p>Categories</p>

              </div>

            </div>

            <div className="stat-card">

              <FaDownload />

              <div>

                <h3>{homeData.totalPapers}</h3>

                <p>Available PDFs</p>

              </div>

            </div>

          </div>

        </div>

        <div className="hero-right">

          <img
            src={heroImage}
            alt="Research"
          />

        </div>

      </section>

      {/* ---------------- Categories ---------------- */}

      <section className="categories-section">

        <div className="section-header">

          <h2>Popular Categories</h2>

          <Link to="/browse">

            <button>Browse Papers</button>

          </Link>

        </div>

        <div className="categories-grid">
                  {homeData.categories.length === 0 ? (

            <h3>No Categories Available</h3>

          ) : (

            homeData.categories.map((category) => (

              <div
                className="category-card"
                key={category._id}
              >

                <div className="category-icon">

                  📚

                </div>

                <h3>{category._id}</h3>

                <p>{category.count} Papers</p>

              </div>

            ))

          )}

        </div>

      </section>

      {/* ---------------- Recent Papers ---------------- */}

      <section className="recent-section">

        <div className="section-header">

          <h2>Latest Research Papers</h2>

          <Link to="/browse">

            <button>Browse All</button>

          </Link>

        </div>

        <div className="paper-grid">

          {homeData.recentPapers.length === 0 ? (

            <h3>No Papers Available</h3>

          ) : (

            homeData.recentPapers
              .filter((paper) =>
                paper.title
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((paper) => (

                <div
                  className="paper-card"
                  key={paper._id}
                >

                  <span className="paper-tag">

                    {paper.category}

                  </span>

                  <h3>

                    {paper.title}

                  </h3>

                  <p>

                    {paper.authors}

                  </p>

                  <div className="paper-footer">

                    <span>

                      {new Date(
                        paper.createdAt
                      ).toLocaleDateString()}

                    </span>

                    <Link
                      to={`/paper/${paper._id}`}
                    >

                      <button>

                        View Paper

                      </button>

                    </Link>

                  </div>

                </div>

              ))

          )}

        </div>

      </section>

    </div>

        );

}

export default Home;

        