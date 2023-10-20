import React, { useState } from 'react';
import "./topbar.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const Topbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar expand="lg" expanded={expanded} className="topbar sticky-top">
        <Container>
          <Navbar.Brand href="/">EMART</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="border-0"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="alink" href="/">Home</Nav.Link>
              <NavDropdown className="link" title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">More items</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className="link" title="Product" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">More items</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className="link" href="/blog">Blog</Nav.Link>
              <Nav.Link className="link" href="/about">About Us</Nav.Link>
              <Nav.Link className="link" href="/contact">Contact Us</Nav.Link>
            </Nav>
            
              <big><i class="fa fa-solid fa-magnifying-glass pr-4"></i></big>
              <big><i class="fa fa-regular fa-user pr-4"></i></big>
              <big><i class="fa fa-regular fa-heart pr-4"></i></big>
              <big><i class="fa fa-solid fa-cart-shopping"></i></big>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}


export default Topbar;