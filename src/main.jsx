import React, { Children } from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Professores from "./pages/Professores.jsx";
import Login from "./pages/Login.jsx";
import Erro from "./pages/404.jsx"

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    errorElement: <Erro/>
  },
      {
        path: "/home",
        element: <App/>,
      },
      {
        path: "/professores/:id",
        element: <Professores/>
      },
      
    

  

])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>
);
