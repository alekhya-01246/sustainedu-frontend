import { useState } from "react";

export default function AdminUsers() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Add New User
  const handleAddUser = () => {
    if (!newUser.name || !newUser.email || !newUser.password)
      return alert("All fields are required");

    let allUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check email exists
    if (
      allUsers.some(
        (u) => u.email.toLowerCase() === newUser.email.toLowerCase()
      )
    ) {
      alert("Email already exists!");
      return;
    }

    const userToAdd = {
      ...newUser,
      role: "user",
    };

    allUsers.push(userToAdd);

    localStorage.setItem("users", JSON.stringify(allUsers));
    setUsers(allUsers);

    setNewUser({ name: "", email: "", password: "" });

    alert("User added successfully!");
  };

  // Remove User
  const handleRemoveUser = (email) => {
    let allUsers = JSON.parse(localStorage.getItem("users")) || [];

    const user = allUsers.find((u) => u.email === email);

    if (!user) return;

    // Prevent removing admins from this page
    if (user.role === "admin") {
      alert("Admins cannot be removed here! Go to Admin Settings.");
      return;
    }

    const updated = allUsers.filter((u) => u.email !== email);

    localStorage.setItem("users", JSON.stringify(updated));
    setUsers(updated);

    alert("User removed.");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-green-700 mb-6">Manage Users</h1>

      {/* ADD NEW USER SECTION */}
      <div className="bg-white p-6 rounded shadow mb-10">
        <h2 className="text-xl font-semibold mb-3">Add New User</h2>

        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) =>
            setNewUser({ ...newUser, name: e.target.value })
          }
          className="border p-3 w-full rounded mb-3"
        />

        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) =>
            setNewUser({ ...newUser, email: e.target.value })
          }
          className="border p-3 w-full rounded mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          value={newUser.password}
          onChange={(e) =>
            setNewUser({ ...newUser, password: e.target.value })
          }
          className="border p-3 w-full rounded mb-3"
        />

        <button
          onClick={handleAddUser}
          className="bg-green-700 text-white px-5 py-2 rounded"
        >
          Add User
        </button>
      </div>

      {/* USER LIST */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">All Users</h2>

        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          users.map((u) => (
            <div
              key={u.email}
              className="flex justify-between items-center border-b py-3"
            >
              <div>
                <p className="font-semibold">{u.name}</p>
                <p className="text-gray-600">{u.email}</p>
                <p className="text-sm text-green-700">Role: {u.role}</p>
              </div>

              <button
                className="bg-red-600 text-white px-3 py-1 rounded"
                onClick={() => handleRemoveUser(u.email)}
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
