import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNotification } from "../context/NotificationContext";

import { FaEnvelope, FaLock, FaLeaf, FaSyncAlt } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { showNotification } = useNotification();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [captcha, setCaptcha] = useState("");
  const [inputCaptcha, setInputCaptcha] = useState("");

  useEffect(() => {
    regenerateCaptcha();
  }, []);

  const regenerateCaptcha = () => {
    setCaptcha(Math.random().toString(36).substring(2, 7).toUpperCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputCaptcha.toUpperCase() !== captcha) {
      showNotification("Invalid Captcha!", "error");
      regenerateCaptcha();
      return;
    }

    const user = login(email.trim(), password);
    if (!user) {
      showNotification("Invalid email or password", "error");
      regenerateCaptcha();
      return;
    }

    showNotification("Login successful!", "success");

    setTimeout(() => {
      if (user.role === "admin") navigate("/admin");
      else navigate("/dashboard");
    }, 500);
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* LEFT SIDE IMAGE */}
      <div className="hidden lg:flex w-1/2 bg-green-100 items-center justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2903/2903887.png"
          className="w-80 opacity-90 animate-fade"
        />
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 px-10 sm:px-16">
        <div className="mb-8 flex items-center gap-3">
          <FaLeaf className="text-green-700 text-3xl" />
          <h1 className="text-4xl font-bold text-green-700">SustainEdu Login</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 shadow-lg p-8 rounded-xl border border-gray-200"
        >
          {/* Email */}
          <label className="font-semibold">Email</label>
          <div className="flex items-center border rounded-lg px-3 mb-5 bg-white">
            <FaEnvelope className="text-gray-500 mr-2" />
            <input
              type="email"
              required
              className="w-full p-3 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <label className="font-semibold">Password</label>
          <div className="flex items-center border rounded-lg px-3 mb-5 bg-white">
            <FaLock className="text-gray-500 mr-2" />
            <input
              type="password"
              required
              className="w-full p-3 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Captcha */}
          <label className="font-semibold">Captcha Verification</label>
          <div className="flex items-center gap-3 mb-4">
            <div className="px-4 py-2 bg-gray-200 rounded text-lg font-bold tracking-widest">
              {captcha}
            </div>
            <button
              type="button"
              onClick={regenerateCaptcha}
              className="text-blue-600 hover:text-blue-800"
            >
              <FaSyncAlt />
            </button>
          </div>

          <input
            type="text"
            placeholder="Enter captcha"
            required
            className="w-full p-3 border rounded-lg mb-6 outline-none"
            value={inputCaptcha}
            onChange={(e) => setInputCaptcha(e.target.value)}
          />

          {/* Login Button */}
          <button className="w-full bg-green-600 text-white p-3 rounded-xl font-semibold hover:bg-green-700 transition">
            Login
          </button>

          {/* Footer Links */}
          <div className="text-center mt-4 text-sm">
            <Link to="/forgot" className="text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          <div className="text-center mt-2 text-sm">
            New User?
            <Link
              to="/signup"
              className="text-green-700 font-semibold ml-1 hover:underline"
            >
              Create Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
