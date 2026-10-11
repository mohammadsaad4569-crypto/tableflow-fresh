
import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function TableFlowApp() {
  return (
    <main className="loading-screen">
      <div className="loading-content">
        <div className="brand-mark">T</div>
        <p className="eyebrow">RESTAURANT OPERATING SYSTEM</p>
        <h1>TableFlow<span>.</span></h1>
        <p className="loading-description">
          Your restaurant. Connected.
        </p>
        <div className="loading-indicator">
          <span />
          Preparing your workspace
        </div>
      </div>
    </main>
  );
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("TableFlow could not find the root element.");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <TableFlowApp />
  </React.StrictMode>
);
