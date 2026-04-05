// Save logs to localStorage
export function addLog(message, userEmail, type = "info") {
  const logs = JSON.parse(localStorage.getItem("admin_logs")) || [];

  const newLog = {
    id: Date.now(),
    message,
    email: userEmail,
    type,
    time: new Date().toLocaleString(),
  };

  logs.unshift(newLog); // Add on top
  localStorage.setItem("admin_logs", JSON.stringify(logs));
}

// Get logs
export function getLogs() {
  return JSON.parse(localStorage.getItem("admin_logs")) || [];
}

// Clear logs
export function clearLogs() {
  localStorage.removeItem("admin_logs");
}
