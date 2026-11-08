import { useEffect, useState } from "react";

let listener = null;

export function showToast(message, type = "error") {
  if (listener) listener({ message, type, id: Date.now() });
}

export function Toast() {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    listener = setToast;
    return () => {
      listener = null;
    };
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(t);
  }, [toast]);

  if (!toast) return null;
  return (
    <div className={`toast toast--${toast.type}`} role="alert">
      {toast.message}
    </div>
  );
}
