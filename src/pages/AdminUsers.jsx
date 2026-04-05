export default function AdminUsers() {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  return (
    <div>
      <h1 className="text-3xl font-bold text-green-700 mb-6">Manage Users</h1>

      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="border-b">
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Role</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.email} className="border-b">
              <td className="p-3">{u.name}</td>
              <td className="p-3">{u.email}</td>
              <td className="p-3 capitalize">{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
