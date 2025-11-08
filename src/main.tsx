import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/index.css"; // pastikan path-nya sesuai struktur kamu

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* BrowserRouter membungkus seluruh App */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
