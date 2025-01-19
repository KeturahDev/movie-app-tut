import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link to={"/"}>Movie App</Link>
      </div>
      <div className="navbar-links">
        <Link to={"/"}>Home</Link>
        <Link to={"/Favorites"}>Favorites</Link>
      </div>
    </div>
  );
};

export default NavBar;
