import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Typed from "typed.js";
import "animate.css";

export const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Developer.", "Bookworm.", "Student.", "Powerlifter."],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="banner" id="home">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7}>
            <h3 style={{ color: "#84E3FF" }}>Hi, my name is</h3>
            <h1>Samuel Liu</h1>
            <h1 style={{ color: "#84E3FF" }}>
              {`I'm a `}
              <span
                className="wrap"
                ref={el}
                style={{ color: '#C15476' }}
              ></span>
            </h1>
            <p>
              Software engineer with experience in building full stack
              applications
            </p>
            <a
              target="_blank"
              href="assets/SamuelLiu_Resume.pdf"
              alt="Samuel Liu - Resume"
              title="Samuel Liu - Resume"
            >
              Preview Resume <ArrowRightCircle size={25} />
            </a>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
