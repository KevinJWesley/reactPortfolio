import React from "react";

import "../styles/Nav.css";

function Nav({ currentPage, handlePageChange }) {
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <a
              href="#About"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              onClick={() => handlePageChange("Projects")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
          <li>
            <a href="#PdfOfResume">Resume</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
