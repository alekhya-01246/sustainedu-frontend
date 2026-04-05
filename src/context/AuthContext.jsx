// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("currentUser");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (user) localStorage.setItem("currentUser", JSON.stringify(user));
    else localStorage.removeItem("currentUser");
  }, [user]);

  const signup = (newUser) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.some(
      (u) => u.email.toLowerCase() === newUser.email.toLowerCase()
    );
    if (exists) return { success: false, message: "Email already exists" };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    return { success: true };
  };

  // IMPORTANT: login stores to localStorage immediately then updates context
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const found = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (!found) return null;
    if (found.password !== password) return null;

    // persist synchronously so other code reading localStorage works
    localStorage.setItem("currentUser", JSON.stringify(found));
    setUser(found);
    return found;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, signup, logout, isAdmin: user?.role === "admin" }}>
      {children}
    </AuthContext.Provider>
  );
}
