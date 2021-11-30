import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Doggy Blog</h1>
      <div className="links">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/create" className="link blog-link">
          New Blog
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
