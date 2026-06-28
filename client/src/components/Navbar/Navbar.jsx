import { useState } from "react";
<Link to="/notifications">Notifications</Link>
import { Link } from "react-router-dom";
<Link to="/downloads">Downloaded Papers</Link>
import {
  FaBars,
  FaTimes,
  FaHome,
  FaTachometerAlt,
  FaFileAlt,
  FaUpload,
  FaDownload,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
<Link to="/settings">Settings</Link>

import "./Navbar.css";
<Link to="/saved">Saved Papers</Link>



function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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

        <Link to="/profile">
          <FaUser />
          Profile
        </Link>

        <Link to="/downloads">
          <FaDownload />
          Downloads
        </Link>

        <Link to="/login">
          <FaSignOutAlt />
          Logout
        </Link>

      </div>
    </>
  );
}

export default Navbar;