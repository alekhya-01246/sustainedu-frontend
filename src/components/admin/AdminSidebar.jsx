import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBook,
  FaProjectDiagram,
  FaUsers,
  FaCog,
  FaClipboardList,
  FaUser,
} from "react-icons/fa";

export default function AdminSidebar() {
  const linkClass =
    "flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-green-700 hover:text-white transition";

  return (
    <aside className="w-64 bg-green-800 text-white min-h-screen p-5">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

      <NavLink
        to="/admin"
        end
        className={({ isActive }) =>
          `${linkClass} ${isActive ? "bg-green-600" : ""}`
        }
      >
        <FaTachometerAlt /> Dashboard
      </NavLink>

      <NavLink
        to="/admin/lessons"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? "bg-green-600" : ""}`
        }
      >
        <FaBook /> Manage Lessons
      </NavLink>

      <NavLink
        to="/admin/projects"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? "bg-green-600" : ""}`
        }
      >
        <FaProjectDiagram /> Manage Projects
      </NavLink>

      <NavLink
        to="/admin/users"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? "bg-green-600" : ""}`
        }
      >
        <FaUsers /> Manage Users
      </NavLink>

      <NavLink
        to="/admin/settings"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? "bg-green-600" : ""}`
        }
      >
        <FaCog /> Admin Settings
      </NavLink>

      <NavLink
        to="/admin/logs"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? "bg-green-600" : ""}`
        }
      >
        <FaClipboardList /> Admin Logs
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? "bg-green-600" : ""}`
        }
      >
        <FaUser /> Profile
      </NavLink>
    </aside>
  );
}
