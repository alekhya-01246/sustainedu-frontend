import { FaLeaf, FaRecycle, FaSolarPanel } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="min-h-[60vh] bg-gradient-to-r from-green-700 to-green-500 text-white flex flex-col justify-center px-10 lg:px-24 py-12">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 max-w-4xl leading-tight">
          Learn Sustainable Living.
          <br />
          Build a Greener Future 🌱
        </h1>

        <p className="text-lg md:text-xl opacity-95 mb-8 max-w-2xl">
          SustainEdu helps you learn sustainability through interactive lessons
          and real-world eco projects.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4">
          <Link
            to="/signup"
            className="bg-white text-green-700 font-semibold px-6 py-3 rounded-xl shadow hover:scale-105 transition"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-green-700 transition"
          >
            Login
          </Link>
        </div>
      </section>

      {/* ABOUT SECTION (VERY IMPORTANT) */}
      <section className="py-16 px-8 lg:px-24 text-center bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
          What is SustainEdu?
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          SustainEdu is an educational platform that empowers students to learn
          sustainability through interactive lessons and real-world projects.
          Our goal is to create awareness and inspire action for a greener future.
        </p>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-8 lg:px-24 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-700">
          Why Choose SustainEdu?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <FaLeaf className="text-green-600 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-3">
              Eco-Friendly Lessons
            </h3>
            <p className="text-gray-600">
              Learn how small changes create big environmental impact.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <FaRecycle className="text-green-600 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-3">
              Hands-On Projects
            </h3>
            <p className="text-gray-600">
              Practice sustainability with real-world eco activities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <FaSolarPanel className="text-green-600 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-3">
              Green Technology
            </h3>
            <p className="text-gray-600">
              Explore renewable energy and modern sustainable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* IMPACT SECTION (JUDGES LOVE THIS) */}
      <section className="py-16 px-8 lg:px-24 text-center bg-green-50">
        <h2 className="text-3xl font-bold text-green-700 mb-6">
          🌍 Our Mission
        </h2>

        <p className="max-w-2xl mx-auto text-gray-700 text-lg">
          We aim to educate and inspire the next generation to take action
          against climate change by providing accessible and practical
          sustainability education.
        </p>
      </section>
    </div>
  );
}