import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => (
  <footer className="footer">
    <Container>
      <Row className="align-items-center">
        <Col size={12} sm={6}>
          <img src={logo} alt="Logo" />
        </Col>
        <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
            <a
              href="https://ir.linkedin.com/in/meraj-mazidi-59290a155"
              target="_blank"
            >
              <img src={navIcon1} alt="Icon" />
            </a>

            <a href="https://github.com/Meraj-Mazidi" target="_blank">
              <img src={navIcon2} alt="Icon" />
            </a>

            <a href="https://www.instagram.com/meraj_mazidii/" target="_blank">
              <img src={navIcon3} alt="Icon" />
            </a>
          </div>
          <p>
            Copyright 2022. All Rights Reserved - Meraj Mazidi
            <br />
            merajmazidiwork@gmail.com
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);
