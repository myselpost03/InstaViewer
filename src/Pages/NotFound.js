import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import "../Styles/NotFound.css";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="notfound-container">
        <h1 className="notfound-404">404</h1>
        <h2 className="notfound-title">Page Not Found</h2>
        <p className="notfound-text">This page doesn't exist or moved</p>
        <Link to="/" className="notfound-link">
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
