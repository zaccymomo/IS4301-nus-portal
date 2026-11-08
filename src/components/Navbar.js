import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logout } from '../firebase';

function Navbar() {
  const [user] = useAuthState(auth);

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
      {user ? (
        <>
          <span className="navbar-user">{user.email}</span>
          <button className="navbar-link navbar-btn" onClick={() => logout()}>
            Logout
          </button>
        </>
      ) : (
        <NavLink to="/login" className="navbar-link">
          Login
        </NavLink>
      )}
    </nav>
  );
}

export default Navbar;
