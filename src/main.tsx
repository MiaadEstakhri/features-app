import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./assets/styles/index.css";
import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New content available. Reload?")) {
      updateSW(true);
    }
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
