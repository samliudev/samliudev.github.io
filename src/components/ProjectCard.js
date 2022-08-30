import React from "react";
import { Col, Row } from "react-bootstrap";

export const ProjectCard = ({
  title,
  tagline,
  description,
  imgUrl,
  githubUrl,
}) => {
  return (
    <Col sm={6} md={4} className="projectcard">
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project pic" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <Row className="my-2">
            <span>{tagline}</span>
          </Row>

          <div className="projectcard-icon">
            <Row >
            <Col className="mx-1">
              {" "}
              <a href={githubUrl} target="_blank" rel="noreferrer">
                <div>
                  {" "}
                  <i className="fa-solid fa-code fa-lg"></i>
                </div>
              </a>
            </Col>
            <Col className="mx-1">
              {" "}
              <a href={githubUrl} target="_blank" rel="noreferrer">
                <div>
                  {" "}
                  <i className="fa-solid fa-eye fa-lg"></i>
                </div>
              </a>
            </Col>
            </Row>
          </div>

          <Row className="my-2 mx-2">
            {" "}
            <span>{description}</span>
          </Row>
        </div>
      </div>
    </Col>
  );
};
