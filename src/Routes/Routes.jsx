import React, { Component } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installations from "../pages/Installations/Installations";
const Routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("../../src/assets/trendingData/trendingData.json"),
      },
      {
        path: "/Apps",
        Component: Apps,
        loader: () => fetch("../../src/assets/appsData/appsData.json"),
      },
      {
        path: "/Installations",
        Component: Installations,
      },
    ],
  },
]);
export default Routes;
