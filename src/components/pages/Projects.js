import React from "react";
import "../../styles/Projects.css";

// need to push in four ex from github
// use bootstrap cards??
// screenshot of project
// include github and deployed (heroku or git) links

function Projects() {
  return (
    <div className="projectContainer">
      <section className="card" style={{ width: 300, height: 300 }}>
        <img className="cardImg" src="..." alt="..." />
        <div className="cardBody">
          <p className="cardText">Project Name</p>
          <a href="#">Deployed Link</a>
        </div>
      </section>
      <section className="card" style={{ width: 300, height: 300 }}>
        <img className="cardImg" src="..." alt="..." />
        <div className="cardBody">
          <p className="cardText">Project Name</p>
          <a href="#">Deployed Link</a>
        </div>
      </section>
      <section className="card" style={{ width: 300, height: 300 }}>
        <img className="cardImg" src="..." alt="..." />
        <div className="cardBody">
          <p className="cardText">Project Name</p>
          <a href="#">Deployed Link</a>
        </div>
      </section>
      <section className="card" style={{ width: 300, height: 300 }}>
        <img className="cardImg" src="..." alt="..." />
        <div className="cardBody">
          <p className="cardText">Project Name</p>
          <a href="#">Deployed Link</a>
        </div>
      </section>
    </div>
  );
}

export default Projects;
