export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-green-700 mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold">Total Lessons</h2>
          <p className="text-3xl font-bold mt-2 text-green-700">—</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold">Total Projects</h2>
          <p className="text-3xl font-bold mt-2 text-green-700">—</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-3xl font-bold mt-2 text-green-700">—</p>
        </div>
      </div>

    </div>
  );
}
