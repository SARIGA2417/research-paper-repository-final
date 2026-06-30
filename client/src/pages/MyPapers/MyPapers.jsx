import { useNavigate } from "react-router-dom";
import "./MyPapers.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

function MyPapers() {
    const fetchMyPapers = async () => {
    try {

      const token = localStorage.getItem("token");

      const res = await api.get("/papers/mypapers", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPapers(res.data);

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Failed to load papers"
      );

    }
  };
  const navigate = useNavigate();

  const [papers, setPapers] = useState([]);

  useEffect(() => {
    fetchMyPapers();
  }, []);

const handleDelete = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this paper?"
  );

  if (!confirmDelete) return;

  try {

    const token = localStorage.getItem("token");

    const res = await api.delete(`/papers/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    toast.success(res.data.message);

    // Reload papers
    fetchMyPapers();

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Delete Failed"
    );

  }

};


  return (
    <section className="mypapers">

      <h1>My Papers</h1>

      <div className="papers-container">

        {papers.length === 0 ? (

          <h2>No Papers Uploaded Yet</h2>

        ) : (

          papers.map((paper) => (

            <div
              className="mypaper-card"
              key={paper._id}
            >

              <div>

                <h3>{paper.title}</h3>

                <p>
                  Uploaded:{" "}
                  {new Date(
                    paper.createdAt
                  ).toLocaleDateString()}
                </p>

                <span>{paper.status}</span>

              </div>

              <div className="mypaper-actions">

                <button onClick={() => navigate(`/upload/${paper._id}`)}>
  Edit
</button>

                <button
  className="delete-btn"
  onClick={() => handleDelete(paper._id)}
>
  Delete
</button>

              </div>

            </div>

          ))

        )}

      </div>

    </section>
  );
}

export default MyPapers;