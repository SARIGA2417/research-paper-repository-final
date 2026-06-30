import { useEffect, useState } from "react";

import {
  FaBell,
  FaCheckCircle,
  FaUpload,
  FaDownload,
  FaBookmark,
  FaTimesCircle,
  FaTrash,
} from "react-icons/fa";

import api from "../../services/api";

import "./Notifications.css";

function Notifications() {

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {

    const fetchNotifications = async () => {

      try {

        const token = localStorage.getItem("token");

        const [myPapers, saved, downloads] =
          await Promise.all([

            api.get("/papers/mypapers", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }),

            api.get("/papers/saved", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }),

            api.get("/papers/downloads", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }),

          ]);

        let data = [];

        myPapers.data.forEach((paper) => {

          data.push({
            id: paper._id + "upload",
            icon: <FaUpload />,
            title: "Paper Uploaded",
            message: `${paper.title} has been uploaded.`,
            time: new Date(
              paper.createdAt
            ).toLocaleDateString(),
          });

          if (paper.status === "Approved") {

            data.push({
              id: paper._id + "approved",
              icon: <FaCheckCircle />,
              title: "Paper Approved",
              message: `${paper.title} has been approved.`,
              time: "",
            });

          }

          if (paper.status === "Rejected") {

            data.push({
              id: paper._id + "rejected",
              icon: <FaTimesCircle />,
              title: "Paper Rejected",
              message: `${paper.title} has been rejected.`,
              time: "",
            });

          }

        });

        saved.data.forEach((paper) => {

          data.push({
            id: paper._id + "saved",
            icon: <FaBookmark />,
            title: "Paper Saved",
            message: `${paper.title} added to Saved Papers.`,
            time: "",
          });

        });

        downloads.data.forEach((paper) => {

          data.push({
            id: paper._id + "download",
            icon: <FaDownload />,
            title: "Paper Downloaded",
            message: `${paper.title} downloaded.`,
            time: "",
          });

        });

        setNotifications(data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchNotifications();

  }, []);

  return (

    <div className="notifications-page">

      <div className="notification-header">

        <h1>

          <FaBell />

          Notifications

        </h1>

        <button>

          <FaTrash />

          Clear All

        </button>

      </div>

      <div className="notification-list">

  {notifications.length === 0 ? (

    <h3>No Notifications Yet</h3>

  ) : (

    notifications.map((item) => (

      <div
        className="notification-card"
        key={item.id}
      >

        <div className="notification-icon">

          {item.icon}

        </div>

        <div className="notification-content">

          <h3>{item.title}</h3>

          <p>{item.message}</p>

          <span>{item.time}</span>

        </div>

      </div>

    ))

  )}

</div>

    </div>

  );

}

export default Notifications;