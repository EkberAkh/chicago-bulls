import React, { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import 'antd/dist/antd.css';
ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>


  <BrowserRouter>
    <App />
  </BrowserRouter>
  </StrictMode>
);
