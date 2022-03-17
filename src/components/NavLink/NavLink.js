import { Link } from "react-router-dom";

const NavLink = ({ children, ...other }) => {
  return (
    <Link className="nav-link link" {...other}>
      {children}
    </Link>
  );
};

export default NavLink;
