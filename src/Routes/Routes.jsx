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
      },
      {
        path: "/Apps",
        Component: Apps,
      },
      {
        path: "/Installations",
        Component: Installations,
      },
    ],
  },
]);
export default Routes;
