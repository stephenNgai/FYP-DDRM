import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

import ContentUpload from "./components/ContentUpload/ContentUpload";
import ContentList from "./components/ContentList/ContentList";
import Transactions from "./components/Transactions/Transactions";
import MyCollection from "./components/MyCollection/MyCollection";
import ContentDetail from "./components/ContentDetail/ContentDetail";
import NotFoundPage from "./pages/NotFoundPage";

// Create a root.
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <ContentList /> },
      { path: "create", element: <ContentUpload /> },
      { path: "my-collection", element: <MyCollection /> },
      { path: "transactions", element: <Transactions /> },
      { path: "content/:id", element: <ContentDetail /> },
    ],
  },
]);

// Initial render: Render an element to the root.
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
