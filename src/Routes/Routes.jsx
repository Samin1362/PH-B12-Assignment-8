import React from 'react';
import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
const Home = lazy(() => import("../pages/Home/Home"));
import AppDetails from '../pages/AppDetails/AppDetails';
import AllApps from '../components/AllApps/AllApps';
const Installation = lazy(() => import("../pages/Installation/Installation"))

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    Component: Root, 
    children: [
      {
        index: true,
        loader: () => fetch("/apps-data.json"),
        path: "/",
        Component: Home
      }, 
      {
        path:"/apps", 
        loader: () => fetch("/apps-data.json"),
        Component: AllApps
      },
      {
        path: "/appsDetails/:id", 
        loader: () => fetch("/apps-data.json"),
        Component: AppDetails,
      }, 
      {
        path:"/installation",
        loader: () => fetch("/apps-data.json"),
        Component: Installation
      }
    ]
  },
]);

