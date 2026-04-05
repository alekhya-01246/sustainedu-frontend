import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Settings() {
  const { dark } = useOutletContext();
  const { user, logout } = useAuth();

  const [password, setPassword] = useState("");

  return (
    <div>
      <h1 className="text-4xl font-bold text-green-600 mb-8">
        Settings ⚙️
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* PROFILE CARD */}
        <div
          className={`p-6 rounded-xl shadow ${dark ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
        >
          <h2 className="text-xl font-semibold mb-4">Profile Info</h2>

          <p><strong>Name:</strong> {user?.name || "User"}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Role:</strong> {user?.role}</p>
        </div>

        {/* PASSWORD CHANGE */}
        <div
          className={`p-6 rounded-xl shadow ${dark ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
        >
          <h2 className="text-xl font-semibold mb-4">Change Password</h2>

          <input
            type="password"
            placeholder="New Password"
            className="w-full p-2 border rounded mb-3 text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Update Password
          </button>
        </div>

        {/* THEME INFO */}
        <div
          className={`p-6 rounded-xl shadow ${dark ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
        >
          <h2 className="text-xl font-semibold mb-4">Theme</h2>

          <p>
            Current Mode:{" "}
            <span className="font-bold">
              {dark ? "Dark 🌙" : "Light ☀️"}
            </span>
          </p>

          <p className="text-sm mt-2 text-gray-500">
            You can toggle theme from the top right button.
          </p>
        </div>

        {/* LOGOUT */}
        <div
          className={`p-6 rounded-xl shadow ${dark ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
        >
          <h2 className="text-xl font-semibold mb-4">Account</h2>

          <button
            onClick={logout}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}