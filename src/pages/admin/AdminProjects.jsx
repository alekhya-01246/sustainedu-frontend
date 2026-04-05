import { useState } from "react";
import { useData } from "../../context/DataContext";

export default function AdminProjects() {
  const { projects, addProject, deleteProject } = useData();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [level, setLevel] = useState("");

  const handleAdd = () => {
    if (!title || !desc || !level) return alert("Fill all fields");

    addProject({ title, description: desc, level });

    setTitle("");
    setDesc("");
    setLevel("");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-green-700 mb-6">Manage Projects</h1>

      <div className="bg-white p-6 rounded shadow mb-8">
        <h2 className="text-xl font-semibold mb-3">Add Project</h2>

        <input
          placeholder="Project Title"
          className="border p-3 w-full mb-3 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="border p-3 w-full mb-3 rounded"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <select
          className="border p-3 w-full mb-3 rounded"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="">Select Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <button
          className="bg-green-700 text-white px-5 py-2 rounded"
          onClick={handleAdd}
        >
          Add Project
        </button>
      </div>

      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white p-5 rounded shadow mb-5 border"
        >
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-gray-600">{project.description}</p>

          <button
            className="text-red-600 mt-3"
            onClick={() => deleteProject(project.id)}
          >
            🗑 Delete
          </button>
        </div>
      ))}
    </div>
  );
}
