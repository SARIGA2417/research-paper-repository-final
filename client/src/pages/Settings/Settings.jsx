import {
  FaUserEdit,
  FaLock,
  FaBell,
  FaMoon,
  FaGlobe,
  FaSignOutAlt,
  FaChevronRight
} from "react-icons/fa";

import "./Settings.css";

function Settings() {

  const settings = [

    {
      icon:<FaUserEdit />,
      title:"Edit Profile",
      description:"Update your personal information."
    },

    {
      icon:<FaLock />,
      title:"Change Password",
      description:"Update your account password."
    },

    {
      icon:<FaBell />,
      title:"Notification Preferences",
      description:"Manage email and app notifications."
    },

    {
      icon:<FaMoon />,
      title:"Dark Mode",
      description:"Switch between Light and Dark themes."
    },

    {
      icon:<FaGlobe />,
      title:"Language",
      description:"Choose your preferred language."
    }

  ];

  return(

    <div className="settings-page">

      <div className="settings-header">

        <h1>Settings</h1>

        <p>
          Manage your account preferences.
        </p>

      </div>

      <div className="settings-list">

        {settings.map((item,index)=>(

          <div
            className="setting-card"
            key={index}
          >

            <div className="setting-left">

              <div className="setting-icon">

                {item.icon}

              </div>

              <div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            </div>

            <FaChevronRight className="arrow"/>

          </div>

        ))}

      </div>

      <button className="logout-btn">

        <FaSignOutAlt />

        Logout

      </button>

    </div>

  );

}

export default Settings;