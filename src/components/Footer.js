import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col size={12} sm={6}>
            <span style={{ fontSize: 20 }}>Samuel Liu</span>
            <br />
            <span style={{ fontSize: 13 }}>samliu14@gmail.com | (732) 829-9726</span>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="projectcard-icon">
              <a
                href="https://github.com/samliudev"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  {" "}
                  <i className="fab fa-github fa-lg"></i>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/liu-samuel/"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  {" "}
                  <i className="fab fa-linkedin fa-lg"></i>
                </div>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
