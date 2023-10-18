import React, { useState } from 'react';
import "./topbar.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";


const Topbar = () => {

  const [expanded, setExpanded] = useState(false);


  return (
    <>
      <Navbar expand="lg" expanded={expanded} className="topbar fixed-top">
        <Container>
          <Navbar.Brand href="/">E-Commerce Store</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="alink" href="/">Home</Nav.Link>
              <NavDropdown className="link" title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">More items</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className="link" title="Product" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">More items</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className="link" href="/about">Blog</Nav.Link>
              <Nav.Link className="link" href="/contact">About Us</Nav.Link>
              <Nav.Link className="link" href="/contact">Contact Us</Nav.Link>


            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  )
}


export default Topbar;