import {
  FaBell,
  FaCheckCircle,
  FaUpload,
  FaDownload,
  FaBookmark,
  FaTrash
} from "react-icons/fa";

import "./Notifications.css";

function Notifications() {

  const notifications = [

    {
      id:1,
      icon:<FaUpload />,
      title:"Paper Uploaded Successfully",
      message:"Your paper 'Deep Learning in Healthcare' has been uploaded.",
      time:"5 minutes ago"
    },

    {
      id:2,
      icon:<FaDownload />,
      title:"Paper Downloaded",
      message:"You downloaded 'Artificial Intelligence in Education'.",
      time:"1 hour ago"
    },

    {
      id:3,
      icon:<FaBookmark />,
      title:"Paper Saved",
      message:"A research paper has been added to your Saved Papers.",
      time:"Yesterday"
    },

    {
      id:4,
      icon:<FaCheckCircle />,
      title:"Profile Updated",
      message:"Your profile information has been updated successfully.",
      time:"2 days ago"
    }

  ];

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

        {notifications.map((item)=>(

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

        ))}

      </div>

    </div>

  );

}

export default Notifications;