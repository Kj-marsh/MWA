import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            FutbolSearch
            <i className="fas fa-futbol" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/teams" className="nav-links" onClick={closeMobileMenu}>
                Teams
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/players"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Players
              </Link>
            </li>

            <li>
              <Link to="/crud" className="nav-links" onClick={closeMobileMenu}>
                CRUD
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
