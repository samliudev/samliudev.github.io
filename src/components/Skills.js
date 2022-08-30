import React from "react";
import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <div className="skill-bx">
          <h2>Skills</h2>
          <div className="skills__container container grid">
            <Row>
              <Col>
                <div className="skills__content">
                  <h3 className="skills__title">Frontend Developer</h3>
                  <div className="skills__box">

                    <div className="skills__group">
                      <div className="skills__data">
                        <i className="bx bxs-badge-check"></i>
                        <div>
                          <h3 className="skills__name">Javascript</h3>
                        </div>
                      </div>
                      <div className="skills__data">
                        <i className="bx bxs-badge-check"></i>
                        <div>
                          <h3 className="skills__name">HTML</h3>
                        </div>
                      </div>
                      <div className="skills__data">
                        <i className="bx bxs-badge-check"></i>
                        <div>
                          <h3 className="skills__name">CSS</h3>
                        </div>
                      </div>
                    </div>

                    <div className="skills__group">
                      <div className="skills__data">
                        <i className="bx bxs-badge-check"></i>
                        <div>
                          <h3 className="skills__name">React/Redux</h3>
                        </div>
                      </div>
                      <div className="skills__data">
                        <i className="bx bxs-badge-check"></i>
                        <div>
                          <h3 className="skills__name">Git</h3>
                        </div>
                      </div>
                      <div className="skills__data">
                        <i className="bx bxs-badge-check"></i>
                        <div>
                          <h3 className="skills__name">Bootstrap</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="skills__content">
                  <h3 className="skills__title">Backend Developer</h3>
                  <div className="skills__box">

                  <div className="skills__group">
                      <div className="skills__data">
                        <i className="bx bxs-badge-check"></i>
                        <div>
                          <h3 className="skills__name">Node JS</h3>
                        </div>
                      </div>
                      <div className="skills__data">
                        <i className="bx bxs-badge-check"></i>
                        <div>
                          <h3 className="skills__name">PostgreSQL</h3>
                        </div>
                      </div>
                      <div className="skills__data">
                        <i className="bx bxs-badge-check"></i>
                        <div>
                          <h3 className="skills__name">Sequelize</h3>
                        </div>
                      </div>
                    </div>

                    <div className="skills__group">
                      <div className="skills__data">
                        <i className="bx bxs-badge-check"></i>
                        <div>
                          <h3 className="skills__name">Express</h3>
                        </div>
                      </div>
                      <div className="skills__data">
                        <i className="bx bxs-badge-check"></i>
                        <div>
                          <h3 className="skills__name">MongoDB</h3>
                        </div>
                      </div>
                      <div className="skills__data">
                        <i className="bx bxs-badge-check"></i>
                        <div>
                          <h3 className="skills__name">Mongoose</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background pic"
      />
    </section>
  );
};
