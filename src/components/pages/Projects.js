import React from "react";
import "./styles/Projects.css";
import img1 from "../../assets/images/recipe2.png";
import img2 from "../../assets/images/yoda2.png";
import img3 from "../../assets/images/scheduler.png";
import img4 from "../../assets/images/weather.png";
import { Card, Col, Row } from "react-bootstrap";

// need to push in four ex from github
// use bootstrap cards??
// screenshot of project
// include github and deployed (heroku or git) links

function Projects() {
  return (
    <Row xs={1} md={2} className="projectCard">
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    // <div className="projectContainer">
    //   <section className="card" style={{ width: 300, height: 300 }}>
    //     <img className="cardImg" src={img1} alt="Recipe Blog" />
    //     <div className="cardBody">
    //       <p>Favorite Recipe Blog</p>
    //       <a
    //         href="https://murmuring-river-43433.herokuapp.com/"
    //         target="_blank"
    //       >
    //         Deployed Link
    //       </a>
    //       <br></br>

    //       <a
    //         href="https://github.com/JaredWilliam97/Favorite-Recipes"
    //         target="_blank"
    //       >
    //         Github Link
    //       </a>
    //     </div>
    //   </section>
    //   <section className="card" style={{ width: 300, height: 300 }}>
    //     <img className="cardImg" src={img2} alt="Yoda Quiz" />
    //     <div className="cardBody">
    //       <p className="cardText">Yoda Speaks App</p>
    //       <a href="https://tibegex.github.io/Yoda_Speak_Quiz/" target="_blank">
    //         Deployed Link
    //       </a>
    //       <br></br>

    //       <a href="https://github.com/Tibegex/Yoda_Speak_Quiz" target="_blank">
    //         Github Link
    //       </a>
    //     </div>
    //   </section>
    //   <section className="card" style={{ width: 300, height: 300 }}>
    //     <img className="cardImg" src={img3} alt="Day Planner" />
    //     <div className="cardBody">
    //       <p className="cardText">Day Planner</p>
    //       <a href="https://kevinjwesley.github.io/WorkDayPlanner/">
    //         Deployed Link
    //       </a>
    //       <br></br>
    //       <a
    //         href="https://github.com/KevinJWesley/WorkDayPlanner"
    //         target="_blank"
    //       >
    //         GitHub Link
    //       </a>
    //     </div>
    //   </section>
    //   <section className="card" style={{ width: 300, height: 300 }}>
    //     <img className="cardImg" src={img4} alt="Weather App" />
    //     <div className="cardBody">
    //       <p className="cardText">Forecast</p>
    //       <a href="https://kevinjwesley.github.io/WeatherApp/" target="_blank">
    //         Deployed Link
    //       </a>
    //       <br></br>
    //       <a href="https://github.com/KevinJWesley/WeatherApp" target="_blank">
    //         Github Link
    //       </a>
    //     </div>
    //   </section>
    // </div>
  );
}

export default Projects;
