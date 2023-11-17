import React from "react";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { tokenLoader } from "./util/auth";
import {
  RootLayout,
  HomePage,
  BooksPage,
  ErrorPage,
  ContactUsPage,
  AuthenticationPage,
} from "./Pages";

//TODO: IMPLEMENT CSS MODULE
//TODO: IMPLEMENT ERROR PAGE
Amplify.configure(awsExports);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      { path: "contact-us", element: <ContactUsPage /> },
      { path: "books", element: <BooksPage /> },
      {
        path: "auth",
        element: <AuthenticationPage />,
        // action: authAction,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
