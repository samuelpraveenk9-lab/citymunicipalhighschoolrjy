import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

// Global styles (Tailwind + global CSS)
import "./index.css";

// Ensure the root element exists before rendering
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("❌ Root element not found! Make sure <div id='root'></div> exists in index.html");
}

// React 18 rendering
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
