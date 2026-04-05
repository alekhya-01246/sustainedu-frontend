import { useState } from "react";
import { useData } from "../../context/DataContext";

export default function AdminLessons() {
  const { lessons, addLesson, deleteLesson, updateLesson } = useData();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [duration, setDuration] = useState("");
  const [topic, setTopic] = useState("");

  const handleAdd = () => {
    if (!title || !desc || !duration || !topic) return alert("Fill all fields");

    addLesson({ title, description: desc, duration, topic });

    setTitle("");
    setDesc("");
    setDuration("");
    setTopic("");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-green-700 mb-6">Manage Lessons</h1>

      {/* ADD LESSON */}
      <div className="bg-white p-6 rounded shadow mb-10">
        <h2 className="text-xl font-semibold mb-3">Add Lesson</h2>

        <input
          placeholder="Lesson Title"
          className="border p-3 w-full mb-3 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Lesson Description"
          className="border p-3 w-full mb-3 rounded"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <input
          placeholder="Duration (e.g., 15 min)"
          className="border p-3 w-full mb-3 rounded"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />

        <select
          className="border p-3 w-full mb-3 rounded"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        >
          <option value="">Select Topic</option>
          <option value="Recycling">Recycling</option>
          <option value="Sustainability">Sustainability</option>
          <option value="Climate Change">Climate Change</option>
        </select>

        <button
          className="bg-green-700 text-white px-5 py-2 rounded"
          onClick={handleAdd}
        >
          Add Lesson
        </button>
      </div>

      {/* LIST LESSONS */}
      {lessons.map((lesson) => (
        <div
          key={lesson.id}
          className="bg-white p-5 rounded shadow mb-5 border"
        >
          <h3 className="text-xl font-semibold">{lesson.title}</h3>
          <p className="text-gray-600">{lesson.description}</p>

          <div className="flex gap-4 mt-3">
            <button
              className="text-blue-600"
              onClick={() => updateLesson(lesson.id)}
            >
              ✏ Edit
            </button>

            <button
              className="text-red-600"
              onClick={() => deleteLesson(lesson.id)}
            >
              🗑 Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
