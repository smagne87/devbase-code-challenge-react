import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MainLayoutContextProvider from "@layout/MainLayout";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainLayoutContextProvider>
      <App />
    </MainLayoutContextProvider>
  </React.StrictMode>
);
