import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Professores from "./pages/Professores.jsx";
import Login from "./pages/Login.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/professores/:id",
    element: <Professores/>
  },
  {
    path: "login",
    element: <Login/>
  }

])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>
);
