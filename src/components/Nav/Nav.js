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
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
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
