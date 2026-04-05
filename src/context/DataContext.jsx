import { createContext, useContext, useEffect, useState } from "react";
import { addLog } from "../utils/LogUtils";
import { useAuth } from "./AuthContext";

const DataContext = createContext();
export const useData = () => useContext(DataContext);

export default function DataProvider({ children }) {
  const { user } = useAuth();

  const [lessons, setLessons] = useState([]);
  const [projects, setProjects] = useState([]);

  // ---------------- LOAD DATA FROM BACKEND ---------------- //

  useEffect(() => {
    fetch("http://localhost:8080/api/lessons")
      .then(res => res.json())
      .then(data => setLessons(data))
      .catch(err => console.error(err));

    fetch("http://localhost:8080/api/projects")
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error(err));
  }, []);

  // ---------------- LESSONS CRUD ---------------- //

  const addLesson = async (lesson) => {
    const res = await fetch("http://localhost:8080/api/lessons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lesson),
    });

    const data = await res.json();
    setLessons([...lessons, data]);

    addLog(`Lesson Added: ${lesson.title}`, user?.email, "create");
  };

  const updateLesson = async (updatedLesson) => {
    const res = await fetch(`http://localhost:8080/api/lessons/${updatedLesson.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedLesson),
    });

    const data = await res.json();

    setLessons(
      lessons.map((l) => (l.id === data.id ? data : l))
    );

    addLog(`Lesson Updated: ${updatedLesson.title}`, user?.email, "update");
  };

  const deleteLesson = async (id, title) => {
    await fetch(`http://localhost:8080/api/lessons/${id}`, {
      method: "DELETE",
    });

    setLessons(lessons.filter((l) => l.id !== id));

    addLog(`Lesson Deleted: ${title}`, user?.email, "delete");
  };

  // ---------------- PROJECTS CRUD ---------------- //

  const addProject = async (project) => {
    const res = await fetch("http://localhost:8080/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });

    const data = await res.json();
    setProjects([...projects, data]);

    addLog(`Project Added: ${project.title}`, user?.email, "create");
  };

  const updateProject = async (updatedProject) => {
    const res = await fetch(`http://localhost:8080/api/projects/${updatedProject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProject),
    });

    const data = await res.json();

    setProjects(
      projects.map((p) => (p.id === data.id ? data : p))
    );

    addLog(`Project Updated: ${updatedProject.title}`, user?.email, "update");
  };

  const deleteProject = async (id, title) => {
    await fetch(`http://localhost:8080/api/projects/${id}`, {
      method: "DELETE",
    });

    setProjects(projects.filter((p) => p.id !== id));

    addLog(`Project Deleted: ${title}`, user?.email, "delete");
  };

  return (
    <DataContext.Provider
      value={{
        lessons,
        projects,
        addLesson,
        updateLesson,
        deleteLesson,
        addProject,
        updateProject,
        deleteProject,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}