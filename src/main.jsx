import "./index.css";
import Authcontext from "./Hooks & Functions/Authcontext";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { Routes } from "./Routes/Routes";

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Authcontext>
        <Toaster position="top-center" />
        <RouterProvider router={Routes} />
      </Authcontext>
    </QueryClientProvider>
  </React.StrictMode>,
)
