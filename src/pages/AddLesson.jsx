import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddLesson() {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [topic, setTopic] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newLesson = {
            title,
            description,
            duration,
            topic,
        };

        fetch("http://localhost:8080/api/lessons", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newLesson),
        })
            .then((res) => res.json())
            .then(() => {
                alert("Lesson added successfully!");
                navigate("/lessons");
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-xl shadow">
            <h1 className="text-3xl font-bold text-green-700 mb-6">
                Add New Lesson
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Title"
                    required
                    className="w-full p-3 border rounded-lg"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    placeholder="Description"
                    required
                    className="w-full p-3 border rounded-lg"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Duration (e.g. 15 min)"
                    required
                    className="w-full p-3 border rounded-lg"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Topic"
                    required
                    className="w-full p-3 border rounded-lg"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                />

                <button className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700">
                    Add Lesson
                </button>
            </form>
        </div>
    );
}