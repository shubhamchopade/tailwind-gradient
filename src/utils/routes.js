import React from "react";
import Home from "../page/Home";
import Login from "../page/Login";
import Gallery from "../page/Gallery";
import SavedGradients from "../components/SavedGradients";
import BrowseGradient from "../components/BrowseGradient";

export default [
  {
    path: "/",
    exact: "true",
    component: () => <Home />,
  },
  {
    path: "/login",
    component: () => <Login />,
  },
  {
    path: "/explore",
    component: () => <Gallery />,
  },
  {
    path: "/saved",
    component: () => <SavedGradients />,
  },
  {
    path: "*",
    component: () => <Home />,
  },
];
