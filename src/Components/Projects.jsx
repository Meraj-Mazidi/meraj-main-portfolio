import React from "react";
import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { projects } from "../assets/data";
import { otherProjects } from "../assets/data";
import OtherProjects from "./OtherProjects";

const Projects = () => (
  <section className="project" id="projects">
    <Container>
      <Row>
        <Col size={12}>
          <h2>Projects</h2>
          <p>
            These are some of my finest projects that I coded using React,
            JavaScript, CSS, TailwindCSS, React-bootstrap, NodeJS and other
            frameworks/libraries/packages. I hope you Like them! :)
          </p>
          <Tab.Container id="projects-tabs" defaultActiveKey="second">
            <Nav className="navContainer" variant="pills">
              <Nav.Item>
                <Nav.Link eventKey="first">Resume</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third" className="tst">
                  Other Projects
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="second">
                <Row>
                  {projects.map((projects, index) => (
                    <ProjectCard
                      key={index}
                      coverImg={projects.coverImg}
                      {...projects}
                    />
                  ))}
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="first">
                <Row className="resume">
                  <Col sm={6} md={6}>
                    <a
                      href="https://i.ibb.co/6XyqMMr/meraj-resume.jpg"
                      target="_blank"
                    >
                      <img
                        src="https://i.ibb.co/6XyqMMr/meraj-resume.jpg"
                        alt="resume"
                      />
                    </a>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Row>
                  {otherProjects.map((item, index) => (
                    <OtherProjects key={index} {...item} />
                  ))}
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
    <img
      className="background-image-right"
      src={colorSharp2}
      alt="background"
    />
  </section>
);

export default Projects;
