import { Route, Routes, Link, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Projects from "./Projects";
import { useState } from "react";

function App() {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // const toggleDarkMode = () => {
  //   setIsDarkMode((prevMode) => !prevMode);
  //   document.body.classList.toggle("dark-mode", !isDarkMode);
  // };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const getLinkStyle = (path: string) => {
    return location.pathname === path ? { color: "#366f72" } : {};
  };

  return (
    <div>
      <header className="navbar">
        <div className="navbar-brand">
          <Link to="/" style={{ color: "black", fontSize: "36px" }}>
            Annie Wang
          </Link>
        </div>
        <button
          className={`hamburger ${menuOpen ? "rotated" : ""}`}
          onClick={toggleMenu}
        >
          ☰
        </button>
        <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <Link
            to="/"
            style={getLinkStyle("/")}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/projects"
            style={getLinkStyle("/projects")}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
