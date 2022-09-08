import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, coverImg, link }) => (
  <Col sm={6} md={4}>
    <div className="proj-imgbx">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        style={{ color: "inherit" }}
      >
        <img src={coverImg} alt="cardImage" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </a>
    </div>
  </Col>
);

export default ProjectCard;
