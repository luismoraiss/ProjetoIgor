import React, { Children } from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Professores from "./Pages/Professores.jsx";
import Login from "./Pages/Login.jsx";
import Erro from "./Pages/404.jsx"
import Perfil from "./Pages/Perfil.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    errorElement: <Erro/>
  },
      {
        path: "/home",
        element: <Home/>,
      },
      {
        path: "/professores/:id",
        element: <Professores/>
      },
      {
      path:"/perfil",
      element: <Perfil/>
      }
      
    

  

])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>
);
