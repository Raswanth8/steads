import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
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
