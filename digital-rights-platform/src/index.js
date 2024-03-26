import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import App from "./App";

// Import components for the routes.
import ContentUpload from "./components/ContentUpload/ContentUpload";
import ContentList from "./components/ContentList/ContentList";
import Transactions from "./components/Transactions/Transactions";
import MyCollection from "./components/MyCollection/MyCollection";
import ContentDetail from "./components/ContentDetail/ContentDetail";
import NotFoundPage from "./pages/NotFoundPage";

// Create a root.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Create a router.
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

//theme from MUI
const theme = createTheme({
  palette: {
    mode: "dark", // This sets the color mode of the theme to dark
    background: {
      default: "#121212", // This sets the default background color
    },
    secondary: {
      main: "#9c27b0", // This sets the main secondary color to purple
    },
    // You can add other color overrides here if needed
  },
  // You can also customize other theme settings like typography, etc.
});

// Initial render: Render an element to the root.
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
