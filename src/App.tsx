import React, { useState, useEffect } from "react";
import { Amplify, Auth } from "aws-amplify";
import awsExports from "./aws-exports";

import "./App.css";

import { BrowseBooksUnauthenticated, BrowseBooksAuthenticated } from "./pages";

Amplify.configure(awsExports);

const App: React.FC = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        setUser(null);
        console.log(error);
      });
  }, []);

  return (
    <>
      {/* Render the BrowseBooksPage component if the user is not authenticated (user is null). */}
      {user === null && <BrowseBooksUnauthenticated />}

      {/* Render the BrowseBooksPageAuthenticated component if the user is authenticated (user is not null). */}
      {user !== null && <BrowseBooksAuthenticated />}
    </>
  );
};

export default App;
