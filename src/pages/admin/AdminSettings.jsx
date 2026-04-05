import { useState } from "react";

export default function AdminSettings() {
  const [email, setEmail] = useState("");
  const [admins, setAdmins] = useState(
    (JSON.parse(localStorage.getItem("users")) || []).filter(
      (u) => u.role === "admin"
    )
  );

  // Add New Admin
  const handleAddAdmin = () => {
    if (!email.trim()) return alert("Enter a valid email");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const idx = users.findIndex(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );

    if (idx === -1) {
      alert("User does not exist. They must signup first.");
      return;
    }

    users[idx].role = "admin";
    localStorage.setItem("users", JSON.stringify(users));

    setAdmins(users.filter((u) => u.role === "admin"));
    setEmail("");

    alert("New admin added successfully!");
  };

  // Remove Admin
  const handleRemoveAdmin = (email) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const idx = users.findIndex((u) => u.email === email);

    if (idx === -1) return;

    // prevent deleting last admin
    const totalAdmins = users.filter((u) => u.role === "admin").length;
    if (totalAdmins === 1) {
      alert("At least one admin must remain!");
      return;
    }

    users[idx].role = "user";
    localStorage.setItem("users", JSON.stringify(users));

    setAdmins(users.filter((u) => u.role === "admin"));
    alert("Admin removed successfully.");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-green-700 mb-6">Admin Settings</h1>

      {/* ADD ADMIN */}
      <div className="bg-white p-6 rounded shadow mb-10">
        <h2 className="text-xl font-semibold mb-3">Add New Admin</h2>

        <input
          type="text"
          placeholder="Enter user email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 w-full rounded mb-4"
        />

        <button
          className="bg-green-700 text-white px-5 py-2 rounded"
          onClick={handleAddAdmin}
        >
          Add Admin
        </button>
      </div>

      {/* LIST ADMINS */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Current Admins</h2>

        {admins.length === 0 ? (
          <p>No admins found.</p>
        ) : (
          admins.map((admin) => (
            <div
              key={admin.email}
              className="flex justify-between items-center border-b py-3"
            >
              <div>
                <p className="font-semibold">{admin.name}</p>
                <p className="text-gray-600">{admin.email}</p>
              </div>

              <button
                className="bg-red-600 text-white px-3 py-1 rounded"
                onClick={() => handleRemoveAdmin(admin.email)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
