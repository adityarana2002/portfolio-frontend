import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Show Home only when NOT on home page
  const showHome = location.pathname !== "/";

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* LOGO */}
        <div className="nav-logo">
          <Link to="/">Aditya</Link>
        </div>

        {/* DESKTOP LINKS */}
        <ul className="nav-links">
          {showHome && (
            <li>
              <Link to="/">Home</Link>
            </li>
          )}
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-btn">
              Contact
            </Link>
          </li>
        </ul>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.ul
              className="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {showHome && (
                <li onClick={() => setOpen(false)}>
                  <Link to="/">Home</Link>
                </li>
              )}
              <li onClick={() => setOpen(false)}>
                <Link to="/projects">Projects</Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link to="/about">About</Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link to="/contact" className="nav-btn">
                  Contact
                </Link>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
