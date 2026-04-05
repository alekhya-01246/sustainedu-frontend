import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NotificationContext } from "../context/NotificationContext";

export default function Signup() {
  const { showNotification } = useContext(NotificationContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.some((u) => u.email === email);

    if (exists) {
      showNotification("Email already registered!", "warning");
      return;
    }

    const newUser = {
      email,
      password,
      role: "user",
      name: email.split("@")[0]
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    showNotification("Account created successfully!", "success");
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 shadow rounded-xl w-[380px]">

        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Create Account
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-green-700 text-white p-3 rounded hover:bg-green-800"
        >
          Sign Up
        </button>

        <div className="text-center mt-5">
          <Link className="text-green-700 underline" to="/login">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
}
