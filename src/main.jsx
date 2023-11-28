import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";


import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import SlotProvider from "./providers/SlotProvider.jsx";

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
      <SlotProvider>
      <RouterProvider router={router}></RouterProvider>
      </SlotProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
