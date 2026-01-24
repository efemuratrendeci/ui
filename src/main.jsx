import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.scss";
import "./styles/introduction.scss";
import "./styles/section-header.scss";
import "./styles/timeline.scss";
import "./styles/tech-stack.scss";
import "./styles/navbar.scss";
import "./styles/projects.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
