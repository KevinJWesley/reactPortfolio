import React from "react";
import "./styles/Projects.css";
import img1 from "../../assets/images/recipe2.png";
import img2 from "../../assets/images/yoda2.png";
import img3 from "../../assets/images/scheduler.png";
import img4 from "../../assets/images/weather.png";
import { Container, Card, Col, Row } from "react-bootstrap";

// need to push in four ex from github
// use bootstrap cards??
// screenshot of project
// include github and deployed (heroku or git) links

function Projects() {
  return (
    <Container className="projectContainer">
      <Row>
        <Col>
          <Card className="card" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>Favorite Recipes</Card.Title>
              <Card.Text>
                <a
                  href="https://murmuring-river-43433.herokuapp.com/"
                  target="_blank"
                >
                  Deployed Link
                </a>
                <br></br>

                <a
                  href="https://github.com/JaredWilliam97/Favorite-Recipes"
                  target="_blank"
                >
                  Github Link
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>Favorite Recipes</Card.Title>
              <Card.Text>
                <a
                  href="https://murmuring-river-43433.herokuapp.com/"
                  target="_blank"
                >
                  Deployed Link
                </a>
                <br></br>

                <a
                  href="https://github.com/JaredWilliam97/Favorite-Recipes"
                  target="_blank"
                >
                  Github Link
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

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
