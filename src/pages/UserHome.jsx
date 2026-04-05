import { FaLeaf, FaBook, FaProjectDiagram } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function UserHome() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <div className="bg-green-600 text-white py-12 px-8 lg:px-24">
        <h1 className="text-4xl font-bold mb-3">
          Welcome back, {user?.name || user?.email.split("@")[0]} 👋
        </h1>
        <p className="text-lg opacity-90 max-w-2xl">
          Continue your sustainability learning journey with lessons, activities and real-world eco projects.
        </p>
      </div>

      {/* QUICK ACCESS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-10 lg:px-24">

        {/* Lessons */}
        <Link
          to="/lessons"
          className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
        >
          <FaBook className="text-green-600 text-5xl mb-4" />
          <h3 className="text-2xl font-semibold">Explore Lessons</h3>
          <p className="text-gray-600 mt-2">
            Interactive topics that teach eco-friendly living.
          </p>
        </Link>

        {/* Projects */}
        <Link
          to="/projects"
          className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
        >
          <FaProjectDiagram className="text-green-600 text-5xl mb-4" />
          <h3 className="text-2xl font-semibold">Eco Projects</h3>
          <p className="text-gray-600 mt-2">
            Hands-on activities to practice sustainability.
          </p>
        </Link>

        {/* Profile */}
        <Link
          to="/profile"
          className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
        >
          <FaLeaf className="text-green-600 text-5xl mb-4" />
          <h3 className="text-2xl font-semibold">Your Profile</h3>
          <p className="text-gray-600 mt-2">
            View and update your account details.
          </p>
        </Link>
      </div>
    </div>
  );
}
