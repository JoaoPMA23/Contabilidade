import { Toaster } from "react-hot-toast";

export function AppToaster() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        className: "rounded-lg bg-slate-900 text-white shadow-lg",
      }}
    />
  );
}
