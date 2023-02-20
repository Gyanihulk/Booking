import React, { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          {" "}
          <span className="logo">DevBhoomi Tourism</span>
        </Link>

        {user ? (
          <div className="navItems">
            <Link to="/users">
              <button className="navButton">Users List</button>
            </Link>
            <Link to="/hotels">
              <button className="navButton">hotels List</button>
            </Link>
            <Link to="/dashboard">
              <button className="navButton">Dashboard</button>
            </Link>
          </div>
        ) : (
          <div className="navItems">
            <Link to="/register">
              <button className="navButton">Register</button>
            </Link>
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
