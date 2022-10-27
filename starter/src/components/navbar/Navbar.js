import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div id="branding">
          <h1>
            <span className="highlight">Clarusway </span> Web Design
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive && "red",
                })}
                to="/Home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive && "red",
                })}
                to="/About"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive && "red",
                })}
                to="/Services"
              >
                Services
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
