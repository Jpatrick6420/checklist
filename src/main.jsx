import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Layout from "./components/Layout.jsx";
import ItemCreateForm from "./components/ItemCreateForm.jsx";
import { ItemsProvider } from "./context/reducerContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  { path: "new-entry", element: <ItemCreateForm /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ItemsProvider>
      <RouterProvider router={router} />
    </ItemsProvider>
  </StrictMode>
);
