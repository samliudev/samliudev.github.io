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
      strings: ["Developer.", "Bookworm.", "Student.", "Musician."],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 2000,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="banner" id="home">
      <Container>
        {/* <Row>
        <Col xs={12} md={6} xl={7}> */}
        <h2 style={{ color: "#84E3FF" }}>Hello, I'm</h2>
        <h1>Samuel Liu</h1>
        <h2 style={{ color: "#84E3FF" }}>
          {`A `}
          <span className="wrap" ref={el} style={{ color: " #4a2fbd" }}></span>
        </h2>
        <p>
          My first experience with coding was when I worked with rats in a
          research lab, while trying to adjust an automated test. One pandemic,
          two years and the development of a rodent allergy later, I decided
          that a career change was in my best interest. To kickstart the next
          part of my life, I taught myself some rudimentary software development
          and then started an immersive bootcamp at FullStack Academy.
        </p>
        <a
          target="_blank"
          href="assets/SamuelLiu_Resume.pdf"
          alt="Samuel Liu - Resume"
          title="Samuel Liu - Resume"
        >
          Preview Resume <ArrowRightCircle size={25} />
        </a>
        {/* </Col> */}
        {/* <Col xs={12} md={6} xl={5}>
          <img style={{ height: 300 }} src={headerImg} alt="Header Img"></img>
        </Col> */}
        {/* </Row> */}
      </Container>
    </section>
  );
};
