// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="w-full bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Link to="/" className="text-2xl font-bold text-green-700">
          SustainEdu
        </Link>
      </div>

      <div className="flex items-center gap-6">

        <Link className="hover:text-green-600" to="/lessons">Lessons</Link>
        <Link className="hover:text-green-600" to="/projects">Projects</Link>
        <Link className="hover:text-green-600" to="/dashboard">Dashboard</Link>

        {user ? (
          <>
            <Link className="hover:text-green-600" to="/profile">Profile</Link>
            <Link className="hover:text-green-600" to="/settings">Settings</Link>

            {user.role === "admin" && (
              <Link className="hover:text-green-600 font-semibold" to="/admin">
                Admin
              </Link>
            )}

            <button
              onClick={logout}
              className="ml-4 bg-red-600 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="hover:text-green-600" to="/login">Login</Link>
            <Link className="hover:text-green-600" to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}
