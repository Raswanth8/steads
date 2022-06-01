import React from "react";
import { Link } from "react-scroll";
import { Navbar, Nav } from "react-bootstrap";

export default function Appbar() {
  return (
    <Navbar bg="light" variant="light" sticky="top">
      <Navbar.Brand href="#home">Steads</Navbar.Brand>
      <Nav className="justify-content-end flex-grow-1 pe-1">
        <Nav.Link>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
          >
            Home
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
          >
            About
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link
            activeClass="active"
            to="team"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
          >
            Team
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link
            activeClass="active"
            to="research"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
          >
            Publications
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
          >
            Contact Us
          </Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
