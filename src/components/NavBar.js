//import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Steads</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about#aboutsection">About</Link>
        <Link to="/publications#researchtable">Publications</Link>
        <Link to="/team#teamsection">Team</Link>
        <Link to="/contact">Contact us</Link>
      </div>
    </nav>
  );
};
export default Navbar;
