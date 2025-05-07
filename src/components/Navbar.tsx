// File: src/components/Navbar.tsx
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">My Portfolio</h1>
        <ul className="navbar-links">
          <li><Link to="/">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/certifications">Certifications</Link></li>
          <li><Link to="/extra-curricular">Extra-curricular</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;