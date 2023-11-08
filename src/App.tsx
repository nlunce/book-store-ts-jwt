import React from "react";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import { BrowseBooksPageUnauth } from "./components/Pages";

Amplify.configure(awsExports);

const router = createBrowserRouter([
  { path: "/", element: <BrowseBooksPageUnauth /> },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
