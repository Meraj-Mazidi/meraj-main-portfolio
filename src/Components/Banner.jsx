import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { TypeAnimation } from "react-type-animation";
import "animate.css";

const Banner = () => (
  <header className="banner" id="home">
    <Container>
      <Row className="align-items-center">
        <Col
          sm={12}
          md={6}
          xl={7}
          className="animate__animated animate__lightSpeedInRight animate__slower"
        >
          <span className="tagline animate__animated animate__zoomInDown animate__delay-2s animate__slow">
            Welcome to my Portfolio
          </span>
          <h1>
            {`Hi, I'm Meraj`}{" "}
            <span className="wrap">
              <TypeAnimation
                cursor={false}
                sequence={[
                  "Web developer",
                  1000,
                  "",
                  500,
                  "Web designer",
                  1000,
                  "",
                  500,
                  "UI/UX Designer",
                  1000,
                  "",
                  500,
                  "a Creative Guy!",
                  1000,
                  "",
                  500,
                ]}
                wrapper="h2"
                repeat={Infinity}
                className="type"
              />
            </span>
          </h1>
          <p>
            I'm a 24 years old self-taught Fronted-developer who absolutely
            LOVES to Code, Create & Design web sites and applications. I'm a JS
            guy, who happens to adore React! I just love exploring new things
            and learn new technologies in the process. Wanna share something?
            Let's get in touch! ;)
          </p>
          <a href="#connect">
            <button className="animate__animated animate__zoomInUp animate__delay-3s animate__slow">
              Let's Connect
              <ArrowRightCircle size={25} />
            </button>
          </a>
        </Col>
        <Col
          sm={12}
          md={6}
          xl={5}
          className="animate__animated animate__bounceInLeft animate__delay-1s animate__slower"
        >
          <img src={headerImg} alt="Header Img" />
        </Col>
      </Row>
    </Container>
  </header>
);

export default Banner;
