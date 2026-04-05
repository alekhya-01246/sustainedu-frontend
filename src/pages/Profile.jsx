import { useAuth } from "../context/AuthContext";
import { useOutletContext } from "react-router-dom";

export default function Profile() {
  const { user } = useAuth();
  const { dark } = useOutletContext();

  return (
    <div>
      <h1 className="text-4xl font-bold text-green-600 mb-6">
        Profile 👤
      </h1>

      <div
        className={`p-6 rounded-xl shadow max-w-md ${dark ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
      >
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Role:</strong> {user?.role}</p>
      </div>
    </div>
  );
}