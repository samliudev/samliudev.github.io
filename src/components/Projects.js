import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import TrackVisibility from "react-on-screen";
import "animate.css";

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {
  const projects = [
    { title: "PokeMart", description: "ecommerce", imgUrl: projImg1 },
    { title: "BoBo", description: "movie recommender", imgUrl: projImg2 },
    { title: "StackChat", description: "messaging app", imgUrl: projImg3 },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            {/* <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                > */}
                  <h2>Projects</h2>
                  <p>Lorem ipsum</p>
                {/* </div>
              )}
            </TrackVisibility> */}
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">sTuff</Tab.Pane>
                <Tab.Pane eventKey="third">Things</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt='background pic'></img>
    </section>
  );
};
