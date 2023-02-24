import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Tread</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate corporis recusandae neque dicta pariatur enim autem
                quo possimus
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__tim-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__tim-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <p>Location: Egypt, Cairo, Giza </p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Phone: 01010000000</span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Email: example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title ">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter Your Email" />
              <span>
                <i class="ri-send-plane-line "></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              &copy; {year} - All Rights Reserved by Sayed Ali
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                <Link to="https://www.facebook.com/login/">
                  <i class="ri-facebook-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://github.com/">
                  <i class="ri-github-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="https://www.youtube.com/">
                  <i class="ri-youtube-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://www.linkedin.com/">
                  <i class="ri-linkedin-fill"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
