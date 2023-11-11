import React from "react";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import {
  RootLayout,
  Home,
  BrowseBooksPageUnauth,
  BrowseBooksPageAuth,
  ErrorPage,
} from "./Pages";

//TODO: IMPLEMENT CSS MODULE
//TODO: IMPLEMENT ERROR PAGE
//TODO: IMPLEMENT Loader data
Amplify.configure(awsExports);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/loggedin", element: <BrowseBooksPageAuth /> },
      { path: "/notloggedin", element: <BrowseBooksPageUnauth /> },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
