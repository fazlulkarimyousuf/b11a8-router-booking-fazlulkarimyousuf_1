import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import Root from '../Root/Root';
import Home from '../../Page/Home/Home';
import ErrorPage from '../../Page/ErrorPage/ErrorPage';
import Card from '../../Page/Card/Card';
export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
    ]
  },
]);