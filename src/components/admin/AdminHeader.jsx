import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FaHome, FaUser, FaSignOutAlt, FaTachometerAlt } from "react-icons/fa";

export default function AdminHeader() {

  const { logout, user } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white shadow px-6 py-4 flex justify-between items-center">

      {/* LEFT SIDE: TITLE */}
      <h1 className="text-xl font-bold text-green-700">
        SustainEdu — Admin Panel
      </h1>

      {/* RIGHT SIDE BUTTONS */}
      <div className="flex items-center gap-4">

        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
        >
          <FaHome /> Home
        </button>

        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
        >
          <FaTachometerAlt /> User Dashboard
        </button>

        <button
          onClick={() => navigate("/profile")}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
        >
          <FaUser /> Profile
        </button>

        <button
          onClick={logout}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          <FaSignOutAlt /> Logout
        </button>

      </div>
    </header>
  );
}
