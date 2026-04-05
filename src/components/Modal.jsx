// src/components/Modal.jsx
export default function Modal({ open, title, onClose, children, width = "max-w-2xl" }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className={`bg-white rounded-xl shadow-xl w-full p-6 ${width}`}>
        
        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            ✕
          </button>
        </div>

        {/* BODY */}
        <div>{children}</div>
      </div>
    </div>
  );
}
