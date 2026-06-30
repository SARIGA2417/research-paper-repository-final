import { useNavigate } from "react-router-dom";
import {
  FaUserEdit,
  FaLock,
  FaBell,
  FaGlobe,
  FaChevronRight,
} from "react-icons/fa";

import "./Settings.css";

function Settings() {
  const navigate = useNavigate();

  const settings = [

  {
  icon: <FaUserEdit />,
  title: "View Profile",
  description: "View your account information.",
  action: () => navigate("/profile"),
},

  {
    icon: <FaLock />,
    title: "Change Password",
    description: "Update your account password.",
    action: () => navigate("/forgot-password"),
  },

  {
    icon: <FaBell />,
    title: "Notification Preferences",
    description: "View your notifications.",
    action: () => navigate("/notifications"),
  },

  {
    icon: <FaGlobe />,
    title: "Language",
    description: "English",
    action: () => alert("Only English is available."),
  },

];

  return (

    <div className="settings-page">

      <div className="settings-header">

        <h1>

          Settings

        </h1>

        <p>

          Manage your account preferences.

        </p>

      </div>

      <div className="settings-list">

        {settings.map((item, index) => (

          <div
  className="setting-card"
  key={index}
  onClick={item.action}
  style={{ cursor: "pointer" }}
>

            <div className="setting-left">

              <div className="setting-icon">

                {item.icon}

              </div>

              <div>

                <h3>

                  {item.title}

                </h3>

                <p>

                  {item.description}

                </p>

              </div>

            </div>

            <FaChevronRight className="arrow" />

          </div>

        ))}

      </div>

    </div>

  );

}

export default Settings;