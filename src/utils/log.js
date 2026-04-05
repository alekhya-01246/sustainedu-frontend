// src/utils/log.js
export function addAdminLog(action) {
  const logs = JSON.parse(localStorage.getItem("adminLogs")) || [];
  logs.push({
    action,
    time: new Date().toLocaleString(),
  });
  localStorage.setItem("adminLogs", JSON.stringify(logs));
}
