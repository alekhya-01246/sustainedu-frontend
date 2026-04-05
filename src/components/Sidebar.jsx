// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaBook, FaProjectDiagram, FaUser, FaCog } from "react-icons/fa";

export default function Sidebar() {
  const linkClass = "flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-white hover:bg-green-800";
  const active = "bg-green-900";

  return (
    <aside className="w-64 bg-green-700 min-h-screen text-white p-5 space-y-4">
      <h2 className="text-xl font-bold mb-4">SustainEdu</h2>

      <NavLink to="/dashboard" className={({ isActive }) => `${linkClass} ${isActive ? active : ""}`}>
        <FaTachometerAlt /> Dashboard
      </NavLink>

      <NavLink to="/lessons" className={({ isActive }) => `${linkClass} ${isActive ? active : ""}`}>
        <FaBook /> Lessons
      </NavLink>

      <NavLink to="/projects" className={({ isActive }) => `${linkClass} ${isActive ? active : ""}`}>
        <FaProjectDiagram /> Projects
      </NavLink>

      <NavLink to="/profile" className={({ isActive }) => `${linkClass} ${isActive ? active : ""}`}>
        <FaUser /> Profile
      </NavLink>

      <NavLink to="/settings" className={({ isActive }) => `${linkClass} ${isActive ? active : ""}`}>
        <FaCog /> Settings
      </NavLink>
    </aside>
  );
}
