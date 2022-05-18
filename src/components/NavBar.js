import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Steads</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/research">About</Link>
        <Link to="/publications">Publications</Link>
        <Link to="/team">Team</Link>
        <Link to="/contact">Contact us</Link>
            </div>
        </nav>  

    );
}
export default Navbar; 