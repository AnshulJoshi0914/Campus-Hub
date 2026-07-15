import { FaUserCircle, FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="navbar-logo">
        <h2>CampusHub</h2>
      </div>

      {/* Search */}
      <div className="search-box">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search CampusHub..."
        />
      </div>

      {/* Admin Profile */}
      <div className="navbar-right">

        <FaUserCircle className="admin-icon" />

        <div className="admin-details">
          <h4>Admin</h4>
          <p>Administrator</p>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;