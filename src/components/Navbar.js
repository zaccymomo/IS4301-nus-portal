import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      {/* `end` stops "/" from matching, and staying active on, every other path */}
      <NavLink to="/" end className="navbar-link">
        Home
      </NavLink>
      <NavLink to="/academics" className="navbar-link">
        Academics
      </NavLink>
      <NavLink to="/admission" className="navbar-link">
        Admission
      </NavLink>
    </nav>
  );
}

export default Navbar;
