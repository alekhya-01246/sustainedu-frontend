import { createContext, useContext, useState } from "react";

export const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export default function NotificationProvider({ children }) {
  const [notification, setNotification] = useState({
    message: "",
    type: "", // success, error
    visible: false,
  });

  const showNotification = (message, type = "success") => {
    setNotification({
      message,
      type,
      visible: true,
    });

    // auto hide after 2.5 seconds
    setTimeout(() => {
      setNotification({
        message: "",
        type: "",
        visible: false,
      });
    }, 2500);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}

      {notification.visible && (
        <div
          className={`fixed top-5 right-5 px-6 py-3 rounded-lg shadow-lg text-white 
            ${notification.type === "success" ? "bg-green-600" : "bg-red-600"}
          `}
        >
          {notification.message}
        </div>
      )}
    </NotificationContext.Provider>
  );
}
