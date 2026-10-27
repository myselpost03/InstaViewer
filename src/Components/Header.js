import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Header.css";

const Header = () => {
  const [loading, setLoading] = useState(true);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMobileRedirect = (path) => {
    navigate(path);
  };

  return (
    <header className="header-my">
      <div className="logo-container">
        <Link to="/" className="logo-header">
          MySelpost
        </Link>
      </div>

      <form className="nav-with-inputs">
        {!isMobile ? (
          <>
            <input
              className="nav-input"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className="nav-input"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <nav className="nav">
              <button type="submit" className="profile-button">
                Login
              </button>

              <button type="button" className="profile-button">
                Register
              </button>
            </nav>
          </>
        ) : (
          <nav className="nav">
            <button
              type="button"
              onClick={() => handleMobileRedirect("/faq")}
              className="profile-button"
            >
              FAQ
            </button>
            <button
              type="button"
              onClick={() => handleMobileRedirect("/contact")}
              className="profile-button"
            >
              Contact
            </button>
          </nav>
        )}
      </form>
    </header>
  );
};

export default Header;
