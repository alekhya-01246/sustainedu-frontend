// src/components/ConditionalNavbar.jsx
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaLeaf, FaUserCircle, FaSignOutAlt } from "react-icons/fa";

export default function ConditionalNavbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Hide on admin and on student-internal pages (we want sidebar there)
  const hideOnAdmin = location.pathname.startsWith("/admin");
  const hideOnStudentInternal = user && (
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/lessons") ||
    location.pathname.startsWith("/lesson/") ||
    location.pathname.startsWith("/projects") ||
    location.pathname.startsWith("/project/") ||
    location.pathname.startsWith("/profile") ||
    location.pathname.startsWith("/settings")
  );

  if (hideOnAdmin || hideOnStudentInternal) return null;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-3">
        <FaLeaf className="text-green-700 text-3xl" />
        <h1 className="text-2xl font-bold text-green-700">SustainEdu</h1>
      </Link>

      <div className="flex items-center gap-6 text-lg font-medium">
        {!user && (
          <>
            <Link to="/login" className="hover:text-green-700">Login</Link>
            <Link to="/signup" className="hover:text-green-700">Signup</Link>
          </>
        )}

        {user && (
          <>
            <Link to="/dashboard" className="hover:text-green-700">Dashboard</Link>
            <Link to="/lessons" className="hover:text-green-700">Lessons</Link>
            <Link to="/projects" className="hover:text-green-700">Projects</Link>

            <Link to="/profile" className="flex items-center gap-2 hover:text-green-700">
              <FaUserCircle /> {user.name}
            </Link>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-600 font-semibold hover:text-red-800"
            >
              <FaSignOutAlt /> Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
