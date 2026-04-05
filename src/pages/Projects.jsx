import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

export default function Projects() {
  const { dark } = useOutletContext();

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = () => {
    setLoading(true);
    fetch("http://localhost:8080/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-green-600 mb-8">
        Sustainability Projects 🚀
      </h1>

      {loading ? (
        <p>Loading projects...</p>
      ) : projects.length === 0 ? (
        <p className="text-gray-500">
          No projects yet. Add some amazing ideas 🚀
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`p-6 rounded-xl shadow ${dark ? "bg-gray-800 text-white" : "bg-white text-black"
                }`}
            >
              <h2 className="text-xl font-bold">{project.title}</h2>

              <p className={dark ? "text-gray-300" : "text-gray-600"}>
                {project.description}
              </p>

              <span className="text-sm text-green-500">
                {project.level}
              </span>

              <Link
                to={`/project/${project.id}`}
                className="block mt-2 text-green-600 font-semibold"
              >
                View →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}