"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { CheckCircle, XCircle, Info, X } from "lucide-react";

const ToastContext = createContext();

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = "success", duration = 4000) => {
    const id = Date.now();
    setToasts((current) => [...current, { id, message, type }]);
    setTimeout(() => {
      setToasts((current) => current.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((current) => current.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 max-sm:bottom-4 max-sm:right-4 max-sm:left-4">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

const icons = {
  success: CheckCircle,
  error: XCircle,
  info: Info
};

const colors = {
  success: "border-emerald-500/30 bg-[#111]",
  error: "border-red-500/30 bg-[#111]",
  info: "border-white/10 bg-[#111]"
};

const iconColors = {
  success: "text-emerald-400",
  error: "text-red-400",
  info: "text-white/60"
};

function ToastItem({ toast, onClose }) {
  const Icon = icons[toast.type];

  return (
    <div
      className={`flex items-start gap-3 rounded-xl border px-4 py-3 shadow-xl ${colors[toast.type]}`}
      style={{ animation: "slideIn 0.3s ease-out" }}
    >
      <Icon size={18} className={`mt-0.5 shrink-0 ${iconColors[toast.type]}`} />
      <p className="text-sm text-white/80">{toast.message}</p>
      <button type="button" onClick={onClose} className="shrink-0 text-white/30 hover:text-white/70 transition">
        <X size={14} />
      </button>
    </div>
  );
}
