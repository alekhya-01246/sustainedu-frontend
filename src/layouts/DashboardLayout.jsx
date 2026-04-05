import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const [dark, setDark] = useState(false);

  // load theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);
  }, []);

  // save theme
  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div
      className={
        dark
          ? "bg-gray-900 text-white min-h-screen flex"
          : "bg-gray-100 text-black min-h-screen flex"
      }
    >
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="flex-1 p-6">
        {/* TOP BAR */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setDark(!dark)}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg"
          >
            {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* PASS DARK MODE */}
        <Outlet context={{ dark }} />
      </div>
    </div>
  );
}