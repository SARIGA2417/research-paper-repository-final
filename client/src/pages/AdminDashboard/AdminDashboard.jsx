import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

import "./AdminDashboard.css";

function AdminDashboard() {

  const [papers, setPapers] = useState([]);

  

  useEffect(() => {

  const fetchPapers = async () => {

    try {

      const token = localStorage.getItem("token");

      const res = await api.get(
        "/papers/admin/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPapers(res.data);

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Failed to load papers"
      );

    }

  };

  fetchPapers();

}, []);

  return (
    <div className="admin-dashboard">

      <h1>Admin Dashboard</h1>

      <table>

        <thead>

          <tr>

            <th>Title</th>

            <th>Author</th>

            <th>Category</th>

            <th>Status</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {papers.map((paper) => (

            <tr key={paper._id}>

              <td>{paper.title}</td>

              <td>{paper.authors}</td>

              <td>{paper.category}</td>

              <td>{paper.status}</td>

              <td>

  <button
    className="approve-btn"
    onClick={async () => {

      try {

        const token = localStorage.getItem("token");

        await api.put(
          `/papers/admin/approve/${paper._id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        toast.success("Paper Approved");

        window.location.reload();

      } catch (error) {

        toast.error(
          error.response?.data?.message ||
          "Approval Failed"
        );

      }

    }}
  >

    Approve

  </button>

  <button
    className="reject-btn"
    onClick={async () => {

      try {

        const token = localStorage.getItem("token");

        await api.put(
          `/papers/admin/reject/${paper._id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        toast.success("Paper Rejected");

        window.location.reload();

      } catch (error) {

        toast.error(
          error.response?.data?.message ||
          "Reject Failed"
        );

      }

    }}
  >

    Reject

  </button>

</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );

}

export default AdminDashboard;