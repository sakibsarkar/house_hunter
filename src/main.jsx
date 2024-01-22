import "./index.css";
import Authcontext from "./Hooks & Functions/Authcontext";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { Routes } from "./Routes/Routes";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authcontext>
      <Toaster position="top-center" />
      <RouterProvider router={Routes} />
    </Authcontext>
  </React.StrictMode>,
)
