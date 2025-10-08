import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import AppDetails from '../pages/AppDetails/AppDetails';

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
        path: "/appsDetails/:id", 
        loader: () => fetch("/apps-data.json"),
        Component: AppDetails,
      }
    ]
  },
]);

