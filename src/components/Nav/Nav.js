import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class NavLinks extends React.Component {
  render() {
    return (
      <div className="navbar">
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
              <li>
                <Link to="/">Portfolio</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavLinks;
