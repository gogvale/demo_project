import { RelayEnvironmentProvider } from "react-relay";
import { RelayEnvironment } from "./RelayEnvironment";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Catalog from "./pages/Catalog.jsx";
import Item from "./pages/Item.jsx";
import Cart from "./pages/Cart.jsx";
import Navbar from "./pages/Navbar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Catalog />,
      },
      {
        path: "items",
        element: <Catalog />,
      },
      {
        path: "items/:item_id",
        element: <Item />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <React.StrictMode>
      <>
        <RouterProvider router={router} />
      </>
    </React.StrictMode>
  </RelayEnvironmentProvider>
);
