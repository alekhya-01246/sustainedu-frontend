import { useState, useEffect, useContext } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { NotificationContext } from "../context/NotificationContext";
import { FaUserEdit, FaTrash, FaUserShield } from "react-icons/fa";

export default function AdminPanel() {
  const { showNotification } = useContext(NotificationContext);

  const [activeTab, setActiveTab] = useState("users");
  const [users, setUsers] = useState([]);

  // Load users at start
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(savedUsers);
  }, []);

  const updateUsersStorage = (updatedList) => {
    localStorage.setItem("users", JSON.stringify(updatedList));
    setUsers(updatedList);
  };

  // Change user role
  const toggleRole = (email) => {
    const updated = users.map((u) =>
      u.email === email ? { ...u, role: u.role === "admin" ? "user" : "admin" } : u
    );
    updateUsersStorage(updated);
    showNotification("Role updated!", "success");
  };

  // Reset password
  const resetPassword = (email) => {
    const updated = users.map((u) =>
      u.email === email ? { ...u, password: "123456" } : u
    );
    updateUsersStorage(updated);
    showNotification("Password reset to 123456", "warning");
  };

  // Delete user
  const deleteUser = (email) => {
    const updated = users.filter((u) => u.email !== email);
    updateUsersStorage(updated);
    showNotification("User deleted!", "error");
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-green-700 mb-6">Admin Panel</h1>

      {/* Tabs */}
      <div className="flex gap-6 mb-6">
        <button
          className={`px-5 py-2 rounded ${
            activeTab === "users" ? "bg-green-700 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("users")}
        >
          User Management
        </button>

        <button
          className={`px-5 py-2 rounded ${
            activeTab === "lessons" ? "bg-green-700 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("lessons")}
        >
          Lessons (Coming Soon)
        </button>

        <button
          className={`px-5 py-2 rounded ${
            activeTab === "projects" ? "bg-green-700 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("projects")}
        >
          Projects (Coming Soon)
        </button>
      </div>

      {/* USER MANAGEMENT */}
      {activeTab === "users" && (
        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-6">All Registered Users</h2>

          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-3">Name</th>
                <th className="py-3">Email</th>
                <th className="py-3">Role</th>
                <th className="py-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan="4" className="py-6 text-center text-gray-600">
                    No users yet.
                  </td>
                </tr>
              ) : (
                users.map((u) => (
                  <tr key={u.email} className="border-b">
                    <td className="py-3">{u.name || u.email.split("@")[0]}</td>
                    <td>{u.email}</td>

                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          u.role === "admin"
                            ? "bg-purple-200 text-purple-700"
                            : "bg-blue-200 text-blue-700"
                        }`}
                      >
                        {u.role}
                      </span>
                    </td>

                    <td className="flex gap-5 py-3 text-xl">
                      {/* Toggle role */}
                      <FaUserShield
                        onClick={() => toggleRole(u.email)}
                        className="text-green-700 cursor-pointer"
                        title="Toggle Role"
                      />

                      {/* Reset password */}
                      <FaUserEdit
                        onClick={() => resetPassword(u.email)}
                        className="text-blue-600 cursor-pointer"
                        title="Reset Password"
                      />

                      {/* Delete user */}
                      <FaTrash
                        onClick={() => deleteUser(u.email)}
                        className="text-red-600 cursor-pointer"
                        title="Delete User"
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </DashboardLayout>
  );
}
