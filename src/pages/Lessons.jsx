import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

export default function Lessons() {
  const { dark } = useOutletContext();

  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLessons = () => {
    setLoading(true);
    fetch("https://sustainedu-backend-production.up.railway.app/api/lessons")
      .then((res) => res.json())
      .then((data) => setLessons(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchLessons();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-green-600 mb-8">
        Interactive Lessons
      </h1>

      {loading ? (
        <p className="text-lg">Loading lessons...</p>
      ) : lessons.length === 0 ? (
        <p className="text-gray-500">
          No lessons yet 🚀 Start adding sustainable learning!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className={`p-6 rounded-xl shadow ${dark ? "bg-gray-800 text-white" : "bg-white text-black"
                }`}
            >
              <h2 className="text-xl font-bold mb-2">{lesson.title}</h2>

              <p className={dark ? "text-gray-300" : "text-gray-600"}>
                {lesson.description}
              </p>

              <Link
                to={`/lesson/${lesson.id}`}
                className="text-green-500 font-semibold mt-2 inline-block"
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