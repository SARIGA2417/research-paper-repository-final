import { useEffect, useState } from "react";
import "./Profile.css";

import api from "../../services/api";

import {
  FaUser,
  FaEnvelope,
  FaCalendarAlt,
  FaUpload,
  FaBookmark,
  FaDownload,
} from "react-icons/fa";

function Profile() {

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    role: "",
    joined: "",
    uploads: 0,
    saved: 0,
    downloads: 0,
  });

  useEffect(() => {

    const fetchProfile = async () => {

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

        const user = JSON.parse(
          localStorage.getItem("user")
        );

        setProfile({

          name: user.name,

          email: user.email,

          role: user.role,

          joined: "2026",

          uploads: myPapers.data.length,

          saved: saved.data.length,

          downloads: downloads.data.length,

        });

      } catch (error) {

        console.log(error);

      }

    };

    fetchProfile();

  }, []);


return (

  <section className="profile">

    <div className="profile-container">

      <div className="profile-header">

        <div className="profile-avatar">

          <FaUser size={60} color="white" />

        </div>

        <h2>{profile.name}</h2>

        <p>{profile.email}</p>

      </div>

      <div className="profile-info">

        <div className="info-box">

          <h4>

            <FaUser /> Full Name

          </h4>

          <p>{profile.name}</p>

        </div>

        <div className="info-box">

          <h4>

            <FaEnvelope /> Email

          </h4>

          <p>{profile.email}</p>

        </div>

       

        <div className="info-box">

          <h4>

            <FaCalendarAlt /> Joined

          </h4>

          <p>{profile.joined}</p>

        </div>

        <div className="info-box">

          <h4>

            <FaUpload /> Total Uploads

          </h4>

          <p>{profile.uploads}</p>

        </div>

        <div className="info-box">

          <h4>

            <FaBookmark /> Saved Papers

          </h4>

          <p>{profile.saved}</p>

        </div>

        <div className="info-box">

          <h4>

            <FaDownload /> Downloaded Papers

          </h4>

          <p>{profile.downloads}</p>

        </div>

      </div>

    </div>

  </section>

);

}

export default Profile;