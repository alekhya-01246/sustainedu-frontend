// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import ConditionalNavbar from "./components/ConditionalNavbar";

// Public
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

// Student pages
import Dashboard from "./pages/Dashboard";
import Lessons from "./pages/Lessons";
import LessonDetails from "./pages/LessonDetails";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import AddLesson from "./pages/AddLesson";

// Layouts
import DashboardLayout from "./layouts/DashboardLayout";
import AdminLayout from "./layouts/AdminLayout";

// Admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminLessons from "./pages/admin/AdminLessons";
import AdminProjects from "./pages/admin/AdminProjects";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminLogs from "./pages/admin/AdminLogs";

// Guards
import { PrivateRoute, AdminRoute } from "./components/ProtectedRoute";

export default function App() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <ConditionalNavbar />

      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<ForgotPassword />} />

        {/* ✅ STUDENT ROUTES (WITH SIDEBAR LAYOUT) */}
        <Route
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/add-lesson" element={<AddLesson />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} /> {/* ✅ FIXED */}
        </Route>

        {/* DETAILS (NO SIDEBAR) */}
        <Route
          path="/lesson/:id"
          element={
            <PrivateRoute>
              <LessonDetails />
            </PrivateRoute>
          }
        />

        <Route
          path="/project/:id"
          element={
            <PrivateRoute>
              <ProjectDetails />
            </PrivateRoute>
          }
        />

        {/* ADMIN */}
        <Route
          path="/admin/*"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="lessons" element={<AdminLessons />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="logs" element={<AdminLogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}