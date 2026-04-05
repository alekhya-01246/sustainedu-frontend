// src/pages/ProjectDetails.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";
import { FaArrowLeft } from "react-icons/fa";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects } = useData();

  const project = projects.find(p => String(p.id) === String(id));
  if (!project) return <p className="p-6 text-red-600">Project not found.</p>;

  return (
    <div className="p-8">
      <button
        onClick={() => navigate("/dashboard")}
        className="flex items-center gap-2 text-green-700 font-semibold mb-6 hover:underline"
      >
        <FaArrowLeft /> Return to Dashboard
      </button>

      <h1 className="text-3xl font-bold text-green-700 mb-4">{project.title}</h1>
      <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">{project.description}</p>
    </div>
  );
}
