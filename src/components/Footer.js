import React from "react";
import "../styles/Footer.css";
import pdf from "../assets/pdf/Resume.pdf";

function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <a href="https://github.com/KevinJWesley" target="_blank">
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kevin-wesley-896044205/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://docs.google.com/document/d/1ywubEUNicQ23SGIauGyJEj768CZm1wA7yfTsuhKh83E/edit?usp=sharing">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
