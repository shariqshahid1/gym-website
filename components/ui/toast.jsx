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
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3">
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
  success: "border-lime-400/30 bg-[linear-gradient(135deg,rgba(163,230,53,0.12),rgba(255,255,255,0.04))]",
  error: "border-red-400/30 bg-[linear-gradient(135deg,rgba(239,68,68,0.12),rgba(255,255,255,0.04))]",
  info: "border-orange-400/30 bg-[linear-gradient(135deg,rgba(249,115,22,0.12),rgba(255,255,255,0.04))]"
};

const iconColors = {
  success: "text-lime-300",
  error: "text-red-400",
  info: "text-orange-300"
};

function ToastItem({ toast, onClose }) {
  const Icon = icons[toast.type];

  return (
    <div
      className={`flex items-start gap-3 rounded-2xl border px-5 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl ${colors[toast.type]}`}
      style={{
        animation: "slideIn 0.3s ease-out"
      }}
    >
      <Icon size={18} className={`mt-0.5 shrink-0 ${iconColors[toast.type]}`} />
      <p className="text-sm text-white/85">{toast.message}</p>
      <button type="button" onClick={onClose} className="shrink-0 text-white/40 hover:text-white/80 transition">
        <X size={14} />
      </button>
    </div>
  );
}
