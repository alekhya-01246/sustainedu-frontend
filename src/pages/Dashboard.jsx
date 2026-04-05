import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Dashboard() {
  const { dark } = useOutletContext();

  const [stats, setStats] = useState({
    lessons: 0,
    projects: 0,
  });

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:8080/api/lessons").then((res) => res.json()),
      fetch("http://localhost:8080/api/projects").then((res) => res.json()),
    ]).then(([lessons, projects]) => {
      setStats({
        lessons: lessons.length,
        projects: projects.length,
      });
    });
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-green-600 mb-8">
        Dashboard 🌱
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className={`p-6 rounded-xl shadow ${dark ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
        >
          <h2 className="text-xl font-semibold">Total Lessons</h2>
          <p className="text-3xl font-bold mt-2">{stats.lessons}</p>
        </div>

        <div
          className={`p-6 rounded-xl shadow ${dark ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
        >
          <h2 className="text-xl font-semibold">Total Projects</h2>
          <p className="text-3xl font-bold mt-2">{stats.projects}</p>
        </div>
      </div>
    </div>
  );
}