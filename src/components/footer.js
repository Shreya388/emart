import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./footer.css";

const Footer = () => {
  return (
    <div className="Footer text-white">
      <Container>
        <Row>
          <Col md={6} lg={4} sm={12}>
            <h1 className="footer-heading">Contact</h1>
            <p></p>

          </Col>
          <Col md={6} lg={2} sm={12}>
            <h1 className="footer-tag">Living Room</h1>
            <ul>
              <li><a className="footer-link" href="/living-room/sofas">Sofas</a></li>
              <li><a className="footer-link" href="/living-room/tables">Tables</a></li>
              <li><a className="footer-link" href="/living-room/chairs">Chairs</a></li>
              <li><a className="footer-link" href="/living-room/cabinets">Cabinets</a></li>

            </ul>
          </Col>
          <Col md={6} lg={2} sm={12}>
            <h1 className="footer-tag">Bedroom</h1>
            <ul>
              <li><a className="footer-link" href="/bedroom/beds">Beds</a></li>
              <li><a className="footer-link" href="/bedroom/dressers">Dressers</a></li>
              <li><a className="footer-link" href="/bedroom/nightstands">Nightstands</a></li>
              <li><a className="footer-link" href="/bedroom/wardrobes">Wardrobes</a></li>
            </ul>

          </Col>
          <Col md={6} lg={2} sm={12}>
            <h1 className="footer-tag">Dining Room</h1>
            <ul>
              <li><a className="footer-link" href="/dining-room/tables">Dining Tables</a></li>
              <li><a className="footer-link" href="/dining-room/chairs">Dining Chairs</a></li>
              <li><a className="footer-link" href="/dining-room/buffets">Buffets</a></li>
              <li><a className="footer-link" href="/dining-room/bar-stools">Bar Stools</a></li>
            </ul>
          </Col>
          <Col md={6} lg={2} sm={12}>
            <h1 className="footer-tag">Office</h1>
            <ul>
              <li><a className="footer-link" href="/office/desks">Desks</a></li>
              <li><a className="footer-link" href="/office/chairs">Office Chairs</a></li>
              <li><a className="footer-link" href="/office/bookcases">Bookcases</a></li>
              <li><a className="footer-link" href="/office/filing-cabinets">Filing Cabinets</a></li>
            </ul>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
