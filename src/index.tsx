import React from "react";
import ReactDOM from "react-dom/client";
import "../tailwind.css";
import { App } from "./App";
import { AnimaProvider } from "@animaapp/playground-react-sdk";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <AnimaProvider>
      <App />
    </AnimaProvider>
  </React.StrictMode>,
);
