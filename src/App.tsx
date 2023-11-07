import React, { useState, useEffect } from "react";
import { Amplify, Auth } from "aws-amplify";
import awsExports from "./aws-exports";

import "./App.css";

import { BrowseBooksPageUnauth } from "./components/Pages";

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
      <BrowseBooksPageUnauth />
    </>
  );
};

export default App;
