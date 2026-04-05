import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

import AuthProvider from "./context/AuthContext.jsx";
import NotificationProvider from "./context/NotificationContext.jsx";
import DataProvider from "./context/DataContext.jsx";
import { seedSampleData } from "./utils/SeedData.js";

// Load sample lessons & projects ONCE
seedSampleData();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <NotificationProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </NotificationProvider>
  </AuthProvider>
);
