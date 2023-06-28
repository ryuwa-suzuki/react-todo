import React from "react";
import { createBrowserRouter } from "react-router-dom";
import  Home  from './Components/Home'

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "todo", element: <Home /> },
  { path: "in-progress", element: <Home /> },
  { path: "complete", element: <Home /> },
]);
