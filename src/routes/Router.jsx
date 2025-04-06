import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../views/pages/Home";
import Quiz from "../views/pages/Quiz";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/quiz",
      element: <Quiz />,
    },
  ]);
  return routes;
};

export default Router;
