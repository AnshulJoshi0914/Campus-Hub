import { Link } from "react-router-dom";
import "../Styles/Sidebar.css";
import {
  FaTachometerAlt,
  FaUsers,
  FaClipboardCheck,
  FaBuilding,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
function Sidebar() {
  const menuItems = [
  { name: "Dashboard", path: "/", icon: <FaTachometerAlt /> },
  { name: "Students", path: "/student", icon: <FaUsers /> },
  { name: "Attendance", path: "/attendance", icon: <FaClipboardCheck /> },
  { name: "Departments", path: "/departments", icon: <FaBuilding /> },
  { name: "Settings", path: "/settings", icon: <FaCog /> },
  { name: "Logout", path: "/logout", icon: <FaSignOutAlt /> },
];

  return (
    <aside className="sidebar">
      <h2>CampusHub</h2>

      <ul>
  {menuItems.map((item) => (
    <li key={item.path}>
      <Link to={item.path}>
        {item.icon}
        <span>{item.name}</span>
      </Link>
    </li>
  ))}
</ul>
    </aside>
  );
}

export default Sidebar;