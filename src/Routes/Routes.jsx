import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import AppDetails from "../pages/AppDetails/AppDetails";
import Installations from "../pages/Installations/Installations";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("/data/trendingData.json"),
      },
      {
        path: "/Apps",
        Component: Apps,
        loader: () => fetch("/data/appsData.json"),
      },
      {
        path: "/Apps/:id",
        Component: AppDetails,
        loader: () => fetch("/data/appsData.json"),
      },
      {
        path: "/Installations",
        Component: Installations,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default Routes;
