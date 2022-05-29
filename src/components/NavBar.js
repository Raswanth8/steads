import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };
  return (
    <nav className={`navbar ${stickyClass}`}>
      <h1>Steads</h1>
      <div className="links">
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
      </div>
    </nav>
  );
};
export default Navbar;
