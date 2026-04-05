import { useState, useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const { showNotification } = useContext(NotificationContext);

  const [email, setEmail] = useState("");

  const handleReset = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const found = users.find((u) => u.email === email);

    if (!found) {
      showNotification("Email not found", "error");
      return;
    }

    found.password = "123456";
    localStorage.setItem("users", JSON.stringify(users));

    showNotification("Password reset! New password: 123456", "warning");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 shadow rounded-xl w-[380px]">

        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Reset Password
        </h1>

        <input
          type="email"
          placeholder="Enter registered email"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleReset}
          className="w-full bg-green-700 text-white p-3 rounded hover:bg-green-800"
        >
          Reset Password
        </button>

        <div className="text-center mt-5">
          <Link className="text-green-700 underline" to="/login">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
