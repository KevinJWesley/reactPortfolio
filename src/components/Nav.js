import React from "react";

import "../styles/Nav.css";

function Nav() {
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
