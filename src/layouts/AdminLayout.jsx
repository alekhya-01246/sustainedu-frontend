import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex">
      <AdminSidebar />

      <div className="flex-1">
        <AdminHeader />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
