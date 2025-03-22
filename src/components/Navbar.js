import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaHome, FaTachometerAlt, FaFileAlt, FaSignInAlt, FaUserPlus, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "enabled");

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  }, [darkMode]);

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"} fixed-top`}>
      <div className="container">
        <Link className="navbar-brand" to="/"><FaHome className="me-2" /> Collab Tool</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/"><FaHome className="me-2" /> Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/dashboard"><FaTachometerAlt className="me-2" /> Dashboard</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/editor/new"><FaFileAlt className="me-2" /> New Document</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login"><FaSignInAlt className="me-2" /> Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/register"><FaUserPlus className="me-2" /> Register</Link></li>
            <li className="nav-item">
              <button className="btn btn-outline-secondary ms-3" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <FaSun /> : <FaMoon />} {darkMode ? " Light Mode" : " Dark Mode"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
