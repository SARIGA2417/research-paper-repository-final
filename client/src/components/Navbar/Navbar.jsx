import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaHome,
  FaTachometerAlt,
  FaFileAlt,
  FaUpload,
  FaDownload,
  FaUser,
  FaBookmark,
  FaBell,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/register";

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <nav className="navbar">

        <div
          className="hamburger"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </div>

        <h2 className="logo">Research Repository</h2>

        {!token && !isAuthPage && (
          <div className="auth-buttons">
            <Link to="/login" className="login-btn">
              Login
            </Link>

            <Link to="/register" className="register-btn">
              Register
            </Link>
          </div>
        )}

      </nav>

      {menuOpen && (
        <div
          className="overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <div className={`sidebar ${menuOpen ? "active" : ""}`}>

        <div
          className="close"
          onClick={() => setMenuOpen(false)}
        >
          <FaTimes />
        </div>

        <Link to="/">
          <FaHome />
          Home
        </Link>

        <Link to="/dashboard">
          <FaTachometerAlt />
          Dashboard
        </Link>

        <Link to="/browse">
          <FaFileAlt />
          Browse Papers
        </Link>

        <Link to="/upload">
          <FaUpload />
          Upload Paper
        </Link>

        <Link to="/mypapers">
          <FaFileAlt />
          My Papers
        </Link>

        <Link to="/saved">
          <FaBookmark />
          Saved Papers
        </Link>

        <Link to="/downloads">
          <FaDownload />
          Downloads
        </Link>

        <Link to="/notifications">
          <FaBell />
          Notifications
        </Link>

        <Link to="/settings">
          <FaCog />
          Settings
        </Link>

        <Link to="/profile">
          <FaUser />
          Profile
        </Link>

        {token && (
          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            <FaSignOutAlt />
            Logout
          </button>
        )}

      </div>
    </>
  );
}

export default Navbar;