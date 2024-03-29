import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import TrackVisibility from "react-on-screen";
import "animate.css";

import projImg1 from "../assets/img/pokecenter.png";
import projImg2 from "../assets/img/BoboDark.png";
import projImg3 from "../assets/img/stackchat.png";

export const Projects = () => {
  const projects = [
    {
      title: "BoBo",
      tagline: "movie recommender",
      description:
        "Mobile application where users can form parties and vote on which movies to watch. The recommender considers which streaming sites the users have access to and which genres they prefer.",
      imgUrl: projImg2,
      githubUrl: "https://github.com/Gonzos-Greenery/BoBo",
      website:
        "https://www.youtube.com/watch?v=EBGnPnuomMc&ab_channel=FullstackAcademy",
    },
    {
      title: "PokéMart",
      tagline: "e-commerce",
      description:
        "A CRUD (Create, Read, Update, Delete) e-commerce site where users can order and purchase Pokémon cards through a sandboxed PayPal account. Admins can add/update products and manage users.",
      imgUrl: projImg1,
      githubUrl: "https://github.com/samliudev/PokeMart",
      website: "https://pokemart.onrender.com/",
    },
    {
      title: "Stack Chat",
      tagline: "messaging app",
      description:
        "Users can create group channels and send individual direct messages. Messages include text, emojis and Gifs. Users can recieve SMS notifications for incoming messages",
      imgUrl: projImg3,
      githubUrl: "https://github.com/StackaThon-Senior-Phase/app",
      website: "https://stack-chatapp.netlify.app/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>

            <Row>
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background pic"
      ></img>
    </section>
  );
};
