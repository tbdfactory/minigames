import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // el StrictMode renderiza dos veces los componentes (de forma intencional) esto ayuda a detectar efectos secundarios de la renderización. SOLO ocurre durante el DESARROLLO.
  // <React.StrictMode>
  // </React.StrictMode>
  <App />
);
